import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import { NavigationContainer } from '@react-navigation/native';
import ShopNavigation from "./navigation/ShopNavigation";

export default function Index() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <ShopNavigation/>
            </NavigationContainer>
        </Provider>
    );
}