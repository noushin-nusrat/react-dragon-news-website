import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div  className=" bg-gray-200 p-2 rounded-lg">
            <div className="flex gap-1">
                <button className="btn bg-red-500 text-white ">Breaking News</button>
                <Marquee pauseOnHover={true} speed={150}>
                    <Link className="mr-10" to='/'>I can be a React component, multiple React components.....</Link>
                    <Link className="mr-10" to='/'>I can be a React component, multiple React components.....</Link>
                    <Link className="mr-10" to='/'>I can be a React component, multiple React components.....</Link>
                    <Link className="mr-10" to='/'>I can be a React component, multiple React components.....</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;