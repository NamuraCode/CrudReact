import { useRef, useState, useEffect } from 'react'
import ItemCreate from '../../../models/ItemCreate'
import acceptIcon from '../../../assets/images/accept1.svg'
import cancel from '../../../assets/images/cancel2.svg'


function ModalCreate() {
    const [serial, setSerial] = useState("")
    const [connection_type, setConnection_type] = useState("directa")
    const [storage_system, setStorage_system] = useState("interno")
    const [condition, setCondition] = useState("nuevo")
    const [owner, setOwner] = useState("RF")
    const [location, setLocation] = useState("")
    const [manufacturer, setManufacturer] = useState("yes")
    const [i_max, setI_max] = useState("")
    const [i_b, setI_b] = useState("")
    const [i_n, setI_n] = useState("")
    const [seals, setSeals] = useState("")




    let time = Date.now()
    let today = new Date(time)


    let item: ItemCreate = {
        serial: serial,
        connection_type: connection_type,
        storage_system: storage_system,
        condition: condition,
        owner: owner,
        location: location,
        manufacturer: manufacturer,
        purchase: `${today.toISOString()}`,
        i_max: i_max,
        i_b: i_b,
        i_n: i_n,
        seals: seals
    }

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>, variable: React.Dispatch<React.SetStateAction<any>>) => {
        const value = event.target.value;
        variable(value)
    };

    async function createItem(event: React.SyntheticEvent<HTMLFormElement>) {
        try{
            await fetch('https://ops.enerbit.dev/learning/api/v1/meters', {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json',
                },
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(item)
            })
            console.log(item);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className='modal-create'>
            <h1 className='create-title'>Create Item</h1>
            <form className='form main-create' onSubmit={(event) => { createItem(event) }}>
                <section className='create-content'>
                    <label htmlFor="serialInput">Serial:</label>
                    <input
                        id="serialInput"
                        value={serial}
                        onChange={(e) => setSerial(e.target.value)}
                        type="text"
                        placeholder="serial"
                        className="input-modal"
                        required
                    />

                    <label htmlFor='connection_typeInput'>connection_type:</label>
                    <select id="connection_typeInput" required onChange={(e) => {
                        selectChange(e, setConnection_type)
                    }} value={connection_type}>
                        <option selected value="directa">directa</option>
                        <option value='semi-directa'>semi-directa</option>
                        <option value='indirecta'>indirecta</option>
                    </select>

                    <label htmlFor='storage_systemInput'>storage_system:</label>
                    <select id="storage_systemInput" required onChange={(e) => {
                        selectChange(e, setStorage_system)
                    }} value={storage_system}>
                        <option selected value="interno">interno</option>
                        <option value='externo'>externo</option>
                    </select>

                    <label htmlFor='conditionInput'>Condition:</label>
                    <select id="conditionInput" required onChange={(e) => {
                        selectChange(e, setCondition)
                    }} value={condition}>
                        <option selected value="nuevo">nuevo</option>
                        <option value='usado'>usado</option>
                    </select>

                    <label htmlFor='ownerInput'>Owner:</label>
                    <select id="ownerInput" required onChange={(e) => {
                        selectChange(e, setOwner)
                    }} value={owner}>
                        <option selected value="RF">RF</option>
                        <option value='OR'>OR</option>
                    </select>

                    <label htmlFor="locationInput">Location:</label>
                    <input
                        id="locationInput"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        placeholder="location"
                        className="input-modal"
                        required
                    />

                    <label htmlFor="manufacturerInput">Manufacturer:</label>
                    <select id="manufacturerInput" required onChange={(e) => {
                        selectChange(e, setManufacturer)
                    }} defaultValue={manufacturer}>
                        <option selected value="yes">yes</option>
                        <option value='no'>no</option>
                    </select>

                    <label htmlFor="i_maxInput">I_max:</label>
                    <input
                        id="i_maxInput"
                        onChange={(e) => { setI_max(e.target.value); }}
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
                        onChange={(e) => { setI_b(e.target.value); }}
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
                        onChange={(e) => { setI_n(e.target.value); }}
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
                        onChange={(e) => { setSeals(e.target.value); }}
                        step={0.001}
                        min={1}
                        max={10000000}
                        type="number"
                        placeholder="seals"
                        className="input-modal"
                        required
                    />
                </section>
                <button className='buttton button-create-model' type='submit'>Create Item</button>
            </form>
        </div>
    )
}

export default ModalCreate