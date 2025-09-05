export default function Background(){
    return(
        <>
        <video className='absolute top-0 left-0 w-full h-[102vh] object-cover blur-xs z-[-2]'
                src='/backgrounds/frontpage2.mp4'
                autoPlay muted loop playsInline />
        </>
    )
}