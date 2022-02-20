import Head from 'next/head';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import { JobSearches } from '../components/JobSearches';

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

export default function Home({job}) {
  return (
   <main className="flex flex-row">
       <section className="jb-main-board basis-3/5 border-solid border-2 py-8 bg-slate-200 ">
         <article className="pl-14  mb-6 ">
           <header>
             <form className="w-3/4">
               <input className="w-4/5 h-8 rounded-lg pl-4" type="text" name="job-search" placeholder="Search job" /><button className="ml-2"> search</button>
             </form>
           </header>
        </article>
            {/* <JobSearches jobData={job} /> */}
           {job.map((job: Jobinfo) => (
            <article key={job.id} className="border-solid border-2 m-2 flex flex-row results-job-search bg-neutral-50 rounded-lg p-8">

              <article className="m-0 p-4 basis-9/12">

                    <blockquote className="w-20 border-solid border-2 float-left h-full mr-4 rounded-lg ">
                      <img src="" alt="" />
                    </blockquote>
                    <h2> {job.company}</h2>
                    <p> {job.position}</p>
                    <blockquote>
                      <span> {job.location}</span>  <span>{job.view_count}</span>
                    </blockquote>
                    <blockquote>
                      <span> {job.time_posted}</span> <span>position</span> <span>{job.applied_count}</span>
                    </blockquote>
                </article>
                
                <article className="basis-3/12">
                    <blockquote>
                      <span> {job.bookmark}</span> <span>info </span>
                    </blockquote>
                    <p>{job.team_type}</p>
                    <span>{job.salary}<strong>/ year</strong> </span>
                </article>

              </article>
          ))}
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

           <article className="mt-10">
             <button className="border-solid border-2"> apply now</button> <button className="border-solid border-2">Chat box</button>

           </article>

         </article>

       </section>
      </main> 
   
  )
}

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