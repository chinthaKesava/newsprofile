
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navbar'
import ProfileHeader  from "../ProfileHeader";
import './index.css'
import ProfileTabs from '../tabs'
const Profile=()=>(
    
                <div className="main-backgrounds">
                <NavBar/>
                <ProfileHeader/>
                <ProfileTabs/>
                </div> 
        )
export default Profile