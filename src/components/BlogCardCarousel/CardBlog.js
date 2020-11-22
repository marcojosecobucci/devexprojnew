import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BlogCard from './BlogCard'
const CardBlog = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className='h1-cardBlog' >Our blog</h1>
                    </Col>
                    <Col>
                        <p className="p-cardBlog">
                            Read all articles
                        </p>
                    </Col>
                </Row>
            </Container>
            <BlogCard/>
        </div>
    )
}

export default CardBlog
