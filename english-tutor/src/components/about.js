import {Col, Container, Row,} from 'react-bootstrap';

export default function About() {
    return (
        <Container id="resume" fluid key="about" className="d-flex flex-column section-row">
            <Row>
                <Col>
                    <p>About me</p>
                    <ul type="circle">
                        <li>I am an experienced teacher of English as a second language</li>
                        <li>I have an experience of teaching students of various ages both in groups and individually
                        </li>
                        <li>I can teach online through videocalls</li>
                        <li>I use acknowledged materials by Campridge and Oxford</li>
                    </ul>

                </Col>
            </Row>

        </Container>
    )
}