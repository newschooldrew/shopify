import gql from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'
import {Card, ResourceList, Stack, TextStyle, Thumbnail} from '@shopify/polaris'
import store from 'store-js'

const GET_PRODUCTS_BY_ID = gql`
    query getProducts($ids:[ID!]!){
    nodes(ids: $ids){
      ... on Product{
        title
        handle
        id
        images(first:1){
          edges{
            node{
              originalSrc
              altText
            }
          }
        }
        variants(first:1){
          edges{
            node{
              price
              id
            }
          }
        }
      }
    }
  }
`

import React from 'react'

const ResourceList = () => {
    return (
        <div>
            
        </div>
    )
}

export default ResourceList
