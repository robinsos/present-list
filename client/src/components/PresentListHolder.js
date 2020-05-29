import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PresentList from './PresentList';
import PresentModal from './PresentModal';
import { addPresent } from '../actions/presentActions';

class PresentListHolder extends Component {
  state = {
    modalVisible: false,
    description: '',
    address: ''
  };

  toggleAddPresentModal = () => {
    this.setState({
      description: '',
      address: '',
      modalVisible: !this.state.modalVisible
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitAddPresent = (e) => {
    e.preventDefault();
    const newPresent = {
      description: this.state.description,
      address: this.state.address
    };
    // Add item via addItem action
    this.props.addPresent(newPresent);
    this.toggleAddPresentModal();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <Button
            color='dark'
            style={{ marginBottom: '2rem' }}
            onClick={this.toggleAddPresentModal}
          >
            Add Present
          </Button>
        ) : (
          <h5 className='mb-4 ml-4'>Please log in to manage presents...</h5>
        )}
        <PresentList />

        <PresentModal
          actionType='Add'
          isOpen={this.state.modalVisible}
          toggleVisibility={this.toggleAddPresentModal}
          description={this.state.description}
          address={this.state.address}
          onSubmit={this.onSubmitAddPresent}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addPresent })(PresentListHolder);
