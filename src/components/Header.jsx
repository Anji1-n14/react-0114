const Header = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 40px",
      color: "white"
    }}>
      <h2 style={{ fontStyle: "italic", fontWeight: "bold" }}>REEF</h2>
      <ul style={{
        display: "flex",
        listStyle: "none",
        gap: "30px",
        fontSize: "18px",
        cursor: "pointer"
      }}>
        <li>Home</li>
        <li>Hotel</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Header;
