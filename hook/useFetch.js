import { useState, useEffect } from "react";
import axios from "axios";

const rapidApiKey = "c68990ba41msh990bdd7a4c77cb2p19959cjsn3cb5ab4aa808";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async() => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        }
        catch(err){
            setError(error);
            alert(err);

            
        }
        finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
      fetchData();
    }, []);

    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
}

export default useFetch;