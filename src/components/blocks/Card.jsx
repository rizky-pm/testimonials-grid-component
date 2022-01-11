import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 1.5625rem 1.875rem;
    border-radius: 0.625rem;
    background: url(${(props) => props.quotationImage}),
        ${(props) => props.backgroundColor};
    background-repeat: no-repeat;
    background-position: 90% 0%;
    color: ${(props) => props.color};
    position: relative;

    box-shadow: 1.25rem 1.25rem 3.125rem -1.25rem rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 1.25rem 1.25rem 3.125rem -1.25rem rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 1.25rem 1.25rem 3.125rem -1.25rem rgba(0, 0, 0, 0.5);

    :not(:last-of-type) {
        margin-bottom: 1.5625rem;
    }

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        grid-area: ${(props) => props.gridArea};
        background-size: 16.5%;
        background-position: 82.5% 0%;
        padding: 1.5625rem 2.5rem;

        :not(:last-of-type) {
            margin-bottom: 0;
        }
    }
`;

const ProfileContainer = styled.div`
    display: grid;
    /* grid-template-columns: 0.3fr 1.7fr; */

    grid-template-columns: 2.5rem 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0rem 0rem;
    grid-template-areas:
        'avatar name'
        'avatar status';

    justify-content: start;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
    }
`;

const Avatar = styled.img`
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    border: 0.125rem solid ${(props) => props.color};
    grid-area: avatar;
`;

const Name = styled.span``;

const Status = styled.span`
    opacity: 0.5;
`;

const Review = styled.p`
    margin-top: 1.25rem;
    font-weight: 600;
    font-size: 1.3031rem; /* 1.3031rem */
    line-height: 1.5;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        font-size: 1.5rem;
    }
`;

const Message = styled.p`
    margin-top: 1.5625rem;
    opacity: 0.7;
    line-height: 1.5;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        font-size: 1.0625rem;
    }
`;

const Card = ({
    name,
    status,
    review,
    message,
    bgColor,
    color,
    avatar,
    quotationImage,
    gridArea,
}) => {
    return (
        <Container
            backgroundColor={bgColor}
            color={color}
            quotationImage={quotationImage}
            gridArea={gridArea}
        >
            <ProfileContainer>
                <Avatar src={avatar} />
                <Name>{name}</Name>
                <Status>{status}</Status>
            </ProfileContainer>
            <Review>{review}</Review>
            <Message>{message}</Message>
        </Container>
    );
};

export default Card;
