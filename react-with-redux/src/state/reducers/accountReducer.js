/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 26/01/2023 - 13:53:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/01/2023
    * - Author          : 
    * - Modification    : 
**/
const reducer = (state = 0, action) => {
     switch (action.type){
        case "deposit":
        return state + action.payload
        case "widthdraw":
            return state - action.payload
        default:
            return state
     } 
}

export default reducer
