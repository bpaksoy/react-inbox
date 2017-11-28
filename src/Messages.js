import React from 'react';
import Message from './Message';

const Messages = ({messages, toggleStar, toggleSelect, toggleRead}) => {
  return (
    <div>
      {messages.map(message => (<Message key={message.id} message={message} toggleStar={toggleStar} toggleSelect={toggleSelect} toggleRead={toggleRead}/>))}
    </div>
  );
};

export default Messages;
