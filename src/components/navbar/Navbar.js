import React from 'react'
import logo from '../../img/logo.svg'
import { Container, Row, Col } from 'react-bootstrap'
import MenuList from './MenuList'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <Container>
                <Row>
                    <Col sm={4}>
                        <img src={logo} alt="" />
                    </Col>
                    <Col sm={8} className='col-menu'>
                        <MenuList />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar
