import React from 'react'
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProdectOverviewScreen = () => {
    const product = useSelector(state => state.products.availableProducts);
    return (
        <FlatList
            data={product}
            keyExtractor={item => item.id}
            renderItem={itemData => <Text>{itemData.item.title}</Text>}
        />
    )
}

export default ProdectOverviewScreen;