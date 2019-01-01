import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage = () => (
  <React.Fragment>
    <h3 className="heading-secondary">Sorry page not found.</h3>
    <Link to="/">Go back home</Link>
  </React.Fragment>
);

export default NotFoundPage;
