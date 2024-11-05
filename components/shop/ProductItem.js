import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from '../UI/Card';

const ProductItem = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <Card style={styles.product}>
            <View style={styles.touceable}>
                <TouchableCmp onPress={props.onSelect} useForegrounc>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: props.image }} />
                        </View>
                        <View style={styles.detials}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>${parseFloat(props.price).toFixed(2)}</Text>
                        </View>
                        <View style={styles.action}>
                           {props.children}
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </Card>
    )
};

const styles = StyleSheet.create({
    product: {
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 8,
        height: 300,
        margin: 20
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    detials: {
        alignItems: 'center',
        height: '17%',
        padding: 10
    },
    title: {
        fontFamily: 'OpenSansBold',
        fontSize: 18,
        marginVertical: 2,
    },
    price: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        color: '#888'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '23%',
        paddingHorizontal: 20
    }
});

export default ProductItem;