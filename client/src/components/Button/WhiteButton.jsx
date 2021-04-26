const WhiteButton = (props) => {
    return ( 
        <>
<button 
style={{ borderRadius: "40px",  width: "180px", marginLeft: "20px", marginRight: "20px", padding: "8px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19" }}
type="button" className="btn btn-light">{props.title}</button>
        </>
     );
}
 
export default WhiteButton;
