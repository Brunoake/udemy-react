import { useState, useEffect } from "react";


// Custom hook

export const useFetch = (url) => {

    const [data, setData] = useState(null)

    // refatorando POSt
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);

    // loading
  const [loading, setLoading]  = useState(false);

//   error
const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        
        if(method === "POST"){
            setConfig({
                method,
                Headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method);
        }

    }


 useEffect(() => {
    const fetchData = async () => {
    // Tratando erros
    try {
            setLoading(true);
    
            const rest = await fetch(url)
            const json = await rest.json()
    
           
            setData(json);
        
    } catch (error) {
        console.log(error.message)

        setError("Houve algum erro ao carregar dados!")
    }
    setLoading(false)
};

fetchData();
 }, {url, callFetch})   

//  Refatorando post
useEffect(() => {

    const httpRequest = async() => {
        let json

        if (method === "POST") {

            setLoading(true);

           let fetchOptions = [url, config]
           
           const res = await fetch(...fetchOptions)
           json = await res.json();

           setLoading(false);
        };

        setCallFetch(json);
    };

    httpRequest();
}, [config, method, url])

 return {data, httpConfig, loading, error};
}