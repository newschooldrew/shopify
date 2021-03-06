import React, {useState} from 'react'
import {EmptyState, Layout, Page} from '@shopify/polaris'
import {ResourcePicker, TitleBar } from '@shopify/app-bridge-react'
import store from 'store-js'
import ProductList from '../components/ProductList'
import axios from 'axios'

const Index = () => {
    const [modal, setModal] = useState({open:false})
    const emptyState = !store.get('ids');

    const handleSelection = resources => {
        const idsFromResources = resources.selection.map(product => product.id)
        setModal({open:false})
        store.set('ids',idsFromResources)
        console.log("product ids are " + store.get('ids') )

        const selectedProducts = resources.selection;

        deleteApiData();

        console.log(selectedProducts)
        selectedProducts.map(product => makeApiCall(product))
    }

    function deleteApiData(){
        const url = '/api/products';

        axios.delete(url);
    }

    async function makeApiCall(products){
        const url = '/api/products';
        axios.post(url,products)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <Page>
            <TitleBar 
                primaryAction={{
                    content: "Select New Products",
                    onAction: () => setModal({open:true})
                }}
            />
            <ResourcePicker 
                resourceType="Product"
                showVariants={false}
                open={modal.open}
                onCancel={()=> setModal({open:false})}
                onSelection={(resources) => handleSelection(resources)}
            />
            <Layout>
                {emptyState ? (
            <EmptyState
                    heading="Manage your inventory transfers"
                    action={
                        {
                            content: 'Add transfer',
                            onAction: () => setModal({open:true})
                    }
                    }
                    secondaryAction={{content: 'Learn more', url: 'https://help.shopify.com'}}
                    image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                    >
                    <p>Track and receive your incoming inventory from suppliers.</p>
                    </EmptyState>
                    ) : <ProductList />}
            </Layout>
        </Page>
    )
}

export default Index