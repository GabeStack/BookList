import app from "./app.js"

const PORT = process.env.SERVERPORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})