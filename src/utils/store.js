import { batch, effect, signal } from "@preact/signals"
import { bag } from "./bag"
import { funnelDefs } from "./funnelDefs"

const clicks = signal(0)
const pick = signal("bada55")
const sample = signal([])
const initP = signal(false)

effect(() => {
  if (initP.value === true) {
    bag.store({
      clicks: clicks.value,
      pick: pick.value,
      sample: sample.value,
    })
  }
})

const init = () => {
  const data = bag.get()

  if (data) {
    batch(() => {
      clicks.value = data.clicks
      pick.value = data.pick
      sample.value = data.sample ? [...data.sample] : []
    })
  }

  initP.value = true
}

const refresh = () => {
  const count = clicks.value + 1
  const list = funnelDefs.map(() => {
    return Math.floor(Math.random() * 100)
  })

  batch(() => {
    clicks.value = count
    sample.value = [...list]
  })
}

const reset = () => {
  batch(() => {
    clicks.value = 0
    sample.value = []
  })
}

const setPick = (value) => {
  pick.value = value
}

const actions = {
  init,
  refresh,
  reset,
  setPick,
}

const store = {
  actions,
  clicks,
  pick,
  sample,
}

export { actions, store }
export default store
