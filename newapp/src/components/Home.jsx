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
    function redirectToUseStatePageTwo(){
        router("/UseStateTwo");
    }
    function dyanamicdata(){
        router("/DyanamicRouting/100");
    }
    function useeffectlogin(){
        router("/useeffectlogin");
    }
    return(
        <div>
            <h1>Welcome to Home page </h1>
            <button onClick={redirectToLoginPage}>GO TO LOGIN </button>
            <button onClick={redirectToRegisterPage}>GO TO REGISTER </button>
            <button onClick={redirectToUseStatePage}>GO TO USESTATE </button>
            <button onClick={redirectToUseStatePageTwo}>GO TO USESTATE TWO </button>
            <button onClick={dyanamicdata}>GO TO DYANAMIC DATA</button>
            <button onClick={useeffectlogin}>EMAIL LOGIN PAGE</button>
        </div>
    )
}
export default Home;
