import { useContext, useReducer, useState } from "react"
import { Global } from "../../cotext/context"
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import {  RedoOutlined } from "@mui/icons-material";
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
const  newdata={ImageSrc: "https://www.gstatic.com/keep/backgrounds/recipe_dark_thumb_0615.svg",index: 2}

const       initialState={
    color:false,
    newNote:'',
    title:'',
background:[]

}

const   reducer=(state,action)=>{
    console.log(state,"state")
    switch(action.type){
        case    'color' :return {...state,color:action.content}
        case    'index':return  {...state,index:action.index}
        case    'imageSelection':return {...state,ImageSrc:action.content}
        case    'colorSelection':    return  {...state,colorSrc:action.content}
        case    'newNote':return    {...state,newNote:action.content}
        case    'title':    return      {...state,title:action.content}
        case    'wholeIndex':   return      {...state,wholeIndex:action.index}
        case     'backgroundImage' :return  {...state,background:[...state.background,{index:action.index,ImageSrc:action.ImageSrc}]}
        default :return {state}
    }
}


const   [newState,newDispatch]=useReducer(reducer,initialState)
console.log(newState)

    const       [state1,setState]=useState([{content:'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',title:'asasfdsdfasdfwerewrqwerqwe'},
    {content:'sdf',title:'sdf'},
    {content:'sdf',title:'asdf'},
    {content:'sdf',title:'asdfedsafasd'},
    {content:'sdf',title:'asdfqwrwerc'}])

    const   images=[
        {
            src:'https://www.gstatic.com/keep/backgrounds/travel_dark_thumb_0615.svg'
        },{
            src:'https://www.gstatic.com/keep/backgrounds/places_dark_thumb_0615.svg'
        },
        {src:'https://www.gstatic.com/keep/backgrounds/recipe_dark_thumb_0615.svg'
    }
    ]
const       colors=[
    {bgColor:'#16504b'},
    {bgColor:"#1e3a5f"},
    {bgColor:"#5c2b29"}
]


