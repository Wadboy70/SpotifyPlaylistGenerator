export const promptLogin = () => {
    try{
        //fetch the authorization url and then navigate to it
        fetch('/authorize')
        .then(response => response.json())
        .then(data => {
            window.location.replace(data.url);
        })
        //now to extract the code and state from url
        .then(//seperate ''code' and 'state' value from url
        );
    } catch(error) {
        console.log(`error: ${error}`)
    }
}

