import { DRINKS } from "../config";

type Lang = "ru" | "en" | "zh";

function Drinks({ lang }: { lang: Lang }) {
  return (
    <>
      <div className={`menu-container`}>
        <header className="menu-header flex-start">
          <div className="header-text">
            <div
              className="vertical-menu-text "
              dangerouslySetInnerHTML={{ __html: `WARMING <br/>DRINKS` }}
            />
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
    </>
  );
}

export default Drinks;
