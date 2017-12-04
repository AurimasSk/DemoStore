import React from 'react';
import PropTypes from 'prop-types';
import ProductPreviewElement from './ProductPreviewElement';

const ProductsRow = ({ productsRow, onProductClick}) => {
  return (
    <div className="productsRow row">
      {productsRow.map(product =>
        <ProductPreviewElement
          key={product.id}
          product={product}
          onProductClick={onProductClick}/>
      )}
    </div>
  );
};

ProductsRow.propTypes = {
  productsRow: PropTypes.array.isRequired,
  onProductClick: PropTypes.func.isRequired
};

export default ProductsRow;
