import React from 'react';
import PropTypes from 'prop-types';

const CartMenu = ( {productsInCart} ) => {
    return (
        <div>
            <div className="cart-menu-overlay-div" />
            {productsInCart.length > 0 ? productsInCart.map(currentProduct => {
                    <h4> {currentProduct.name} </h4>;
                })
                : <h2> There is no products added into cart yet</h2>
            }
        </div>    
    );
};

CartMenu.propTypes = {
    productsInCart: PropTypes.array.isRequired   
};

export default CartMenu;