import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Card(props) {
  return (
    <View style={{...styles.card, ...props.style}}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.26)',
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    }
})
