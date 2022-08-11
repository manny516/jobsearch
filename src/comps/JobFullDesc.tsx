import {Jobinfo} from "./Jobinterface";
import {FaRegCommentDots} from "react-icons/fa";
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

 const jobDesc = gql`
          query JobFullData {
              job{
                id
                company
                min_qual
                prefer_qual
                location
                description
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

    const Results = JobDescResult.data.job;
    
    return (
     
        Results.filter((jDesc : any) => jDesc.id == pid)
        .map(({
          id,
          company,
          location,
          min_qual,
          prefer_qual,
          description,
        } : Jobinfo) =>(

             <article key={id} className="px-10 ">
              <h2> Job results</h2>


              <article className="text-center">
                <img src="" alt="" className="w-60 h-60 m-auto border-solid border-2 rounded-lg" />
                <h2> {company} </h2>
                <p>{location}</p>
              </article>

              <article className=" mt-10 border-t-2 border-black">
                <h3>Minimum qualifications:</h3>
                <ul className="list-disc pl-8">
                  {min_qual}
                </ul>
              </article>

              <article className="mt-10">
                <h3>Preferred qualifications:</h3>
                <ul className="list-disc pl-8">
                   {prefer_qual}
                  </ul>
              </article>

              <article className=" mt-10 border-t-2 border-black">
                <h3>About Company</h3>
                <p>
                 {description}
                </p>
              </article>

              <article className="mt-10 pt-10 flex gap-2">
                <button className="border-solid border-2 rounded-lg p-3 bg-indigo-500 text-white basis-1/2"> Apply now</button> <button className="border-solid border-2   text-3xl p-3 rounded-lg bg-grey-purple text-white"> <FaRegCommentDots/> </button>
              </article>

            </article>



        ))

    )

}
