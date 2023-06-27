import logo from './logo.svg';
import './App.css';
import './styles.css'
import React,{useReducer} from 'react'

const Actions={
  ADD_DIGIT:'add-digit',
  CLEAR:'clear',
  ADD_OPERATOR:'add-operator',
  EQUALS:'equals'
}

let reducer=(state,action)=>
{
  console.log('state',state)
  console.log('action type',action.type)
  switch(action.type)
  {
    case 'add-digit' : return {...state, currentOperand : `${state.currentOperand }${action.payload}`}
    case 'clear' : return {currentOperand: 0};
    case 'add-operator' : return {...state,operation : action.payload}
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
      <button onClick={()=>dispatch({type:Actions.ADD_OPERATOR,payload:'/'})}>/</button>
      <button  onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:1})}>1</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:2})}>2</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:3})}>3</button>
      <button>*</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:4})}>4</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:5})}>5</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:6})}>6</button>
      <button>-</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:7})}>7</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:8})}>8</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:9})}>9</button>
      <button>+</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:'.'})}>.</button>
      <button   onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:0})}>0</button>
      <button className="span-two">=</button>
          
    </div>
  );
}

export default App;
