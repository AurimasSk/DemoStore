import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/main/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ProductsPreviewPage from './components/products/products-preview/ProductsPreviewPage';
import ProductPage from './components/container/ProductPage/ProductPage';


export const getRoutes = store => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      {/*<Route path="courses" component={CoursesPage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="course" component={ManageCoursePage} />*/}
      <Route path="about" component={AboutPage} />
      <Route path="products-preview" component={ProductsPreviewPage} />
      <Route path="product" component={ProductPage} />
    </Route>
  );
};
