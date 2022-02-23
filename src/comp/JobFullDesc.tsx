import {FaRegCommentDots} from "react-icons/fa";
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

 const jobDesc = gql`
          query JobFullData {
              job{
                id
                salary
                time_posted
                min_qual
                description
                company
              }
          }
        `;

export default function JobFullDesc( ){
    const{loading,error,data} = useQuery(jobDesc);
    const JobDescResult = {data};
    const router = useRouter();
      const { pid } = router.query;
    if(loading == false){
       const Results = JobDescResult.data.job;
       if(pid === Results[1].id){
        console.log(`Page id${pid}`)
      }
    }
      
    return (
    
        <article className="px-10 ">
           <h2> Job results : {pid} </h2>


           <article className="text-center">
             <img src="" alt="" className="w-60 h-60 m-auto border-solid border-2 rounded-lg" />
             <h2> Job info </h2>
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

    )

}
