import React, { Component } from 'react';
// import './App.css';
import Message from '../Message/Message.js'
import ChatBox from '../Message/ChatBox.js'
import { sendMessage, get_message } from '../../actions/common.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
    this.state = {
      text: "",
      user_name: "",
      profile_image: "",
      messages: []
    }
  }


  onTextChange(e) {
    if (e.target.name === 'user_name') {
      this.setState({
        "user_name": e.target.value,
      });
    } else if (e.target.name === 'profile_image') {
      this.setState({
        "profile_image": e.target.value,
      });
    } else if (e.target.name === 'text') {
      this.setState({
        "text": e.target.value,
      });
    }
  }



  onButtonClick() {
    if (this.state.user_name === "") {
      alert('user_name empty')
      return
    } else if (this.state.text === "") {
      alert('text empty')
      return
    }

    let content = {
      "user_name": this.state.user_name,
      "profile_image": this.state.profile_image,
      "text": this.state.text
    }
    sendMessage.bind(this)(content);

  }

  componentDidMount() {
    get_message.bind(this)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chat</h2>
        </div>
        <div className="MessageList">
          {this.state.messages.map((m, i) => {
            return <Message key={i} message={m} />
          })}
        </div>
        <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
      </div>
    );
  }
}

export default App;
