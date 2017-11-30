import React from 'react';
import Message from './Message';

const Messages = ({messages, toggleStar, toggleSelect, markAsRead, deleteMessage, addLabel}) => {
  return (
    <div>
      {messages.map(message => (<Message key={message.id} message={message} toggleStar={toggleStar} toggleSelect={toggleSelect} markAsRead={markAsRead} deleteMessage={deleteMessage} addLabel={addLabel}/>))}
    </div>
  );
};

export default Messages;
