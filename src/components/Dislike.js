import React, { Component } from 'react';

export default class Dislike extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            dislikedAmount: 0,
            thumbsDownColor: 'grey'
        }
        this.disliked = this.disliked.bind(this)
    }

    componentDidMount() {
        this.setState({
            active: this.state.active,
            dislikedAmount: this.state.dislikedAmount
        });
    }

    // When thumbs down is hit, change color and add 1 to disliked amount.
    
    disliked = () => {
        if(this.state.active == false) {
            this.setState({ active: true, dislikedAmount: this.state.dislikedAmount + 1, thumbsDownColor: '#f38a8a' });
        }
    }

    render() {

        let thumbsDownStyle = {
            color: this.state.thumbsDownColor 
        }

        return(
            <section onClick={this.disliked} style={thumbsDownStyle}>
                <i class="fas fa-thumbs-down"></i><span>{this.state.dislikedAmount}</span>
            </section>
        );
    }
}