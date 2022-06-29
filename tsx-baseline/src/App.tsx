import React from 'react'
import './App.css'
import { 
  Box,
  Button,
  Typography,
} from "@mui/material"
import MiniDrawerTsx from './TSX/MiniDrawerTsx'
import MiniDrawerJsx from './JSX/MiniDrawerJsx'

function App() {

  const [mode, setMode] = React.useState('default')

  const switchMode = (newMode: string) => {
    setMode(newMode)
  }

  if(mode === "jsx"){
    return <MiniDrawerJsx />
  }


  if(mode === "tsx"){
    return <MiniDrawerTsx />
  }


  return (
    <Box className="App">
      <header className="App-header">

          <Typography variant="h4" sx={{fontWeight: "lighter", mb:2}}>
            POC/1
          </Typography>

          <Button
            sx={{m:1}}
            variant="contained"
            color="primary"
            onClick={ (e) => {
              e.preventDefault()
              switchMode('tsx')
            }}>
            TypeScript Version
          </Button>

          <Button
            sx={{m:1}}
            variant="contained"
            color="secondary"
            onClick={ (e) => {
              e.preventDefault()
              switchMode('jsx')
            }}>
           JSX (ES6) Version
          </Button>

        <Box sx={{ mt:2}}>
          <Typography variant="body2">
            Edit <code>src/App.tsx</code> and save to reload.
          </Typography>
          <Typography variant="body2">
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </Typography>
        </Box>
      </header>
    </Box>
  )
}

export default App
