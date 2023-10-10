import useAuth from 'hooks/useAuth';

import {
    InfoContainer,
    NameP,
    AvatarDiv,
    Img,
    FirstLetterOfName,
} from './UserInfo.styled';

const UserInfo = () => {
    const { user } = useAuth();

    const { name, avatarURL } = user;

    function getFirstName(name) {
        if (name) {
            const nameParts = name.split(' ');
            if (nameParts.length >= 2) {
                const firstName = nameParts[0];
                if (firstName.length > 14) {
                    return `${firstName.substring(0, 12)}...`;
                }
                return firstName;
            }
        }
        return name;
    }

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
            </AvatarDiv>
        </InfoContainer>
    );
};

export default UserInfo;
