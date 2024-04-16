import '../Styles/Card.css';
import Button from './Button';

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <Button onClick={() => console.log("")} texto={"Assistir"} />
    </div>
  );
}

export default Card;