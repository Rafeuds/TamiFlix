import '../Styles/Card.css';
import Button from './Button';
import Hearth from './Heart';
import Eye from './Eye';


interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="card">
      <Hearth></Hearth>
      <Eye/>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button onClick={() => console.log("")} texto={"Assistir"} />
    </div>
  );
}

export default Card;