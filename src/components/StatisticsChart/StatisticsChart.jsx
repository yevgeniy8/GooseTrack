// import { faker } from '@faker-js/faker';
import { LIGHT } from 'constants';
// import { getCurrentDate } from 'helpers';
import { useThemeContext } from 'hooks/ThemeContext';
import { getStatisticsCalculation } from 'helpers';
import { formatStartDate } from 'helpers';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
} from 'recharts';
import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';

// const data = [{ name: 'To Do' }, { name: 'In Progress' }, { name: 'Done' }];
// const newData = data.map(el => ({
//     ...el,
//     'By Day': faker.number.int({ min: 10, max: 100 }),
//     'By Month': faker.number.int({ min: 10, max: 100 }),
// }));

const formatPercent = value => {
    const formattedValue = value.toFixed(1);
    return isNaN(formattedValue) ? '0%' : `${formattedValue}%`;
};

// const formatStartDate = date => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// };

const calculateParams = width => {
    let barGap, chartWidth, chartHeight, marginRight, barSize, fontSize;

    if (width >= 1440) {
        barGap = 14;
        fontSize = 16;
        chartWidth = 694;
        chartHeight = 286;
        marginRight = 0;
        barSize = 27;
    } else if (width >= 768) {
        barGap = 14;
        fontSize = 16;
        chartWidth = 522;
        chartHeight = 286;
        marginRight = 0;
        barSize = 27;
    } else {
        barGap = 8;
        fontSize = 12;
        chartWidth = 243;
        chartHeight = 266;
        marginRight = 0;
        barSize = 22;
    }

    return { barGap, chartWidth, chartHeight, marginRight, barSize, fontSize };
};

const StatisticsReChart = ({ startDate, setStartDate }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { barGap, chartWidth, chartHeight, marginRight, barSize, fontSize } =
        calculateParams(windowWidth);
    const { theme } = useThemeContext();
    const isLightTheme = theme === LIGHT;
    const formattedStartDatsta = formatStartDate(startDate);

    ///////////////////////////////////

    const currentDate = formattedStartDatsta;
    //////////////////////////////////////////
    // const { currentDate } = useParams();
    // const date = new Date(currentDate);
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    // console.log(tasks);
    // console.log('tasks:>>', tasks);
    // console.log('currentDate', currentDate);

    useEffect(() => {
        dispatch(fetchTasks(currentDate));
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentDate, dispatch]);

    const fill = isLightTheme ? '#343434' : '#fff';
    const gridStroke = isLightTheme ? '#E3F3FF' : '#e3f3ff26';

    const { formattedData } = getStatisticsCalculation(currentDate, tasks);

    return (
        <BarChart
            width={chartWidth}
            height={chartHeight}
            data={formattedData}
            margin={{
                top: 15,
                right: marginRight,
                left: 0,
                bottom: 0,
            }}
            barSize={barSize}
            barRadius={10}
            barGap={barGap}
        >
            <CartesianGrid
                horizontal={true}
                vertical={false}
                stroke={gridStroke}
            />
            <defs>
                <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0">
                    <stop stopColor="#FFD2DD" />
                    <stop
                        offset="96.87%"
                        stopColor="rgba(255, 210, 221, 0.00)"
                        stopOpacity={0}
                    />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="1" x2="0" y2="0">
                    <stop stopColor="#3E85F3" />
                    <stop
                        offset="100%"
                        stopColor="rgba(62, 133, 243, 0.00)"
                        stopOpacity={0}
                    />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" hide="true" />
            <YAxis ticks={[0, 20, 40, 60, 80, 100]} hide="true" width={25} />

            <Bar dataKey="By Day" fill="url(#colorUv)" radius={[0, 0, 7, 7]}>
                <LabelList
                    dataKey="By Day"
                    position="top"
                    fontSize={fontSize}
                    fill={fill}
                    formatter={formatPercent}
                />
            </Bar>
            <Bar dataKey="By Month" fill="url(#colorPv)" radius={[0, 0, 7, 7]}>
                <LabelList
                    dataKey="By Month"
                    position="top"
                    fontSize={fontSize}
                    fill={isLightTheme ? '#343434' : '#fff'}
                    formatter={formatPercent}
                />
            </Bar>
        </BarChart>
    );
};

export default StatisticsReChart;
