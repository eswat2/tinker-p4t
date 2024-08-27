import { Radio } from "./icons"
import { namedColors } from "../utils"

const ColorPick = ({ callback, pick, value }) => {
  const hex = namedColors[value]
  const selected = value === pick.value // this.$store.state.app.color
  const select = (value) => {
    return () => {
      callback && callback(value)
    }
  }
  return (
    <div
      aria-checked={selected}
      aria-label={value}
      title={value}
      role="radio"
      onClick={select(value)}
    >
      <Radio hex={hex} selected={selected} />
    </div>
  )
}

export { ColorPick }
export default ColorPick
