export default function Navtext({section}) {
    
    const sectionTxt = section === 'Home' ? 'Home' :
                       section === 'Skills' ? 'Skills' :
                       section === 'Projects' ? 'Projects' : ''
    
    return(
        <div className='flex items-center gap-x-2'>
            <p>{sectionTxt}</p>
        </div>
    )
}