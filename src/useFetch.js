import { useEffect, useState } from "react";

const useFetch = (url) => {
const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(true);


useEffect(() => {

    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error('Data Not Fetched');
        } 
        return res.json();
    })
    .then((data) => {
        setData(data);
        setIsPending(false)
    })
    .catch((err) => {
        console.log(err)
    })
}, [url])

    return { data, isPending }
}
 
export default useFetch;