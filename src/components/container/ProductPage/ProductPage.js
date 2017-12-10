import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from "../../../actions/productActions";
import ProductDetails from '../../presentational/ProductDetails/ProductDetails';

class ProductPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      product: Object.assign({}, props.product),
    };

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.product.id != nextProps.product.id) {
      // Necessary to populate from when existing product is loaded directly
      this.setState({ product: Object.assign({}, nextProps.product) });
    }
  }

  render() {
    return (
      <div>
        {
          <ProductDetails product={this.props.product}/>
        }
      </div>
    );
  }
}

function getProductById(products, id) {
  const product = products.filter(product => product.id == id);
  if (product)
    return product[0];
  return null;
}

// ownProps represents any props passed to our component
function mapStateToProps(state, ownProps) {
  const productId = ownProps.params.id;
  let product = { id: '', info: '', otherDetails: '' };
  if (productId && state.products.length > 0) {
    product = getProductById(state.products, productId);
  }

  return {
    product: product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch)
  };
}

ProductPage.propTypes = {
  product: PropTypes.object.isRequired,
  productActions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
