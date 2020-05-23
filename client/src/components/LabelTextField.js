import React, {Component}  from 'react';
import { Label, Input } from 'reactstrap';
import AutosizeInput from 'react-input-autosize';


class LabelTextField extends Component {
    state = { 
        text: 'Whatevs',
        mouseOver: false 
    }

    onMouseOverLabel = (e) => {
        this.setState({mouseOver:true});
    }

    onMouseOut = (e) => {
        this.setState({mouseOver:false});
    }

    onMouseOut = (e) => {
        this.setState({mouseOver:false});
    }

    onTextChange = (text, e) => {
        console.log('whatever' + e.target.value);
        this.setState({text: e.target.value});
    }

    render() {
        const showing = this.state.mouseOver ? 
            <AutosizeInput placeholderIsMinWidth placeholder="Description" onMouseOut={this.onMouseOut.bind(this)} 
                value={this.state.text} onChange={this.onTextChange.bind(this, 'blah')}/> :
            <Label style={{paddingLeft: '3px', paddingTop: '3px'}} 
                onMouseOver={this.onMouseOverLabel.bind(this)}>{this.state.text}</Label>
        return ( showing );
    }
}
 

export default LabelTextField;
