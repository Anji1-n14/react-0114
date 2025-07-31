const Submit = () => {
  return (
    <div style={{
      backgroundColor: "rgba(255, 165, 0, 0.95)", // orange background
      padding: "20px 40px",
      display: "flex",
      justifyContent: "center"
    }}>
      <form>
        <table style={{ borderSpacing: "10px" }}>
          <tbody>
            <tr>
              <td>
                <select
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: "10px",
                    border: "1px solid #ccc",
                    width: "160px"
                  }}
                >
                  <option disabled selected>Select Hotel</option>
                  <option value="Seven Hills">Seven Hills</option>
                  <option value="Novotel">Novotel</option>
                </select>
              </td>

              <td>
                <label style={{  marginRight: "5px" }}>Check In</label>
              </td>
              <td>
                <input
                  type="date"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    border: "1px solid #ccc"
                  }}
                />
              </td>

              <td>
                <label style={{  marginLeft: "15px", marginRight: "5px" }}>Check Out</label>
              </td>
              <td>
                <input
                  type="date"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: "16px",
                    border: "1px solid #ccc"
                  }}
                />
              </td>

              <td>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "maroon",
                    color: "white",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize: "16px",              
                    border: "none",
                    marginLeft: "15px"
                  }}
                >
                  Check Availability
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Submit;
