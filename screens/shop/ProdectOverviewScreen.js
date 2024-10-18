import React from 'react'
import { FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartAction from '../../store/actions/cart'

const ProdectOverviewScreen = (props) => {
    const product = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    return (
        <FlatList
            data={product}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {props.navigation.navigate('ProductDetail', {productId: itemData.item.id}) }}
                    onAddToCart={() => { dispatch(cartAction.addToCart(itemData.item)) }}
                />)}
        />
    )
}

export default ProdectOverviewScreen;