import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsGrid from './ProductsGrid';
import * as productActions from "../../../actions/productActions";

class ProductsPreviewPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      products: [],
      productsLoaded: false
    };
  }

  componentDidMount() {
    this.props.actions.getAllProducts();
  }

  render() {
    return (
      <div>
        this.state.productsLoaded && <ProductsGrid products={this.state.products}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log("Return...", state);
  this.setState({
    products: state.products,
    productsLoaded: state.products && state.products.length > 0
  });
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
  actions: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPreviewPage);