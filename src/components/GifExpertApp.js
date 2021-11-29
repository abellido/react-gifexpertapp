import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GiftGrid } from './GiftGrid';

//Usar el snipet rafc
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    /*
    const handleAdd = () => {
        //setCategories([...categories, 'One Punch Man']);
        //cats ES EL VALOR DEL ESTADO ANTERIOR.
        setCategories( cats => [...cats, 'One Punch Man']);
    }
    */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ul>
            {
                categories.map( (category) => (
                    <GiftGrid 
                        category={ category }
                        key = { category }
                    />
                ))
            }
            </ul>
        </>
    )

}

export default GifExpertApp;