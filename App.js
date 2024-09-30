import React, {useEffect} from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from "react-redux";
import store from "./store/store";
import { NavigationContainer } from '@react-navigation/native';
import ShopNavigation from "./navigation/ShopNavigation";

SplashScreen.preventAutoHideAsync();


export default function Index() {
    const [loaded] = useFonts({
        OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
    });

    useEffect(() => {
        if(loaded) {
            SplashScreen.hideAsync();
        }
    },[loaded]);

    if(!loaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <ShopNavigation />
            </NavigationContainer>
        </Provider>
    );
}