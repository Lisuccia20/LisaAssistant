import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faGear} from "@fortawesome/free-solid-svg-icons";


let modules={
   toolbar: [
       ['bold', 'italic']
   ]
}

export default function Editor(props){
    return (
        <>
            <Link to={'/'}>
                <button className={'backButton'}><FontAwesomeIcon icon={faHouse}/></button>
            </Link>
            <div className="flexContainer flex-direction-down">
                <input type="text" id={'title'}/>
                <ReactQuill className='editor' theme="snow" value={props.value} onChange={props.setValue} modules={modules}/>
            </div>
        </>
    )

}