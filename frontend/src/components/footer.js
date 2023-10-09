import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className='fixed-bottom'>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; ECOM</Col>
        </Row>
      </Container>
      </footer>   
  )
}
