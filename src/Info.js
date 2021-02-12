import useFetch from "./useFetch";

const Info = () => {
    const { data, isPending } = useFetch('https://api.spacexdata.com/v3/info')

    return ( 
        <div className="info">
            <h2>Company Data</h2>
            {isPending && <h1>Loading....</h1>}
            {data && <div className="info-container">
                        <h4><span>Founder:</span> {data.founder}</h4>
                        <h4><span>Headquarters:</span> {data.headquarters.address}, {data.headquarters.city}</h4>
                        <h4><span>Founded:</span> {data.founded}</h4>
                        <h4><span>Employess:</span> {data.employees}</h4>
                        <h4><span>Vehicles:</span> {data.vehicles}</h4>
                        <h4><span>Launch Sites:</span> {data.launch_sites}</h4>
                        <h4><span>CEO:</span> {data.ceo}</h4>
                        <h4><span>CTO:</span> {data.cto}</h4>
                        <h4><span>COO:</span> {data.coo}</h4>
                        <h4><span>Valuation:</span> ${data.valuation}</h4>
                    </div>}
        </div>
     );
}
 
export default Info;