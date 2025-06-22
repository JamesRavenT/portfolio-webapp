import placeholder from '../../../assets/icons/placeholder.png'

export default function Logo() {

      const logo = placeholder
    return(
        <>
        <div className='hidden lg:flex w-15 size-fit items-center'>
            <img src={logo} alt='icon'/>
        </div>
        </>
        
    )
}