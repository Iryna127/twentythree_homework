import '../css/cards.css'
const HeroCard = (props) => {
  return (
    <div className="card">
      <div>{props.children}</div>
    </div>
  );
};
export default HeroCard;
