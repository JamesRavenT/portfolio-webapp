export default function SkillName({icon, skill}) {
    return(
        <>
        <img src={icon} alt={skill} className="size-5"/> 
        <p>{skill}</p>
        </>
    ) 
}