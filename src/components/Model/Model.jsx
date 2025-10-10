import ReactDom from "react-dom";

const Model = (props) => {
  return ReactDom.createPortal(
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{ transform: "translate(619px, 229px)", position: "absolute" }}
      >
        <span onClick={props.onClose} style={{}}>
          X
        </span>
        <p>Login successful!</p>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
export default Model;
