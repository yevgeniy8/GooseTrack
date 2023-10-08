import { WeekdaysItem, WeekdaysList } from './DayCalendarHead.styled';
import { useMediaQuery } from 'react-responsive';
// import { DAYS, DAYS_MOB } from '../ChoosedMonth/utils';
import { useParams } from 'react-router-dom';

import moment from 'moment';

import { setDay } from 'helpers/setDay';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
const DayCalendarHead = () => {
    // const params = useParams();
    // console.log(params.currentDay.split('-')[2]);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    // const currentDate = new Date();

    // const displayedDays = isMobile ? DAYS_MOB.slice(0, 7) : DAYS;

    const [isSelected, setIsSelected] = useState('');

    const { currentDay } = useParams();

    useEffect(() => {
        // const currentDaySlice = currentDay.split('-').slice(2).join('');
        // console.log(currentDaySlice);
        // console.log(currentDay.split('-')[2]);

        [...Array(7)].map((_, idx) => {
            const curr = moment(currentDay)
                .clone()
                .startOf('week')
                .day(idx + 1)
                .format('DD');
            if (curr === currentDay.split('-')[2]) {
                setIsSelected(idx);
            }
            return null;
        });
    }, [currentDay]);

    // return (
    //     <WeekdaysList>
    //         {displayedDays.map((day, index) => (
    //             // console.log(currentDate.getDate()),
    //             <WeekdaysItem
    //                 key={index}
    //                 className={
    //                     // currentDate.getDay() === index ? 'current-day' : ''
    //                     Number(params.currentDay.split('-')[2]) === index + 8
    //                         ? 'current-day'
    //                         : ''
    //                 }
    //             >
    //                 {day} {currentDate.getDate() + index}
    //                 {/* {Number(params.currentDay.split('-')[2])} */}
    //             </WeekdaysItem>
    //         ))}
    //     </WeekdaysList>
    // );

    return (
        <HeadContainer selected={isSelected}>
            {[...Array(7)].map((_, idx) => (
                <HeadCell
                    // onClick={() => onChangeDay(moment().day(idx + 1))}
                    key={idx}
                >
                    <NameWeek>
                        {isMobile
                            ? moment()
                                  .day(idx + 1)
                                  .format('ddd')
                                  .charAt(0)
                            : moment()
                                  .day(idx + 1)
                                  .format('ddd')}
                    </NameWeek>
                    <DayWeekContainer>
                        <DayWeekText>
                            {setDay(currentDay)
                                .startWeek.day(idx + 1)
                                .format('D')}
                        </DayWeekText>
                    </DayWeekContainer>
                </HeadCell>
            ))}
        </HeadContainer>
    );
};

const HeadContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: center;
    text-align: center;
    align-items: center;
    border: 1px solid rgba(220, 227, 229, 0.8);
    border-radius: 8px;
    margin-bottom: 14px;
    overflow: hidden;

    & div:nth-of-type(${({ selected }) => selected + 1}) {
        & div {
            color: #ffffff;
            background-color: #3e85f3;
            border-radius: 6px;
        }
    }
`;

const HeadCell = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    background-color: #fff;

    & div {
        color: #343434;
        /* opacity: 0; */
        background-color: var(--cell-background);

        border-radius: 6px;
        transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
    }

    padding: 16px 0;
    cursor: pointer;
    /* &:hover {
        & div {
            opacity: 1;
            color: #ffffff;
            background-color: #3e85f3;
        }
    } */
`;

const NameWeek = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

const DayWeekContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    width: 20px;
    height: 22px;
    /* text-align: center; */
`;
const DayWeekText = styled.span``;

export default DayCalendarHead;
