import React, { Component } from 'react';
import { Container, Button, Table } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import {
  getPresents,
  deletePresent,
  editPresent
} from '../actions/presentActions';
import PresentModal from './PresentModal';
import PropTypes from 'prop-types';
import { isValidURL } from './Utils';

class PresentList extends Component {
  state = {
    modalVisible: false,
    editId: '',
    description: '',
    address: ''
  };

  static propTypes = {
    editPresent: PropTypes.func.isRequired,
    getPresents: PropTypes.func.isRequired,
    presents: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getPresents();
  }

  onDeleteClick = (id) => {
    this.props.deletePresent(id);
  };

  onEditClick = (present) => {
    this.setState({
      editId: present._id,
      description: present.description,
      address: present.address
    });
    this.toggle();
  };

  toggle = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitEditPresent = (e) => {
    console.log('Submit EDIT');
    e.preventDefault();
    const newPresent = {
      _id: this.state.editId,
      description: this.state.description,
      address: this.state.address
    };
    // Add item via addItem action
    this.props.editPresent(newPresent);
    this.toggle();
  };

  render() {
    const { presents } = this.props.presents;
    return (
      <Container>
        <PresentModal
          actionType='Edit'
          isOpen={this.state.modalVisible}
          toggleVisibility={this.toggle}
          description={this.state.description}
          address={this.state.address}
          onChange={this.onChange}
          onSubmit={this.onSubmitEditPresent}
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <TransitionGroup className='present-list'>
          <Table>
            <tbody>
              {presents.map((present) => (
                <CSSTransition
                  key={present._id}
                  timeout={500}
                  classNames='fade'
                  component='td'
                >
                  <tr>
                    <td>
                      {isValidURL(present.address) ? (
                        <a href={present.address}>{present.description}</a>
                      ) : (
                        present.description
                      )}
                    </td>
                    <td>
                      <Button
                        outline
                        color='primary'
                        size='sm'
                        onClick={this.onEditClick.bind(this, present)}
                      >
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button
                        close
                        onClick={this.onDeleteClick.bind(this, present._id)}
                      />
                    </td>
                  </tr>
                </CSSTransition>
              ))}
            </tbody>
          </Table>
        </TransitionGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  presents: state.presents,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  getPresents,
  deletePresent,
  editPresent
})(PresentList);
