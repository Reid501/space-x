const Modal = ({ selectedMission, setSelectedMission }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedMission(null)
        }
    }

    return ( 
        <div className="backdrop" onClick={handleClick}>
            <div>
                <h2 className="modal-header">Mission Details</h2>
                <p>{selectedMission}</p>
            </div>
        </div>
     );
}
 
export default Modal;