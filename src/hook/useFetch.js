import axios from 'axios'
import { useState } from 'react';

const useFetch = ( callback ) => {

    const [infoApi, setInfoApi] = useState();
    const [loading, setLoading] = useState(false)


    const baseUrl = 'https://entrgaable2-crud-node-uxwt-dev.fl0.io'
    
    
    const getAllTask = (path) => {

        const url = `${baseUrl}${path}/`
        setLoading(true)
       axios.get(url)
        .then(res => {
            setInfoApi(res.data)
        })
        .catch( err => console.log( err ))
        .finally(() => setLoading(false))
    }


    const createTask = ( path, data) => {

    const url = `${baseUrl}${path}/`

        setLoading(true)
        axios.post(url, data)
            .then( res => {
                // setInfoApi([...infoApi, res.data])
                getAllTask('/todos')
                callback(true)
            })
            .catch( err => console.log( err ))
            .finally(() => setLoading(false))
    }

    const deleteTask = (path, id) => {
        
        const url = `${baseUrl}${path}/${id}/`

        setLoading(true)
        axios.delete(url)
            .then( res => {
                getAllTask('/todos')
            })
            .catch( err => console.log( err ))
            .finally(() => setLoading(false))

    }

    const updateTask = (path, id, data) => {

        const url = `${baseUrl}${path}/${id}/`

        setLoading(true)
         axios.put(url, data)
            .then( res => {
               getAllTask('/todos')
               callback(true)
            })
            .catch( err => console.log( err ))
            .finally(() => setLoading(false))
    }

    return [ infoApi, getAllTask, createTask, deleteTask, updateTask, loading]
}

export default useFetch