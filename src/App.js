import React, { Component } from 'react';
import './App.css';

import Messages from './Messages';
import Compose from "./Compose";
import Toolbar from "./Toolbar";

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
   const index = this.state.messages.indexOf(message);
   messages[index].selected = !messages[index].selected;
   console.log("message", JSON.stringify(message.selected));
   this.setState({messages: messages });
  }

  markAsRead = () => {
    const messages = this.state.messages.slice();
    const selectedMessages = messages.filter(message => message.selected === true);
    const selectedIndex = selectedMessages.map(message => messages.indexOf(message));
    selectedIndex.forEach(index => {
      messages[index].read = true;
      messages[index].selected = !messages[index].selected;
      this.setState({ messages:messages });
    })
  }

  deleteMessage = (message) => {
    const messages = this.state.messages.slice();
    //insert code here!
    this.setState({ messages: messages.filter((message)=>{
      return !message.selected;
      })
     });
  }

  addLabel = (label) => {
   const messages = this.state.messages.slice();

   this.setState({ messages: messages.map((message)=> {
       if(message.selected && !message.labels.includes(label)){
         console.log("hahahhahha",label)
         message.labels.push(label);
       }
       return message;
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
          <Toolbar markAsRead={this.markAsRead} deleteMessage={this.deleteMessage} addLabel={this.addLabel}/>
          <Compose />
          <Messages messages={this.state.messages} toggleStar={this.toggleStar} toggleSelect={this.toggleSelect} markAsRead={this.markAsRead} deleteMessage={this.deleteMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
