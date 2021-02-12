import useFetch from "./useFetch";


const Missions = ({ setSelectedMission }) => {
    const {data, isPending} = useFetch('https://api.spacexdata.com/v3/missions?limit=3')
    
    return ( 
        <div className="mission-container">
            <h2>Missions</h2>
            {isPending && <h1>Loading....</h1>}
            <div className="mission-box">
            {data && data.map((data) => (
                <div className="mission" key={data.mission_id}>
                    <h4>{data.mission_name}</h4>
                    <h4>Mission ID: {data.mission_id}</h4>
                    <h4>Manufacturers: <span>{data.manufacturers[0]}</span></h4>
                    <button onClick={() => setSelectedMission(data.description)}>Mission Info</button>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default Missions;