import {Container, Row, Col, Card} from 'react-bootstrap';
import FlipCard from './FlipCard';
function Thought() { 
    return ( 
        <div>
           <Container>
               <Row>
                <Col className='col-12 col-md-6'>
                    <FlipCard></FlipCard>
                </Col>
                <Col className='col-12 col-md-6'> </Col>
               </Row>
           </Container>
        </div>
     );
}

export default Thought;