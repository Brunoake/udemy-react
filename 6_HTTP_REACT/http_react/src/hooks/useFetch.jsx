import { useState, useEffect } from "react";


// Custom hook

export const useFetch = (url) => {

    const [data, setData] = useState(null)
    
 useEffect(() => {

    const fetchData = async () => {

        const rest = await fetch(url)
        const json = await rest.json()

        setData(json);
    }

fetchData();
 }, {url})   

 return {data};
}