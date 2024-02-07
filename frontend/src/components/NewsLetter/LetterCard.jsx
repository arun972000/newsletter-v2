/* eslint-disable react/prop-types */


import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LetterCard.css';

const LetterCard = ({ item }) => {
    return (
        <div className="col-lg-3 mt-3">
            <Link to={`/pdf/${item.id}`}>
                <Card className="custom-card border-0 shadow p-3 mb-5 bg-white rounded" style={{ width: "18rem", border: '1px solid #dee2e6' }}>
                    <Card.Img className="LetterCard__image" variant="top" src={`http://localhost:3000/myUploads/${item.image_url}`} />
                    <Card.Body>
                        <Card.Title className="LetterCard__title">{item.title}</Card.Title>
                        <Card.Text className="LetterCard__date">
                           Posted on {new Date(item.created_date).toLocaleDateString()}
                        </Card.Text>
                        <Card.Text className="LetterCard__date">
                            Created By {item.created_by}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default LetterCard;


