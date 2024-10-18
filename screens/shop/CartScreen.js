import React from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Colors from '../../constants/Colors'
import CartItem from '../../components/shop/CartItem'

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

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                </Text>
                <Button color={Colors.accent} title='Oreder Now' disabled={cartItems.length === 0} />
            </View>
            <View>
                <FlatList
                    data={cartItems}
                    keyExtractor={item => item.productId}
                    renderItem={itemData => (
                        <CartItem
                            quantity={itemData.item.quantity}
                            title={itemData.item.productTitle}
                            amount={itemData.item.sum} 
                            onRemove={() => { }}
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
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: 'OpenSansBold',
        fontSize: 18
    },
    amount: {
        color: Colors.primary
    }
})