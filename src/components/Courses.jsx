import { Link,Outlet } from "react-router-dom";
const Courses =()=>{
    return (
        <>
            <div>
                <input type="search" placeholder="search the items" />
            </div>
            <nav>
                <Link to='web-dev'>web</Link>
                <Link to='data-science'>data science</Link>

            </nav>
            <Outlet />
        </>
    )

}
export default Courses;