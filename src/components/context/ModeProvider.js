import React, { useState } from "react"

export const ModeContext = React.createContext([])

const ModeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false)

  return (
    <ModeContext.Provider value={[lightMode, setLightMode]}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
