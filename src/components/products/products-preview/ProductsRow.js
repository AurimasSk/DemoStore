import React from 'react';
import PropTypes from 'prop-types';
import ProductPreviewElement from './ProductPreviewElement';

const ProductsRow = ({ productsRow}) => {
  return (
    <div className="productsRow row">
      {productsRow.map(product =>
        <ProductPreviewElement
          key={product.id}
          product={product}
        />
      )}
    </div>
  );
};

ProductsRow.propTypes = {
  productsRow: PropTypes.array.isRequired
};

export default ProductsRow;
