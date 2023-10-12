import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import CalendarToolbar from 'components/Calendar/CalendarToolbar';
import { Outlet, useNavigate } from 'react-router';
import moment from 'moment';

import { useThemeContext } from 'hooks/ThemeContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    }
`;

const CalendarPage = () => {
    const { theme } = useThemeContext();

    const navigate = useNavigate();

    useEffect(() => {
        const month = moment().format('YYYY-MM').toString();
        navigate(`/calendar/month/${month}`);
    }, [navigate]);

    const format = localStorage.getItem('type') || 'month';
    useEffect(() => {
        const date =
            localStorage.getItem('date') ||
            moment().format('YYYY-MM-DD').toString();

        if (format === 'month') {
            navigate(`/calendar/month/${moment(date).format('YYYY-MM')}`);
        } else {
            navigate(`/calendar/day/${date}`);
        }

        localStorage.setItem('date', date);
        localStorage.setItem('type', format);
    }, [navigate, format]);

    return (
        <CalendarContainer>
            <GlobalStyles theme={theme} />
            <CalendarToolbar />
            <Outlet />
        </CalendarContainer>
    );
};

export default CalendarPage;

const CalendarContainer = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        margin-top: 0;
    }
`;
