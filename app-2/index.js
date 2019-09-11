const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send(`
    <h1>APP 2</h1>
    <h2>Hello World from Docker and Node.js! 0.0.17!</h2>
  `)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
