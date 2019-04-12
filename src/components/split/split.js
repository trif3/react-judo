import React from 'react';
import PropTypes from 'prop-types';

import './split.css';

const Split = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
};

Split.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Split;
