import useFetch from "./useFetch";

const Info = () => {
    const { data, isPending } = useFetch('https://api.spacexdata.com/v3/info')

    return ( 
        <div className="info">
            <h1>Company Data</h1>
            {isPending && <h1>Loading....</h1>}
            {data && <div>
                        <h3>Founder: {data.founder}</h3>
                        <h4>Headquarters: {data.headquarters.address}, {data.headquarters.city}, {data.headquarters.state}</h4>
                        <h4>Founded: {data.founded}</h4>
                        <h4>Employess: {data.employees}</h4>
                        <h4>Vehicles: {data.vehicles}</h4>
                        <h4>Launch Sites: {data.launch_sites}</h4>
                        <h4>CEO: {data.ceo}</h4>
                        <h4>CTO: {data.cto}</h4>
                        <h4>COO: {data.coo}</h4>
                        <h4>Valuation: ${data.valuation}</h4>
                    </div>}
        </div>
     );
}
 
export default Info;