import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import {
//     Row,
//     Col,
//     Card,
//     CardHeader, 
//     CardBlock,
//     CardTitle,
//     CardSubtitle,
//     CardText,
//     Button,
//     Form,
//     Input
//   } from '@bootstrap-styled/v4';
import './main.css';
import {
    Container,
    Card,
    CardTitle,
    CardBody,
    NavBar,
    NavItem
} from './ui/layout.js';
import {
    Button,
    Input
} from './ui/components.js';
import { sendLoginRequest } from './thunks';

class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            pw: ''
        }
    }

    render () {
        return (
            <>
                <NavBar>
                    <NavItem>Logo</NavItem>
                    <NavItem>Home</NavItem>
                    <NavItem>Gorp</NavItem>
                </NavBar>
                <Container>
                    <Card>
                        <CardTitle>Log In</CardTitle>
                        <CardBody>
                            <Input type='text' name='email' placeholder='Email'></Input>
                            <Input type='password' name='password' placeholder='Password'></Input>
                            <Button>Submit</Button>
                        </CardBody>
                    </Card>
                </Container>
            </>
        // <Row>
        //     <Col>
        //         <Card block>
        //             <CardHeader>Log In</CardHeader>
        //             <Form>
        //                 <InputBlock type='text' name='email' placeholder='Email'></InputBlock>
        //                 <InputBlock type='password' name='password' placeholder='Password'></InputBlock>
        //             </Form>
        //             <Button>Login</Button>
        //         </Card>
        //     </Col>
        //     <Col>
        //         <Card block>
        //             <CardHeader>Sign Up</CardHeader>
        //             <CardBlock>
        //             </CardBlock>
        //         </Card>
        //     </Col>
        // </Row>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmitPressed: (email, pw) => dispatch(sendLoginRequest(email, pw))
});

export default connect(null, mapDispatchToProps)(Login);