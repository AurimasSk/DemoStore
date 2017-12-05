import React from 'react';
import PropTypes from 'prop-types';
import ProductsRow from './ProductsRow';
import { onlyUpdateForKeys } from 'recompose';

const ProductsGrid = onlyUpdateForKeys(['products'])(({ products}) => {
  const rows = getRows(products);

  return (
    <div className="container-fluid">
      {rows}
    </div>
  );
});

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsGrid;

function getRows(products) {
  const rows = [];
  let productsInRow = [];
  const elementsInLine = 4;
  let currentElement = 0;
  if (products && products.length > 0) {
    products.forEach(function (product) {
      if (isRowFilled(currentElement, elementsInLine)) {
        rows.push(
          <ProductsRow
            key={rows.length}
            productsRow={productsInRow}
          />);
        productsInRow = [];
      }
      productsInRow.push(product);
      currentElement++;
    });
    if (productsInRow.length != 0)
      rows.push(
        <ProductsRow
          key={rows.length}
          productsRow={productsInRow}
        />);
  }

  return rows;
}

function isRowFilled(currentElement, elementsInLine) {
  return currentElement != 0 && (currentElement % elementsInLine) == 0;
}
