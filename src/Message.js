import React from 'react'

const Message = ({message, toggleStar, toggleSelect,toggleRead, handleChange}) => {
  const starClass = message.starred ? 'fa-star' : 'fa-star-o';
  const checkboxClass = message.selected ?  "selected" : "";
  const messageReadClass = message.read ? "read" : "unread";

  const starMessage = (e) => {
    e.stopPropagation();
    toggleStar(message);
  }

  const checkboxMessage = (e) => {
    e.stopPropagation();
    toggleSelect(message);
  }

  const messageReadMessage = (e) => {
    e.stopPropagation();
    toggleRead(message);
  }

  const labelValue = (message) => {
    handleChange(message);
  }

  const displayLabels = () => {
    return message.labels.map((label, i)=>{
      return <span key={i} className="label label-warning">{label}</span>;
    })
  }


  return (
    <div className={`row message ${checkboxClass} ${messageReadClass}`} onClick={messageReadMessage}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2" onClick={ checkboxMessage }>
            <input type="checkbox" readOnly= {true} checked= { !!message.selected }/>
          </div>
          <div className="star-container col-xs-2" onClick={ starMessage }>
            <i className={`star fa ${starClass}`}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {displayLabels()}
        {message.subject}
      </div>
    </div>
  )
}

export default Message;
