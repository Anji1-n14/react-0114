import './Portdfoli.css';
const Profile =() =>{
    return(
        <>
            
         <section className='profile-container' >
            
              <ul className="profile-nav">
                  <img className='logo-img' src="../../src/images/hotel.jfif" alt="Profile"/>
              <li>
              <a href="../home">Home</a>
              </li>
              <li>
              <a href="../home">about us</a>
              </li>
              <li>
              <a href="../home">education</a>
              </li>
              <li>
              <a href="../home">personal</a>
              </li>

            </ul>
         </section>
         <section className='profile-main'>
                <div className='profile-header'>
                    <div className='profile-content'>
                        <h3>Hi I am Anji</h3>
                        <p>I am an aem sites developer. I Have 1+ years of expirence in aem as a backend developer.</p>
                    </div>
                    <div>
                        <img className='profile-img' src="../../src/images/hotel.jfif" alt="Profile" />
                    </div>
                </div>
         </section>
        </>
    )
};
export default Profile;