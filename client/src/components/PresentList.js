import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getPresents, deletePresent } from '../actions/presentActions';
import PropTypes from 'prop-types';


class PresentList extends Component {

    componentDidMount() {
        this.props.getPresents();
    }

    onDeleteClick = (id) => {
        this.props.deletePresent(id);
    }
    render() {
        const { presents } = this.props.presents;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="present-list">
                        {presents.map(({id, name})=> (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm"
                                        onClick={this.onDeleteClick.bind(this,id)}
                                        >&times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
 }

PresentList.propTypes = {
    getPresents: PropTypes.func.isRequired,
    presents: PropTypes.object.isRequired
}

 const mapStateToProps = (state) => ({
     presents: state.presents
 });

 export default connect(mapStateToProps, { getPresents, deletePresent })(PresentList);