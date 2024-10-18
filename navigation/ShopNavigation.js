import React from 'react'
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import ProdectOverviewScreen from '../screens/shop/ProdectOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';
import HeaderButton from '../components/UI/HeaderButton'

const Stack = createNativeStackNavigator()
const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTitleStyle: { fontFamily: 'OpenSansBold' },
    headerBackTitleStyle: { fontFamily: 'OpenSans' },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
}


export default function ShopNavigation() {
    return (
        <Stack.Navigator screenOptions={defaultNavigationOptions}>
            <Stack.Screen
                name='ProductOverview'
                component={ProdectOverviewScreen}
                options={({navigation}) =>({
                    headerTitle: 'All Products',
                    headerRight: () => (
                        <HeaderButton
                            title='Cart'
                            onPress={() => {navigation.navigate("Cart")}}
                        >
                            <Ionicons
                                name={Platform.OS === 'android' ? 'cart-outline' : 'cart'}
                                size={23}
                                color={Platform.OS === 'android' ? '#fff' : Colors.primary}
                            />
                        </HeaderButton>
                    ),
                })}
            />
            <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
            <Stack.Screen name='Cart' component={CartScreen}/>
        </Stack.Navigator>
    )
}
