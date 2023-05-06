import { useState } from "react"
import { AddCategory, GifGrid } from "./components";
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Futurama']);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;
        //COD Mobile
        setCategories( [newCategory,...categories] );
        //setCategories( cat => [...cat, 'COD Mobile'])
    }

    return (

        <>
            {/*Titulo*/}
            <h1>GifExpertApp</h1>

             {/*Input*/}
             <AddCategory 
             //setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
             />

              {/*Listado de Gif*/}
                {
                    categories.map( ( category ) => (
                        <GifGrid key={ category } 
                        category={ category }/>
                    ))
                }
                 {/*Gif Item*/}
        </>
    )

}