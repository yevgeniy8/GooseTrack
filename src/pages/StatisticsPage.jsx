import StatisticsChart from 'components/StatisticsChart/StatisticsChart';
import styled from '@emotion/styled';

const StatisticsPage = () => {
    return (
        <section>
            <LegendBlock>
                <CalendarBlock>
                    <Calendar>/Calendar/</Calendar>
                    <Switcher>/Switcher/</Switcher>
                </CalendarBlock>
                <Legend>
                    <li>By Day</li>
                    <li>By Month</li>
                </Legend>
            </LegendBlock>
            <SectionStat>
                <StatBlock>
                    <Yaxis>
                        <p style={{ marginBottom: '24px' }}>Tasks</p>
                        <Yticks>
                            <li>100</li>
                            <li>80</li>
                            <li>60</li>
                            <li>40</li>
                            <li>20</li>
                            <li>0</li>
                        </Yticks>
                    </Yaxis>
                    <StatisticsChart />
                </StatBlock>
                <Xaxis>
                    <Xticks>
                        <li>To Do</li>
                        <li>In Progress</li>
                        <li>Done</li>
                    </Xticks>
                </Xaxis>
            </SectionStat>
        </section>
    );
};

export default StatisticsPage;

const SectionStat = styled.div`
    position: {
        border: 0.8px solid #e3f3ff;
        hight: 440px;
        width: 860px;
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
`;
const Yaxis = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -45px;
    margin-right: 46px;
    padding-left: 0px;
    font-weight: 600;
`;
const Yticks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 34px;
    font-weight: 400;
`;
const Xaxis = styled.div``;

const Xticks = styled.ul`
    display: flex;
    gap: 176px;
    margin-left: 182px;
    margin-bottom: -33px;
`;
const LegendBlock = styled.div`
    display: flex;
    gap: 383px;
    padding-left: 40px;
`;

const Legend = styled.ul`
    display: flex;
    flex-direction: row;
    color: #343434;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    gap: 20px;
    li:first-of-type::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #ffd2dd;
        border-radius: 50%;
        margin-right: 8px;
    }
    li:last-of-type::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #3e85f3;
        border-radius: 50%;
        margin-right: 8px;
    }
`;
const CalendarBlock = styled.div`
    display: flex;
`;
const Calendar = styled.div``;
const Switcher = styled.div``;
