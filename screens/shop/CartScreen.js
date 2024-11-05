import React from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import Colors from '../../constants/Colors'
import CartItem from '../../components/shop/CartItem'
import Card from '../../components/UI/Card'
import * as cartActions from '../../store/actions/cart'
import * as ordersActions from '../../store/actions/orders'

export default function CartScreen() {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const selectCartItems = useSelector(state => state.cart.items)

    const cartItems = [];
    for (const key in selectCartItems) {
        cartItems.push({
            productId: key,
            productTitle: selectCartItems[key].productTitle,
            productPrice: selectCartItems[key].productPrice,
            quantity: selectCartItems[key].quantity,
            sum: selectCartItems[key].sum
        })
    }
    const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <Card style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total: <Text style={styles.amount}>${Math.round(cartTotalAmount.toFixed(2) *100) / 100}</Text>
                </Text>
                <Button 
                color={Colors.accent} 
                title='Oreder Now' 
                disabled={cartItems.length === 0} 
                onPress={() => {
                    dispatch(ordersActions.addOrder(cartItems, cartTotalAmount))
                }}
                />
            </Card>
            <View>
                <FlatList
                    data={cartItems.sort((a, b) => a.productId > b.productId ? 1 : -1)}
                    keyExtractor={item => item.productId}
                    renderItem={itemData => (
                        <CartItem
                            quantity={itemData.item.quantity}
                            title={itemData.item.productTitle}
                            amount={itemData.item.sum} 
                            deletable
                            onRemove={() => {
                                dispatch(cartActions.removeFromCart(itemData.item.productId));
                             }}
                        />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10
    },
    summaryText: {
        fontFamily: 'OpenSansBold',
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    }
})