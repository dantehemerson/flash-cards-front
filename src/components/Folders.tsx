import React from 'react'
import { folders } from '../constants'
import FolderCard from './FolderCard'

const Folders = () => {
  return (
    <div>
      {folders.map(folder => (
        <FolderCard folder={folder} />
      ))}
    </div>
  )
}

export default Folders
