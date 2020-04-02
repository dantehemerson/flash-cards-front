import React from 'react'
import { Folder } from '../types/folder.types'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import { CardActionArea, CardContent, Typography } from '@material-ui/core'

type FolderCardProps = {
  folder: Folder
}

const FolderCard = ({ folder }: FolderCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="subtitle2">
            {folder.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FolderCard
