import React from 'react'
import { Box,Button,Grid2, TextField,Paper, Checkbox, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


export default function List({note,deletenote,updatenote}) {
  return (
    <Paper elevation={3} sx={{p:2,display:"flex",textAlign:"left",justifyContent:"space-between"}}>
        <Box sx={{display:"flex", gap:1,alignItems:"center",justifyContent:"space-between"}}>
        <Checkbox checked={note.completed?true:false} onChange={()=>updatenote(note)}/>
        <Typography color="text.secondary"
        sx={{fontWeight:"600" , textTransform:"capitalize",textDecoration:note.completed?"line-through":"none"}}>{note?.title}</Typography>
        </Box>
        <IconButton onClick={()=>deletenote(note.id)}>
            <DeleteIcon color="error" sx={{justifyContent:"space-between"}}></DeleteIcon>
        </IconButton>
    </Paper>
  )
}
