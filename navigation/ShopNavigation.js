import React from 'react'
import { Platform } from 'react-native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import ProdectOverviewScreen from '../screens/shop/ProdectOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator()
const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTitleStyle: {fontFamily: 'OpenSansBold'},
    headerBackTitleStyle: {fontFamily: 'OpenSans'},
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}


export default function ShopNavigation() {
    return (
        <Stack.Navigator screenOptions={defaultNavigationOptions}>
            <Stack.Screen
                name='ProductOverview'
                component={ProdectOverviewScreen}
                options={{ title: 'All Products' }}
            />
            <Stack.Screen name='ProductDetail' component={ProductDetailScreen}/>
        </Stack.Navigator>
    )
}
