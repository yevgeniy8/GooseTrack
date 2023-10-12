import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeContext } from 'hooks/ThemeContext';
import moment from 'moment';

import { fetchTasks } from 'redux/calendar/calendarOperations';
import { selectTasks } from 'redux/calendar/calendarSelector';
import {
    calculateParams,
    formatPercent,
    getStatisticsCalculation,
} from 'helpers';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
} from 'recharts';
import { LIGHT } from 'constants';

const StatisticsChart = ({ startDate, setStartDate }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { theme } = useThemeContext();
    const dispatch = useDispatch();
    const { barGap, chartWidth, chartHeight, marginRight, barSize, fontSize } =
        calculateParams(windowWidth);
    const isLightTheme = theme === LIGHT;
    const currentDate = moment(startDate).format('YYYY-MM-DD');
    const tasks = useSelector(selectTasks);

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

    const fillBarValue = isLightTheme ? '#343434' : '#fff';
    const gridStroke = isLightTheme ? '#E3F3FF' : '#e3f3ff26';
    const { formattedData } = getStatisticsCalculation(currentDate, tasks);

    return (
        <BarChart
            width={chartWidth}
            height={chartHeight}
            data={formattedData}
            margin={{
                top: 18,
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
                    fill={fillBarValue}
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

export default StatisticsChart;
