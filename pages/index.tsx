import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import { GetServerSideProps,NextPage } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo : PageInfo;
  experiences : Experience[];
  skills : Skill[];
  projects : Project[];
  socials : Social[];
} 


const Home  = ({pageInfo,experiences,projects,skills,socials} : Props) =>{
  
  return ( 
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-mandatory snap-y 
    overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Angga Dwi</title>
        <meta property="og:type" content="website"/>
        <meta name="description" content="Fullstack Developer - Angga Dwi Based In Bali"/>
        <meta property="og:title" content="Angga Dwi"/>
       
        <meta name="keywords" content="Fullstack Developer - Angga Dwi Based In Bali"/>
        <meta property="og:url" content="angga.masadigital.id"/>
        <meta property="og:description" content="Fullstack Developer - Angga Dwi Based In Bali"/>
       
      </Head>
      <Header socials={socials}/>

      <section id="hero" className='xs:scroll-mt-24 sm:scroll-mt-32 md:scroll-mt-56 snap-start'>
          <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className='snap-center' >
          <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className='snap-center' >
          <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className='snap-start' >
          <Skills skills={skills}/>
      </section>

      <section id="projects" className='snap-start' >
          <Projects projects={projects}/>
      </section>

      <section id="contact" className='snap-start' >
          <Contact pageInfo={pageInfo}/>
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img src="/img/i.jpg" className='h-8 w-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo : PageInfo = await fetchPageInfo();
  const experiences : Experience[] = await fetchExperiences();
  const skills : Skill[] = await fetchSkills();
  const projects : Project[] = await fetchProjects();
  const socials : Social[] = await fetchSocials();
 
  return {
    props :{
      pageInfo:pageInfo,
      experiences:experiences,
      skills:skills,
      projects:projects,
      socials:socials,
    },
   
  }


}
