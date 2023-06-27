import logo from './logo.svg';
import './App.css';
import './styles.css'
import React,{useReducer} from 'react'

const Actions={
  ADD_DIGIT:'add-digit',
  CLEAR:'clear',
  CHOOSE_OPERATOR:'choose-operator',
  DELETE : 'delete',
  EQUALS:'equals'
}

let evaluate=({currentOperand,previousOperand,operation})=>
{
  let curr= parseFloat(currentOperand);
  let prev= parseFloat(previousOperand);
  let op= operation;
  console.log('op',op)
  switch(op)
  {
    case '/' : return prev/curr;
    case '*' : return curr * prev;
    case '-' : return prev-curr;
    case '+' : return prev+curr;
    default : return curr;
  }

}

let reducer=(state,action)=>
{
  console.log('state',state)
  console.log('action type',action.type,action.payload)
  switch(action.type)
  {
    case 'add-digit' : return {...state, currentOperand : `${state.currentOperand || ""}${action.payload}`}
    case 'clear' : return {};
    case 'choose-operator' : if(!state.currentOperand && !state.previousOperand)
                              {
                                console.log('insider 1st if choose')
                                return state;}
                              
                              if(!state.previousOperand)
                              {
                                console.log('inside 2nd if')
                               return {...state, previousOperand : state.currentOperand,
                                operation: action.payload,
                                currentOperand : null

                                }
                              }
                              return {
                                ...state,
                                previousOperand : evaluate(state),
                                currentOperand : null,
                                operation : action.payload
                              }
    case 'delete' : return {}
    case 'equals' :  if(state.previousOperand==null || state.currentOperand==null || state.operation==null )
                              return state;
                              
                    return {
                      ...state, previousOperand : null,
                         currentOperand : evaluate(state),
                          operation : null
    }
  }

}
function App() {

  const [{currentOperand,previousOperand,operation},dispatch]=useReducer(reducer,{currentOperand:'',previousOperand:'',operation:''})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
          <div className="current-operand">{currentOperand}</div>
      </div>

      <button className="span-two" onClick={()=>dispatch({type:Actions.CLEAR})}>AC</button>
      <button>DEL</button>
      <button onClick={()=>dispatch({type:Actions.CHOOSE_OPERATOR,payload:'/'})}>/</button>
      <button  onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:1})}>1</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:2})}>2</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:3})}>3</button>
      <button  onClick={()=>dispatch({type:Actions.CHOOSE_OPERATOR,payload:'*'})}>*</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:4})}>4</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:5})}>5</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:6})}>6</button>
      <button  onClick={()=>dispatch({type:Actions.CHOOSE_OPERATOR,payload:'-'})}>-</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:7})}>7</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:8})}>8</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:9})}>9</button>
      <button  onClick={()=>dispatch({type:Actions.CHOOSE_OPERATOR,payload:'+'})}>+</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:'.'})}>.</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:0})}>0</button>
      <button className="span-two"  onClick={()=>dispatch({type:Actions.EQUALS,payload:'='})}>=</button>
          
    </div>
  );
}

export default App;
