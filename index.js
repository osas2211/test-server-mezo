require("dotenv").config()
const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000

app.get__("/", (req, res) => {
  const name = process.env.NAME

  if (!name) {
    return res.status(500).json({ error: "NAME is not set in .env" })
  }

  res.json({ name })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
