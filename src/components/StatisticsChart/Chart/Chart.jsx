import StatisticsReChart from '../StatisticsChart';
import {
    CharContainer,
    StatBlock,
    Xaxis,
    Xticks,
    Yaxis,
    YaxisName,
    Yticks,
} from './Chart.styled';

const Chart = ({ startDate, setStartDate }) => {
    return (
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
                <StatisticsReChart
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
    );
};

export default Chart;
