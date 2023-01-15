import PropId from '../../../../../models/PropId'

let ModalDelete: React.FC<PropId> = ({id})=>{

    async function deletItemId(event: React.SyntheticEvent<HTMLFormElement>, id:number) {
        event.preventDefault()
        await fetch(`https://ops.enerbit.dev/learning/api/v1/meters/${id}`, {
            headers: {
                'accept': 'application/json'
            },
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(id)
        })
    }
    
    return(
        <div className='form'>
            <h1>Are you sure?</h1>
            <form onSubmit={(e)=>{
                deletItemId(e, id)
            }}>
                <button type='submit'>Accept</button>
                <button type='reset'>cancel</button>
            </form>
        </div>
    )
}

export default ModalDelete
