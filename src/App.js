import React from 'react';
import styled from 'styled-components';

import Card from './components/blocks/Card';

import testimonials from './dataset';

const Container = styled.div`
    padding: 4.375rem 1.5625rem;
    position: relative;

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1.875rem 1.875rem;
        grid-template-areas:
            'daniel daniel jonathan kira'
            'jeanette patrick patrick kira';

        padding: 5rem 1.5625rem;
        place-content: center;
    }

    @media only screen and (${(props) => props.theme.breakpoints.xlDevices}) {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateY(-50%);
    }
`;

const Attribution = styled.div`
    text-align: center;
    width: 60%;
    color: ${(props) => props.theme.colors.veryDarkBlackishBlue};
    font-weight: 600;

    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);

    @media only screen and (${(props) => props.theme.breakpoints.lDevices}) {
        bottom: 2.5%;
    }
`;

const AttributionLink = styled.a`
    color: ${(props) => props.theme.colors.moderateViolet};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: ${(props) => props.theme.colors.veryDarkGrayishBlue};

        text-decoration: underline;
    }
`;

function App() {
    return (
        <Container>
            {testimonials.map((data) => {
                return (
                    <Card
                        key={data.name}
                        name={data.name}
                        status={data.status}
                        review={data.review}
                        message={data.message}
                        bgColor={data.bgColor}
                        color={data.color}
                        avatar={data.avatar}
                        quotationImage={data.quotationImage}
                        gridArea={data.gridArea}
                    />
                );
            })}

            <Attribution>
                Challenge by{' '}
                <AttributionLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttributionLink>
                . Coded by{' '}
                <AttributionLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttributionLink>
                🔥
            </Attribution>
        </Container>
    );
}

export default App;
