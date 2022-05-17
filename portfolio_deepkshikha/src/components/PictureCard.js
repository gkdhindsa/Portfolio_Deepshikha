import {Card } from 'react-bootstrap';

function PictureCard() {
    return ( 
        <Card>
            <Card.Img variant="top" src={critical} />

            <Card.Body>
            <Card.Title>Project title</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Card.Text>
                
            </Card.Body>
        </Card>
     );
}

export default PictureCard;