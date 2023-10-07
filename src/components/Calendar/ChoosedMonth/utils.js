import moment from 'moment';

export const DAYS_MOB = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const getDaysInMonth = date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const range = (end) => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1
    }),
    { result: [], current: 1 }
  );
    return result;
};

export const sortDays = date => {
    const dayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const sortedDays = [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
    return sortedDays;
};

export const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

export const getMonthYear = date => {
    const d = date.toDateString('default', {
month: 'long',
}).split(' ');
    // console.log(d);
    return `${d[1]} ${d[3]}`;
};

export const nextMonth = (date, cb) => {
    const mon = date.getMonth();
    if (mon < 11) {
        date.setMonth(mon + 1);
    } else {
        date.setMonth(0);
        date.setFullYear(date.getFullYear() + 1);
    }
    cb(new Date(date));
};

export const prevMonth = (date, cb) => {
    const mon = date.getMonth();
    if (mon > 0) {
        date.setMonth(mon - 1);
    } else {
        date.setMonth(11);
        date.setFullYear(date.getFullYear() - 1);
    }
    cb(new Date(date));
};

export const getSortedDays = date => {
    const daysInMonth = range(getDaysInMonth(date));
    const index = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return [...Array(index === 0 ? 6 : index - 1), ...daysInMonth];
};

export const setDate = day => {
    moment.updateLocale('en', { week: { dow: 1 } });
    let currentDay;
    if (!day) {
        currentDay = moment();
    } else {
        currentDay = moment(day).clone();
    }
    const monthStart = currentDay.clone().startOf('month');
    const monthEnd = currentDay.clone().endOf('month');
    const dayStart = monthStart.clone().startOf('week');
    const dayEnd = monthEnd.clone().endOf('week');
    const weekStart = currentDay.clone().startOf('week');
    const weekEnd = currentDay.clone().endOf('week');
    const dayDifference = dayEnd.diff(dayStart, 'days') + 1;
    const weeks = dayDifference / 7;
    const startCalendar = dayStart.clone().subtract(1, 'day');
    const daysArray = [...Array(dayDifference)].map(() =>
        startCalendar.add(1, 'day').clone()
    );

    const dates = {
        monthStart,
        monthEnd,
        dayStart,
        dayEnd,
        weekStart,
        weekEnd,
        dayDifference,
        weeks,
        daysArray,
    };
    return dates;
};