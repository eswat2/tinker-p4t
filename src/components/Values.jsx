import { store } from "../utils"
import { TwLabel } from "./TwLabel"

const Values = () => {
  const { clicks, pick, sample } = store

  return (
    <div class="flex">
      <div class="flex flex-col">
        <div class="flex">
          <span class="mr-10px font-bold">color:</span>
          <span class="text-clrs-slate4 italic">{pick}</span>
        </div>
        <div class="mt-5px flex">
          <span class="mr-10px font-bold">sample:</span>
          <span class="text-clrs-slate4 italic">{`${
            clicks > 0 ? sample : "..."
          }`}</span>
        </div>
      </div>
      <TwLabel />
    </div>
  )
}

export { Values }
export default Values
