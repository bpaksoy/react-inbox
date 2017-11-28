import React, { Component } from 'react';
import Messages from './Messages';
import './App.css';
import Compose from "./Compose";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messages: props.messages }
  }

  toggleStar = (message) => {
   console.log("message here", JSON.stringify(message));
   const messages = this.state.messages.slice();

  //insert code here!
   const index = this.state.messages.indexOf(message);
   messages[index].starred = !messages[index].starred;
   this.setState({messages: messages });
  }

  toggleSelect = (message) => {
   const messages = this.state.messages.slice();
   //insert code here!
   const index = this.state.messages.indexOf(message);
   messages[index].selected = !messages[index].selected;
   console.log("message", JSON.stringify(message.selected));
   this.setState({messages: messages });
  }

  toggleRead = (message) => {
    const messages = this.state.messages.slice();
    //insert code here!
    const index = this.state.messages.indexOf(message);
    messages[index].read = !messages[index].read;
    console.log("message", JSON.stringify(message.read));
    this.setState({messages: messages });
  }

  deleteMessage = (message) => {
    console.log("hello")
    const messages = this.state.messages.slice();
    //insert code here!
    this.setState({ messages: messages.filter((message)=>{
      return !message.selected;
      })
     });
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">React Inbox</a>
            </div>
          </div>
        </div>
        <div className="container">
          <Compose deleteMessage={this.deleteMessage.bind(this)}/>
          <Messages messages={this.state.messages} toggleStar={this.toggleStar} toggleSelect={this.toggleSelect} toggleRead={this.toggleRead} deleteMessage={this.deleteMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
