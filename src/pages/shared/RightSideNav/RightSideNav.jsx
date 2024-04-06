import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle className="text-xl"></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className="text-xl"></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="p-4 space-y-3 mb-6 border border-gray-400 rounded-lg">
                <h2 className="text-3xl">Find Us On</h2>
                <a className="btn w-full p-4" target="_blank" href="https://www.facebook.com">
                    <FaFacebook className="text-xl"></FaFacebook>
                    Facebook
                </a>
                <a className="btn w-full" target="_blank" href="https://twitter.com">
                    <FaTwitter className="text-xl"></FaTwitter>
                    Twitter
                </a>
                <a className="btn w-full" target="_blank" href="https://www.instagram.com">
                    <FaInstagram className="text-xl"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* Q Zone */}
            <div className="p-4 space-y-3 my-8 mb-6 bg-gray-100">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} />
                <img src={qZone2} />
                <img src={qZone3} />
            </div>
        </div>
    );
};

export default RightSideNav;