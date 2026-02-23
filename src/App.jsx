import { useState } from "react"


function App() {
  const [systemState, setSystemState] = useState("booting")
  if (systemState === "booting") {
    return <h1>Loading...</h1>
  }
  if (systemState === "login") {
    return (
      <h1>Login</h1>
    )
  }
  if (systemState === "desktop") {
    return (
      <h1>Desktop</h1>
    )
  }
  if (systemState === "terminal") {
    return (
      <h1>Terminal</h1>
    )
  }
}

export default App
