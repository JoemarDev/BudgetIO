import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emailSigInStart, googleSigInStart } from "../../store/user/user.action";

const defaultFormFields = {
    email : '',
    password : '',
}

const UserSignInForm = () => {
    const dispatch = useDispatch();

    const [formFields , setFormFields] = useState(defaultFormFields);
    const { email , password } = formFields;


    const navigate = useNavigate();
    
    const GoToRegister = () => navigate('/signup');

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields , [name] : value});
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        try {
            dispatch(emailSigInStart(email ,password));
        } catch (error) {

            switch(error.code) {
                case 'auth/wrong-password':
                    alert("incorrect password for email");
                    break;
                case 'auth/user-not-found':
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error)
            }
        }
    };



    const SignInWithGoogle = () => {
        dispatch(googleSigInStart());
    }



    return (
        <Fragment>
            <div className="text-center mb-10">
                <h2 className="font-bold text-5xl mb-5">
                    Budget <span className="text-theme-5">IO</span>
                </h2>
                <h3 className="text-2xl">Hello There!</h3>
                <h3 className="text-sm font-light">Track your expenses and become budget master <br /> BudgetIO your finance friend.</h3>
            </div>

            <div className="w-3/4 mx-auto mb-2">
                <label className="block mb-2">Email</label>
                <input 
                    placeholder="john@gmail.com" 
                    type="text" 
                    className="login-input"
                    onChange={handleChange} 
                    name="email" 
                    value={email} />
            </div>

            <div className="w-3/4 mx-auto mb-2">
                <label className="block mb-2">Password</label>
                <input 
                    placeholder="••••" 
                    type="password" 
                    className="login-input"
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                     />
            </div>

            <div className="w-3/4 mx-auto flex justify-between mb-5">
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label>Remeber me</label>
                </div>
                
                <label className="text-theme-4">Forgot Password ?</label>
            </div>

            <div className="w-3/4 mx-auto mb-2">
                <button type="text" className="login-button-primary" onClick={handleSubmit} >
                    Sign In
                </button>
            </div>

            <div className="w-3/4 mx-auto mb-10">
                <button type="text" className="login-button-secondary" onClick={SignInWithGoogle}>
                    <img src="icons/google.svg" alt="google icons" className="w-6 mr-2" />
                    <span>Sign In With Google</span>
                </button>
            </div>

            <div className="w-3/4 mx-auto mb-10 text-center">
                <label>Don't have account yet ? <span className="text-theme-5 cursor-pointer" onClick={GoToRegister}>Sign Up</span></label>
            </div>
        </Fragment>
    )
}

export default UserSignInForm;