import { Fingerprint } from "./icons"

const url = "https://eswat2.github.io"
const who = "eswat2"

const Eswat2 = () => {
  return (
    <a
      class="text-clrs-gray hover:text-clrs-navy absolute top-8 right-8"
      href={url}
      aria-label={who}
      title={who}
    >
      <Fingerprint />
    </a>
  )
}

export { Eswat2 }
export default Eswat2
