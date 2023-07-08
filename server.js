// backend/server.js
const express = require('express');
//connections tested using Insomnia

//This middleware is required to com between disconnected front/backend(Cross Origin Resource Sharing)-security measure
const cors = require('cors');

const app = express();
const PORT = 8080;

//use CORS
app.use(cors());

//bodyParser is no longer needed 
//const bodyParser = require('body-parser');
//app.use(bodyParser.json());

//This parses the info from api, without it the data will just be a spring
app.use(express.json())

//use this to test get
// app.get('/tshirt', (req,res)=> {
//   res.status(200).send({
//     tshirt:'striped',
//     size:'large'
//   })
// })

//personal note, /api/submit-form  auto uses http://localhost:.../api...
app.post('/api/submit-form', (req, res) => {
  //destructor of request body
  const { name, email } = req.body;
  // Confirm data receieved for test purposes
  console.log('Received form data:', { name, email });
  //Send data to database
  
  // Send a response back to the frontend
  res.json({ message: 'Form data received successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
