const KEY = "tinker-p4t::app-data"

// localStorage implementation... [ json ]
const bag = {
  get: () => {
    const json = localStorage.getItem(KEY)

    return json ? JSON.parse(json) : undefined
  },
  store: (data) => {
    const json = JSON.stringify(data)

    localStorage.setItem(KEY, json)
  },
}

export { bag }
export default bag
