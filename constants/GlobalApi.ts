import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clx0fag0c04k206uvp70iaufc/master"

const getSlider=async()=>{

    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
    `
    const result = await request(MASTER_URL, query)
    return result;

}
export default{
    getSlider
}