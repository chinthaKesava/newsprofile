import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './index.css'
import News from '../News'
import BookMark from '../BookMarks';

function ProfileTabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 main-bg"
      justify
      data-bs-theme="light"
    >
      <Tab eventKey="home" title="Posts" >
        <News/>
      </Tab>
      <Tab eventKey="profile" title="Bookmarks" >
        <BookMark/>
      </Tab>
      
    </Tabs>
  );
}

export default ProfileTabs;