import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from "../../../actions/productActions";

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
      <div className="container-fluid productDetails">
      https://medium.com/@joethedave/achieving-ui-animations-with-react-the-right-way-562fa8a91935  
        <div className="row">
          <div className="col-xs-2">
          </div>
          <div className="col-xs-4">
            <img src={this.props.product.picturePath} />
          </div>
          <div className="col-xs-4">
            <h2>{this.props.product.name}</h2>
            <br />
            <h4>{this.props.product.price}</h4>
            <br />
            <button type="button" className="btn btn-success">Add to cart</button>
            <br />
            <hr />
            <br />
            <div id="accordion" role="tablist">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <h5 className="mb-0">
                    <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Product info
                    </a>
                  </h5>
                </div>
                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    {this.props.product.info}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                  <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Other product details
                    </a>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    {this.props.product.otherDetails}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-2">
          </div>
        </div>
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
