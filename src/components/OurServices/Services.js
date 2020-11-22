import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BtnAll from '../button/BtnAll'

const Services = () => {
    return (
        <div className='Service'>
            <Container >
                <Row>
                    <Col sm={4} className=''>
                        <h1 className='h1-services '>
                            How can we help your business?
                        </h1>
                        <BtnAll nome='Discover our services'/>
                    </Col>
                    <Col>
                        <table>
                            {/* <tr>
                                <th>
                                    <h3 className="h3-services">
                                        Merchant of records
                                    </h3>
                                </th>
                                <th>
                                    <h3 className="h3-services">
                                        Operations
                                    </h3>
                                </th>
                                <th>
                                    <h3 className="h3-services">
                                        Marketing & Sales
                                    </h3>
                                </th>
                                <th>
                                    <h3 className="h3-services">
                                        Store Management
                                    </h3>
                                </th></tr>
                            <tr><th></th>
                                <th></th>
                                <th></th>
                                <th></th></tr> */}
                            <tr>
                                <th>
                                    <h3 className="h3-services ">
                                        Merchant of records
                                    </h3>
                                </th>
                                <th>
                                    <p className='p-services'>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia empora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <h3 className="h3-services ">
                                    Operations
                                    </h3>
                                </th>
                                <th>
                                    <p className='p-services'>
                                    Nequempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                </th>
                            </tr><tr>
                                <th>
                                    <h3 className="h3-services ">
                                    Marketing & Sales
                                    </h3>
                                </th>
                                <th>
                                    <p className='p-services'>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                </th>
                            </tr><tr>
                                <th>
                                    <h3 className="h3-services ">
                                    Store Management
                                    </h3>
                                </th>
                                <th>
                                    <p className='p-services'>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                </th>
                            </tr>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services
