const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

// Route
const Mail = require('./routes/mail')

app.use('/api', Mail)

const port = 3001

app.listen(port, () => {
  console.log('server running at port ' + port)
})
