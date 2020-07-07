import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import ProductImage from '../ProductImage';
import Text from '../Text';
import style from './style';

const ProductGridItem = (props) => {
  const { product, onPress } = props;
  const handlePress = useCallback(() => onPress(product), [onPress, product]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={style.container}>
        <ProductImage product={product} />
        <Text style={style.name}>{product.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProductGridItem);
