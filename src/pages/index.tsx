import Head from 'next/head';
import { gql,useQuery } from "@apollo/client";
import client from "../apollo-client";
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import Jobitem from '../comps/Jobitems';
import JobFullDesc from '../comps/JobFullDesc';


export default function Home({job} : any) {

  return (
   <main className="flex flex-row ">
       <section className="jb-main-board basis-3/5 border-solid border-2 py-8 bg-grey-blue  ">
         <article className="pl-14  mb-6 ">
           <header>
             <form className="w-3/4">
               <input className="w-4/5 h-8 rounded-lg pl-4" type="text" name="job-search" placeholder="Search job" /><button className="ml-2 rounded-lg border-solid border-2 px-4 bg-indigo-500 text-white h-10"> search</button>
             </form>
           </header>
        </article>
          <Jobitem jobData={job} />
        </section>

        <section className="jb-side-bar basis-2/5 py-10">
          <JobFullDesc  />
       </section>
      </main> 
   
  )
}

export async function getStaticProps() {

    const  jobitems  = (await client.query({
      query: gql`
        query job {
          jobs{
            company{
              id
              name
            }
            title
            locationNames  
            postedAt
          }
        }
      `,
    }));

   

    return {
      props: {
        job: jobitems,
      },
   }

  }
