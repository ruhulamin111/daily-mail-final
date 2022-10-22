
const Register = () => {
    if (process.browser) {
       console.log(window.location.pathname);
    }
 
    return (<div>
             <h1>Solving Window not defined Error</h1>
             {process.browser && window.location.pathname}
    </div>);
 }
 
 export default Register;