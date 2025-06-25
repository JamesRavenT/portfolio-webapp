import { Diamond } from 'lucide-react'
import placeholder from '../../../assets/icons/placeholder.png'

export default function Logo({section}) {

      const logo = placeholder
    return(
        <>
        <div className={`${ section != 'Top' ? 'flex justify-center items-center' : 'hidden' }`}>
            <Diamond />
        </div>
        </>
        
    )
}