import Head from 'next/head';
import { gql,useQuery } from "@apollo/client";
import client from "../apollo-client";
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
<<<<<<< HEAD
import {FaRegCommentDots,FaBookmark,FaInfoCircle,FaEye,FaMapMarker,FaCircle} from "react-icons/fa";
import Jobitem from '../comps/Jobitems';
=======
import {FaRegCommentDots} from "react-icons/fa";
import Jobitem from '../comp/Jobitems';
import JobFullDesc from '../comp/JobFullDesc';


>>>>>>> 941f3c03411b493fb78c9b014e1c839b45739b10

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query JobInfo {
          job{
            id
            company
            position
            location
            view_count
            time_posted
            applied_count
            bookmark
            team_type
            salary   
          }
        }
      `,
    });

    return {
      props: {
        job: data.job,
      },
   };
}

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
<<<<<<< HEAD
            <Jobitem jobData={job} />
=======
          <Jobitem jobData={job} />
>>>>>>> 941f3c03411b493fb78c9b014e1c839b45739b10
        </section>

        <section className="jb-side-bar basis-2/5 py-10">
          <JobFullDesc  />
       </section>
      </main> 
   
  )
}

<<<<<<< HEAD
interface Jobinfo{
  id : number,
  company : string,
  position : string,
  location : string,
  view_count : number,
  time_posted : string,
  applied_count : number,
  bookmark : boolean,
  team_type: string,
  salary: string,
  min_qual : Array<string>,
  prefer_qual : Array<string>,
  desciption : string 
}
=======
export async function getStaticProps() {

    const  jobitems  = (await client.query({
      query: gql`
        query JobInfo {
          job{
            id
            company
            position
            location
            view_count
            time_posted
            applied_count
            bookmark
            team_type
            salary   
          },
        }
      `,
    }));

   

    return {
      props: {
        job: jobitems,
      },
   }

  }
>>>>>>> 941f3c03411b493fb78c9b014e1c839b45739b10
