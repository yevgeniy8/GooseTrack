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

    // console.log(avatarURL);
    return (
        <InfoContainer>
            {name ? <NameP>{name}</NameP> : <NameP>User</NameP>}
            <AvatarDiv>
                {(avatarURL === '' || !avatarURL) && name ? (
                    <FirstLetterOfName>
                        {firstLetterOfUserName}
                    </FirstLetterOfName>
                ) : avatarURL !== '' ? (
                    <img src={avatarURL} alt={name} />
                ) : null}
            </AvatarDiv>
        </InfoContainer>
    );
};

export default UserInfo;
