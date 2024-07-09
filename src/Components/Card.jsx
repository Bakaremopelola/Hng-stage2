
import './Card.css';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" draggable="false" />
      <div className="card-content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;


