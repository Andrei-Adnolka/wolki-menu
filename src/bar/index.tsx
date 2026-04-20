import { BAR } from "../config";

type Lang = "ru" | "en" | "zh";

const getLinks = (el: (typeof BAR)[0], lang: Lang) => {
  const { label, links } = el;
  if (!links) return null;

  return (
    <section className={`menu-section `} key={label.ru}>
      <h2 className={`section-title`}>{label[lang]}</h2>
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
              {lang !== "ru" ? <span>{l["ru"].split("(")[0]}</span> : null}
              <span className="price">{price}</span>
              {description ? <small>{description[lang]}</small> : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function Bar({ lang }: { lang: Lang }) {
  return (
    <>
      <div className={`menu-container `} id="bar">
        <header
          className="menu-header"
          style={{
            justifyContent: "center",
            padding: "0px",
            paddingTop: "24px",
          }}
        >
          <div className="horizontal-menu-text">BAR</div>
        </header>
        {BAR.map((el) => {
          const { subcategories } = el;
          if (subcategories?.length) {
            return subcategories.map((el) => {
              return getLinks(el, lang);
            });
          }
          return getLinks(el, lang);
        })}
      </div>
    </>
  );
}

export default Bar;
