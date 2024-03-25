import React, { Component } from 'react';
import { StyledModal, StyledOverlay } from './styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal(event);
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal(event);
    }
  };

  componentDidMount() {
    // console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);

    // console.log('Modal componentWillUnmount');
  }

  render() {
    return (
      <StyledOverlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <button onClick={this.props.onCloseModal}>&times;</button>
          <br />
          {JSON.stringify(this.props.visibleData, null, 2)}
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  visibleData: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
