import { useNavigate } from "react-router-dom"

function Home (){
    const router = useNavigate()
    function redirectToLoginPage(){
        router("/Login");
    }
    function redirectToRegisterPage(){
        router("/Register");
    }
    function redirectToUseStatePage(){
        router("/UseState");
    }
    return(
        <div>
            <h1>Welcome to Home page </h1>
            <button onClick={redirectToLoginPage}>GO TO LOGIN </button>
            <button onClick={redirectToRegisterPage}>GO TO REGISTER </button>
            <button onClick={redirectToUseStatePage}>GO TO USESTATE </button>
        </div>
    )
}
export default Home;
