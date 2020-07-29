export const promptLogin = () => {
    try{
        //fetch the authorization url and then navigate to it
        fetch('/authorize')
        .then(response => response.json())
        .then(data => {
            window.location.replace(data.url);
        })
        //now to extract the code and state from url
        .then(
            //separate ''code' and 'state' value from url
            getParam()
        );
    } catch(error) {
        console.log(`error: ${error}`)
    }
}

let getParam = () => {
    const params = {};
    let currentParam, temp;
    const test = /[^?=]+/g;
    const search = window.location.search;
    for(let i = 0; currentParam = test.exec(search); i++){
       i % 2 
       ? params[temp] = currentParam[0]
       : temp = currentParam[0];
    }
    return params;
}