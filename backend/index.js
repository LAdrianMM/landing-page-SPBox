const express = require('express')
const app = express()
const bodyParser = require('body-parser') // Permite leer los datos enviados en un metodo POST por ejemplo
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json()) // En esta linea permite leer los datos en formato json, actualmente se usa "express.json()"

// Route
const Mail = require('./routes/mail')

app.use('/api', Mail)

const port = 3001

app.listen(port, () => {
  console.log('server running at port ' + port)
})
