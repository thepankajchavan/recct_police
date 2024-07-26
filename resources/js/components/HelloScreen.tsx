import React from 'react';
import ReactDom from 'react-dom/client'
import Login from '../src/views/auth/minimal/Login';
import { ThemeProvider, } from '../src/common/context';
import { BrowserRouter } from 'react-router-dom';

export default function HelloScreen(props){
    // var document:Document;
    
    return(
        <div>
            <h1>Welcome to React Js using TSX File</h1>
            {/* <h2>Integrated By:<b>{props.name}</b></h2> */}
            <form method='post' action='/admin/login'>
                
                <input type='hidden' value={props.name} name='_token'/>
                <input type='text' value='admin'name="identity"/>
                <input type='text' value='123456789'name="password"/>
                <button type='submit'>handleLogin</button>
            </form>
            
        </div>
    )
}

const container = document.getElementById('app')
const value = container.getAttribute('name')
const root = ReactDom.createRoot(container);
root.render(<BrowserRouter><ThemeProvider><Login name={value} /></ThemeProvider></BrowserRouter>)