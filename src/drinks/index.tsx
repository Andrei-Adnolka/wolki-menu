import { useEffect, useState, useRef } from "react";
import { DRINKS } from "../config";
import { Modal } from "../modal";

type Lang = "ru" | "en" | "zh";

function Drinks({ lang }: { lang: Lang }) {
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
    <>
      <div
        className={`menu-container ${is18 ? "" : "hide-menu"}`}
        id="bar"
        ref={barRef}
      >
        <header className="menu-header">
          <div className="header-text">
            <div className="vertical-menu-text">DRINKS</div>
          </div>
          <div className="logo">
            <img
              src="./wolki-logo.png"
              alt="menu"
              loading="lazy"
              className="logo"
              width={160}
            />
          </div>
        </header>

        {DRINKS.map((el) => {
          const { label, links, background } = el;
          return (
            <section className={`menu-section ${background}`} key={label.ru}>
              <h2 className={`section-title ${background}`}>{label[lang]}</h2>
              <ul className="menu-list">
                {links.map((link) => {
                  const {
                    label: l,
                    price,
                    //@ts-ignore
                    description,
                  } = link;
                  return (
                    <li key={l.ru}>
                      <b>{l[lang]}</b>
                      {lang !== "ru" ? (
                        <span>{l["ru"].split("(")[0]}</span>
                      ) : null}
                      <span className="price">{price}</span>
                      {description ? <small>{description[lang]}</small> : null}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      {isShowModal && (
        <Modal
          lang={lang}
          hideModal={hideModal}
          setIsShowModal={setIsShowModal}
        />
      )}
    </>
  );
}

export default Drinks;
