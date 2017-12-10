import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import CartMenu from '../../presentational/CartMenu/CartMenu'

class CartMenuContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cart: { 
        productsInCart: [], 
        showCartMenu: false
      }
    };

  }

  render() {
    return (
      this.props.showCartMenu && <CartMenu products={this.props.productsInCart}/>
    );
  }
}

CartMenuContainer.propTypes = {
  productsInCart: PropTypes.array.isRequired,
  showCartMenu: PropTypes.boolean
};

function mapStateToProps(state) {
  return {
    productsInCart: state.cart.productsInCart,
    showCartMenu: state.cart.showCartMenu
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     //actions: bindActionCreators(actions, dispatch)
//   };
// }

export default connect(mapStateToProps)(CartMenuContainer.js);
