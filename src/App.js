import "./App.css";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import { db } from "./firebase";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {username:'ali',message: 'hey'},
    {username:'mahmut',message: 'hello'},]);
  const [username, setUsername] = useState("")

  useEffect(()=>{
setUsername(prompt("enter a name"))
  },[])
  useEffect(()=>{
    db.collection('messages').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map((doc)=>(
        doc.data()
      )))
    })
      },[])
    

  const onChangehandler = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, {username: username,text:input}]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook messenger clone</h1>
      <h2>Welcome {username}</h2>
      <form action="">
        {" "}
        <FormControl>
          <InputLabel>Enter a message </InputLabel>
          <Input value={input} onChange={onChangehandler} />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            Send Messages
          </Button>
        </FormControl>
      </form>
      {messages.map((message, index) => (
        <Message key={index}  username={username} message={message}/>
      ))}
    </div>
  );
}

export default App;
