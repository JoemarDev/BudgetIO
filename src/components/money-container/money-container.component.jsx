import './money-container.styles.scss';
import MoneyWidget from '../money-widget/money-widget.component';
const MoneyContainer = ({title , amount}) => {
    return (
        <div className='grid grid-cols-3 gap-3'>
            <MoneyWidget title={'Total Income'} amount={6000}/>
            <MoneyWidget title={'Total Expenses'} amount={4821}/>
            <MoneyWidget title={'Wallet Balance'} amount={125604}/>
        </div>
    )
}

export default MoneyContainer;