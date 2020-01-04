/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class Message extends Component {
    render() {
        const { message } = this.props;
        return (
            <div>
        <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
                
            </div>
        );
    }
}

export default Message;