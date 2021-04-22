const BlackButton = (props) => {
    return ( 
        <>
        <button 
            style={{ borderRadius: "40px", width: "180px", marginRight: "20px", marginTop: "20px", padding: "8px" }}
            type="button" 
            className="btn btn-dark">
            {props.title}
        </button>
    </>
     );
}
 
export default BlackButton;
