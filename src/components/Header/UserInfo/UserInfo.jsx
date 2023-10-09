import React, { useEffect } from 'react';
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
    const { name, avatarURL, birthday } = user;

    const currentDate = new Date();
    // const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const userBirthday = new Date(birthday);
    const userMonth = userBirthday.getMonth() + 1;
    const userDay = userBirthday.getDate();

    useEffect(() => {
        const checkBirthday = () => {
            if (currentMonth === userMonth && currentDay === userDay) {
            }
        };
        checkBirthday();
    }, [currentDay, currentMonth, user, userDay, userMonth]);

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
