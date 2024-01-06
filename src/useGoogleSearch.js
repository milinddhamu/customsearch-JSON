import {useState , useEffect} from 'react'

const useGoogleSearch = (term) => {

    const [data, setData] = useState(null)

    useEffect (() => {
        const fetchData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result => {
                setData(result)
                 
            })
        }

        fetchData()

    }, [term])

    return {data}
   
}

export default useGoogleSearch
