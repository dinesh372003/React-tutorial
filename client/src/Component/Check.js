import React from 'react'

export default function Check({data}) {
    return (
        <div>
            Hello World
            {data.map((datas)=>(
                <div key={datas._id}>
                    {datas.name}
                </div>
            ))}
        </div>
    )
}


