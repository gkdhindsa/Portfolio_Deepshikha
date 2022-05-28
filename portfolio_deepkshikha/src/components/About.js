import { Breadcrumb, Container, Row, Col} from 'react-bootstrap';
import back from '../assets/back.svg'
import pfp from '../assets/pfp.png'

function About() {
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
                <Breadcrumb.Item href="/about" className='pink'>About</Breadcrumb.Item>
                </Breadcrumb>
            </div>
                    <Row>
                        <Col className='col-md-8 col-12'>
                            <Row>
                                <Col className='col-6'>
                                    <img src={pfp} alt="Deepshikha Pegu" className='pfp' />
                                </Col>
                                <Col className='col-6'>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime placeat id vel harum atque, voluptas facilis nobis, ipsum tenetur, sed officiis animi numquam dolorum voluptate fugit deleniti nostrum doloribus error quidem blanditiis. Error quis blanditiis expedita fuga quisquam esse dolorem excepturi, dignissimos cum perspiciatis temporibus beatae itaque tenetur sunt architecto, nostrum voluptatem? Eum ad laborum sequi?
                                    </p>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusamus consequuntur, quo suscipit eum eveniet voluptas aperiam adipisci amet nam blanditiis pariatur dolorum quibusdam accusantium maiores expedita quos est minima ex iure exercitationem. Odit, corporis nostrum assumenda officiis exercitationem distinctio autem facere, ea quibusdam nulla unde atque veniam fugiat sed inventore veritatis deleniti eos necessitatibus harum in vero maxime. Quos hic suscipit neque similique delectus maiores quas, illum, placeat laboriosam odit fugit distinctio voluptatum dolorem ad expedita asperiores vitae provident eos necessitatibus et optio mollitia? In, magni, laudantium expedita odio doloribus explicabo eligendi animi facilis eum numquam natus vel. Omnis.
                                </p>
                            </Row>
                        </Col>
                        <Col className="col-md-4 col-12">
                            <Row>
                                <Col className="col-md-10 col-xs-9 col-8 text-end d-flex flex-column justify-content-md-evenly contact-links first-order">
                                    <a href="">
                                    <p className='email-wrap'>
                                        deepshikha.pegu97@gmail.com
                                    </p>
                                    </a>
                                    <a href="">
                                    <p>
                                        Resume
                                    </p>
                                    </a>
                                    <div className='d-flex d-md-block justify-content-end'>
                                    <a href="" >
                                    <p className='twitter me-2 me-me-0'>
                                        <span className='d-md-block d-none'>
                                             Twitter
                                        </span>
                                       
                                        <span className="iconify-inline" id="twitter"data-icon="ant-design:twitter-circle-filled" data-width="20" data-height="20"></span>

                                    </p>
                                    </a>
                                    <a href="">
                                    <p className='linkedin'>
                                        <span className="d-md-block d-none">
                                            Linkedin
                                        </span>
                                        <span className="iconify-inline " data-icon="akar-icons:linkedin-box-fill" data-width="20" data-height="20"></span>

                                    </p>
                                    </a>  
                                    </div>

                                </Col>
                                <Col className="col-md-2 col-xs-3 col-4 second-order">
                                    <p className="contact contact-right-turn">
                                        Contact me @
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
}

export default About;