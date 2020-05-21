import React from 'react'
import ReactDOM from 'react-dom'


const people = [
 { name: 'Ty'},
 { name: 'Joe'},
 { name: 'Karen'}
 ]
 

//React.createElement( /* type */, /* props */, /* content */ );

const element = React.createElement('ol',nul,
 people.map((person)=>(React.createElement('li',{key: person.name}, person.name)
 ))
)
ReactDOM.render(
    element,
    document.getElementById('root')
    )
