import React from 'react';
import {motion } from 'framer-motion';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse, faPlay, faGear} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


export default function Home() {
    return (
        <>
            <Link to={'/editor'}>
                <button className={'backButton'}><FontAwesomeIcon icon={faGear}/></button>
            </Link>
            <motion.div
                className='startButton flexContainer flex-direction-down fixed'
                exit={{opacity: 0}}
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1} }
            >
                <h1 className='title'>Lisa Assistant</h1>
                <Link to='/chat'>
                    <button><FontAwesomeIcon icon={faPlay} fontSize='45px'/></button>
                </Link>
            </motion.div>
            <motion.div
                className="flexContainer fixed flex-direction-down chatContainer"
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: 50, opacity: 0}}
            >
                <h1 className='Lisa'>Ciao, sono Lisa, la tua assistente virtuale</h1>
                <h1 className='User'>ricordami la lista della spesa </h1>
                <h1 className='Lisa'>Certamente! eccola</h1>
            </motion.div>

        </>
    )
}