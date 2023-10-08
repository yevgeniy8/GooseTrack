import { Link } from 'react-router-dom';
import moment from 'moment';

import sprite from 'images/icons.svg';

import {
  Date,
  DateBox,
  PeriodPaginator,
  PeriodTypeSelect,
  Icon,
  ToolbarContainer,
  TypeLink,
  BtnRight,
  BtnLeft,
  BtnMonth,
  BtnDay,
} from './CalendarToolbar.styled';

const CalendarToolbar = ({
  currentDate,
  setCurrentDate,
  format,
  setFormat,
}) => {
  const month = moment(currentDate).format('YYYY-MM');
  const day = moment(currentDate).format('YYYY-MM-DD');

   const handlePrevDate = format => {
    const date = moment(currentDate).subtract(1, format).format('YYYY-MM-DD');
    setCurrentDate(date);
     localStorage.setItem('date', date);
    //  console.log(date);
  };

   const handleNextDate = format => {
    const date = moment(currentDate).add(1, format).format('YYYY-MM-DD');
    setCurrentDate(date);
     localStorage.setItem('date', date);
     console.log(date);
  };
  
  const handleChangePeriod = evt => {
    switch (evt.currentTarget.textContent) {
      case 'Month':
        setFormat('month');
        localStorage.setItem('type', 'month');
        break;
      case 'Day':
        setFormat('day');
        localStorage.setItem('type', 'day');
        break;
      default:
        return format;
    }
  };

  return (
    <ToolbarContainer>
      <PeriodTypeSelect>
        <DateBox>
          <Date>
            {moment(currentDate).format(
              format === 'day' ? 'DD MMM YYYY' : 'MMMM YYYY'
            )}
          </Date>
        </DateBox>
        <div>
          <Link
            to={format === 'month' ? `month/${month}` : `day/${day}`}
            onClick={() => handlePrevDate(format)}
          >
            <BtnLeft type="button">
              <Icon width="18" height="18">
                <use href={`${sprite}#chevron-left`}/>
              </Icon>
            </BtnLeft>
          </Link>
          <Link
            to={format === 'month' ? `month/${month}` : `day/${day}`}
            onClick={() => handleNextDate(format)}
          >
            <BtnRight type="button">
              <Icon width="18" height="18">
                <use href={`${sprite}#chevron-right`}/>
              </Icon>
            </BtnRight>
          </Link>
        </div>
      </PeriodTypeSelect>
      <PeriodPaginator>
        <BtnMonth type="button">
          <TypeLink to={`month/${month}`} onClick={handleChangePeriod}>
            Month
          </TypeLink>
        </BtnMonth>
        <BtnDay type="button"> 
          <Link to={`day/${day}`} onClick={handleChangePeriod}>
            Day
          </Link>
        </BtnDay>
      </PeriodPaginator>
    </ToolbarContainer>
  );
};

export default CalendarToolbar;
