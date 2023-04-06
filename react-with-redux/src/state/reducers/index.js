/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 26/01/2023 - 14:17:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/01/2023
    * - Author          : 
    * - Modification    : 
**/

import {combineReducers} from "redux"
import accountReducer from './accountReducer'

const reducers = combineReducers({
    account: accountReducer
}) 

export default reducers; 