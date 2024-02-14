import './index.css'


const ProfileHeader=()=>(
    <header>
        <div className="header-wrap">
          <div className="profile-pic">
            <img src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=2048x2048&w=is&k=20&c=ToF4ypeort99bztOWcUOCmlzyPIHkWyVJEDAypeh6vc=" alt="profile-logo" />
          </div>
          <div className="profile-info">
            <div className="title raw">
              <h2>Chintha Kesava</h2>
              
              <span className="verfied-icon"></span>
              <button className="primary">Follow</button>
            </div>
            <h4>news Reporter</h4>
            <div className="desktop-only">
              <div className="details raw">
                <ul>
                  <li><span>22</span>Blogs</li>
                  <li><span>25.1m</span> followers</li>
                  <li><span>6</span> following</li>
                </ul>
              </div>
              <div className="descriptions raw last">
                <span>
                  Everyone has a story to tell.
                  <br />
                  Tag <a href=".">#ShotoniPhone</a> to take part.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-info mobile-only">
          <div className="descriptions row">
            <h1>apple</h1>
            <span>
              Everyone has a story to tell.
              <br />
              Tag <a href="."> #ShotoniPhone</a> to take part.
            </span>
          </div>
        </div>  
      </header>
)
export default ProfileHeader