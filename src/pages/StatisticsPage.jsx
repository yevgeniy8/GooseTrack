import { useState } from 'react';
import { useThemeContext } from 'hooks/ThemeContext';
import { createGlobalStyle } from 'styled-components';
import styled from '@emotion/styled';
import ChartLegend from 'components/StatisticsChart/ChartLegend/ChartLegend';
import Chart from 'components/StatisticsChart/Chart/Chart';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        
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
                <Chart startDate={startDate} setStartDate={setStartDate} />
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
