import gql from 'graphql-tag'
import { useQuery,useMutation } from "@apollo/react-hooks";
import {Button, Card, Layout, Page, ResourceList, Stack} from '@shopify/polaris'

const CREATE_SCRIPT_TAG = gql`
    mutation scriptTagCreate($input:ScriptTagInput!){
        scriptTagCreate(input:$input){
            scriptTag{
                id
            }
            userErrors{
                field
                message
            }
        }
    }
`

const QUERY_SCRIPT_TAG = gql`
    query{
        scriptTags(first:5){
            edges{
                node{
                    id
                    src
                    displayScope
                }
            }
        }
    }
`

const DELETE_SCRIPT_TAG = gql `
    mutation scriptTagDelete($id:ID!){
            scriptTagDelete (id:$id){
                deletedScriptTagId
                userErrors{
                    field
                    message
                }
            }
        }    
`

const ScriptPage = () => {
    const [createScripts] = useMutation(CREATE_SCRIPT_TAG)
    const [deleteScripts] = useMutation(DELETE_SCRIPT_TAG)
    const {loading,err, data} = useQuery(QUERY_SCRIPT_TAG);

    if(loading) return <div>Loading</div>
    if(err) return <div>{error.message}</div>
    console.log("this is the script tag " + data)
    return (
        <Page>
            <Layout>
            <Layout.Section>
                <Card title="here are the script tags" sectioned>
                    <p>create or delete a script tag</p>
                </Card>
            </Layout.Section>
            <Layout.Section secondary>
                <Card title="Create tags" sectioned>
                    <button
                        primary
                        size="slim"
                        type="submit"
                        onClick={() =>{
                            createScripts({
                                variables:{
                                    input:{
                                        src:"https://cb331b62.ngrok.io/TestScript.js",
                                        displayScope:"ALL"
                                    }
                                }, refetchQueries:[{query:QUERY_SCRIPT_TAG}]
                            })
                        }}
                    >
                        Create SCript Tag
                    </button>
                </Card>
            </Layout.Section>
            <Layout.Section>
                <Card>
                    <ResourceList 
                        showHeader
                        resourceName={{ singular:"script",plural:"scripts" }}
                        items={data.scriptTags.edges}
                        renderItem={item =>{
                            return(
                                <ResourceList.Item
                                    id={item.id}
                                >
                                    <Stack>
                                        <Stack.Item>
                                            <p>
                                                {item.node.id}
                                            </p>
                                        </Stack.Item>
                                        <Stack.Item>
                                            <Button
                                                type="submit"
                                                onClick={() => {
                                                    deleteScripts({
                                                        variables:{
                                                            id:item.node.id
                                                        },refetchQueries:[{query:QUERY_SCRIPT_TAG}]
                                                    })
                                                }}
                                            >
                                                Delete Script Tag
                                            </Button>
                                        </Stack.Item>
                                    </Stack>
                                </ResourceList.Item>
                            )
                        }}
                    />
                </Card>
            </Layout.Section>
            </Layout>
        </Page>
        // <div>
        //     current script tags
        //     <button
        //         type="submit"
        //         onClick={() => {createScripts({
        //             variables:{
        //                 input:{
        //                     src:"https://8e93118a.ngrok.io/TestScript.js", 
        //                     displayScope:"ALL"
        //                         }
        //                         }, refetchQueries:[{query:QUERY_SCRIPT_TAG}]
        //                     })
        //                 }}
        //     >
        //         Create Script tag
        //     </button>
        // {data.scriptTags.edges.map(tag =>{
        //     return(
        //         <div key={tag.node.id}>
        //             <p>{tag.node.id}</p>
        //             <button type="submit" onClick={() =>{
        //                 deleteScripts({
        //                     variables:{
        //                         id:tag.node.id
        //                     },
        //                     refetchQueries:[{query:QUERY_SCRIPT_TAG}]
        //                 })
        //             }}>Delete Script Tag</button>
        //         </div>
        //     )
        // })}
        // </div>
    )
}

export default ScriptPage
