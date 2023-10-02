import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


export const Calendar = () => {

 
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
        </LocalizationProvider>
    );
};
