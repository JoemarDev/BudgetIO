import './money-widget.styles.scss';
import { ToMoneyFormat } from '../../utils/basic/basic.utils';
const MoneyWidget = ({title , amount}) => {
    return (
        <>
            <div className='bg-theme-2 flex rounded-lg w-full overflow-hidden'>
                <div className='bg-theme-3 w-28 h-20 rounded-lg'>

                </div>
                <div className='flex items-center justify-center w-full'>
                    <div className="relative w-full text-center">
                        <h2 className='mb-1'>{title}</h2>
                        <p className='text-2xl font-semibold'>{ToMoneyFormat(amount)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoneyWidget;