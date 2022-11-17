import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom"
import { signOutStart } from "../../store/user/user.action";
import './navigation.styles.scss';

const Navigation = () => {

    const disptach = useDispatch();
    
    const navigate = useNavigate();

    const LogoutUser = () => {
        disptach(signOutStart());
        navigate('/');
    }

    return (
        <div className="container mx-auto">

            <div className="header-container">
                <h2 className="app-brand">Hello <span className="font-bold text-theme-5">Joemar</span></h2>
                <div className="navigation-button">
                    <button className="nav-button">
                        <img src="icons/category.svg" alt="category-icon" />
                    </button>
                    <button className="nav-button" onClick={LogoutUser}>
                        <img src="icons/logout.svg" alt="logout-icon" />
                    </button>
                </div>
            </div>
            
            <div className="p-5">
                <Outlet/>
            </div>
          
        </div>
    )
}


export default Navigation;