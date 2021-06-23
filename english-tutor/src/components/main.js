import {Col, Container, Figure, Row,} from 'react-bootstrap';

export default function Main() {
    return (
        <Container id="homepage" fluid key="main" className="d-flex flex-column section-row align-items-center justify-content-center">
            <Row className="h-100">
                <Col id="intro" xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                    <p>Learn English today!</p>
                    <ul id="details" type="circle">
                        <li>Private lessons with a native speaker</li>
                        <li>Individual approach</li>
                        <li>Fun and natural way of learning English</li>
                    </ul>
                </Col>
                <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center">
                    <Figure>
                        <Figure.Image
                            width={300}
                            height={500}
                            alt="300x500"
                            src="Flag.png"
                        />
                    </Figure>
                </Col>
            </Row>
        </Container>
    )
}