import './App.css';
import Info from "./Profile/Component/Info"

import FGRS from "./Profile/Component/figure"


const style ={ width:"300px"}
  const handleName = (name) => {
    alert(`Welcome ${name}`);
  };
function App() {

  return (
    <div className="App">
      <FGRS />
     <Info
        fullname="Anas Bedhiafi"
        bio="Num 97942477 "
        profission="IT Developer"
         handleName={handleName}
        >
         
          

        </Info>
    </div>
    
  );
}

export default App;
