import React,{ useState,useEffect } from "react";
import axios from "axios";

const useFetch =  (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try{
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
            setError(false);
        }
        catch(err){
            setLoading(false);
            setError(err.message);
        }

    };

    useEffect(() => {
        fetchData();
    } ,[]);

    return { data, error, loading};

};

export default useFetch;
