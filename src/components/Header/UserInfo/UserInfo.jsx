import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
    const [avatar, setAvatar] = useState(avatarURL);

    useEffect(() => {
        setAvatar(avatarURL);
    }, [avatarURL]);

    return (
        <InfoContainer>
            {name ? <NameP>{firstName}</NameP> : <NameP>User</NameP>}
            <NavLink to="account">
                <AvatarDiv>
                    {(avatar === '' || !avatar) && name ? (
                        <FirstLetterOfName>{name[0]}</FirstLetterOfName>
                    ) : avatar !== '' ? (
                        <Img src={avatar} alt={name} />
                    ) : null}
                    {isBirthday && (
                        <BirthdayDiv>
                            <img src={hotBirthday} alt="Birthday" />
                        </BirthdayDiv>
                    )}
                </AvatarDiv>
            </NavLink>
        </InfoContainer>
    );
};

export default UserInfo;
