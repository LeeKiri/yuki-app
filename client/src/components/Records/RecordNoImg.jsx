import cat from "../../images/cats/cat2.jpg"

const RecordImg = () => {
    return ( 
       <>
       <div className="card m-5">
            <img className="card-img-top" src={cat} alt="users cat" />
            <div className="card-body">
                <h5 className="card-title">Card title that wraps to a new line</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">14/07/2021</small></p>
            </div>
        </div>
       </>
     );
}
 
export default RecordImg;