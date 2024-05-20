import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Chat from './Pages/Chat'
import { AnimatePresence } from 'framer-motion'
import Editor from './Pages/Editor'
import Youtube from "./Pages/youtube";

export default function App() {
    const [value, setValue] = useState('ciao!!');
    return (
        <>
            <BrowserRouter basename={'/chatgpt/'}>
                <AnimatePresence>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path='/chat' element={<Chat value={value} setValue={setValue}/>}/>
                        <Route path='/youtube' element={<Youtube />}/>
                        <Route path='/editor' element={<Editor value={value} setValue={setValue}/>}/>
                    </Routes>
                </AnimatePresence>
            </BrowserRouter>
        </>
)
}