import React, { useState } from 'react';
import ItemProps from '../../../models/Item'
import ModalDelete from './Modal/ModalDelete/ModalDelete';
import ModalEdit from './Modal/ModalEdit/ModalEdit'
import userInterface from '../../../models/getUserSession'
import imageDelete from '../../../assets/images/cancel2.svg'
import imageEdit from '../../../assets/images/Edit.svg'


let CartItem: React.FC<ItemProps> = ({...arg})=>{
    const [ validaionEdit, setValidaionEdit ] = useState(false)
    const [ validaionDelete, setValidaionDelete ] = useState(false)
    let user = userInterface

    return(
        <div className='main-cart'>  
            <p>owner:</p>
            <h2>{arg.owner}</h2>
            <p>serial:</p>
            <h3>{arg.serial}</h3>
            <ul>
                <li><span>location: </span>{arg.location}</li>
                <li><span>condition: </span>{arg.condition}</li>
                <li><span>storage_system: </span>{arg.storage_system}</li>
                <li><span>seals: </span>{arg.seals}</li>
                <li><span>i_max: </span>{arg.i_max}</li>
                <li><span>i_n: </span>{arg.i_n}</li>
                <li><span>i_b: </span>{arg.i_b}</li>
                <li><span>manufacturer: </span>{arg.manufacturer}</li>
                <li><span>purchase: </span>{arg.purchase}</li>
                <li><span>created_at: </span>{arg.created_at}</li>
                <li><span>connection_type: </span>{arg.connection_type}</li>
            </ul>
            {   user.type == "admin" ? 
                <div className='buttons-form'>
                    <button className='form-buttons' onClick={()=>{
                        setValidaionDelete(false)
                        validaionEdit ? setValidaionEdit(false) : setValidaionEdit(true) 
                    }}><img src={imageEdit} alt='Edit'></img></button>
                    <button className='form-buttons' onClick={()=>{
                        setValidaionEdit(false)
                        validaionDelete ? setValidaionDelete(false) : setValidaionDelete(true)
                    }}><img src={imageDelete} alt='delete'></img></button>
                    { validaionEdit && !validaionDelete ? <ModalEdit id={arg.id}/> : null }
                    { validaionDelete && !validaionEdit ? <ModalDelete id={arg.id}/> : null }
                </div>
            : <></>}
        </div>
    )
}

export default CartItem