import React, { Component } from 'react';

export default class Like extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            likedAmount: 0,
            thumbsUpColor: 'grey'
        }
        this.liked = this.liked.bind(this)
    }

    componentDidMount() {
        this.setState({
            active: this.state.active,
            likedAmount: this.state.likedAmount
        });
    }

    // When thumbs up is hit, change color and add 1 to liked amount.
    liked = () => {
        if(this.state.active == false) {
            this.setState({ active: true, likedAmount: this.state.likedAmount + 1, thumbsUpColor: '#80a6ec' });
        }
    }


    render() {

        let thumbsUpStyle = {
            color: this.state.thumbsUpColor
        }
        return(
            <section onClick={this.liked} style={thumbsUpStyle}>
                <i class="fas fa-thumbs-up"></i><span>{this.state.likedAmount}</span>
            </section>
        );
    }
}