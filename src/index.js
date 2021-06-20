import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

// //Store ->THE GLOBAL STATE

// //Action
// const increment = ()=>{
//   return{
//     type: 'INCREMENT'
//   }
// }
// const decrement = ()=>{
//   return{
//     type: 'DECREMENT'
//   }
// }

// //Reducer
// const counter = (state=0, action)=>{ //Here, the state is the inital value of the state
//   switch(action.type){
//     case 'INCREMENT':
//       return state+1;
//     case 'DECREMENT':
//       return state-1;
//   }
// }

// let store = createStore(counter);


// //Display
// store.subscribe(()=> console.log(store.getState()));


// //Dispatch
// store.dispatch(increment());  //We always dispatch an ACTION. Once we have dispatched, our reducer will take a look at what action was dispatched. 
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());

const myStore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
