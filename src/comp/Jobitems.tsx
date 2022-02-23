import Jobinfo from "./Jobinterface";
import {FaBookmark,FaInfoCircle,FaEye,FaMapMarker,FaCircle} from "react-icons/fa";
import Link from "next/link";

export default function Jobitem({jobData} : any) {
  const jobItemsData = jobData.data.job;
  // console.log(jobItemsData);
  return (
 
           jobItemsData.map((job: Jobinfo) => (
             <Link key={job.id} href={`/?pid=${job.id}`}>
              <article  className="border-solid border-2 m-2 flex flex-row results-job-search bg-neutral-50  rounded-lg p-8">

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
                        <span><FaCircle className='inline-block  mr-1 text-xs' /> {job.applied_count} applied</span>
                      </blockquote>
                  </article>
                  
                  <article className="basis-3/12 text-slate-500">
                      <blockquote className='flex flex-row gap-2 justify-end pb-4 text-stone-400'>
                        <span data-attribute={job.bookmark}><FaBookmark /></span> <span><FaInfoCircle/> </span>
                      </blockquote>
                      <p className='text-xs'>{job.team_type}</p>
                      <span><strong className=' text-slate-900'>{job.salary}</strong> / year</span>
                  </article>

                </article>
              </Link>
          ))
  )
}