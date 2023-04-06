/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 27/01/2023 - 09:31:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/01/2023
    * - Author          : 
    * - Modification    : 
**/
export const depositMoney = (amount) => {
      return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
      }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
     dispatch({
        type: "Withdraw",
        payload: amount
     })
    }
}