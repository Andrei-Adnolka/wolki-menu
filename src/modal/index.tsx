import "./index.css";

type Lang = "ru" | "en" | "zh";

const l10n = {
  ru: {
    yes: "да",
    no: "нет",
    ages: "Вам есть 18 лет и вы находитесь в заведении Wolki Grill?",
  },
  en: {
    yes: "Yes",
    no: "No",
    ages: "Are you 18 years old and present at Wolki Grill?",
  },
  zh: {
    yes: "是",
    no: "否",
    ages: "您满18岁且在Wolki Grill吗?",
  },
};

export function Modal(props: {
  lang: Lang;
  setIsShowModal: (arg: boolean) => void;
  hideModal: (arg: boolean) => void;
}) {
  const { lang, setIsShowModal, hideModal } = props;
  const { yes, no, ages } = l10n[lang];

  function onOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setIsShowModal(false);
    }
  }

  return (
    <div className="modal-overlay" onClick={onOverlayClick}>
      <div className="modal-window">
        <p>{ages}</p>
        <div className="modal-buttons">
          <button
            className="btn-yes"
            onClick={() => {
              hideModal(true);
            }}
          >
            {yes}
          </button>
          <button
            className="btn-no"
            onClick={() => {
              hideModal(false);
            }}
          >
            {no}
          </button>
        </div>
      </div>
    </div>
  );
}
