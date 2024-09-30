import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';
import * as cartAction from '../../store/actions/cart'

const ProductDetailScreen = (props) => {
    const productId = props.route.params.productId;
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId)
    );
    const dispatch = useDispatch();
    useEffect(() => {
        props.navigation.setOptions({ title: selectedProduct.title });
    }, [props.navigation])

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.action}>
            <Button color={Colors.primary} title="Add to Cart" onPress={() => {
                dispatch(cartAction.addToCart(selectedProduct))
            }} />
            </View>
            <View>
                <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
                <Text style={styles.description}>{selectedProduct.description}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    action: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    }
});

export default ProductDetailScreen;