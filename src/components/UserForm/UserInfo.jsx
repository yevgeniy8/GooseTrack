import React from 'react';
import avatarDefault from '../../images/Avatar.png';
import sprite from '../../images/icons.svg';
import axios from 'axios';

import {
    AvatarContainer,
    ImgAvatar,
    ImgContainer,
    InputFile,
    SvgPlus,
    UserName,
    UserP,
} from './UserForm.styled';
import { useState } from 'react';

axios.defaults.baseURL = 'https://goose-track-backend-q3re.onrender.com/api';

export const UserInfo = ({
    setCurrentAvatar,
    avatarURL,
    userName,
    setFieldValue,
}) => {
    const [avatar, setAvatar] = useState(avatarURL || null);

    const handleChange = async e => {
        setCurrentAvatar(e.target.files[0]);
        const formData = new FormData();
        formData.append('avatar', e.target.files[0]);

        try {
            const {
                data: { newUser },
            } = await axios.patch('/users/edit', formData);
            setFieldValue('avatarURL', e);
            setAvatar(newUser.avatarURL);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AvatarContainer
            animate={{ y: -50 }}
            transition={{ ease: 'easeOut', duration: 2 }}
        >
            <ImgContainer>
                {avatar ? (
                    <ImgAvatar src={avatar || avatarURL} alt="avatar" />
                ) : (
                    <img
                        src={avatarDefault}
                        width={48}
                        height={48}
                        alt="default avatar"
                    />
                )}
            </ImgContainer>
            <InputFile
                type="file"
                onChange={handleChange}
                name="avatar"
                aria-label="upload-avatar"
                accept="image/png, image/jpeg, image/jpg"
            />
            <SvgPlus width="14" height="14">
                <use href={`${sprite}#icon-image`} />
            </SvgPlus>
            <UserName>{userName || 'User Name'}</UserName>
            <UserP>User</UserP>
        </AvatarContainer>
    );
};
