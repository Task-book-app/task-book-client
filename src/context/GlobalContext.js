import React, { createContext } from 'react'

export const appContext = createContext()

export function GlobalContext({children}) {

    const user = { name: "habid" }
    const items = ["item1", "item2", "item3", "item4"]

  return (
    <appContext.Provider
        value={{user, items}}
    >
        {children}
    </appContext.Provider>
  )
}
