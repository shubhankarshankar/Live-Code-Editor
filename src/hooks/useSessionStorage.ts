import * as React from 'react'

const PREFIX = 'live-editor-'


const useLocalStorage = (key: string, initialValue: any) => {
  const prefixedKey = PREFIX + key

  const [value, setValue] = React.useState(() => {
    const jsonValue = sessionStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  React.useEffect(() => {
    sessionStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}

export default useLocalStorage;