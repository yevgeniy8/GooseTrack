import useAuth from 'hooks/useAuth';
import {
    InfoContainer,
    NameP,
    AvatarDiv,
    FirstLetterOfName,
} from './UserInfo.styled';

const UserInfo = () => {
    const { user } = useAuth();

    const { name = '', avatarURL } = user;
    const firstLetterOfUserName = name[0];

    return (
        <InfoContainer>
            {name ? <NameP>{name}</NameP> : <NameP>User</NameP>}
            <AvatarDiv>
                {avatarURL !== '' ? (
                    <img src={avatarURL} alt={name} />
                ) : (
                    <FirstLetterOfName>
                        {firstLetterOfUserName}
                    </FirstLetterOfName>
                )}
            </AvatarDiv>
        </InfoContainer>
    );
};

export default UserInfo;
