const promptLogin = () => {
    try{
        fetch('/authorize')
        .then(response => response.json())
        .then(data => window.location.replace(data.url));
    } catch(error) {
        console.log(`error: ${error}`)
    }
}

export default promptLogin;