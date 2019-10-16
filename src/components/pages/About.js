import React from 'react'

export default function About() {
    return (
       <React.Fragment>
           <h1 style={centerStyle}>About page for Todolist App v1.0.0</h1>
           <p style={paraStyle}>This app was developed by adebayo ilerioluwa </p>
           <p style={paraStyle}>Inspiration :Brad Traversy React Crash Course</p>
       </React.Fragment>
    )
}
const centerStyle={textAlign:'center'}
const paraStyle ={
    textAlign:'center',
    color:'#39f',
    marginTop:'1em'
}