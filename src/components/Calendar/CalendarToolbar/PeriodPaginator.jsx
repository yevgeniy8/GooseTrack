import { BtnLeft, BtnRight, BtnPeriod, Svg, Paginator } from "./CalendarToolbar.styled";

import sprite from '../../../images/icons.svg';

const PeriodPaginator = () => {
    return ( 
        <Paginator>
            <BtnPeriod type="button">March 2023</BtnPeriod>
            <div>
                <BtnLeft type="button">
                <Svg width="18" height="18">
                    <use href={`${sprite}#chevron-left`} />
                </Svg>
            </BtnLeft>
            <BtnRight type="button">
                <Svg width="18" height="18">
                    <use href={`${sprite}#chevron-right`} />
                </Svg>
            </BtnRight>
            </div>
        </Paginator>
     );
}
 
export default PeriodPaginator;