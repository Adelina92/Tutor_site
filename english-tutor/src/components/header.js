import {Nav, Navbar,} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg" sticky={"top"}>
            <LinkContainer to="/">
                <Navbar.Brand>English Lessons</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto my-2 my-lg-0" style={{maxHeight: '100px'}} navbarScroll>
                    <LinkContainer to="/about">
                        <Nav.Link>About me</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/prices">
                        <Nav.Link>Lessons and prices</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/reviews">
                        <Nav.Link>Students' reviews</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
