import useFetch from "./useFetch";

const Rockets = () => {
    const { data, isPending} = useFetch('https://api.spacexdata.com/v3/rockets?limit=3')
    console.log(data);

    return ( 
        <div className="rocket-data">
            <h2>Rockets</h2>
            {isPending && <h1>Loading....</h1>}
            {data && data.map((data) => (
                <div className="rocket" key={data.id}>
                    <h4><span>Name: {data.rocket_name}</span></h4>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>
     )
}
 
export default Rockets;