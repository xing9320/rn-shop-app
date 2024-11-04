import React from 'react'
import { FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '../../constants/Colors';
import ProductItem from '../../components/shop/ProductItem';
import * as cartAction from '../../store/actions/cart'

const ProdectOverviewScreen = (props) => {
    const product = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    const selectItemHandler = (id, title) => {
        props.navigation.navigate("ProductDetail", {
            productId: id,
            productTitle: title, // we'll pass down the title for the navigation header
        });
    };
    return (
        <FlatList
            data={product}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => { selectItemHandler(itemData.item.id, itemData.item.title) }}
                >
                    <Button
                        color={Colors.primary}
                        title="View Details"
                        onPress={() => {
                            selectItemHandler(itemData.item.id, itemData.item.title);
                        }}
                    />
                    <Button
                        color={Colors.primary}
                        title="To Cart"
                        onPress={() => {
                            dispatch(cartAction.addToCart(itemData.item)); // the item is the specific Product class
                        }}
                    />
                </ProductItem>)}
        />
    )
}

export default ProdectOverviewScreen;