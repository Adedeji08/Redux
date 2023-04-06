/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 26/01/2023 - 14:29:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/01/2023
    * - Author          : 
    * - Modification    : 
**/
import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers/index";
import thunk from "redux-thunk"
 


export const store = createStore(
    reducers, 
    {},
    applyMiddleware(thunk)
)