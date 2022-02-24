import {JobsCheck} from "./Jobinterface";
import {FaRegCommentDots} from "react-icons/fa";
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

 const jobDesc = gql`
          query JobFullData {
              jobs{
                company{
                  id
                  name
                }
                title
                locationNames  
                description
                applyUrl
              }
          }
        `;

export default function JobFullDesc( ){   
    const router = useRouter();
    const { pid } = router.query;

    const{loading,error,data} = useQuery(jobDesc);
    const JobDescResult = {data};
  
    if (loading) {
      return <h2>Loading...</h2>;
    }

    if (error) {
      console.error(error);
      return null;
    }

    const Results = JobDescResult.data.jobs;

    let duplicateCache : any = {};
    Results.forEach((element : any, index : any)=>{
        duplicateCache[element.company.id] = false ;
    });    
    console.log(duplicateCache);
    return (
     
        Results.filter((jDesc : any) => jDesc.company.id == pid)
        .map((jDesc : JobsCheck, index : number) =>(
           <>
            {
              (duplicateCache[jDesc.company.id] == false) ? 
             <article key={index} className="px-10 ">
              <h2> Job results</h2>


              <article className="text-center">
                <img src="" alt="" className="w-60 h-60 m-auto border-solid border-2 rounded-lg" />
                <h2> {jDesc.company.name} </h2>
                <p>{}</p>
              </article>

              {/* <article className=" mt-10 border-t-2 border-black">
                <h3>Minimum qualifications:</h3>
                <ul className="list-disc pl-8">
                  {jDesc.min_qual}
                </ul>
              </article> */}

              {/* <article className="mt-10">
                <h3>Preferred qualifications:</h3>
                <ul className="list-disc pl-8">
                   {jDesc.prefer_qual}
                  </ul>
              </article> */}

              <article className=" mt-10 border-t-2 border-black">
                <h3>About Company</h3>
                <p>
                 {jDesc.description}
                </p>
              </article>

              <article className="mt-10 pt-10 flex gap-2">
                <a href={jDesc.applyUrl} target="_blank"> <button className="border-solid border-2 rounded-lg p-3 bg-indigo-500 text-white basis-1/2"> Apply now</button> <button className="border-solid border-2   text-3xl p-3 rounded-lg bg-grey-purple text-white"> <FaRegCommentDots/> </button> </a>
              </article>
              { duplicateCache[jDesc.company.id]  = true}
            </article>
            :
            ''
                }
            </>

        ))

    )

}
