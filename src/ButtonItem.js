import React from 'react';
import PropTypes from 'prop-types';

const ButtonItem = ({ button, onClick }) => (
  <button type="button" onClick={(e) => onClick(e)} site={ button.site } match={ button.match }>{ button.value }</button>
);

ButtonItem.propTypes = {
  button: PropTypes.object.isRequired
};

export default ButtonItem;
