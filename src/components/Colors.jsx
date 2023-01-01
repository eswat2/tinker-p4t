import { useContext } from "preact/hooks"
import { ColorPick } from "./ColorPick"
import { AppContext } from "../context"
import { colorNames } from "../utils"

const Colors = () => {
  const { actions, pick } = useContext(AppContext)

  return (
    <div className="flex flex-wrap" role="radiogroup">
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
