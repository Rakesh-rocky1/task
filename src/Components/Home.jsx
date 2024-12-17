import { Box, Grid2, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import InsertForm from './InsertForm'
import List from './List'

export default function Home() {
  let initialvalue;
  if(localStorage.getItem("notes")==null){
    initialvalue=[];
  }else{
    initialvalue=JSON.parse(localStorage.getItem("notes"))
  }
  const [notes,setNotes]=useState(initialvalue)
  const deletenote=(id)=>{
    console.log(id);
    let remainingnotes=notes.filter((item)=>item.id!=id)
    localStorage.setItem("notes",JSON.stringify(remainingnotes))
    setNotes(remainingnotes)
  }

  const updatenote=(note)=>{
    console.log(note)
    let status;
    if(note.completed){
      status=false;
    }
  else{
    status=true;
  }
  let modifiedNote={...note,completed:status};
  console.log(modifiedNote)
  let noteIndex=notes.findIndex((item)=>item.id==note.id);
  console.log(noteIndex)
  let modifiedCompleteNote=[...notes];
  modifiedCompleteNote.splice(noteIndex,1,modifiedNote)
  localStorage.setItem("notes",JSON.stringify(modifiedCompleteNote))
  setNotes(modifiedCompleteNote);   
}

  
  return (
    <Box sx={{backgroundColor: "yellow",width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}> 
    <Paper sx={{p:10}}>
        <Box>
        <Grid2 container spacing={2}></Grid2>
        <Grid2 size={{xs:12}}>
            <Typography sx={{textAlign:"center",fontWeight:"1000",color:"blue",textTransform:"uppercase"}}>TASKS FOR THE DAY..</Typography>
        </Grid2>
        <Grid2 size={{xs:12}}>
            <InsertForm notes={notes} setNotes={setNotes}/>
        </Grid2>
        <Grid2 size={{xs:12}}>
            <Box sx={{maxHeight:"40vh",overflow:"auto"}}>
              {notes.length>0?
              notes.map((notes,index)=>(
               <List updatenote={updatenote} key={index} note={notes} deletenote={deletenote}/>
              )):(
                <Box sx={{p:2}}>  <Typography sx={{textAlign:"center"}}>NO TASKS ARE FOUND</Typography></Box>
                
              )}
              
            </Box>  
        </Grid2>
        </Box>
    </Paper>
    </Box>
  )
}
