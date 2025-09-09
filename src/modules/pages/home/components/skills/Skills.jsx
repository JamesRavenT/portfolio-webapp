import Fortes from './subcomponents/fortes/Fortes'
import Background from './subcomponents/wallpaper/Background'
export default function Skills(){
 

    return(
        <div id='skills' className='flex flex-col items-center h-[100vh] w-full pt-25 gap-y-3 font-electrolize'> 
        <Background />
        <div className='md:hidden flex w-full'>
            
             <div className='flex flex-col w-full items-center justify-center'>
                <Fortes />


             </div>
        </div>
        <div className='hidden md:flex'>
             <p>Desktop Skills Component</p>        

        </div> 
        </div>
    )
}