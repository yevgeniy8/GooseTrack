import { faker } from '@faker-js/faker';

import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
} from 'recharts';

const data = [{ name: 'To Do' }, { name: 'In Progress' }, { name: 'Done' }];
const newData = data.map(el => ({
    ...el,
    'By Day': faker.number.int({ min: 10, max: 100 }),
    'By Month': faker.number.int({ min: 10, max: 100 }),
}));

const formatPercent = value => `${value}%`;

const calculateParams = width => {
    let barGap, chartWidth, chartHeight, marginRight, barSize;

    if (width >= 1440) {
        barGap = 14;

        chartWidth = 694;
        chartHeight = 286;
        marginRight = 0;
        barSize = 27;
    } else if (width >= 768) {
        barGap = 14;

        chartWidth = 522;
        chartHeight = 286;
        marginRight = 0;
        barSize = 27;
    } else {
        barGap = 8;

        chartWidth = 243;
        chartHeight = 266;
        marginRight = 0;
        barSize = 22;
    }

    return { barGap, chartWidth, chartHeight, marginRight, barSize };
};

const StatisticsReChart = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { barGap, chartWidth, chartHeight, marginRight, barSize } =
        calculateParams(windowWidth);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <BarChart
            width={chartWidth}
            height={chartHeight}
            data={newData}
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
                stroke="#E3F3FF"
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
                    fontSize={12}
                    fill="#000"
                    formatter={formatPercent}
                />
            </Bar>
            <Bar dataKey="By Month" fill="url(#colorPv)" radius={[0, 0, 7, 7]}>
                <LabelList
                    dataKey="By Month"
                    position="top"
                    fontSize={12}
                    fill="#000"
                    formatter={formatPercent}
                />
            </Bar>
        </BarChart>
    );
};

export default StatisticsReChart;
