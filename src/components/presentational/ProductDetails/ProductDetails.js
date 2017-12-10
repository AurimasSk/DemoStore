import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ( {product} ) => {
    return (
        <div className="container-fluid productDetails">
           https://medium.com/@danparkk/react-modals-scalable-customizable-neat-components-f2088d60f3d3 <div className="row">
                    <div className="col-xs-2"/>
                    <div className="col-xs-4">
                        <img src={product.picturePath} />
                    </div>
                    <div className="col-xs-4">
                        <h2>{product.name}</h2>
                        <br />
                        <h4>{product.price}</h4>
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
                                        {product.info}
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
                                        {product.otherDetails}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-2"/>
                </div>
            </div>
    );    
};

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductDetails;