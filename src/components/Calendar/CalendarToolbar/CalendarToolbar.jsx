import { CalendarToolbarContainer } from "./CalendarToolbar.styled";
import PeriodPaginator from "./PeriodPaginator";
import PeriodTypeSelect from "./PeriodTypeSelect";

const CalendarToolbar = () => {
    return ( 
        <CalendarToolbarContainer>
            <PeriodPaginator />
            <PeriodTypeSelect />
        </CalendarToolbarContainer>
     );
}
 
export default CalendarToolbar;