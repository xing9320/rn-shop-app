import React from 'react'
import { Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'


export default function OrdersScreen() {
    const orders = useSelector(state => state.orders.orders)
    return (
        <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => <Text>{itemData.item.totalAmount.toFixed(2)}</Text>}
        />
    )
}
