/* eslint-disable react/prop-types */


import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PDFCard = ({ item }) => {
    return (
        <div className="col-12">
           <Link to={`/pdf/${item.id}`}><Card style={{ width: '10rem', padding: '0', margin: '10px' }}>
                <Card.Img variant="top" src={`http://localhost:3000/myUploads/${item.image_url}`} style={{ objectFit: 'cover', aspectRatio: '1.142' }} />
                <Card.Body style={{ padding: '0' }}>
                    <Card.Title className="text-center" style={{ fontSize: '0.6rem', margin: '0', padding: 5 }}>{item.title}</Card.Title>
                </Card.Body>
            </Card></Link>
        </div>
    );
};

export default PDFCard;

