import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import CartItem from './CartItem'
import Card from '../UI/Card'
import Colors from '../../constants/Colors'

export default function OrderItem(props) {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <Card style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                colot={Colors.primary}
                title={showDetails? "Hide Details" : "Show Details"}
                onPress={() => {
                    setShowDetails(prevState => !prevState);
                }} />
            {showDetails && <View style={styles.detailItems}>
                {props.items.map((cartItem) =>
                    <CartItem
                        quantity={cartItem.quantity}
                        amount={cartItem.sum}
                        key={cartItem.productId}
                        title={cartItem.productTitle}
                    />)}
            </View>}
        </Card>
    )
}

const styles = StyleSheet.create({
    orderItem: {
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalAmount: {
        fontFamily: 'OpenSansBold',
        fontSize: 16
    },
    date: {
        fontSize: 16,
        fontFamily: 'OpenSans',
        color: '#888'
    },
    detailItems: {
        width: '100%'
    }
})