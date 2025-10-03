import { useEffect, useRef, useState } from "react";
// @ts-ignore
import "./App.scss";
import Bar from "./bar";
import Menu from "./menu";
import Drinks from "./drinks";
import { Modal } from "./modal";

function App() {
  const [lang, setLang] = useState<"ru" | "en" | "zh">("ru");

  const [is18, setIs18] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const hasConfirmedRef = useRef(false); // чтобы показать модалку только один раз

  const hideModal = (arg: boolean) => {
    hasConfirmedRef.current = true;
    setIsShowModal(false);
    setIs18(arg);
  };

  useEffect(() => {
    if (!barRef.current) return;

    const node = barRef.current; // сохраняем в локальную переменную

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!hasConfirmedRef.current) {
            if (entry.isIntersecting) {
              // Блок вошёл в viewport — показываем модалку
              setIsShowModal(true);
            } else {
              // Блок вышел из viewport — прячем модалку
              setIsShowModal(false);
            }
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.1, // 10% блока должно быть видно
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [is18]);

  return (
    <div className="App">
      <Menu lang={lang} setLang={setLang} />
      <div ref={barRef} id="bar" className={`${is18 ? "" : "hide-menu"}`}>
        <Bar lang={lang} />
        <Drinks lang={lang} />
      </div>
      {isShowModal && (
        <Modal
          lang={lang}
          hideModal={hideModal}
          setIsShowModal={setIsShowModal}
        />
      )}
    </div>
  );
}

export default App;
