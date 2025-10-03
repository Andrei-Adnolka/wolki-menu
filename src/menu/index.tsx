// @ts-ignore
import "./index.css";

import { MENU } from "../config";

type Lang = "ru" | "en" | "zh";

const conf = [
  { id: "ru", label: "РУС" },
  { id: "en", label: "ENG" },
  { id: "zh", label: "中文" },
];

function Menu({ lang, setLang }: { lang: Lang; setLang: (arg: Lang) => void }) {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <div className="langs">
          {conf.map((c) => {
            const onClick = () => {
              setLang(c.id as Lang);
            };
            return (
              <span
                key={c.id}
                id={c.id}
                onClick={onClick}
                className={lang === c.id ? "active" : ""}
              >
                {c.label}
              </span>
            );
          })}
        </div>
        <div className="header-text">
          <div className="vertical-menu-text">MENU</div>
        </div>
        <div className="logo">
          <img
            src="./wolki-logo.png"
            alt="menu"
            loading="lazy"
            className="logo"
            width={200}
          />
        </div>
      </header>
      {MENU.map((el, i) => {
        const { label, links, background } = el;
        return (
          <section className={`menu-section ${background}`}>
            <h2 className={`section-title ${background}`}>{label[lang]}</h2>
            <ul className="menu-list">
              {links.map((link) => {
                const {
                  label: l,
                  price,
                  //@ts-ignore
                  description,
                  //@ts-ignore
                  isBottomDots,
                } = link;
                return (
                  <li>
                    <b>{l[lang]}</b>
                    {lang !== "ru" ? (
                      <span>{l["ru"].split("(")[0]}</span>
                    ) : null}
                    <span className="price">{price}</span>
                    {description ? <small>{description[lang]}</small> : null}
                    {isBottomDots ? <hr className="dotted" /> : null}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

export default Menu;
