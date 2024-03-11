var express = require('express');
var router = express.Router();

const {openAIAPIKey} = require('../config');
const OpenAI = require('openai')
const openai = new OpenAI();
//const gpt3 = new openai.Completion({apiKey: openAIAPIKey});

/* GET home page. */
router.get('/api/chat', async (req, res) => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
    res.send(completion);
  }

  );

// router.post('/api/chat', async (req, res) => {
//   try {
//     const userInput = req.body.userInput;

//     const response = await gpt3.create({
//       engine: 'text-davinci-003', // or any other available engine, not sure where this come from
//       prompt: userInput,
//       max_tokens: 100, // Adjust as needed??
//     });

//     const chatResponse = response.choices[0].text.trim();

//     // Send the response to the client
//     res.json({ chatResponse });
//   } catch (error) {
//     console.error('Error handling request:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });





module.exports = router;
