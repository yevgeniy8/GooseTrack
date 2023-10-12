import { CalendarBlock, Legend, LegendBlock } from './ChartLegend.styled';
import StatDatePicker from './StatDatePicker';

const ChartLegend = ({ startDate, setStartDate }) => {
    return (
        <LegendBlock>
            <CalendarBlock>
                <StatDatePicker
                    startDate={startDate}
                    setStartDate={setStartDate}
                />
            </CalendarBlock>
            <Legend>
                <li>By Day</li>
                <li>By Month</li>
            </Legend>
        </LegendBlock>
    );
};
export default ChartLegend;
