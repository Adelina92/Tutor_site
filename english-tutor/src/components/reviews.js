import {Component} from 'react';

import {
    Container,
    Row,
    Col,
    Carousel,
  } from 'react-bootstrap';

export default class Reviews extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return(
<Container key="reviews" id="slider" fluid className="d-flex flex-column section-row">
    <Row>
    <Col>
    <Carousel>
        <Carousel.Item>

            <Carousel.Caption>
              <h3>Ivan, 28</h3>
              <p>I recommend this teacher. My English has become from beginner to intermediate in half year!</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>

            <Carousel.Caption>
                <h3>Dasha, 37</h3>
                <p>My daughter, who is in the 4th grade, has been learning English with this teacher since September and is very happy. He made her love English as a language and a school subject.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>

            <Carousel.Caption>
                <h3>Michael, 16</h3>
                <p>I am satisfied with this teacher, he helps me to prepare for TOEFL and I feel more confident already.</p>
            </Carousel.Caption>
        </Carousel.Item>

        </Carousel>
        </Col>
    </Row>

</Container>
        )
    }
}