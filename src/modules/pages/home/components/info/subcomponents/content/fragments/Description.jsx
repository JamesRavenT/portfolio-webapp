import  { AboutMe }  from '../../../../../../../../assets/text/home'

export default function Description() {
const paragraphs = [
`I discovered programming back in 8th grade, which led me through a programming strand in senior high school and a Computer Science degree. That early spark still drives me today, shaping how I approach challenges and continuous learning.`,


`I’ve built projects ranging from my college thesis to personal creations like Discord bots and small tools for friends. Alongside that, my experience in customer service taught me adaptability, communication, and resilience—skills I now bring into software development.`,


`I may not yet have professional industry experience, but I bring years of curiosity, persistence, and dedication. For me, coding isn’t just a career path—it’s a lifelong craft I’m eager to grow in and share through meaningful work.`
];
    return (
        <div className="text-2xl text-center">
            {paragraphs.map((text, idx) => (
                <p key={idx} className="text-xs mx-5 my-4">
                {text}
                </p>
                ))}
        </div>
    )
}