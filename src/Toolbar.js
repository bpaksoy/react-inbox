import React from "react";


const Toolbar = ({messages, deleteMessage, addLabel, toggleSelectAll, markAsRead, markAsUnRead, removeLabel}) => {

  let unreadCount;
  const unreadMessages = messages.filter(message =>
    {
      return message.read === false;
    }
  );
  unreadCount = unreadMessages.length;


  const handleChange= (e)=> {
    //console.log("yatayatattata", e.target.value);
    e.preventDefault();
     addLabel(e.target.value);

  }

const handleChange2 =(e)=>{
  e.preventDefault();
  removeLabel(e.target.value);
}


  const selectedMessagesCount =  messages.filter(message => message.selected).length
  let selectAllClass;

  switch(selectedMessagesCount) {
    case 0:
      selectAllClass = 'fa-square-o'
      break;
    case messages.length:
      selectAllClass = 'fa-check-square-o'
      break;
    default:
      selectAllClass = 'fa-minus-square-o'
  }

    return(
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{unreadCount}</span>
            unread messages
          </p>

          <button className="btn btn-default" onClick={toggleSelectAll}>
            <i className={`fa ${selectAllClass}`}></i>
          </button>

          <button className="btn btn-default" onClick={markAsRead}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={markAsUnRead}>
            Mark As Unread
          </button>

          <select name="label" className="form-control label-select" onChange={handleChange}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" onChange={handleChange2}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={deleteMessage}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    );
}


export default Toolbar;
