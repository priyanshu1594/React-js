import React, { useEffect, useState } from 'react'
const Api = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    }, [])
    return (
        <>
            {
                data.map((item, index) => {
                    return <div classm="body">
                        <div class="data">
                            <img class="img" src={item.image} />
                            <h2 class="title">{item.title}</h2>
                            <button class="btnedit">Edit</button>
                            <button class="btndlt">Delete</button>
                        </div>

                    </div>
                })
            }

        </>
    )

}
export default Api;