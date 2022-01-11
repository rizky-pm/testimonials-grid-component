import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

export const theme = {
    colors: {
        moderateViolet: 'rgb(117, 65, 200)',
        veryDarkGrayishBlue: 'rgb(72, 85, 106)',
        veryDarkBlackishBlue: 'rgb(25, 33, 46)',
        white: 'rgb(255, 255, 255)',
        lightGray: 'rgb(207, 207, 207)',
        lightGrayishBlue: 'rgb(236, 242, 248)',
    },
    breakpoints: {
        xsDevices: 'max-width: 35.9375rem',
        sDevices: 'min-width: 36rem',
        mDevices: 'min-width: 48rem',
        lDevices: 'min-width: 62rem',
        xlDevices: 'min-width: 90rem',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
