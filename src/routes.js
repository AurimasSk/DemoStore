import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/main/App';
import HomePage from './components/presentational/HomePage/HomePage';
import AboutPage from './components/presentational/AboutPage/AboutPage';
import ProductsPreviewPage from './components/container/ProductsPreviewPage/ProductsPreviewPage';
import ProductPage from './components/container/ProductPage/ProductPage';


export const getRoutes = store => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="products-preview" component={ProductsPreviewPage} />
      <Route path="product/:id" component={ProductPage} />
    </Route>
  );
};
