import { Experience } from "../typings";
import {groq} from "next-sanity";
import { sanityClient } from "../sanity"; 

export const fetchExperiences = async () =>{
    const query = groq`
    *[_type == "experience"]{
    ...,
    technologies[]->
    
    }
      
  `
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getExperiences`);

    // const data = await res.json();
    // const experiences:Experience[] = data.experiences;
    const res = await sanityClient.fetch(query);
    return res
}