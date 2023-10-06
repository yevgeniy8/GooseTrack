import React from 'react';
import desk404 from '../../images/error_page/desk404.png';
import desk404_2x from '../../images/error_page/desk404_2x.png';
import mob404 from '../../images/error_page/mob404.png';
import mob404_2x from '../../images/error_page/mob404_2x.png';
import tab404 from '../../images/error_page/tab404.png';
import tab404_2x from '../../images/error_page/tab404_2x.png';
import { BtnBack, ImgWrapper, Info, InfoContainer, Text, Wrapper } from './Error.styled';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <Wrapper>
            <ImgWrapper>
                <Text>4</Text>
                <img
                    src={mob404}
                    alt="goose"
                    srcSet={`${desk404} 1140w, ${desk404_2x} 2280w, ${tab404} 768w, ${tab404_2x} 1536w, ${mob404} 375w, ${mob404_2x} 750w`}
                />
                <Text>4</Text>
            </ImgWrapper>
           <InfoContainer>
           <Info>
                We’re sorry, the page you requested could not be found. Please
                go back to the homepage.
            </Info>
           </InfoContainer>
            <Link to={'/'}>
                <BtnBack type="button">Back to home</BtnBack>
            </Link>
        </Wrapper>
    );
};
