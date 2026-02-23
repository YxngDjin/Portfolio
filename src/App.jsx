import { useState } from "react"
import BootScreen from "./screens/BootScreen"



function App() {
  const [systemState, setSystemState] = useState("booting")
  if (systemState === "booting") {
    return <BootScreen />
  }
  if (systemState === "login") {
    return (
      <BootScreen />
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

// ADD ZUSTANT FOR SYSTEMSTATE UPDATES OUT OF APP.JSX
export default App
