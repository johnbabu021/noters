import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { IconButton } from '@mui/material';
import { Global } from '../../cotext/context';

export  default function    SideBar(){
    const       {state}=useContext(Global)

const       [width,setWidth]=useState(false)
    const   inputValue=[
        {Icon:LightbulbOutlinedIcon,name:'Notes'},
        {Icon:PushPinOutlinedIcon,name:"Pinned"},
        {Icon:ArchiveOutlinedIcon,name:"Reminders"},
        {Icon:DeleteOutlinedIcon,name:"Recycle Bin"}
    ]
    return  (
        <aside  className={`fixed 
        top-14
        flex
        z-10
        drop-shadow-xl
        items-start
        flex-col
        min-h-[90vh]
        h-[100%]
        gap-10
        pl-4
        pt-4
        transition-width
        duration-300
        ease-out        
        ${width?'w-28':'w-16'}
        ${state.dark?"bg-black":"bg-white"}
        
        `}>
            <MenuIcon className="cursor-pointer"  onClick={()=>{

                setWidth(!width)
                console.log(width)
            }}/>
          {
              inputValue.map(({name,Icon})=>{
                  return(
                 
                         <button>{width?name:<Icon/>}</button>
                     
                
                  )
              })
          }

        </aside>
    )
}