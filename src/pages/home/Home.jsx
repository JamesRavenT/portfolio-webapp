import Introduction from "./components/Introduction";
import Skills from "./components/Skills";


export default function Home(theme){
    return(
        <div className='h-screen w-[100%] flex flex-col p-4 gap-2'>

            <Introduction />
            <Skills />
        </div>
    )
}