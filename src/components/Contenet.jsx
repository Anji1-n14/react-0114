const Content = () => {
  return (
    <div style={{
      textAlign: "center",
      color: "red",
      padding: "100px 0"
    }}>
      <h1 style={{
        fontFamily: "serif",
        fontSize: "30px",
        textDecoration: "underline overline",
      }}>Deluxe Hotel</h1>
      <h2 style={{ fontStyle: "italic", fontSize: "30px" }}>have a great journey</h2>
      <button style={{
        marginTop: "20px",
        padding: "10px 30px",
        backgroundColor: "orangered",
        border: "none",
        borderRadius: "25px",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
      }}>Book Now</button>
    </div>
  );
};

export default Content;
