import React, { Component } from 'react';
import Signinform from '../../components/Signinform/Signinform';
import Signupform from '../../components/Signupform/Signupform';
import { createHashHistory } from 'history'


class LoginScreen extends Component {
    state = {
        signup: false,
        signedIn: false,
        signedInUser: {}
    }

    handler = () => {
        this.setState({signup: !this.state.signup});
    }

    signInHandler = () => {
        this.setState({signedIn: !this.state.signedIn})
        console.log('Signed In!');
        this.props.history.push('/home');
        /*this.routerProps.history.push('/home');*/

        /* update SignedIn User State */
        /* Route to Other Page */
    }
    
    render() {
        return (

            this.state.signup ?
                <Signupform ></Signupform> :
                <Signinform signedInHandler={this.signInHandler} routerProps = {this.props} handler={this.handler}></Signinform>
        )
    }
}

export default LoginScreen;