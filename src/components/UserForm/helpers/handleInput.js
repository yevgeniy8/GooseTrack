import { IconErr, IconDone } from '../UserForm.styled';
import sprite from '../../../images/icons.svg';

function handleInput(errors, touched, fieldName) {
    if (errors[fieldName] && touched[fieldName]) {
        return (
            <IconErr width={24} height={24}>
                <use href={`${sprite}#error-outline`} />
            </IconErr>
        );
    } else if (touched[fieldName]) {
        return (
            <IconDone width={24} height={24}>
                <use href={`${sprite}#done`} />
            </IconDone>
        );
    }
}
export default handleInput;
