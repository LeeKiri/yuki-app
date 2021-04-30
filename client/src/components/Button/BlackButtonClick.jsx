const BlackButtonClick = ({ title, onClick }) => {
    return ( 
        <>
        <button 
            onClick={onClick}
            style={{ borderRadius: "40px", width: "180px", marginRight: "20px", marginTop: "20px", padding: "8px" }}
            type="button" 
            className="btn btn-dark">
            {title}
        </button>
    </>
     );
}
 
export default BlackButtonClick;
