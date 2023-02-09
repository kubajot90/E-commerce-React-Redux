import classes from "./InfoCard.module.css";

const InfoCard = (props) => {
  return (
    <div className={classes.infoCard}>
      <div className={classes.iconContainer}>{props.icon}</div>

      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};
export default InfoCard;
