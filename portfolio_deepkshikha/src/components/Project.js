import {Container, Row, Col, Card, Breadcrumb} from 'react-bootstrap';
import back from '../assets/back.svg'
import tree from '../assets/tree.png'
import forest from '../assets/forest.png'
function Project() {
    return ( 
        <div>
            <Container>
            <div className="navigation-bar mb-5">
                <span>
                    <img src={back} alt="back" />
                </span>
                <span className="back-text">Back</span>
                <span className="divider">|</span>
                <Breadcrumb>
                <Breadcrumb.Item href="/" className='pink'>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/thought" className='pink'>Thought Experiments</Breadcrumb.Item>
                <Breadcrumb.Item href="/project-title" className='pink'>Project title</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <Row>
                <div className="project-title">
                    Project Title
                </div>
            </Row>
            <Row className='mt-5 '>
                <Col className='col-md-5 col-12 order-2 order-md-1 order-2'>
                    <div className="project-subtitle">
                        Project Overview
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio, veniam corporis illo quae autem quis ab architecto recusandae illum neque perspiciatis assumenda animi temporibus vitae adipisci hic quidem cum saepe atque! Molestiae repellat officia eum eaque nesciunt natus laboriosam ratione quos quae impedit quam modi, vel et eos consectetur aliquid non. Voluptatibus sed earum aliquid nesciunt cumque delectus quo repudiandae consequatur laborum, magnam harum voluptate error reprehenderit, architecto suscipit velit et est impedit neque.
                    </p>
                </Col>
                <Col className='col-md-1 d-none d-md-block order-md-2 order-2'></Col>
                <Col className='col-md-6 col-12 order-md-3 order-1 mb-5 mb-md-0' >
                    <img src={tree} alt="tree" className='project-picture' />
                    <p className="caption mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </Col>
            </Row>   
            <Row className='mt-5 '>
                <Col className='col-md-6 col-12 order-3 '>
                    <div className="project-subtitle">
                        Project Overview
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio, veniam corporis illo quae autem quis ab architecto recusandae illum neque perspiciatis assumenda animi temporibus vitae adipisci hic quidem cum saepe atque! Molestiae repellat officia eum eaque nesciunt natus laboriosam ratione quos quae impedit quam modi, vel et eos consectetur aliquid non. Voluptatibus sed earum aliquid nesciunt cumque delectus quo repudiandae consequatur laborum, magnam harum voluptate error reprehenderit, architecto suscipit velit et est impedit neque.
                    </p>
                </Col>
                <Col className='col-md-1 d-none d-md-block  order-2'></Col>
                <Col className='col-md-5 col-12  order-1 mb-5 mb-md-0' >
                    <img src={forest} alt="tree" className='project-picture' />
                    <p className="caption mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </Col>
            </Row>  
            <Row className='mt-5'>
            <div className="project-subtitle">
             Gallery
            </div>
            <Row className='mt-3 d-none d-lg-flex'>
                <Col className="col-3">
                    <div className="gallery-picture">
                    <img src={forest} alt="" />
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="gallery-picture">
                    <img src={forest} alt="" />
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="gallery-picture">
                    <img src={forest} alt="" />
                    </div>
                </Col>
                <Col className="col-3">
                    <div className="gallery-picture">
                    <img src={forest} alt="" />
                    </div>
                </Col>
            </Row>
            <div className="gallery-pictures mt-3 d-flex d-lg-none">
        
                    <div className="gallery-picture-x ">
                    <img src={forest} alt="" />
                    </div>
   
                    <div className="gallery-picture-x ">
                    <img src={forest} alt="" />
                    </div>

                    <div className="gallery-picture-x e">
                    <img src={forest} alt="" />
                    </div>
          
                    <div className="gallery-picture-x ">
                    <img src={forest} alt="" />
                    </div>
          
            </div>
            <a href="" className='view-more mt-3'>Contact to view the full project</a>   
            </Row>    
            <Row className='my-5'>
            <div className="project-subtitle">
             Credits
            </div>
            <Col className="col-md-5 col-12">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, dicta error unde quis totam commodi.
                </p>
            </Col>
            </Row>      
            </Container>
        </div>
     );
}

export default Project;