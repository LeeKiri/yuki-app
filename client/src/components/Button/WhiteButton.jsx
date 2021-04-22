const WhiteButton = (props) => {
    return ( 
        <>
<button 
style={{ borderRadius: "40px", marginLeft: "20px", marginRight: "20px", padding: "10px 20px" }}
type="button" className="btn btn-light">{props.title}</button>
        </>
     );
}
 
export default WhiteButton;
