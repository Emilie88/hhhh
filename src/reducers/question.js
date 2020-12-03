const stateInit= {
    count:0,
    questions: [],
    question:'',
    message:''
}
const reducer = (state = stateInit,action)  =>{
    switch(action.type){

        case 'ADD_QUESTION':
                if (state.question.trim() === "") {
                    return {
                      ...state,
                      message: "Attention le champ est vide",
                    };
                  }
           
            // On doit retourner un nouveau state (sans toucher à la source de vérité)
             return { 
                 ...state, 
                 questions : state.questions.concat(state.question),
                 count : state.count + 1,
                 question:'',
                 message:''
             };
        case 'INCREMENT_COUNT':
            return{
                ...state,
                count: state.count + action.num
            }  ;   

        case 'ON_CHANGE':
                const {name,value} = action;
            return{
                ...state,
        
                [name]:value
            }  ;   
 
         // Si aucun changement de state
         default:
             return state;
     }
}
export default reducer;