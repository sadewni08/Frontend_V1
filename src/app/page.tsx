import Image from 'next/image';
import styles from './src/styles/Card.module.css';
// import styles from '../styles/Card.module.css';
import './globals.css';


// Define the types for the props
interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        width={400} // Specify the width
        height={300} // Specify the height
        className={styles.cardImage} // Apply CSS module class
      />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Card;
