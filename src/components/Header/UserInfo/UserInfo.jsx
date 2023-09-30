// import { AuthNav } from '../AuthNav/AuthNav';
import { InfoContainer, NameP, AvatarDiv, Svg } from './UserInfo.styled';
import sprite from 'images/icons.svg';

const UserInfo = () => {
    return (
        <InfoContainer>
            <NameP>Goose</NameP>
            <AvatarDiv>
                <Svg>
                    <use href={`${sprite}#user-check`} />
                </Svg>
            </AvatarDiv>
        </InfoContainer>
    );
};

export default UserInfo;
