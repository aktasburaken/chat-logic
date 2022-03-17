import { useState } from 'react';
import './App.css'

function App() {

  const [sign, setSign] = useState(false)
  const [nickname, setNickname] = useState('')
  const [chatText, setChatText] = useState('')


  const onSubmit = (e) => {
    e.preventDefault();
    setSign(true)
    setNickname(document.getElementById('inputNickname').value)
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (chatText === '') {
      alert("You can't send an empyt message!")
    } else {

      //message 

      const message = document.createElement('div')
      document.getElementById('chat').appendChild(message)
      message.className = 'message'

      //nickname
      const nickname1 = document.createElement('div')
      message.appendChild(nickname1)
      nickname1.innerText = "-" + nickname + ":"

      //receivedMessage
      const receivedMessage = document.createElement('div')
      message.appendChild(receivedMessage)
      receivedMessage.className = 'receivedMessage'
      receivedMessage.innerText = document.getElementById('sendMessage').value

      document.getElementById('sendMessage').value = ''

      var i = 100000000

      document.getElementById('chat').scrollTo(0, i)
      i += 10000

      setChatText('')
    }

  }

  if (sign === false) {
    return (
      <div id="body">

        <form id="username">
          <h1>Choose a nickname! ^^</h1>
          <input placeholder="nickname" type="text" id="inputNickname"></input>
          <button id="button" type="submit" onClick={onSubmit}>
            button
          </button>

        </form>

      </div>
    );
  } else {
    return (
      <div id="body">
        <div id="site-container">

          <header id="header">

            <div id="nickname">
              {nickname}
            </div>
            <div id="servername">
              Global
            </div>

          </header>

          <main id="main">

            <div id="leftside">
              <div id="whoisthis">Who is in this room?</div>
              <div id="users"> -{nickname} </div>
            </div>
            <div id="rightside">
              <div id="chat">

              </div>

              <div id="send">
                <input placeholder="write a message" type="text" id="sendMessage" onChange={setChatText} />
                <button className="button" type="submit" onClick={sendMessage}> send </button>
              </div>
            </div>

          </main>

        </div>
      </div>
    )
  }
}

export default App;
