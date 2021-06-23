import {Component} from 'react';

import {
    Container,
    Row,
    Col,
  } from 'react-bootstrap';

export default class Prices extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return(
<Container id="lessons" fluid key="prices" className="d-flex flex-column section-row">
    <Row >
        <Col xs={{span:12, offset:0}} md={{span:8, offset:2}}>
        <table id="price-list" align="center" cellPadding="10">
        <tbody>
        <tr>
        <td>Individual offline lesson (45 mins):</td>
        <td>30 EUR</td>
        </tr>
        <tr>
        <td>Individual online lesson (45 mins):</td>
        <td>25 EUR</td>
        </tr>
        <tr>
        <td>Individual offline lesson (60 mins):</td>
        <td>40 EUR</td>
        </tr>
        <tr>
        <td>Individual online lesson (60 mins):</td>
        <td>30 EUR</td>
        </tr>
        <tr>
        <td>Individual offline lesson (90 mins):</td>
        <td>50 EUR</td>
        </tr>
        <tr>
        <td>Individual online lesson (90 mins):</td>
        <td>40 EUR</td>
        </tr>
        </tbody>
        </table>
        </Col>
    </Row>

</Container>
        )
    }
}