import * as React from 'react'
import CartItem from './CartItem/CartItem'
import Item from '../../models/Item'
import arrow from '../../assets/images/arrow.svg'

function ItemsUsers() {
    const [data, setData] = React.useState(Array<Item>)
    const [dataFilter, setDataFilter] = React.useState(Array<Item>)
    const [pagination, setPagination] = React.useState(0)
    const [search, setSearch] = React.useState("")
    const [totalPages, setTotalPages] = React.useState(0)

    async function fetchData(pagination: number) {
        try{
            let res = await fetch(`https://ops.enerbit.dev/learning/api/v1/meters?page=${pagination}&size=10`)
            let json = await res.json()
            setData(json.items)
            setTotalPages(json.pages)
            
        }catch(error){
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchData(pagination)
    }, [pagination])  

    function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
        filtrar(e.target.value)
    }   

    const filtrar = (findWords:string)=>{
        let items = data.filter((element)=>{
            if(element.serial.toString().toLowerCase().includes(findWords.toLowerCase())){
                return element
            }
        })
        setDataFilter(items)
    } 

    function paginationNavegate(currentPage:number, totalPages:number, operation:string){
        if(operation == "increment" && currentPage < (totalPages - 1)){
            return setPagination(currentPage + 1)
        }
        if(operation == "decrement" && currentPage > 0){
            return setPagination(currentPage - 1)
        }else{
            return setPagination(0)
        }
    }
    
    return (
        <>
            <section className='main-items'>
                <article className='items-search'>
                    <input className='search-input' type="search" placeholder='Search serial' 
                    onChange={handleChange}/>
                </article>
                <article className='items-carts'>
                    {
                        data.length > 0 && dataFilter.length == 0 ? data.map((item) => {
                            return (
                                <CartItem
                                    key={item.id}
                                    condition={item.condition}
                                    connection_type={item.connection_type}
                                    created_at={item.created_at}
                                    i_b={item.i_b}
                                    i_max={item.i_max}
                                    i_n={item.i_n}
                                    location={item.location}
                                    manufacturer={item.manufacturer}
                                    owner={item.owner}
                                    purchase={item.purchase}
                                    seals={item.seals}
                                    serial={item.serial}
                                    storage_system={item.storage_system}
                                    id={item.id}
                                />
                            )
                        }) : dataFilter.map((item) => {
                            return (
                                <CartItem
                                    key={item.id}
                                    condition={item.condition}
                                    connection_type={item.connection_type}
                                    created_at={item.created_at}
                                    i_b={item.i_b}
                                    i_max={item.i_max}
                                    i_n={item.i_n}
                                    location={item.location}
                                    manufacturer={item.manufacturer}
                                    owner={item.owner}
                                    purchase={item.purchase}
                                    seals={item.seals}
                                    serial={item.serial}
                                    storage_system={item.storage_system}
                                    id={item.id}
                                />
                            )
                        }) 
                    }
                </article>
                <article className='carts-pagination'>
                    <div className='pagination-main'>
                        <img className='main-pagination-left' src={arrow} alt='left' onClick={()=>{
                            paginationNavegate(pagination,totalPages,'decrement')
                        }}></img>
                        <h3 className='main-pagination-current'>{pagination + 1}</h3>
                        <img className='main-pagination-rigth' src={arrow} alt='rigth' onClick={()=>{
                            paginationNavegate(pagination,totalPages,'increment')
                        }}></img>
                    </div>
                </article>
            </section>
        </>
    )
}

export default ItemsUsers