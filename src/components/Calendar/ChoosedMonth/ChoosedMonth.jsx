import CalendarTable from "./CalendarTable";
import CalendarHead from "./MonthCalendarHead";

const ChoosedMonth = () => {
  return ( 
    <div style={{backgroundColor: 'rgba(202, 232, 255, 1)'}}>
      <CalendarHead/>
      <CalendarTable/>
    </div>
   );
}
 
export default ChoosedMonth;


