import { BsTruck, BsSuitClub } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import classes from "./InformationBox.module.css";

const InformationBox = ({ bgColor, padding }) => {
  return (
    <div
      style={{ backgroundColor: bgColor, padding: padding }}
      className={classes.informationsBox}
    >
      <div className={classes.information}>
        <BsTruck className={classes.informationIcon} />
        <span>Free delivery and returns</span>
      </div>
      <div className={classes.information}>
        <AiOutlineFieldTime className={classes.informationIcon} />
        <span>Shipping 24h</span>
      </div>
      <div className={classes.information}>
        <BsSuitClub className={classes.informationIcon} />
        <span>Save with E-shop Club</span>
      </div>
    </div>
  );
};
export default InformationBox;
