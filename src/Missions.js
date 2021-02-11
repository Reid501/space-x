import useFetch from "./useFetch";


const Missions = () => {
    const {data, isPending} = useFetch('https://api.spacexdata.com/v3/missions?limit=3')
    console.log(data)
    
    return ( 
        <div>
            {isPending && <h1>Loading....</h1>}
            {data && data.map((data) => (
                <div>
                    <h2>{data.mission_name}</h2>
                    <h3>Mission ID: {data.mission_id}</h3>
                </div>
            ))}
        </div>
     );
}
 
export default Missions;