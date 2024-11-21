import React, { useState } from 'react';
import { OpenAI } from 'openai';
// import { button } from '@chakra-ui/react';
// import { configDotenv } from 'dotenv';


const OpenaiIntegration = () => {
    const testkey = process.env.REACT_APP_THE_KEY;
    function printkey(){
        console.log(testkey)
    }

    const openai = new OpenAI({
        apiKey: testkey,
        dangerouslyAllowBrowser: true
    });

    const submitrequest = async () => {
        
    }
    /*
  
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //heelo test
  // Ensure to set the API key in your .env file (e.g. REACT_APP_OPENAI_API_KEY)
   const Key = process.env.REACT_APP_OPENAI_API_KEY;
   
  const openai = new OpenAI({
    apiKey: Key,
    dangerouslyAllowBrowser: true
  });
 
  // Function to handle form submission
  const handleSubmit = async () => {
    
    console.log("Hello world: ", inputText);
    setLoading(true);
    setError(null);
    try {
      const result = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Use the correct model
        messages: [{ role: 'user', content: "What is the height of Everest?" }],
      });

      setResponse(result.choices[0].message.content);
    } catch (error) {
      setError('Error fetching response: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  */
  return (
    <div>
      <h1>OpenAI Chat with Input</h1>
      <button onClick={printkey}>Print env key</button>
      {/* <button onClick={submitrequest}>submit request</button> */}
      {/* <form onSubmit={handleSubmit}> */}
        {/* <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask something..."
          // disabled={loading}
        />
        <button onClick={handleSubmit} disabled={loading}>Send</button>
        <button onClick={()=>{console.log(process.env.OPENAI_API_KEY)}}>Print key</button> */}
      {/* </form> */}

      {/* {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && <p><strong>Response: </strong>{response}</p>} */}
    </div>
  );
};

export default OpenaiIntegration;
