/* eslint-disable no-unused-vars */
import React from 'react';
import EmailPAssword from '../../pages/EmailPassword/EmailPAssword';
import Header from '../../shearedPages/Header/Header';
import GoogleAndGitLogin from '../../shearedPages/GoogleAndGitLogin/GoogleAndGitLogin';
import Footer from '../../shearedPages/Footer/Footer';

const Login = () => {
    return (
        <div>
            {/* loginlayout  */}
            <Header></Header>
            <EmailPAssword></EmailPAssword>
            <GoogleAndGitLogin></GoogleAndGitLogin>
            <Footer></Footer>
        </div>
    );
};

export default Login;