import { NavLink } from 'react-router-dom';
import { BtnDay, BtnMonth } from "./CalendarToolbar.styled";

const PeriodTypeSelect = () => {
    return ( 
        <div>
            <NavLink to="/">
                <BtnMonth type="button">Month</BtnMonth>
            </NavLink>
            <NavLink to="/">
                <BtnDay type="button">Day</BtnDay>
            </NavLink>
            
        </div>
     );
}
 
export default PeriodTypeSelect;