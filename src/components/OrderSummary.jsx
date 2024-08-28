import { useNavigate } from "react-router-dom";
const OrderSummary =()=>{
    const navigate=useNavigate();
    return (
        <div>
            <h1>order conformed</h1>
            <button onClick={()=>{navigate(-1)}} >Go back</button>
        </div>
    )

}
export default OrderSummary;