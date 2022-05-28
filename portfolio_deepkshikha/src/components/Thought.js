import {Container, Row, Col, Card} from 'react-bootstrap';
import FlipCard from './FlipCard';
import PictureCard from './PictureCard'
function Thought() { 
    return ( 
        <div>
           <Container>
               <Row>
                <Col className='col-12 col-md-6'>
                    <PictureCard></PictureCard>
                    <FlipCard></FlipCard>
                    <FlipCard/>
                    <FlipCard/>
                    <FlipCard/>
                </Col>
                <Col className='col-12 col-md-6'> 
                    <FlipCard/>
                    <FlipCard/>
                    <FlipCard/>
                    <FlipCard/>
                    <FlipCard/>
                </Col>
               </Row>
           </Container>
        </div>
     );
}

export default Thought;