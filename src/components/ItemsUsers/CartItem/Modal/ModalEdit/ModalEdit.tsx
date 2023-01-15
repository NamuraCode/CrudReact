import { useState, useEffect } from 'react'
import ItemProps from '../../../../../models/PropId'
import ItemInterface from '../../../../../models/ItemCreate'

let ModalEdit: React.FC<ItemProps> = ({id})=>{
    
    const [dataItem, setDataItem]= useState(Object)
    const [serial, setSerial] = useState(dataItem.serial)
    const [connection_type, setConnection_type] = useState(dataItem.connection_type)
    const [storage_system, setStorage_system] = useState(dataItem.storage_system)
    const [condition, setCondition] = useState(dataItem.condition)
    const [owner, setOwner] = useState(dataItem.owner)
    const [location, setLocation] = useState(dataItem.location)
    const [manufacturer, setManufacturer] = useState(dataItem.manufacturer)
    const [i_max, setI_max] = useState(dataItem.i_max)
    const [i_b, setI_b] = useState(dataItem.i_b)
    const [i_n, setI_n] = useState(dataItem.i_n)
    const [seals, setSeals] = useState(dataItem.seals)
    
    let time = Date.now()
    let today = new Date(time)
    
    async function fetchData() {
        let res = await fetch(`https://ops.enerbit.dev/learning/api/v1/meters/${id}`,{
            headers:{
                'accept': 'application/json'
            },
            method: 'GET',
            mode: 'cors'
        })
        let json = await res.json()
        setDataItem(json)
    }

    useEffect(() => {
        fetchData()
    },[dataItem]) 
    
    let itemModel: ItemInterface = {
        connection_type: connection_type ? connection_type : dataItem.connection_type ,
        storage_system: storage_system ? storage_system : dataItem.storage_system,
        condition: condition ? condition : dataItem.condition,
        owner: owner ? owner : dataItem.owner,
        serial: serial ? serial : dataItem.serial,
        location: location ? location : dataItem.location,
        purchase: `${today.toISOString()}`,
        i_max: i_max ? i_max : dataItem.i_max,
        i_b: i_b ? i_b : dataItem.i_b,
        i_n: i_n ? i_n : dataItem.i_n,
        manufacturer: manufacturer ? manufacturer : dataItem.manufacturer,
        seals: seals ? seals : dataItem.seals
    }

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>, setVariable:React.Dispatch<React.SetStateAction<any>> ) => {
        const value = event.target.value;
        setVariable(value)
    };

    async function editItem(event: React.SyntheticEvent<HTMLFormElement>, idItem:number) {
        try{
            event.preventDefault()
            let config:object = {
                method: 'PATCH',
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemModel)
            }
            let res = await fetch(`https://ops.enerbit.dev/learning/api/v1/meters/${idItem}`, config)
            let json = await res.json()
            console.log(json);
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className='main-form-edit'>
            <h1>Edit Item</h1>
            <form className='form main-edit' onSubmit={(event) => { editItem(event, id) }}>
                <section className='edit-content'>
                    <label htmlFor="serialInput">Serial:</label>
                    <input
                        id="serialInput"
                        defaultValue={dataItem.serial}
                        onChange={(e)=>{
                            setSerial(e.target.value)
                        }}
                        type="text"
                        placeholder="serial"
                        className="input-modal"
                        required
                    />

                    <label htmlFor='connection_typeInput'>connection_type:</label>
                    <select id="connection_typeInput" required onChange={(e)=>{
                        selectChange(e, setConnection_type)
                    }} defaultValue={dataItem.connection_type}>
                        <option selected value="directa">directa</option>
                        <option value='semi-directa'>semi-directa</option>
                        <option value='indirecta'>indirecta</option>
                    </select>

                    <label htmlFor='storage_systemInput'>storage_system:</label>
                    <select id="storage_systemInput" required onChange={(e)=>{
                        selectChange(e, setStorage_system)
                    }} defaultValue={dataItem.storage_system}>
                        <option selected value="interno">interno</option>
                        <option value='externo'>externo</option>
                    </select>

                    <label htmlFor='conditionInput'>Condition:</label>
                    <select id="conditionInput" required onChange={(e)=>{
                        selectChange(e, setCondition)
                    }} defaultValue={dataItem.condition}>
                        <option selected value="nuevo">nuevo</option>
                        <option value='usado'>usado</option>
                    </select>

                    <label htmlFor='ownerInput'>Owner:</label>
                    <select id="ownerInput" required onChange={(e)=>{
                        selectChange(e, setOwner)
                    }} defaultValue={dataItem.owner}>
                        <option selected value="RF">RF</option>
                        <option value='OR'>OR</option>
                    </select>

                    <label htmlFor="locationInput">Location:</label>
                    <input
                        id="locationInput"
                        defaultValue={dataItem.location}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        placeholder="location"
                        className="input-modal"
                        required
                    />

                    <label htmlFor="manufacturerInput">Manufacturer:</label>
                    <select id="manufacturerInput" required onChange={(e)=>{
                        selectChange(e, setManufacturer)
                    }} defaultValue={dataItem.manufacturer}>
                        <option selected value="yes">yes</option>
                        <option value='no'>no</option>
                    </select>

                    <label htmlFor="i_maxInput">I_max:</label>
                    <input
                        id="i_maxInput"
                        defaultValue={dataItem.i_max}
                        onChange={(e)=>{setI_max(e.target.value);}}
                        step={0.001}
                        min={1}
                        max={10000000}
                        type="number"
                        placeholder="i_max"
                        className="input-modal"
                        required
                    />

                    <label htmlFor="i_bInput">I_b:</label>
                    <input
                        id="i_bInput"
                        defaultValue={dataItem.i_b}
                        onChange={(e)=>{setI_b(e.target.value);}}
                        step={0.001}
                        min={1}
                        max={10000000}
                        type="number"
                        placeholder="i_b"
                        className="input-modal"
                        required
                    />

                    <label htmlFor="i_nInput">I_n:</label>
                    <input
                        id="i_nInput"
                        defaultValue={dataItem.i_n}
                        onChange={(e)=>{setI_n(e.target.value);}}
                        step={0.001}
                        min={1}
                        max={10000000}
                        type="number"
                        placeholder="i_n"
                        className="input-modal"
                        required
                    />

                    <label htmlFor="sealsInput">Seals:</label>
                    <input
                        id="sealsInput"
                        defaultValue={dataItem.seals}
                        onChange={(e)=>{setSeals(e.target.value);}}
                        step={0.001}
                        min={1}
                        max={10000000}
                        type="number"
                        placeholder="seals"
                        className="input-modal"
                        required
                    />
                </section>
                <button className='buttton button-edit' type='submit'>Save</button>
            </form>
        </div>
    )
}

export default ModalEdit
