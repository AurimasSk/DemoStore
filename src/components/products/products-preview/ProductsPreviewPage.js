import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsGrid from './ProductsGrid';
import { browserHistory } from 'react-router';
import * as productActions from "../../../actions/productActions";

class ProductsPreviewPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      products: [],
      productsLoaded: false
    };

    this.onProductClick = this.onProductClick.bind(this);
  }

  componentWillMount() {
    this.props.actions.getAllProducts();
  }

  onProductClick(productId, event) {
    event.preventDefault();
    browserHistory.push({
      pathname: '/product',
      query: {
        productId
      }
    });
  }

  render() {
    return (
      <div>
        {this.props.products &&
          <ProductsGrid
            products={this.props.products}
            onProductClick={this.onProductClick}
          />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

ProductsPreviewPage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPreviewPage);
