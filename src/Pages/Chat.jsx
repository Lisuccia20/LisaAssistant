import {useEffect, useState} from "react";
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Bubble from '../Components/Bubble'





function Chat(props) {
    if (props.value === ''){
        props.setValue('il tuo nome è lisa, pronomi femminili, per favore le risposte vvanno in formato html')
    }
    const [name, setName] = useState();
    const [messages, setMessages] = useState([]);
    const [array, setArray] = useState([{role: 'system', content: props.value}]);

    const createBubble = async (message, sender) =>{
        setMessages(prevMessage => [...prevMessage, [message, sender]])
        if (sender === 'Lisa') {
            setArray(prevArray => [...prevArray, {role: 'assistant', content: message}]);
        } else if (sender === 'User') {
            setArray(prevArray => [...prevArray, {role: 'user', content: message}]);
        }
    }

    let bubbles = messages.map((message, key) => {
        return <Bubble key = {key} name={message[1]} message={message[0]}/>
    })

    useEffect(() => {
        document.getElementById('bottom').scrollIntoView({behavior: 'smooth'})
    }, [messages]);

    useEffect(() => {
        document.getElementById('input').value = ''
        const fetchData = async () => {
            let xhr = new XMLHttpRequest();
            const body = JSON.stringify({
                messages: array
            })
            console.log(body)
            xhr.open("POST", 'https://corsproxy.io/?http://lisapc.tplinkdns.com/api/response');
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let response = JSON.parse(xhr.responseText);
                    createBubble(response, 'Lisa')
                }
            }
            xhr.send(body);
        };

        if (array.length > 0 && array[array.length - 1].role === 'user') {
            fetchData();
        }
    }, [array]);

    const keyDown = (e) =>{
        if (e.keyCode === 13){
            createBubble(name, 'User');
        }
    }

    return (
    <>
        <div className="flexContainer">
            <div className="chatContainer">
                {bubbles}
                <div id='bottom'></div>
            </div>
        </div>
        <div className="flexContainer">
            <div className='input'>
                <input id='input' type="text" onKeyDown={event => {keyDown(event)}} onChange={(e) => setName(e.target.value)}/>
                <button onClick={() => {createBubble(name, 'User');}}><FontAwesomeIcon icon={faPaperPlane}/></button>
            </div>
        </div>
    </>
    );
}

export default Chat;
