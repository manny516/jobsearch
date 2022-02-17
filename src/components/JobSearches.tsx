import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
        query JobInfo {
          job {
            location
            salary
            id
            company
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