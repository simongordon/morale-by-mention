import React from 'react';

class MessageSender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <p>ID: {this.props.to.id}</p>
            <p>Name: {this.props.to.name}</p>
        </div>)
    }
}

export default MessageSender;