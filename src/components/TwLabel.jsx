import { TW_VERSION } from "../utils"

const TwLabel = () => {
  return (
    <label className="text-clrs-slate4 ml-auto align-top text-xs italic">
      Tailwind {TW_VERSION}
    </label>
  )
}

export { TwLabel }
export default TwLabel
