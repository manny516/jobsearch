import React from "react";




// interface Jobinfo{
//   id : number,
//   company : string,
//   position : string,
//   location : string,
//   view_count : number,
//   time_posted : string,
//   applied_count : number,
//   bookmark : boolean,
//   team_type: string,
//   salary: string,
//   min_qual : Array<string>,
//   prefer_qual : Array<string>,
//   desciption : string 

// }
interface Props {
  jobData : {}
}

export const JobSearches: React.FC<Props> = ({jobData}) =>{

  return (
     {jobData.map((jobData: { id: React.Key | null | undefined; }) => (
    <article key={jobData.id} className="border-solid border-2 m-2 flex flex-row results-job-search bg-neutral-50 rounded-lg p-8">

              <article className="m-0 p-4 basis-9/12">

                    <blockquote className="w-20 border-solid border-2 float-left h-full mr-4 rounded-lg ">
                      <img src="" alt="" />
                    </blockquote>
                    <h2> {jobData.company}</h2>
                    <p> {jobData.position}</p>
                    <blockquote>
                      <span> {jobData.location}</span>  <span>{jobData.view_count}</span>
                    </blockquote>
                    <blockquote>
                      <span> {jobData.time_posted}</span> <span>position</span> <span>{jobData.applied_count}</span>
                    </blockquote>
                </article>
                
                <article className="basis-3/12">
                    <blockquote>
                      <span> {jobData.bookmark}</span> <span>info </span>
                    </blockquote>
                    <p>{jobData.team_type}</p>
                    <span>{jobData.salary}<strong>/ year</strong> </span>
                </article>

              </article>
               ))}
  );
}