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
// import { useSelector } from 'react-redux';
// import { editUser } from 'redux/auth/authOperations';
// import { selectUser } from 'redux/auth/authSelectors';

axios.defaults.baseURL = 'https://goose-track-backend-q3re.onrender.com/api';

export const UserInfo = ({
    setCurrentAvatar,
    avatarURL,
    userName,
    setIsFormChanged,
    setFieldValue,
}) => {
    const [avatar, setAvatar] = useState(null);
    // const dispatch = useDispatch();
    // const user = useSelector(selectUser);

    const handleChange = async e => {
        setCurrentAvatar(e.target.files[0]);
        const formData = new FormData();
        formData.append('avatar', e.target.files[0]);
        // dispatch(editUser(formData));
        try {
            const {
                data: { newUser },
            } = await axios.patch('/users/edit', formData);
            setFieldValue('avatarURL', e);
            setAvatar(newUser.avatarURL);
            setIsFormChanged(true);
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
                <ImgAvatar
                    src={avatar || avatarURL || avatarDefault}
                    alt="avatar"
                />
            </ImgContainer>
            <InputFile
                type="file"
                onChange={handleChange}
                name="avatar"
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
