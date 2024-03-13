import { useState } from 'react';

export default function useForm(getFreshModelObject) {

    const [values , setValues] = useState(getFreshModelObject());
    const [errors , setErrors] = useState({}); 

    const handleInputChange = event => {
        const {name , value } = event.target 
        setValues({
            ...values, //copie toutes les propriétés existantes de l'object values 
            //dans un autre objet ce qui fait que les valeurs des autress champs sont conservés lorsqu'on met à jour l'état 
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    }
}