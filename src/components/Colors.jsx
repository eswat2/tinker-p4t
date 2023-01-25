import { useContext } from "preact/hooks"
import { ColorPick } from "./ColorPick"
import { colorNames, store } from "../utils"

const Colors = () => {
  const { actions, pick } = store

  return (
    <div class="flex flex-wrap" role="radiogroup">
      {colorNames.map((key, indx) => (
        <ColorPick
          key={`pick-${indx}`}
          callback={(value) => {
            actions.setPick(value)
          }}
          pick={pick}
          value={key}
        />
      ))}
    </div>
  )
}

export { Colors }
export default Colors
