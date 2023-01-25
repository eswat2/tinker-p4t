import { Component } from "preact"
import { Colors, Controls, Eswat2, Header, Values } from "./components"
import { actions } from "./utils"

actions.init()

class App extends Component {
  render() {
    return (
      <main class="ds1-main">
        <Header label="tinker p4t" />
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
