import React from 'react'

function About() {
    return (
        // using name here for smooth scroll function
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'> {/*anything above small==>text will jump to right */}
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Kaveri, nice to meet you. Please take a look at my projects and skill set.</p>
                    </div>
                    <div className='pl-3'>
                        {/* <p>
                        I'm a tech enthusiast who likes to learn new technologies and skills. I have great problem-solving skills and solved 700+ problems on various coding platforms. And ry to solve real-world problems using my DSA knowledge. I'm a passionate web developer who likes to work in teams, and currently I'm trying to build full-stack applications that will improve the lives of those around me. 
                        </p> */}
                        <ul style={{listStyleType:'disc'}}>
                            <li>
                            I'm a tech enthusiast who likes to learn new technologies and skills.
                            </li>
                            <li>
                            I have great problem-solving skills and have solved 700+ problems on various coding platforms, and I'm trying to solve real-world problems using my DSA knowledge.
                            </li>
                            <li>
                            I'm a passionate web developer, and currently I'm trying to build full-stack applications that will improve the lives of those around me.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
