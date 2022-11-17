import { Fragment } from "react";
import MoneyContainer from "../../components/money-container/money-container.component";

const Home = () => {
    return (
        <Fragment>
            <MoneyContainer />
            
            <div className="flex mt-10 gap-4">
                <div className="w-1/3 bg-theme-2 p-5 rounded-md">
                    <h3 className="text-lg font-semibold">Expense by category</h3>
                </div>
                <div className="w-2/3 bg-theme-2 p-5 rounded-md">
                    <h3 className="text-lg font-semibold">Budget chart history</h3>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;