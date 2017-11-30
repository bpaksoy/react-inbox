import React from "react";


const Toolbar = ({deleteMessage, addLabel, markAsRead, markAsUnRead}) => {

  const handleChange= (e)=> {
    //console.log("yatayatattata", e.target.value);
    e.preventDefault();
     addLabel(e.target.value);

  }
    return(
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <button className="btn btn-default">
            <i className="fa fa-check-square-o"></i>
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

          <select className="form-control label-select">
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
