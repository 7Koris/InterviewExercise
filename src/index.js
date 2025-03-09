const express = require('express')
const app = express()
const port = 3000

app.set('json spaces', 0)

app.get('/', (req, res) => {
  var timestamp = Date.now()
  res.json({
    "message": "My name is Koris",
    'timestamp': timestamp
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
