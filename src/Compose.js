import React from "react";

class Compose extends React.Component{

  constructor(props){
    super(props);
    this.state={
      currentMessage:"",
      text:"",
      composeMessage: props.composeMessage
    }
  }

  handleChange = (e) =>{
    let newMessage = e.target.value;
    this.setState({currentMessage:newMessage, text: e.target.value});
  }

 handleSubmit=(e)=>{
  e.preventDefault();
  this.state.composeMessage(this.state.currentMessage);
  this.setState({currentMessage:"", text:""})
  //currentMessage = "";
}

//console.log("this is current message", currentMessage);
render(){
  return(
    <div>
     <form className="form-horizontal well" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-8" onChange={this.handleChange}>
            <input type="text" value={this.state.text} className="form-control" id="subject" placeholder="Enter a subject" name="subject"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="body" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-8" >
            <textarea name="body" id="body" className="form-control"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" className="btn btn-primary"/>
          </div>
        </div>
      </form>
    </div>
  );
}
}


export default Compose;
