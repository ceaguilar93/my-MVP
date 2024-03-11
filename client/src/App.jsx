import React, { useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [chatResponse, setChatResponse] = useState ('');

  const handleUserInput = async () => {
    try {
    const response = await axios.post("http://localhost:4000/api/chat", { userInput }); //confirm if the localhost has to be 4000 as we put on the set-up; this function make an async POST request to Express and pass the user input as data in the request
    setChatResponse(response.data.chatResponse); 
  } catch (error) {
    console.error ("Error making request to Express backend:", error.message);
  }
};

  return (
      
      
      <div className="card">
      <h1>Vite + React</h1>
      <div> 
      <input type = "text" value={userInput} onChange={(e) => setUserInput (e.target.value)} />
      <button onClick = {handleUserInput}>Submit</button>
      </div>
      <p>ChatGPT Response: {chatResponse}</p>
      
      </div>
    
  );
}

export default App;
