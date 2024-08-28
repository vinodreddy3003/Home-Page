import { replace, useNavigate } from "react-router-dom";
import Content from "./Content";
const Home =()=>{
    const navigate=useNavigate()

    return (
        <div>
            <Content/>
        </div>
    )

}
export default Home;