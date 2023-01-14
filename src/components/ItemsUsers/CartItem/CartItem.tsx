import React, { useState } from 'react';
import ItemProps from '../../../models/Item'
import ModalEdit from './Modal/ModalEdit/ModalEdit' 

let CartItem: React.FC<ItemProps> = ({...arg})=>{
    const [ validaionEdit, setValidaionEdit ] = useState(false)

    return(
        <div>   
            <h2>{arg.owner}</h2>
            <h3>{arg.serial}</h3>
            <div>
                <h3>{arg.location}</h3>
                <h3>{arg.condition}</h3>
                <h3>{arg.storage_system}</h3>
                <h3>{arg.seals}</h3>
                <h3>{arg.i_max}</h3>
                <h3>{arg.i_n}</h3>
                <h3>{arg.i_b}</h3>
                <h3>{arg.manufacturer}</h3>
                <h3>{arg.purchase}</h3>
                <h3>{arg.created_at}</h3>
                <h3>{arg.connection_type}</h3>
            </div>
            <button onClick={()=>{
                setValidaionEdit(true)
            }}>Edit</button>
            <button>Delet</button>
            {
               validaionEdit ?  <ModalEdit/> : null
            }
        </div>
    )
}

export default CartItem