import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const UpdateColorButton = ({ color, cardID, onClick }) => (
  <button
    className={`color--change ${color}`}
    type="button"
    aria-label="save-color"
    onClick={() => onClick(cardID, color)}
  />
);

UpdateColorButton.propTypes = {
  color: PropTypes.string.isRequired,
  cardID: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default UpdateColorButton;
