import React from 'react'



export default function Page({ params }) {
return(

    <div>
        <h1>{params.id}</h1>
        <p>This is page number {params.id}.</p>
    </div>
)


}