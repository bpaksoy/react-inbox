import React from 'react';
import Message from './Message';

const Messages = ({messages, toggleStar, toggleSelect, markAsRead, deleteMessage, addLabel, toggleRead}) => {
  return (
    <div>
      {messages.map(message => (<Message key={message.id} message={message} toggleRead={toggleRead} toggleStar={toggleStar} toggleSelect={toggleSelect} markAsRead={markAsRead} deleteMessage={deleteMessage} addLabel={addLabel}/>))}
    </div>
  );
};

export default Messages;
