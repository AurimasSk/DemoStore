import React, { PropTypes } from 'react';
import ProductsRow from './ProductsRow';

class ProductsGrid extends React.Component {
  render() {
    console.log("GRID: ", this.props.products);
    let rows = [];
    let productsInRow = [];
    const elementsInLine = 4;
    let currentElement = 0;
    this.props.products.forEach(function(product) {
      if (currentElement != 0 && (currentElement % elementsInLine) == 0) {
        rows.push(<ProductsRow key={rows.length} productsRow={productsInRow} />);
        productsInRow = [];
      }
      productsInRow.push(product);
      currentElement++;
    });
    if (productsInRow.length != 0)
      rows.push(<ProductsRow key={rows.length} productsRow={productsInRow} />);
    return (
      <div className="container-fluid">
        {rows}
      </div>
    );
  }  
}

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsGrid;
