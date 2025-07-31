const Enquery = () => {
    const onSubmitForm = (e) => {
        e.preventDefault(); 
        console.log("form submitted");
        console.log(e);
        const enquerydata ={
            name: e.target.name.value,
            email: e.target.message.value,
            phone: e.target.address.value,
           
        }
        console.log(enquerydata);
    }

    return(
        <div>
            <h1>Enquiry Page</h1>
            <form onSubmit={onSubmitForm} action="data-form">
            <div>
                <label htmlFor="name">name</label>
                <input id="name" name="name" type="text" />
            </div>
            <div>
                <label htmlFor="name">message</label>
                <input id="name" name="message" type="text" />
            </div>
            <div>
                <label htmlFor="name">address</label>
                <input id="name" name="address" type="text" />
            </div>
            <div>
                <label htmlFor="name">name</label>
                <input id="name" type="text" />
            </div>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
} 
export default Enquery;