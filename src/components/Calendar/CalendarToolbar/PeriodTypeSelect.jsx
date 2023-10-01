import { NavLink } from 'react-router-dom';
import { BtnDay, BtnMonth } from "./CalendarToolbar.styled";

const PeriodTypeSelect = () => {
    return ( 
        <div>
            <NavLink to="/user/calendar/month/:currentDate">
                <BtnMonth type="button">Month</BtnMonth>
            </NavLink>
            <NavLink to="/user/calendar/day/:currentDay">
                <BtnDay type="button">Day</BtnDay>
            </NavLink>
            
        </div>
     );
}
 
export default PeriodTypeSelect;