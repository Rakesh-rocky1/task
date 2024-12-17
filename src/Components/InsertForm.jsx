import { Box,Button,Grid2, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function InsertForm({notes,setNotes}) {
    const [notetitle,setNotetitle]=useState("");
    const [notetitleerror,setNotetitleerror]=useState(null);
    const handleChange=(e)=>{
        setNotetitleerror(null)
        setNotetitle(e.target.value);
    }
    const handleSubmit=()=>{
        if(notetitle==""){
            setNotetitleerror("please enter a title")
        }else{
            //console.log(notes);
            let noteId=notes.length==0?1:notes[notes.length-1].id+1
            let fullobj={id:noteId,title :notetitle,completed:false};
            let updatedNoteData=[...notes,fullobj]
            console.log(updatedNoteData)
            localStorage.setItem("notes",JSON.stringify(updatedNoteData))
            setNotes(updatedNoteData);
            setNotetitle("")
        }
    };
  return (
     <Box>
        <Grid2 container spacing={2}>
            <Grid2 size={{xs:10}}>
                <TextField 
                value={notetitle}
                onChange={handleChange} fullWidth label="enter the title" placeholder="enter the title" helperText={notetitleerror&&notetitleerror} error={!!notetitleerror}></TextField>
            </Grid2>
            <Grid2 size={{xs:2}}>
                <Button onClick={handleSubmit} variant="contained" color="secondary" fullWidth sx={{p:2}}>ADD</Button>
            </Grid2>

        </Grid2>
     </Box>
  )
}
