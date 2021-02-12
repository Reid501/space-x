import useFetch from "./useFetch";


const Missions = ({ setSelectedMission }) => {
    const {data, isPending} = useFetch('https://api.spacexdata.com/v3/missions?limit=3')
    
    return ( 
        <div className="mission-container">
            <h2>Missions</h2>
            {isPending && <h1>Loading....</h1>}
            {data && data.map((data) => (
                <div className="mission" key={data.mission_id}>
                    <h3>{data.mission_name}</h3>
                    <h4>Mission ID: {data.mission_id}</h4>
                    <h4>Manufacturers: <span>{data.manufacturers[0]}</span></h4>
                    <button onClick={() => setSelectedMission(data.description)}>Mission Info</button>
                </div>
            ))}
        </div>
     );
}
 
export default Missions;