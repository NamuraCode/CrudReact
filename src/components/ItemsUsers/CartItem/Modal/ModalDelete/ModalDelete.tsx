import PropId from '../../../../../models/PropId'
import iconAccept from '../../../../../assets/images/accept1.svg'

let ModalDelete: React.FC<PropId> = ({id})=>{

    async function deletItemId(event: React.SyntheticEvent<HTMLFormElement>, id:number) {
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
        <div className='form-delete'>
            <h1>Are you sure?</h1>
            <form onSubmit={(e)=>{
                deletItemId(e, id)
            }}>
                <button className='buttton delete-img' type='submit'>Accept</button>
            </form>
        </div>
    )
}

export default ModalDelete
