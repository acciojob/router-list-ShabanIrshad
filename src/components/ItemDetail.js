import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail=()=>{
    const params = useParams();
    const {id} = params;

    // console.log(params);

    return (
        <>
            <h1>Item {id}</h1>
            <p>Description for Item {id}</p>
        </>
    );
}
export default ItemDetail;