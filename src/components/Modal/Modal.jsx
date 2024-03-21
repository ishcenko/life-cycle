import React, { Component } from 'react';
import { StyledModal, StyledOverlay } from './styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }
  render() {
    return (
      <StyledOverlay>
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
