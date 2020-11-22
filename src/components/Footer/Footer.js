import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BtnAll from '../button/BtnAll'
import logoFooter from '../../img/logo-footer.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFan} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    const element = <FontAwesomeIcon icon={faFan} />
    return (
        <div className='Footer-container jumbotron'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <h1 className='h1-footer'>Let's talk </h1>
                        <p className='p-footer'>We can help you size new business opportunities and new growth potential. We add real value and we are told that we are a breeze to work with.</p>
                        <BtnAll nome='contact us' />
                    </Col>
                    <Col sm={3}>
                        <ul>
                            <li className="li-footer">Works</li>
                            <li className="li-footer">Services</li>
                            <li className="li-footer">Our Platform</li>
                            <li className="li-footer">Why us</li>
                            <li className="li-footer">Join us</li>
                            <li className="li-footer">Blog</li>
                            <li className="li-footer">Master Executive ECT 4.0</li>
                            <li className="li-footer">Contact Us</li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <ul>
                            <li className="li-city">Turin</li>
                            <li className="li-city">Barcelona</li>
                            <li className="li-city">Dublin</li>
                            <li className="li-city">New York</li>
                        </ul>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col sm={8}>
                        <img src={logoFooter} alt=""/>
                    </Col>
                    <Col>
                        <ul className='ul-social'>
                            <li className="social">{element}</li>
                            <li className="social">{element}</li>
                            <li className="social">{element}</li>
                            <li className="social">{element}</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                        <p className="policy">Privacy Policy</p>
                    </Col>
                    <Col sm={1}>
                    <p className="policy">Cookie Policy</p>
                    </Col>
                    <Col sm={6}>
                        <p className='policy'>{`ZEROGREY© 2019 | P.I. IT08003340018 | All rights reserved. Various trademarks held by their respective owners`}</p>
                    </Col>
                    <Col sm={4}>
                        <ul className='ul-leng'>
                            <li className="leng">ENG</li>
                            <li className="leng">ITA</li>
                            <li className="leng">RUS</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
