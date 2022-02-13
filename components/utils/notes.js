import { useContext, useState } from "react"
import { Global } from "../../cotext/context"
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { RedoOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export      default   function  Notes(){
    const       {state,dispatch}=useContext(Global)

// if(typeof window==='object'){
//     const       newNote=document.querySelector('.new_note')
//     const   all=document.querySelector('.all_item')
//     document.addEventListener('click',(e)=>{
//         if(newNote!==e.target&&state.new){
// dispatch({type:"newItem",content:false})
// // console.log()
//         }
//     })
// }

  
const       [title,setTitle]=useState('')
const   [newNote,setNewNote]=useState('')
console.log(title)
console.log(newNote)
    const       [state1,setState]=useState([{content:'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',title:'asasfdsdfasdfwerewrqwerqwe'},
    {content:'sdf',title:'sdf'},
    {content:'sdf',title:'asdf'},
    {content:'sdf',title:'asdfedsafasd'},
    {content:'sdf',title:'asdfqwrwerc'}])
const   buttons=[
{Icon:NotificationsNoneIcon},
{Icon:MoreVertIcon},
{Icon:ImageIcon},
{Icon:ColorLensOutlinedIcon},
{Icon:UndoOutlinedIcon},
{Icon:RedoOutlined},

]
return      (
    <section    className={`
    absolute
    top-20
    left-32
    min-h-[80vh]
    flex
    flex-wrap
    items-start
    justify-between
    gap-8
    ${state.dark?"bg-black":"bg-white"}
    `}>

{state1.map(item=>(
    <div    className=" 
    hover:scale-105
    translate-all
    duration-300
    ease-in-out
    border-solid
    border-2
    border-gray-200
    rounded-md 
    
    ">


<div key={item.title} 
    onClick={()=>{
        dispatch({type:'newItem',content:true})
        setTitle(item.title)
        setNewNote(item.content)

     
      
    }}
    
    
    className={`all_item 
    min-w-[250px]
    max-w-[250px]
    px-4
    whitespace-pre-wrap
    overflow-hidden
    cursor-pointer
    break-words
    max-h-[70vh]
    py-2`}>
<h1>{item.title}</h1>
<p  className="mb-2">{item.content}</p>

</div>
<div    className="flex justify-between
pb-2">
    {buttons.map(({Icon})=>{
        return(
          <IconButton>
                <Icon 
                    onClick={()=>{
                        console.log('haisd')
                    }}  className={`
            ${state.dark?'text-white':'text-[#0000008e]'}
            text-sm`
        }/>
          </IconButton>
        )
    })}
</div>

    </div>

))}


<div
   className="
self-end
ml-auto
p-2
bg-green-dark
rounded-full
cursor-pointer
hover:bg-accent-color
drop-shadow-xl
text-white
fixed
bottom-10
right-10
"

onClick={()=>
    {
        setTitle('')
        setNewNote('')
    dispatch({type:"newItem",content:true})}}

>
  <AddIcon/>  
</div>

{state.new&&<section    className="new_note fixed top-[10%]  lg:left-[32%]  xl:left-[30%] md:w-[80%] xs:w-[40%]  px-8  sm:left-[18%]     xxs:left-[10%] ">
    
<div    className={`new-items
px-2
relative
drop-shadow-2xl
max-h-[70vh]
mb-2
overflow-y-auto
min-h-[10vh]
md:w-[600px]

xxs:w-[350px]
pt-2
flex
gap-4
justify-between

flex-col
rounded-md
border-2
border-solid
  border-gray-200
  ${state.dark?'bg-black  ':'bg-white'}
  
  `}>
<div    className={`
relative
${state.dark?'bg-black  text-white':'bg-white text-[#0000008e]'}`}
 
     >
{title===''&&<div    className="absolute
 top-0 
 z-10
 ">Title</div>}
<div  
 className={`
 title
 z-20
 ${state.dark?'bg-black  text-white':'bg-white text-[#0000008e]'}   outline-none`}
 spellCheck="true"
  tabIndex="0"
   dir="ltr"
   contentEditable="true" 
    aria-multiline="true" 
    role="textbox"
     aria-autocomplete="off" 
     aria-label="Title"
    //  onFocus={(e)=>{
    //      if(e.target.innerHTML){
    //          console.log(e.target.innerHTML)
    //      }
    //  }}


    onInput={(e)=>{
setTitle(e.target.innerHTML)
    }}
     >
{title}
</div>
</div>

<div    className={`
relative ${state.dark?'bg-black  text-white':'bg-white    text-[#0000008e]'}
`}>
{newNote===''&&<div    className={`
absolute
top-0
${state.dark?'  text-white':'   text-[#0000008e]'}
`}>Take a Note...</div>}

<div    className={`
new-note
outline-none
pb-8
`}
contentEditable="true"
aria-multiline="true" role="textbox"
dir="ltr"
tabIndex="0"
onInput={(e)=>setNewNote(e.target.innerHTML)}

>
   {newNote}
    </div>
</div>


    </div>
   
    <div    className={`rounded-md  
    py-2
    px-2
    text-gray-200
    flex
    grow
    shrink
    md:w-[600px]
    xxs:w-[350px]


    ${state.dark?'bg-black  text-white':'bg-white    text-[#0000008e]'}
    items-center
    gap-2
     basis-auto
     drop-shadow-2xl`}>
{
    buttons.map(({Icon},index)=>{return   (
       <IconButton  key={index}>
            <Icon className={`
            ${state.dark?'text-white':'text-[#0000008e]'}
            text-sm`
        }/>
       </IconButton>
    )})
}
<button className={`
 ml-auto 
 ${state.dark?'text-gray-200':"text-[#0000008e]"}
`}  onClick={()=>dispatch({type:"newItem",content:false})} >close</button>

    </div>

    
    </section>}





    </section>
)


}