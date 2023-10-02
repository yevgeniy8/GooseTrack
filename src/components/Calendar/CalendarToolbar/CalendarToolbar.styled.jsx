import styled from '@emotion/styled';

export const BtnPeriod = styled.button`
    color: white;
    font-size: 16px;
    font-family: Inter;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 18px;
    word-wrap: break-word;
    font-family: Inter;
    width: 131px;
    height: 34px;
    padding: 8px, 12px;
    border-radius: 8px;
    border: none;
    background-color: #3e85f3;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color: #2b78ef;
    }
`;

export const CalendarToolbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
`;

export const Paginator = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const BtnLeft = styled.button`
    padding: 8px 10px;
    width: 38px;
    height: 34px;
    background-color: #fff;
    border: solid 1px rgba(220, 227, 229, 0.8);
    border-radius: 8px 0 0 8px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BtnRight = styled.button`
    padding: 8px 10px;
    width: 38px;
    height: 34px;
    background-color: #fff;
    border: solid 1px rgba(220, 227, 229, 0.8);
    border-radius: 0 8px 8px 0;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Svg = styled.svg`
    stroke: #343434;
`;

export const BtnMonth = styled.button`
    width: 82px;
    height: 34px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px 0 0 8px;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
    background-color: #e3f3ff;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #3e85f3;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus,
    &:active {
        background-color: rgba(62, 133, 243, 0.2);
    }
`;

export const BtnDay = styled.button`
    width: 82px;
    height: 34px;
    padding: 8px 16px;
    border: none;
    border-radius: 0 8px 8px 0;
    border-left: 1px solid rgba(62, 133, 243, 0.2);
    background-color: #e3f3ff;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #3e85f3;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus,
    &:active {
        background-color: rgba(62, 133, 243, 0.2);
    }
`;
