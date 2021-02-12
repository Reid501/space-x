import useFetch from "./useFetch";


const Missions = ({ setSelectedMission }) => {
    const {data, isPending} = useFetch('https://api.spacexdata.com/v3/missions?limit=3')
    console.log(data)
    
    return ( 
        <div className="mission-container">
            {isPending && <h1>Loading....</h1>}
            {data && data.map((data) => (
                <div className="mission" key={data.mission_id}>
                    <h2>{data.mission_name}</h2>
                    <h3>Mission ID: {data.mission_id}</h3>
                    <button onClick={() => setSelectedMission(data.description)}>Mission Info</button>
                </div>
            ))}
        </div>
     );
}
 
export default Missions;