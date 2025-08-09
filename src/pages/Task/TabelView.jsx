import './TabelView.css'

const ViewData = (props) => {
  console.log(props);
  const {name,email,phone} = props;
  


  return (
    <>
      <tr>
      <td >{name}</td>
      <td >{email}</td>
      <td >{phone}</td>
    </tr>
    </>
  );
};




export default ViewData;
