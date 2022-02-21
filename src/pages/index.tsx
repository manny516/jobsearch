import Head from 'next/head';
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import {FaRegCommentDots,FaBookmark,FaInfoCircle,FaEye,FaMapMarker,FaCircle} from "react-icons/fa";

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
            {/* <JobSearches jobData={job} /> */}
           {job.map((job: Jobinfo) => (
            <article key={job.id} className="border-solid border-2 m-2 flex flex-row results-job-search bg-neutral-50  rounded-lg p-8">

              <article className="m-0 p-4 basis-9/12">

                    <blockquote className="w-20 border-solid border-2 float-left h-full mr-4 rounded-lg ">
                      <img src="" alt="" />
                    </blockquote>
                    <h2> {job.company}</h2>
                    <p className=" text-indigo-300"> {job.position}</p>
                    <blockquote className='flex text-slate-500'>
                      <span className='text-xs '><FaMapMarker className='inline-block  mr-1'/>{job.location}</span>  
                      <span className='ml-6 pr-2'><FaEye className='inline-block mr-1'/>{job.view_count} </span> 
                    </blockquote>
                    <blockquote className=' flex text-slate-500 gap-4'>
                      <span> {job.time_posted}</span> 
                      <span><FaCircle className='inline-block  mr-1'/> position</span> 
                      <span><FaCircle className='inline-block  mr-1 text-xs' /> {job.applied_count}</span>
                    </blockquote>
                </article>
                
                <article className="basis-3/12 text-slate-500 ">
                    <blockquote className='flex flex-row gap-2 justify-end pb-4 text-stone-400'>
                      <span data-attribute={job.bookmark}><FaBookmark /></span> <span><FaInfoCircle/> </span>
                    </blockquote>
                    <p className='text-xs'>{job.team_type}</p>
                    <span><strong className=' text-slate-900'>{job.salary}</strong> / year</span>
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

           <article className="mt-10 pt-10 flex gap-2">
             <button className="border-solid border-2 rounded-lg p-3 bg-indigo-500 text-white basis-1/2"> Apply now</button> <button className="border-solid border-2   text-3xl p-3 rounded-lg bg-grey-purple text-white"> <FaRegCommentDots/> </button>

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