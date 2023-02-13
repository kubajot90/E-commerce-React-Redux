import { TiWarningOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({ title, subtitle }) => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const backHomePage = () => {
    navigate("/");
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modal__contentWrapper}>
        <div className={classes.title__wrapper}>
          <TiWarningOutline className={classes.modal__Icon} />
          <h1>{title}</h1>
        </div>
        <h2 className={classes.modal__h2}>{subtitle}</h2>
        <button onClick={backHomePage} className={classes.modal__button}>
          Back home
        </button>
      </div>
    </div>
  );
};
export default Modal;
