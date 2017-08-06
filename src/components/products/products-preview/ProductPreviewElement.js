import React, {PropTypes} from 'react';

class ProductPreviewElement extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    // val path = this
    return (
      <div className="productPreviewElement col-xs-3 text-center">
        <img src={this.props.product.picturePath}/>
        <div>
          <div>
            {this.props.product.name}
          </div>
          <div>
            {this.props.product.price}
          </div>
        </div>
      </div>
    );
  }
}

ProductPreviewElement.propTypes = {
  product: PropTypes.object.isRequired,
  picturePath: PropTypes.string,
  name: PropTypes.string,
  proce: PropTypes.string
};

export default ProductPreviewElement;
