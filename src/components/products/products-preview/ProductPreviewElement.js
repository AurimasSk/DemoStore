import React from 'react';
import PropTypes from 'prop-types';

const ProductPreviewElement = ({ product, onProductClick }) => {

  return (
    <div className="productPreviewElement col-xs-3 text-center">
      <img src={product.picturePath} />
      <div>
        <div>
          <a onClick={(event) => { onProductClick(product.id, event); }}>
            {product.name}
          </a>
        </div>
        <div>
          {product.price}
        </div>
      </div>
    </div>
  );
};

ProductPreviewElement.propTypes = {
  product: PropTypes.object.isRequired,
  onProductClick: PropTypes.func.isRequired
};

export default ProductPreviewElement;
