import { Routes , Route } from 'react-router-dom';
import UserSignInForm from '../../components/user-signin-form/user-signin-form.component';
import UserSignUpForm from '../../components/user-signup-form/user-signup-form.component';

import './login.styles.scss';

const Login = () => {

    return (
        <div className="login-container">
            <div className="login-inner-container">
                <div className="login-left-section">
                    <img className="left-section-image" src="images/download.png" alt="banner"/>
                </div>
                <div className="login-right-section">
                    <Routes>
                        <Route index element={<UserSignInForm/>}></Route>
                        <Route path="/signup" element={<UserSignUpForm/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Login;