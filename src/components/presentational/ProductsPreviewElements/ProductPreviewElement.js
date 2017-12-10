import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const ProductPreviewElement = ({ product }) => {

  return (
    <div className="productPreviewElement col-xs-3 text-center">
      <img src={product.picturePath} />
      <div>
        <div>
          <Link to={'/product/' + product.id}>Products preview</Link>
        </div>
        <div>
          {product.price}
        </div>
      </div>
    </div>
  );
};

ProductPreviewElement.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductPreviewElement;
