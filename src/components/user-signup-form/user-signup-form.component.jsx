import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}


const UserSignUpForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const GoToSignIn = () => navigate('/');

    const [formFields , setFormFields] = useState(defaultFormFields);

    const {displayName , email , password, confirmPassword} = formFields;

    const ChangeHandler = (event) => {
        const {name , value} = event.target;
        setFormFields({...formFields , [name]:value});
    }

    const SubmitHandler = async(event) => {
        event.preventDefault();

        if(password !== confirmPassword) return alert("Password is not same");

        try {
            await dispatch(signUpStart(email , password, displayName));
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert("Cannot use email, already in use.")
            }
            console.log('user creation encountered an error' ,error)
        }
    }


    return (
        <Fragment>
            <div className="text-center mb-10">
                <h2 className="font-bold text-5xl mb-5">
                    Budget <span className="text-theme-5">IO</span>
                </h2>
                <h3 className="text-2xl">Create a account now</h3>
                <h3 className="text-sm font-light">Be one of us, track your expense be a budget master.<br /> BudgetIO your finance friend.</h3>
            </div>

            <div className="w-3/4 mx-auto mb-2">
                <label className="block mb-2">Nickname</label>
                <input 
                    placeholder="john@gmail.com" 
                    type="text" 
                    name="displayName"
                    className="login-input"
                    value={displayName}
                    onChange={ChangeHandler}
                    />
            </div>

            <div className="w-3/4 mx-auto mb-2">
                <label className="block mb-2">Email</label>
                <input 
                    placeholder="john@gmail.com" 
                    type="text" 
                    className="login-input" 
                    name="email"
                    value={email}
                    onChange={ChangeHandler}
                    />
            </div>

            <div className="w-3/4 mx-auto mb-2">
                <label className="block mb-2">Password</label>
                <input 
                    placeholder="••••" 
                    type="password" 
                    className="login-input"
                    name="password"
                    value={password}
                    onChange={ChangeHandler} />
            </div>
            <div className="w-3/4 mx-auto mb-5">
                <label className="block mb-2">Confirm Password</label>
                <input 
                    placeholder="••••" 
                    type="password" 
                    className="login-input"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={ChangeHandler} />
            </div>


            <div className="w-3/4 mx-auto mb-10" onClick={SubmitHandler}>
                <button type="text" className="login-button-primary" >
                    Sign Up
                </button>
            </div>

            <div className="w-3/4 mx-auto mb-10 text-center">
                <label>Already have account ? <span className="text-theme-5 cursor-pointer" onClick={GoToSignIn} >Sign In</span></label>
            </div>
        </Fragment>
    )
}

export default UserSignUpForm;