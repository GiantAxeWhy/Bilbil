axios.defaults.baseURL ='https://developer.duyiedu.com/vue/bz/';
axios.interceptors.response.use((response)=>{
    const {status} = response;
    console.log(response)
    let {baseURL,url} = response.config;
    if(status ===200){
/*        console.log('url',url)
        console.log('baseURL',baseURL)
        console.log('baseURL213',baseURL + 'video')*/
        if(url === 'video'){
            return{
                count:response.data.count,
                data:response.data.data
            }
        }
        return response.data.data
    }
    return response;
})