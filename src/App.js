import { useState } from "react";
import Header from "./Header";
import Info from "./Info";
import Missions from "./Missions";
import Modal from "./Modal";

function App() {
const [selectedMission, setSelectedMission] = useState(null);

  return (
    <div className="App">
      <Header />
      <Missions setSelectedMission={setSelectedMission} />
      { selectedMission && <Modal selectedMission={selectedMission} setSelectedMission={setSelectedMission}/>}
      <div className="lower-sec">
        <Info />
      </div>
    </div>
  );
}

export default App;
