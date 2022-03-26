import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import AppLoading from 'expo-app-loading';


import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold

} from '@expo-google-fonts/inter'

import { Dashboard } from './src/screens/Dashboard';





export default function App() {

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold
    })

    if (!fontsLoaded) {
        return (
            <AppLoading />
        )
    }

    return (
        <>
            <ThemeProvider theme={theme} >
                <StatusBar
                    backgroundColor="transparent"
                    translucent
                />
                <Dashboard />
            </ThemeProvider>

        </>

    );
}


