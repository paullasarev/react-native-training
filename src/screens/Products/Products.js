import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, FlatList } from 'react-native';

// import { go } from '../../navigation/Navigation';
import ProductGridItem from '../../components/ProductGridItem';
import { PRODUCTS } from '../../mock';
import { MAIN_ROUTES } from '../../constants/routes';
import { routeGoAction } from '../../app/actions';
import style from './style';

const getItemSeparatorComponent = () => <View style={style.separator} />;
const keyExtractor = (product) => product.name;

const Products = () => {
  const dispatch = useDispatch();

  const onItemPress = useCallback(
    (item) => {
      // go(MAIN_ROUTES.PRODUCT, { product: item });
      console.log('dispatch', MAIN_ROUTES.PRODUCT);
      dispatch(routeGoAction(MAIN_ROUTES.PRODUCT, { product: item }));
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({ item: product }) => {
      return <ProductGridItem product={product} onPress={onItemPress} />;
    },
    [onItemPress],
  );

  return (
    <View style={style.container}>
      <FlatList
        style={style.list}
        contentContainerStyle={style.list}
        data={PRODUCTS}
        renderItem={renderItem}
        ItemSeparatorComponent={getItemSeparatorComponent}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default React.memo(Products);
