import InfoCard from './InfoCard';
import classes from './InfoCards.module.css';
import { TbTruckDelivery } from 'react-icons/tb';
import { Ri24HoursFill } from 'react-icons/ri';
import { FaHandHoldingUsd } from 'react-icons/fa';

const InfoCards =()=> {
    return(
        <div className={classes.infoCards}>
            <InfoCard 
                icon={<TbTruckDelivery className={classes.icon}/>} 
                title={'Free shipping and returns'} 
                description={'Free and convenient ways to ship your order. Several return options to choose'}/>
            <InfoCard 
                icon={<Ri24HoursFill className={classes.icon}/>} 
                title={'Shipping in 24h (1 eco pack)'} 
                description={'Products ordered before 4:00 p.m. are shipped the same day!'}/>
            <InfoCard 
                icon={<FaHandHoldingUsd className={classes.icon}/>} 
                title={'Save with E-shop Club'} 
                description={'Save 10% of the value of each purchase and shop up to 50% cheaper!'}/>
        </div>
    )
}
export default InfoCards;