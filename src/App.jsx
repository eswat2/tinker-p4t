import { Component } from "preact"
import { Colors, Controls, Eswat2, Values } from "./components"
import { actions } from "./utils"

actions.init()

class App extends Component {
  render() {
    return (
      <main class="ds1-main">
        <Eswat2 />
        <Controls />
        <Colors />
        <hr class="ml-0 mr-0" />
        <Values />
      </main>
    )
  }
}

export { App }
export default App
