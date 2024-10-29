import React from 'react'
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';
import ProdectOverviewScreen from '../screens/shop/ProdectOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors';
import HeaderButton from '../components/UI/HeaderButton'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTitleStyle: { fontFamily: 'OpenSansBold' },
    headerBackTitleStyle: { fontFamily: 'OpenSans' },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}


function ProductNavigation() {
    return (
        <Stack.Navigator screenOptions={defaultNavigationOptions}>
            <Stack.Screen
                name='ProductOverview'
                component={ProdectOverviewScreen}
                options={({ navigation }) => ({
                    headerTitle: 'All Products',
                    headerRight: () => (
                        <HeaderButton
                            title='Cart'
                            onPress={() => { navigation.navigate("Cart") }}
                        >
                            <Ionicons
                                name={Platform.OS === 'android' ? 'cart-outline' : 'cart'}
                                size={23}
                                color={Platform.OS === 'android' ? 'white' : Colors.primary}
                            />
                        </HeaderButton>
                    ),
                    headerLeft: () => (
                        <HeaderButton title="Menu" onPress={() => { navigation.toggleDrawer() }}>
                            <Ionicons
                                name="menu"
                                size={25}
                                color={Platform.OS === 'android' ? 'white' : Colors.primary}
                            />
                        </HeaderButton>),
                })}
            />
            <Stack.Screen name='ProductDetail' component={ProductDetailScreen} />
            <Stack.Screen name='Cart' component={CartScreen}
                options={{ headerTitle: 'Your Cart' }} />
        </Stack.Navigator>
    )
}
function OrderNavigation() {
    return (
        <Stack.Navigator screenOptions={{ defaultNavigationOptions, headerShown: false}}>
            <Stack.Screen name='Orders' component={OrdersScreen}  />
        </Stack.Navigator>
    )
}

export default function ShopNavigation() {
    return (
        <Drawer.Navigator initialRouteName='Products'
            screenOptions={{
                drawerActiveTintColor: Colors.primary,
            }}
        >
            <Drawer.Screen name='Products' component={ProductNavigation}
                options={{ headerShown: false,
                    drawerIcon: (drawerConfig) => (
                        <Ionicons
                                    name={Platform.OS === 'android' ? 'cart-outline' : 'cart'}
                                    size={25}
                                    color={drawerConfig.tintColor}
                                />
                    )
                 }} />
            <Drawer.Screen name='Order' component={OrderNavigation}
                options={{
                    headerTitle: 'Your Orders',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
                    },
                    headerTitleStyle: { fontFamily: 'OpenSansBold' },
                    headerBackTitleStyle: { fontFamily: 'OpenSans' },
                    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                    drawerIcon: (drawerConfig) => (
                        <Ionicons
                                    name={Platform.OS === 'android' ? 'list-outline' : 'list'}
                                    size={25}
                                    color={drawerConfig.tintColor}
                                />
                    )
                }} />
        </Drawer.Navigator>
    )
}
