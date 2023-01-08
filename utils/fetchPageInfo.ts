import { PageInfo } from "../typings";
import {groq} from "next-sanity";
import { sanityClient } from "../sanity"; 

export const fetchPageInfo = async () =>{
   
    const query = groq`
    *[_type == "pageInfo"][0]
   
      
  `
    //  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getPageInfo`);
    // const data = await res.json();
    // const pageInfo:PageInfo = data.pageInfo;
    
    // return pageInfo
    const res = await sanityClient.fetch(query);
    return res
}