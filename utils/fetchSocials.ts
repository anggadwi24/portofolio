import { Social } from "../typings";
import {groq} from "next-sanity";
import { sanityClient } from "../sanity"; 

export const fetchSocials = async () =>{

    const query = groq`
    *[_type == "social"]
`
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSocials`);

    // const data = await res.json();
    // const socials:Social[] = data.socials;
    
    // return socials
    const res = await sanityClient.fetch(query);
    return res
}