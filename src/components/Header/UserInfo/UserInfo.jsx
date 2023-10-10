import useAuth from 'hooks/useAuth';
import hotBirthday from '../../../images/birthday.svg';
import { getCurrentDate, isBirthdayToday, getFirstName } from 'helpers';
import {
    InfoContainer,
    NameP,
    AvatarDiv,
    Img,
    FirstLetterOfName,
    BirthdayDiv,
} from './UserInfo.styled';

const UserInfo = () => {
    const { user } = useAuth();
    const { name, avatarURL, birthday } = user;
    const userBirthday = new Date(birthday);
    const currentDate = getCurrentDate();
    const isBirthday = isBirthdayToday(userBirthday, currentDate);
    const firstName = getFirstName(name);

    return (
        <InfoContainer>
            {name ? <NameP>{firstName}</NameP> : <NameP>User</NameP>}
            <AvatarDiv>
                {(avatarURL === '' || !avatarURL) && name ? (
                    <FirstLetterOfName>{name[0]}</FirstLetterOfName>
                ) : avatarURL !== '' ? (
                    <Img src={avatarURL} alt={name} />
                ) : null}
                {isBirthday && (
                    <BirthdayDiv>
                        <img src={hotBirthday} alt="Birthday" />
                    </BirthdayDiv>
                )}
            </AvatarDiv>
        </InfoContainer>
    );
};

export default UserInfo;
