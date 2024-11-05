import React, { useEffect, useState, useCallback } from 'react'
import { View, ScrollView, Text, TextInput, StyleSheet, Platform} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';
import * as productActions from '../../store/actions/products'

export default function EditProductScreen(props) {
    let productId
    if (props.route.params !== undefined) {
        productId = props.route.params.productId;
    }
    else {
        productId = ''
    }
    //const productId = props.route.params.productId;
    const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === productId))

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '')
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '')
    const [price, setPrice] = useState(editedProduct ? editedProduct.price : 0)
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '')

    const dispatch = useDispatch();

    const submitHandler = useCallback(() => {
        if(editedProduct) {
            dispatch(
                productActions.updateProduct(productId, title, imageUrl, description)
            )
        } else {
            dispatch(
                productActions.createProduct(title, imageUrl, price,  description)
            )
        }
        props.navigation.goBack();
    },[productId, title, price, description, imageUrl, dispatch])

    useEffect(() => {
        props.navigation.setOptions({ title: productId ? 'Edit Product' : 'Add Product' });
    }, [props.navigation, productId])

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButton
                    title='Save'
                    onPress={submitHandler}
                >
                    <Ionicons
                        name={Platform.OS === 'android' ? 'checkmark-outline' : 'checkmark'}
                        size={23}
                        color={Platform.OS === 'android' ? 'white' : Colors.primary}
                    />
                </HeaderButton>
            ),
        })
    }, [props.navigation, submitHandler])
    return (
        <ScrollView>
            <View style={styles.from}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput style={styles.input} value={imageUrl} onChangeText={text => setImageUrl(text)} />
                </View>
                {editedProduct ? null : (
                    <View style={styles.formControl}>
                        <Text style={styles.label}>Price</Text>
                        <TextInput style={styles.input} value={price} onChangeText={text => setPrice(text)} />
                    </View>
                )}
                <View style={styles.formControl}>
                    <Text style={styles.label}>Description</Text>
                    <TextInput style={styles.input} value={description} onChangeText={text => setDescription(text)} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    formControl: {
        width: '100%'
    },
    label: {
        fontFamily: 'OpenSansBold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }
});