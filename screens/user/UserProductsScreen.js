import React from 'react'
import { FlatList, Button,  Alert  } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import Colors from '../../constants/Colors'
import * as productsActions from '../../store/actions/products'

export default function UserProductsScreen(props) {
    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch();

    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct', {productId: id})
    }

    const deleteHandler = (id) => {
        Alert.alert("Are you sure?", "DO you really want to delete this item?", [
            {text: 'No', style: 'default'},
            {text: 'Yes', style: 'destructive', onPress: () => { 
                dispatch(productsActions.deleteProduct(id))  
            }}
        ])
    }

    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {editProductHandler(itemData.item.id)}}
                >
                    <Button
                        color={Colors.primary}
                        title="Edit"
                        onPress={() => {
                            editProductHandler(itemData.item.id)
                        }}
                    />
                    <Button
                        color={Colors.primary}
                        title="Delete"
                        onPress={() => {deleteHandler(itemData.item.id)}}
                    />
                </ProductItem>}
        />
    )
}
