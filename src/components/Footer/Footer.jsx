import { Link } from "react-router-dom";
import './footer.css'
const Footer = () => {
  return (
    <footer style={{ padding: "20px 0", backgroundColor: "#f8f8f8", marginTop: "60px" }}>
      <div className="footer">
        <ul className="footer-nav" >
          <li><Link to={"/enquery"}>Enquery</Link></li>
          <li><Link to={"/portfolio"}>Portfolio</Link></li>
          <li><Link to={"/blog"}>Blog</Link></li>
          <li><Link to={"/contact-us"}>Contact Us</Link></li>
        </ul>
      </div>
      <div style={{ textAlign: "center", color: "#666", fontSize: "14px" }}>
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