const   buttons=[
{Icon:NotificationsNoneIcon,onClick:()=>{console.log('asdf')}},
{Icon:ImageIcon,onClick:()=>{console.log('asdf')}},
{Icon:ColorLensOutlinedIcon,onClick:()=>{
    newDispatch({type:"color",content:true})
}},
{Icon:MoreVertIcon,onClick:()=>{console.log('asdf')}},

{Icon:UndoOutlinedIcon,onClick:()=>{console.log('asdf')}},
{Icon:RedoOutlined,onClick:()=>{console.log('asdf')}},

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

{state1.map((item,itemIndex)=>(
   <div key={itemIndex}>
       {/* {
        //    console.log(newState.background.includes(itemIndex))
console.log(newState.background.indexOf(newState.background.find(({index})=>{
    console.log(index,itemIndex)
      return  index===itemIndex})))
    

    // newState.background.map(item=>{
    //     console.log(item.index,itemIndex)
    // })

}{
   console.log(newState.background.indexOf(newdata))
} */}
        <div    style={{
            backgroundImage:`url(${(newState.background.find(({index})=>index===itemIndex)
            &&newState.background.find(({index})=>index===itemIndex).ImageSrc)})`
        
        }} 
             className={`
        
    hover:scale-105
    transition-all
    z-30
    duration-300
    ease-in-out
    border-solid
    border-2
    border-gray-200
    rounded-md 
  ${(newState.ImageSrc&&newState.index===itemIndex)&&'text-white'}
    
    `}>


<div key={item.title} 
    onClick={()=>{
        dispatch({type:'newItem',content:true})
     newDispatch({type:'newNote',content:item.title})
     newDispatch({type:'title',content:item.content})
     newDispatch({type:'wholeIndex',index:itemIndex})
      
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
<p  className="mb-2"    >{item.content}</p>

</div>
<div    className="flex justify-between
pb-2">
    {buttons.map(({Icon,onClick},index)=>{
        return(
          index<4&& <IconButton   onClick={()=>{
            onClick()
            newDispatch({type:"index",index:itemIndex})
          
        }}   key={index}>
                <Icon 
                     className={`
            ${(state.dark||newState.ImageSrc&&newState.index===itemIndex)?'text-white':'text-[#0000008e]'}
            text-sm`
        }/>
          </IconButton>
        )
    })}
</div>



    </div>
    {(newState.color&&newState.index===itemIndex)&&<div>
<div    className={`${state.dark?'text-white bg-black':'text-[#0000008e] bg-white'}
 z-40  w-[100%] 
 h-[150px]
 rounded-md
 shadow-lg
 flex
 flex-col
 justify-between
 py-2
 
 px-2
 

`}>
    <div    className="flex justify-between">
{images.map(({src})=>{
    return(
       
            
                <img  src={src} className={`
                w-8 h-8 cursor-pointer border-2 border-transparent	
                border-solid
                hover:${state.dark?'border-white':'border-black'}
                hover:scale-105
                transition-all
                duration-300 
                active:scale-90
                rounded-full  
                   object-contain`}  alt="" 
                   onClick={()=>{
                    const   exists=newState.background.find(({index})=>index===itemIndex)
                    let content
                    if(exists){
                      content=newState.background.splice(newState.background.indexOf(exists),1,{index:itemIndex,ImageSrc:src})
                    }
                    else{
                        content=newState.background.push({index:itemIndex,ImageSrc:src})
                    }
                    
                    newDispatch({type:"backgroundImage",index:itemIndex,ImageSrc:src})   
                    newDispatch({type:"imageSelection",content:src})}}
                   />
            
   
    )
})}


    </div>
    <hr></hr>
    <div    className="flex justify-between">

{colors.map(({bgColor})=>{
    return(
        <div  className={`
        w-8 h-8 cursor-pointer border-2 border-transparent	
        border-solid
        hover:${state.dark?"border-white":'border-black'}
        active:scale-90
        transition-all
        duration-300
        rounded-full    object-contain
         hover:scale-105
         `} 

         onClick={()=>newDispatch({type:'colorSelection',content:bgColor})}
         style={{background:bgColor}}>
            </div>
    )
})}
    </div>
    </div>
       
        </div>}
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
        newDispatch({type:'title',content:''})
        newDispatch({type:'newNote',content:''})
    dispatch({type:"newItem",content:true})}}

>
  <AddIcon/>  
</div>

{state.new&&<section    className="new_note fixed top-[10%]  lg:left-[32%]  xl:left-[30%] md:w-[80%] xs:w-[40%]  px-8  sm:left-[18%]     xxs:left-[10%] ">
    
<div
    style={{background:`${(newState.ImageSrc&&newState.wholeIndex===newState.index)&&`url(${newState.ImageSrc})`}`}}

className={`new-items
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
  ${state.dark?'bg-black  text-white':'bg-white  text-[#0000008e]'}
  
  `}>
<div    className={`
relative
${state.dark?'text-white':'text-[#0000008e]'}`}
 
     >
{newState.title===''&&<div    className="absolute
 top-0 
 z-10
 ">Title</div>}
<div  

 className={`
 title
 z-20
 ${(state.dark||newState.ImageSrc&&newState.wholeIndex===newState.index)?' text-white':' text-[#0000008e]'}   outline-none`}
 spellCheck="true"
  tabIndex="0"
   dir="ltr"
   contentEditable="true" 
    aria-multiline="true" 
    role="textbox"
     aria-autocomplete="off" 
     aria-label="Title"
     autoComplete="true"
    //  onFocus={(e)=>{     
    //      if(e.target.innerHTML){
    //          console.log(e.target.innerHTML)
    //      }
    //  }}


    onInput={(e)=>{
    newDispatch({type:'title',content:e.target.innerHTML})
    }}
     >
{newState.title}
</div>
</div>

<div    className={`
relative ${(state.dark||newState.ImageSrc&&newState.wholeIndex===newState.index)?' text-white':'    text-[#0000008e]'}
`}>
{newState.newNote===''&&<div    className={`
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
onInput={(e)=>newDispatch({type:'newNote',content:e.target.innerHTML})}

>
   {newState.newNote}
    </div>
</div>


    </div>
   
    <div 

style={{background:`${newState.colorSrc&&newState.colorSrc}`}}

    className={`rounded-md  
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
            ${(state.dark||newState.colorSrc)?'text-white':'text-[#0000008e]'}
           
            text-sm`
        }/>
       </IconButton>
    )})
}
<button className={`
 ml-auto 
 ${(state.dark||newState.colorSrc)?'text-gray-200':"text-[#0000008e]"}
`}  onClick={()=>dispatch({type:"newItem",content:false})} >close</button>

    </div>

    
    </section>}





    </section>
)


}