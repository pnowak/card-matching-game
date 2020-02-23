import React from 'react';
import PropTypes from 'prop-types';
import ButtonItem from './ButtonItem';

const ButtonList = ({ listButtons, onAction }) => (
  <ul className="list">
    {listButtons.map(button => (
      <li key={ button.id }>
        <ButtonItem button={button} onClick={(e) => onAction(e)} />
      </li>
    ))}
  </ul>
);

ButtonList.propTypes = {
  listButtons: PropTypes.array.isRequired
};

export default ButtonList;
