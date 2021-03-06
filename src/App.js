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

 toggleRead = (message)=> {
   const messages = this.state.messages.slice();
   const index = this.state.messages.indexOf(message);
   messages[index].read = !messages[index].read;
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

  markAsUnRead = () => {
    const messages = this.state.messages.slice();
    const selectedMessages = messages.filter(message => message.selected === true);
    const selectedIndex = selectedMessages.map(message => messages.indexOf(message));
    selectedIndex.forEach(index => {
      messages[index].read = false;
      messages[index].selected = !messages[index].selected;
      this.setState({ messages:messages });
    })
  }

  deleteMessage = () => {
    const messages = this.state.messages.slice();
    //insert code here!
    this.setState({ messages: messages.filter((message)=>{
      return !message.selected;
      })
     });
  }

 toggleSelectAll=()=>{
   const selectedMessages= this.state.messages.filter(message => message.selected);
   const selected = selectedMessages.length !== this.state.messages.length;
   this.setState({
     messages: this.state.messages.map(message =>
       (message.selected !== selected? {...message, selected} : message ))
   })
 }

  addLabel = (label) => {
   const messages = this.state.messages.slice();

   this.setState({ messages: messages.map((message)=> {
       if(message.selected && !message.labels.includes(label)){
        // console.log("hahahhahha",label)
         message.labels.push(label);
       }
       return message;
   })
 });
}


removeLabel = (label)=>{
   const messages = this.state.messages.slice();
   this.setState({messages: messages.map(message =>{
     if(message.selected && message.labels.includes(label)){
       let index = message.labels.indexOf(label);
       message.labels = [...message.labels.slice(0, index),
         ...message.labels.slice(index+1)
       ]
       //console.log("pisssst", message.labels);
     }
     return message;
   })
 });
}

composeMessage = (subject) =>{
  const messages = this.state.messages.slice();
  const message = {};
  console.log("this is subject",subject);
  if(subject === ""){
    this.setState({messages:messages});
  } else{
  message.id = this.state.messages.indexOf(message);
  message.subject = subject;
  message.read = false;
  message.starred = false;
  message.labels=[];

  this.setState({messages:[...messages, message], subject:""})
 }
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
          <Toolbar messages={this.state.messages} markAsRead={this.markAsRead} markAsUnRead={this.markAsUnRead} toggleSelectAll={this.toggleSelectAll} deleteMessage={this.deleteMessage} addLabel={this.addLabel} removeLabel={this.removeLabel}/>
          <Compose messages={this.state.messages} composeMessage={this.composeMessage}/>
          <Messages messages={this.state.messages} toggleStar={this.toggleStar} toggleSelect={this.toggleSelect} markAsRead={this.markAsRead} toggleRead={this.toggleRead} deleteMessage={this.deleteMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
