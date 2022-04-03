export      default function    BackgroundDetails({newState,itemIndex,images,colors,state,newDispatch})   {

   return <div>
    <div    className={`${state.dark?'text-white bg-black':'text-[#0000008e] bg-white'}
     z-40  w-[100%] 
     h-[150px]
     rounded-md
     shadow-lg
     flex
     flex-col
     justify-between
     mt-4
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
                        // let content
                        if(exists){
                          newState.background.splice(newState.background.indexOf(exists),1,{index:itemIndex,ImageSrc:src})
                        }
                       
                        
                        newDispatch({type:"backgroundImage",index:itemIndex,ImageSrc:src})   
                     
                    }}
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
    
             onClick={()=>{
                 const      existColor=newState.backgroundColor.find(({index})=>index===itemIndex)
                 if(existColor){
                    newState.backgroundColor.splice(newState.backgroundColor.indexOf(existColor),1,{index:itemIndex,backgroundColor:bgColor})
                 }
                
                 newDispatch({type:'backgroundColor',index:itemIndex,ColorSrc:bgColor})}
            }
             style={{background:bgColor}}>
                </div>
        )
    })}
        </div>
        </div>
           
            </div>
            
        
        }