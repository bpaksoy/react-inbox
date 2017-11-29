import React from 'react';
import Message from './Message';

const Messages = ({messages, toggleStar, toggleSelect, toggleRead, deleteMessage, addLabel}) => {
  return (
    <div>
      {messages.map(message => (<Message key={message.id} message={message} toggleStar={toggleStar} toggleSelect={toggleSelect} toggleRead={toggleRead} deleteMessage={deleteMessage} addLabel={addLabel}/>))}
    </div>
  );
};

export default Messages;
