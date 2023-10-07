import Icons from '../../../../images/icons.svg';
import { BtnToAdd, IconX } from './ColumnsTasksList.styled';

const AddTaskBtn = () => {
    return (
        <BtnToAdd>
            <IconX>
                <use href={`${Icons}#ad-plus`} />
            </IconX>
            Add task
        </BtnToAdd>
    );
};

export default AddTaskBtn;
