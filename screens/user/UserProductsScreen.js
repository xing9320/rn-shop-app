import React from 'react'
import { FlatList, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/shop/ProductItem'
import Colors from '../../constants/Colors'
import * as productsActions from '../../store/actions/products'

export default function UserProductsScreen() {
    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch();
    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => {}}
                >
                    <Button
                        color={Colors.primary}
                        title="Edit"
                        onPress={() => {
                            
                        }}
                    />
                    <Button
                        color={Colors.primary}
                        title="Delete"
                        onPress={() => {
                            dispatch(productsActions.deleteProduct(itemData.item.id))
                        }}
                    />
                </ProductItem>}
        />
    )
}
