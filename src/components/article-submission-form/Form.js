import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Form.css';
class Form extends React.Component{
    render(){
        return(
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={4}></Col>
                        <Col xs={4}>
                            <form className="Form">
                                <Container fluid>
                                    <Row>
                                        <Col xs={12}><input className="Form-input" type="text" name="articleName" placeholder="Name of Article" autoComplete="off"/></Col>
                                        <Col xs={12}><input className="Form-input" type="text" name="category" placeholder="Category" autoComplete="off"/></Col>
                                        <Col xs={12}><input className="Form-input" type="text" name="authorName" placeholder="Name of Author" autoComplete="off"/></Col>
                                        <Col xs={12}><input className="Form-input" type="text" name="articleLink" placeholder="Link to Article" autoComplete="off"/></Col>
                                        <Col xs={12}><input className="Form-submit" type="submit" value="Add Article"></input></Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                        <Col xs={4}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Form;