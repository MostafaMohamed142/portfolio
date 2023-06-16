import {css,figma,html,javascript,react,redux,tailwind,github,mockup,netfilx,shirt,cardio} from './assets'



    const education = [{
        title: 'Bachelor of Science',
        university: 'University Name',
        location: 'City, State',
        date: '2020 - 2022',

    }]
   const skills= [
            {
                name: 'Frontend Development',
                level: 90,
            },    
            {
                name: 'Wordpress development',
                level: 80,
            },
            {
                name: 'Digital Marketing',
                level: 70,
            },
            {
                    name: 'SEO',
                    level: 50,
            },
            {
                name: 'UI/UX Design',
                level: 60,
            }
        ]
    
    const projects =[
            {
                name: 'Webily',
                description: 'Wordpress',
                link: 'https://www.webily.com',
                image: mockup,
                github: "github source link"
            },
            {
                name: 'Brand Customizer',
                description: 'ReactJs - ThreeJs',
                link: 'https://www.example.com',
                image: shirt,
                github: "https://github.com/MostafaMohamed142/ThreeJs_Project.github.io"
            },
            {
                name: 'Nefilx Clone',
                description: 'Html & css & js',
                link: 'https://mostafamohamed142.github.io/netflix-clone.github.io/',
                image: netfilx,
                github: "https://github.com/MostafaMohamed142/netflix-clone.github.io"
            },
            {
                name: 'Cardio Egypt',
                description: 'Html & css & js',
                link: 'https://mostafamohamed142.github.io/cardio-alex.github.io/',
                image: cardio,
                github: "https://github.com/MostafaMohamed142/cardio-alex.github.io"
            }
        ]
    
    const techonologies=[
        
            {
                name: 'HTML5',
                icon: html,
                
            },
            {
                name: 'CSS3',
                icon: css,
                
            },
            {
                name: 'JavaScript',
                icon: javascript,
                
            },
            {
                name: 'React',
                icon: react
            },
            {
                name: 'Github',
                icon: github
            },
            {
                name: 'Tailwind',
                icon: tailwind
            },
           {
                name: 'Figma',
                icon: figma
           },
           {
                name: 'Redux',
                icon: redux
           }
        ]
        const experience = [
            {
                name: 'Frontend Developer',
                company: 'SFE Future',
                date: 'June 2021 - Present',
                description: 'I am a senior full stack developer with 5+ years of experience in the IT industry. I have extensive experience in developing backend REST APIs, frontend SPAs, mobile apps, databases, and cloud infrastructur',
                points:[
                    
                    'Produced websites compatible with multiple browsers.',
                    'Designed and updated layouts to meet usability and performance requirements.',
                    'Advocated for well-tested and documented, high quality code.'
                    
                ],
                postion : "left"
            },
            {
                name: 'Software Engineer',
                company: 'Alx Africa',
                date: 'May 2021 - June 2021',
                description: 'I am a full stack developer with 5+ years of experience in the IT industry. I have extensive experience in developing backend REST APIs, frontend SPAs, mobile apps, databases, and cloud infrastructure',
                points:[
                    'Learned C Programming',
                    'Learned Bash scripting',
                    'Verison Controls and operating systems'
                ],
                postion : "right"
            },
            {
                name: 'Freelancer',
                company: 'PeoplePerHour',
                date: 'May 2022 - June 2021',
                description: 'I am a full stack developer with 5+ years of experience in the IT industry. I have extensive experience in developing backend REST APIs, frontend SPAs, mobile apps, databases, and cloud infrastructure',
                points:[
                    'Built www.4mgroup.eg.com',
                    'built www.miscallcenter.com',
                    'Built https://www.webily.com'
                ],
                postion : "left"

            }
        ]
 
export {techonologies,education,skills,contact,projects,experience} 