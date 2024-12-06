import Card from './Card'; // Adjust path to Card component
//import styles from './Card.module.css'; // Import styles for the container
import styles from '../styles/Card.module.css';


const Card = () => {
    return (
        <div className={styles.cardContainer}>
            <Card
                image="/public/project.jpg"
                title="Card 1"
                description="This is the first card's description."
            />
            <Card
                image="/public/consultant.jpg"
                title="Card 2"
                description="This is the second card's description."
            />
            <Card
                image="/public/contractor.jpg"
                title="Card 3"
                description="This is the third card's description."
            />
        </div>
    );
};

export default Card;


