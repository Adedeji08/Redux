/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 28/01/2023 - 22:07:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/01/2023
    * - Author          : 
    * - Modification    : 
**/
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { actionCreators } from './state/index';

function App() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()

  const {withdrawMoney,depositMoney } = bindActionCreators(actionCreators, dispatch)



  return (
    <div className="App">
     <h1>{account}</h1>
     <button onClick={() => depositMoney(1000)} >Deposit</button>
     <button onClick={() => withdrawMoney(1000)} >widthdraw</button>
    </div>
  );
}

export default App;
 