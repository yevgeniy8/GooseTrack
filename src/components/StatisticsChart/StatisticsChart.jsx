import { faker } from '@faker-js/faker';
import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    // Tooltip,
    // Legend,
    LabelList,
} from 'recharts';

const data = [{ name: 'To Do' }, { name: 'In Progress' }, { name: 'Done' }];
const newData = data.map(el => ({
    ...el,
    'By Day': faker.number.int({ min: 10, max: 100 }),
    'By Month': faker.number.int({ min: 10, max: 100 }),
}));

const formatPercent = value => `${value}%`; // Функція для форматування

export default function StatisticsReChart() {
    return (
        <BarChart
            width={694}
            height={286}
            data={newData}
            margin={{
                top: 15,
                right: 0,
                left: 0,
                bottom: 1,
            }}
            barSize={27}
            barRadius={10}
            barGap={14}
        >
            <CartesianGrid
                horizontal={true} // Встановлюємо horizontal=true для горизонтальної сітки
                vertical={false} // Встановлюємо vertical=false для вимкнення вертикальної сітки
                stroke="#E3F3FF"
            />
            {/* <Tooltip cursor={false} isAnimationActive={false} /> */}
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
            <YAxis ticks={[0, 20, 40, 60, 80, 100]} hide="true" />

            {/* <Legend
                iconType="circle"
                iconSize="8"
                align="right"
                verticalAlign="top"
                hide="true"
            /> */}
            <Bar dataKey="By Day" fill="url(#colorUv)" radius={[0, 0, 7, 7]}>
                <LabelList // Додаємо LabelList для підписів
                    dataKey="By Day"
                    position="top"
                    fontSize={12}
                    fill="#000"
                    formatter={formatPercent}
                />
            </Bar>
            <Bar dataKey="By Month" fill="url(#colorPv)" radius={[0, 0, 7, 7]}>
                <LabelList // Додаємо LabelList для підписів
                    dataKey="By Month"
                    position="top"
                    fontSize={12}
                    fill="#000"
                    formatter={formatPercent}
                />
            </Bar>
        </BarChart>
    );
}
