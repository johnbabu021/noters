import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { Global } from '../../cotext/context';
export  default function    Header(){
const       {state,dispatch}=useContext(Global)
    return  (
        <header className={`fixed top-0 h-14 w-[100vw] 
        shadow-md
        flex
        z-50
        ${state.dark?"bg-black":'bg-white'}
        items-center
        justify-around
        
        `}>
<h1>Noters</h1>
<input  type="text" placeholder="search"    className={`
outline-none 
border-solid
 border-2 
 border-gray-200
rounded-md
p-1
 ${state.dark?"bg-black":"bg-white"}
 `}/>
 <div onClick={()=>{dispatch({type:'darkMode',content:!state.dark})}}>
{state.dark?<DarkModeIcon/>:<LightModeIcon />}
</div>

<input  type={`button`} value={'Login'} className="cursor-pointer
bg-green-dark
text-white
p-1
rounded-md
w-16

"/>


        </header>
    )
}