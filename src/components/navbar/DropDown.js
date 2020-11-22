import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const DropDown = () => {
    const menu = <FontAwesomeIcon icon={faBars} />
    {function NavDropdownExample() {
        const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        
            
                    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                        <NavDropdown title={menu} id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Works</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Services</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Our Platform</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4">Why us</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.5">Join us</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.6">Blog</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.7">Master Executive ECT 4.0</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.8">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                
        
    )}
    return(<NavDropdownExample />);
}}
export default DropDown