import { Component } from "preact"
import { Colors, Controls, Eswat2, Values } from "./components"
import { AppContext } from "./context"
import { bag, funnelDefs } from "./utils"

const defaultState = {
  clicks: 0,
  pick: "bada55",
  values: [],
}

class App extends Component {
  state = defaultState

  componentDidMount() {
    const data = bag.get()

    if (data) {
      const { clicks, pick, values } = data
    
      this.setState({ clicks, pick, values })
    }
  }

  save = (clicks, pick, values) => {
    bag.store({ clicks, pick, values })
  }

  refresh = () => {
    const { clicks, pick } = this.state
    const bump = clicks + 1
    const values = funnelDefs.map(() => {
      return Math.floor(Math.random() * 100)
    })
    this.setState({ clicks: bump, values })
    this.save(bump, pick, values)
  }

  reset = () => {
    const { pick } = this.state
    const clicks = 0
    const values = []

    this.setState({ clicks, values })
    this.save(clicks, pick, values);
  }

  setPick = (value) => {
    const { clicks, values } = this.state

    this.setState({ pick: value })
    this.save(clicks, value, values)
  }

  actions = {
    refresh: this.refresh,
    reset: this.reset,
    setPick: this.setPick,
  }

  render() {
    const { clicks, pick, values } = this.state
    const contextData = {
      actions: this.actions,
      clicks,
      pick,
      values,
    }
    return (
      <AppContext.Provider value={contextData}>
        <main class="ds1-main">
          <Eswat2 />
          <Controls />
          <Colors />
          <hr class="ml-0 mr-0" />
          <Values />
        </main>
      </AppContext.Provider>
    )
  }
}

export { App }
export default App
