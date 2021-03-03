import {Figure} from 'react-bootstrap'
import Anas from "../../Profile/ANAS.png"
function App() {

  return (
<div>
<Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="pic"
    src={Anas}
  />
</Figure>
</div>
);
}

export default App;