


import { useReducer } from 'react'
import  {Global}    from    './context'
export  default function    GlobalReducer({children}){
    const reducer=(state,action)=>{
        switch(action.type){
          case 'darkMode': return   {...state,dark:action.content}
          case  'newItem':return     {...state,new:action.content}
          case    'save'  :return   {...state,save:action.content}
          default :return state
        }
          }
          const   initialState={
            dark:false,
            new:false
          }
      const   [state,dispatch]=useReducer(reducer,initialState)
    
    return      <Global.Provider    value={{state,dispatch}}>

        {children}
    </Global.Provider>
}

