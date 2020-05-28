console.log("this is coming from script tag api")

const header = $(`header.site-header`).parent()

const makeHeader = data => {
    header.prepend(`<div>${data}</div>`).css({'background-color':'orange','text-align':'center'})
}

fetch('http://cors-anywhere.herokuapp.com/http://5e2fca89.ngrok.io/api/products?shop=drews-sample-store.myshopify.com')
.then(res => res.json())
.then(data =>{
    // makeHeader(data.data)
    console.log(data)
})
.catch(err => console.log(err))