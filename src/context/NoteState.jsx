import React from 'react'
import { NoteContext } from './Context'

const NoteState = (children) => {
  return (
    <NoteContext.Provider>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteState