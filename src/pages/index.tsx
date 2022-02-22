import Head from 'next/head';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import {FaRegCommentDots} from "react-icons/fa";
import Jobitem from '../comp/Jobitems';


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
         <article className="px-10 ">
           
           <h2> Job results </h2>

           <article className="text-center">
             <img src="" alt="" className="w-60 h-60 m-auto border-solid border-2 rounded-lg" />
             <h2> Job title info </h2>
             <p>Job subtitle information</p>
           </article>

           <article className=" mt-10 border-t-2 border-black">
             <h3>Title 2</h3>
             <ul className="list-disc pl-8">
               <li>Pellentesque eleifend nisl nec leo porttitor consequat.</li>
               <li>Quisque vehicula odio vel porttitor maximus.</li>
               <li>Vivamus eleifend dui at ullamcorper feugiat.</li>
             </ul>
           </article>

           <article className="mt-10">
             <h3>Title 3</h3>
             <ul className="list-disc pl-8">
               <li>Pellentesque eleifend nisl nec leo porttitor consequat.</li>
               <li>Quisque vehicula odio vel porttitor maximus.</li>
              </ul>
           </article>

           <article className=" mt-10 border-t-2 border-black">
             <h3>About Company</h3>
             <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Vivamus non mi condimentum, scelerisque turpis eu, blandit diam.
               Duis aliquam ultricies ante. Fusce sed diam congue, suscipit urna vel,
               elementum lorem. Vivamus mattis nisi sed auctor eleifend. Donec feugiat
               nec nunc eget sagittis. Pellentesque nec rhoncus diam. Orci varius natoque
               penatibus et magnis dis parturient montes, nascetur ridiculus mus.
             </p>
           </article>

           <article className="mt-10 pt-10 flex gap-2">
             <button className="border-solid border-2 rounded-lg p-3 bg-indigo-500 text-white basis-1/2"> Apply now</button> <button className="border-solid border-2   text-3xl p-3 rounded-lg bg-grey-purple text-white"> <FaRegCommentDots/> </button>

           </article>

         </article>

       </section>
      </main> 
   
  )
}

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
   }
  }