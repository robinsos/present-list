import React, {Component } from 'react';
import { addPresent } from '../actions/presentActions';

import {
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { isValidURL } from './Utils';

class PresentModal extends Component {

    render() { 
        const headerPrefix = this.props.actionType === 'Add' ? 'Add to' : 'Edit';
        const addressValid = !this.props.address || isValidURL( this.props.address );
        const submitEnabled = this.props.description && addressValid;

        return ( 
        <div>
          <Modal isOpen={this.props.isOpen} toggle={this.toggle}>
              <ModalHeader toggle={this.props.toggleVisibility}>{headerPrefix} Present List</ModalHeader>
              <ModalBody>
                  <Form onSubmit={this.props.onSubmit}>
                    <FormGroup>
                        <Label for="item">Present Description</Label>
                        <Input type="text" name="description" 
                                value={this.props.description}
                                id="item" placeholder="Input Present Description..."
                                onChange={this.props.onChange}/>
                        <br/>
                        <Label for="addressItem">Web Address</Label>
                        <Input type="text" name="address" 
                                id="addressItem" placeholder="(optional)"
                                value={this.props.address}
                                onChange={this.props.onChange}/>
                        <Button color="dark" style={{marginTop: '2rem'}} block disabled={!submitEnabled}>
                            {this.props.actionType} Present
                        </Button>
                    </FormGroup>
                  </Form>
              </ModalBody>
          </Modal>
        </div> 
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item
}); 

export default connect(mapStateToProps, { addPresent })(PresentModal);


