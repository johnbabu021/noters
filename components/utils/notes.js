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
import BackgroundDetails from "../core/backgroundDetails";

export      default   function  Notes(){
    const       {state,dispatch}=useContext(Global)


const       initialState={
    color:false,
    newNote:'',
    title:'',
background:[],
backgroundColor:[],
customImage:[]

}
const   reducer=(state,action)=>{
    switch(action.type){
        case    'color' :return {...state,color:action.content}
        case    'index':return  {...state,index:action.index,upper:action.upper}
        case    'colorSelection':    return  {...state,colorSrc:action.content}
        case    'newNote':return    {...state,newNote:action.content}
        case    'title':    return      {...state,title:action.content}
        case    'wholeIndex':   return      {...state,wholeIndex:action.index}
        case     'backgroundImage' :return  {...state,background:[...state.background,{index:action.index,ImageSrc:action.ImageSrc}]}
        case     'backgroundColor'  :return {...state,backgroundColor:[...state.backgroundColor,{index:action.index,backgroundColor:action.ColorSrc}]}
        case    'imageSrc'  :   return  {...state,customImage:[...state.customImage,{index:action.index,src:action.src}]}
        default :return {state}
    }
}


const   [newState,newDispatch]=useReducer(reducer,initialState)
console.log(newState.index)

    const       [state1,setState]=useState([{content:'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',itemIndex:5,title:'asasfdsdfasdfwerewrqwerqwe'},
    {content:'sdf',itemIndex:1,title:'sdf'},
    {content:'sdf',itemIndex:2,title:'asdf'},
    {content:'sdf',itemIndex:3,title:'asdfedsafasd'},
    {content:'sdf',itemIndex:4,title:'asdfqwrwerc'}])

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

let img
const   buttons=[
{Icon:NotificationsNoneIcon,onClick:(itemIndex)=>{console.log('asdf')}},
{Icon:ImageIcon,onClick:(itemIndex)=>{
if(typeof   window==='object'){
   const    input= document.createElement('input')
   input.type='file'
   input.name='avatar'
   input.accept="image/png,image/jpeg"
   input.click()
   input.addEventListener('change',()=>{
    const   file=input.files[0]
if(!file.type.startsWith('image/')){return}
img=document.createElement('img')
img.file=file

const   reader=new  FileReader()
reader.onload=(function(aImg){return   function    (e){
    newDispatch({type:'imageSrc',src:e.target.result,index:itemIndex})
    

    aImg.src=e.target.result}})(img)
reader.readAsDataURL(file)



})
}

}},
{Icon:ColorLensOutlinedIcon,onClick:(itemIndex)=>{
    newDispatch({type:"color",content:true})
}},
{Icon:MoreVertIcon,onClick:(itemIndex)=>{console.log('asdf')}},

{Icon:UndoOutlinedIcon,onClick:(itemIndex)=>{console.log('asdf')}},
{Icon:RedoOutlined,onClick:(itemIndex)=>{console.log('asdf')}},

]
return      (
    <section    className={`
    absolute
    top-14
    left-16
    min-h-[80vh]
    flex
    min-w-[100vw]
    flex-wrap
    items-start
    pt-4
    justify-between
    gap-8
    px-4
    ${state.dark?"bg-black":"bg-white"}
    `}>

{state1.map(({title,content,itemIndex})=>(
   <div key={itemIndex}>
      
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
  ${(newState.background.find(({index})=>index===itemIndex))&&'text-white'}
    
    `}>


<div key={itemIndex} 
    onClick={()=>{
        dispatch({type:'newItem',content:true})
     newDispatch({type:'newNote',content:title})
     newDispatch({type:'title',content:content})
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
        {
    newState.customImage.filter(({index})=>index===itemIndex)&&
    <div    className="grid grid-cols-3">
        {
            newState.customImage.filter(({index})=>index===itemIndex).map(({src},customIndex)=>{
             
                return customIndex<=5&& <img className="w-full h-full min-w-[100px] min-h-[100px] " src={src}/>})
        }
      
     
    </div>
    }
<h1>{title}</h1>
<p  className="mb-2"    >{content}</p>


</div>
<div    className="flex justify-between
pb-2">
    {buttons.map(({Icon,onClick},index)=>{
        return(
          index<4&& <IconButton   onClick={async()=>{
            await  newDispatch({type:"index",index:itemIndex,upper:false})
            onClick(itemIndex)
          
        }}   key={index}>
                <Icon 
                     className={`
            ${(newState.background.find(({index})=>index===itemIndex)||state.dark)?'text-white':'text-[#0000008e]'}
            text-sm`
        }/>
          </IconButton>
        )
    })}
</div>



    </div>
   { (newState.color&&newState.index===itemIndex&&newState.upper===false)&&
   <BackgroundDetails  itemIndex={itemIndex} colors={colors} state={state}  newDispatch={newDispatch}   images={images} newState={newState} />
   }
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
    dispatch({type:"newItem",content:true})
dispatch({type:'save',content:true})

}}

>
  <AddIcon/>  
</div>
{/* state.new creates an editable window */}
{state.new&&<section    className="new_note fixed top-[10%]  lg:left-[32%]  xl:left-[30%]  md:w-[690px]
xxs:w-[440px]  px-8  sm:left-[18%]     xxs:left-[10%] ">
 
<div
    style={{background:`${newState.background.find(({index})=>index===newState.wholeIndex)
    ?`url(${newState.background.find(({index})=>index===newState.wholeIndex).ImageSrc})`
    :`${state.dark?'#1c1c1e':'white'}`}`}}

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
         <div className="grid grid-cols-3">
{!state.save&&newState.customImage.filter(({index})=>index===newState.wholeIndex)?.map(({src})=>
<img    className="" src={src}/>
)}
</div>

{newState.title===''&&<div    className="absolute
 top-0 
 z-10
 ">Title</div>}
<div  

 className={`
 title
 z-20
 ${(state.dark||newState.background.find(({index})=>index===newState.wholeIndex))?' text-white':' text-[#0000008e]'}   outline-none`}
 spellCheck="true"
  tabIndex="0"
   dir="ltr"
   contentEditable="true" 
    aria-multiline="true" 
    role="textbox"
     aria-autocomplete="off" 
     aria-label="Title"
     autoComplete="true"


    onInput={(e)=>{
    newDispatch({type:'title',content:e.target.innerHTML})
    }}
     >
{newState.title}
</div>
</div>

<div    className={`
relative ${(state.dark||newState.background.find(({index})=>index===newState.wholeIndex))?' text-white':'    text-[#0000008e]'}
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

style={{background:`${newState.backgroundColor.find(({index})=>index===newState.wholeIndex)
?newState.backgroundColor.find(({index})=>index===newState.wholeIndex).backgroundColor
:`${state.dark?'#1c1c1e':'white'}`}`}}

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
    buttons.map(({Icon,onClick},index)=>{return   (
       <IconButton  key={index} onClick={async()=>{
        await  newDispatch({type:"index",index:newState.wholeIndex,upper:true})

           onClick(newState.wholeIndex)
       }}>
            <Icon className={`
            ${(state.dark||newState.backgroundColor.find(({index})=>index===newState.wholeIndex))?'text-white':'text-[#0000008e]'}
           
            text-sm`
        }/>
       </IconButton>
    )})
}
<button className={`
 ml-auto 
 ${(state.dark||newState.backgroundColor.find(({index})=>index===newState.wholeIndex))?'text-gray-200':"text-[#0000008e]"}
`}  onClick={()=>
    {
        console.log(state.new,"newItem")
if(state.save){
    console.log(newState)
    setState(state1=>[...state1,{title:newState.title,content:newState.newNote,itemIndex:Math.floor(Math.random()*8000)}])
    dispatch({type:'save',content:false})
    }
    else{
        // console.log(state1.splice(state1.indexOf(state1.find(({itemIndex})=>itemIndex===newState.wholeIndex)),1,{title:'asdf',content:'adfsasdf',itemIndex:3455}))
      //setstate=>state is issue
      let   date
        setState(state1=>[...state1,
           
          state1.splice(
                state1.indexOf(state1.find(({itemIndex})=>
            itemIndex===newState.wholeIndex)),1,
            {title:newState.title,content:newState.newNote,itemIndex:Math.floor(Math.random()*8000)})
            
        ]
            
            )
    }
    dispatch({type:"newItem",content:false})
    console.log(state1)

}


}



>close</button>

    </div>
    { (newState.color&&newState.index===newState.wholeIndex&&newState.upper===true)&&
   <BackgroundDetails  itemIndex={newState.wholeIndex} colors={colors} state={state}  newDispatch={newDispatch}   images={images} newState={newState} />
   }

    
    </section>}





    </section>
)


}