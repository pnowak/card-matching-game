import React from 'react';
import PropTypes from 'prop-types';

const ButtonItem = ({ button, onAction }) => (
  <button type="button" className="inList" onClick={ onAction } site={ button.site } match={ button.match }>{ button.value }</button>
);

ButtonItem.propTypes = {
  button: PropTypes.object.isRequired
};

export default ButtonItem;
