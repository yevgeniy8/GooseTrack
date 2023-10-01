// import { AuthNav } from '../AuthNav/AuthNav';
import { InfoContainer, NameP, AvatarDiv, Svg } from './UserInfo.styled';
import sprite from 'images/icons.svg';

import useAuth from 'hooks/useAuth';

const UserInfo = () => {
    const { user } = useAuth();
    return (
        <InfoContainer>
            <NameP>{user.name}</NameP>
            <AvatarDiv>
                <Svg>
                    <use href={`${sprite}#user-check`} />
                </Svg>
            </AvatarDiv>
        </InfoContainer>
    );
};

export default UserInfo;
