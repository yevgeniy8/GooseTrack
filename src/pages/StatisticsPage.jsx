import { useState } from 'react';
import { useThemeContext } from 'hooks/ThemeContext';

// import StatDatePicker from 'components/StatisticsChart/StatDatePicker';
import StatisticsChart from 'components/StatisticsChart/StatisticsChart';

import { createGlobalStyle } from 'styled-components';
import styled from '@emotion/styled';
import ChartLegend from 'components/StatisticsChart/ChartLegend/ChartLegend';
// import ChartLegend from 'components/StatisticsChart/ChartLegend/ChartLegend';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */
    }
`;

const StatisticsPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { theme } = useThemeContext();

    return (
        <>
            <GlobalStyles theme={theme} />
            <StatSectionStyled>
                <ChartLegend
                    startDate={startDate}
                    setStartDate={setStartDate}
                />
                <CharContainer>
                    <StatBlock>
                        <Yaxis>
                            <YaxisName>Tasks</YaxisName>
                            <Yticks>
                                <li>100</li>
                                <li>80</li>
                                <li>60</li>
                                <li>40</li>
                                <li>20</li>
                                <li>0</li>
                            </Yticks>
                        </Yaxis>
                        <StatisticsChart
                            startDate={startDate}
                            setStartDate={setStartDate}
                        />
                    </StatBlock>
                    <Xaxis>
                        <Xticks>
                            <li>To Do</li>
                            <li>In Progress</li>
                            <li>Done</li>
                        </Xticks>
                    </Xaxis>
                </CharContainer>
            </StatSectionStyled>
        </>
    );
};

export default StatisticsPage;

const StatSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 16px;

    padding: 28px 14px 135px 14px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        padding: 132px 32px 224px 32px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        padding: 134px 114px 104px 113px;
    }
`;

const CharContainer = styled.div`
    border: 0.8px solid;
    border-color: ${({ theme }) => theme.colors.statisticsLine};
    width: 307px;
    height: 413px;
    border-radius: 29px;
    padding: 73px 14px 66px 14px;
    color: #343434;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 640px;
        height: 424px;
        border-radius: 16px;
        padding: 61px 32px 32px 32px;
        color: #343434;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        width: 860px;
        height: 440px;
        border-radius: 29px;
        padding: 85px 40px 70px 40px;
        color: #343434;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }
`;
const StatBlock = styled.section`
    display: flex;
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
        margin-bottom: 8px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 8px;
    }
`;
const Yaxis = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -37px;
    margin-right: 0px;
    padding-left: 0px;
    font-weight: 600;
    @media screen and (min-width: 768px) {
        margin-top: -41px;
        margin-right: 17px;
    }
    @media screen and (min-width: 1440px) {
        margin-right: 46px;
        margin-top: -40px;
    }
`;
const YaxisName = styled.p`
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }
    @media screen and (min-width: 1440px) {
        margin-bottom: 24px;
    }
`;
const Yticks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 29px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary};
    @media screen and (min-width: 768px) {
        gap: 33px;
    }
    @media screen and (min-width: 1440px) {
        gap: 33px;
    }
`;
const Xaxis = styled.div``;

const Xticks = styled.ul`
    display: flex;
    gap: 34px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-left: 62px;
    margin-bottom: -33px;
    font-size: 12px;
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 120px;
        margin-left: 122px;
        margin-bottom: -33px;
        font-size: 14px;
    }
    @media screen and (min-width: 1440px) {
        display: flex;
        gap: 176px;
        margin-left: 180px;
        margin-bottom: -33px;
        font-size: 14px;
    }
`;
