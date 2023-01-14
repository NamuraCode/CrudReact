import * as React from 'react'
import CartItem from './CartItem/CartItem'
import Item from '../../models/Item'

function ItemsUsers() {
    const [data, setData] = React.useState(Array<Item>)
    const [pagination, setPagination] = React.useState(0)
    const [pageSize, setPageSize] = React.useState(8)


    let url = `https://ops.enerbit.dev/learning/api/v1/meters?page=${pagination}&size=${pageSize}`

    async function fetchData(url: string) {
        let res = await fetch(url)
        let json = await res.json()
        setData(json.items)
    }

    React.useEffect(() => {
        fetchData(url)
    }, [])

    return (
        <>
            <div className='main-items'>
                {
                    data.length > 0 ? data.map((item) => {
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
                            />
                        )
                    }) : null
                }
            </div>
        </>
    )
}

export default ItemsUsers