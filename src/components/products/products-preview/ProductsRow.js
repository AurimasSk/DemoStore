import React, { PropTypes } from 'react';
import ProductPreviewElement from './ProductPreviewElement';

const ProductsRow = ({ productsRow }) => {
  return (
    <div className="productsRow row">
      {productsRow.map(product =>
        <ProductPreviewElement key={product.key} product={product} />

      )}
    </div>
  );
};

ProductsRow.propTypes = {
  productsRow: PropTypes.array.isRequired
};

export default ProductsRow;
