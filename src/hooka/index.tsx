import { HOOKA } from "../config";

type Lang = "ru" | "en" | "zh";

function Hooka({ lang }: { lang: Lang }) {
  return (
    <>
      <div
        className={`menu-container `}
        id="hooka"
        style={{ paddingTop: "24px" }}
      >
        <header className="menu-header">
          <div className="horizontal-menu-text">HOOKA</div>
        </header>
        {HOOKA.map((el, i) => {
          const { links, background } = el;
          return (
            <section className={`menu-section ${background}`} key={i}>
              <ul className="menu-list" style={{ paddingTop: "0px" }}>
                {links.map((link) => {
                  const {
                    label: l,
                    price,
                    //@ts-ignore
                    description,
                  } = link;
                  return (
                    <li key={l.ru}>
                      <b style={{ fontSize: "20px" }}>{l[lang]}</b>
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
    </>
  );
}

export default Hooka;
