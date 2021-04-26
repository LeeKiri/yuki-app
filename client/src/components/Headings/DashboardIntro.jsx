const DashboardIntro = (props) => {
    return ( 
        <>
        <div 
        className="container" 
        style={{ width: "80%", margin: "auto"}}>
            <div className="row">
                <div className="col-lg-12">
                    <h3 
                        style={{  textAlign: "center", fontSize: "25px"}}>
                        Welcome To The Members Dashboard {props.name}</h3>
                        <p 
                        style={{textAlign: "center", marginTop: "20px" }}>
                        The dashboard is a place to track and view significant events in your cats journey. Here are some examples of events you might log.
                        </p>
                </div>
                        <ul style={{ textAlign: "left", marginLeft: "330px", marginBottom: "40px", 
}}>
                            <li>Vet appointments and immunisations.</li>
                            <li>Upload images of health issues.</li>
                            <li>Firsts. Like pats, play, meows or eating in front of you.</li>
                            <li>Attacks or scratches</li>
                            <li>Improvements. Like mood, sleep or showing affecton.</li>
                            <li>Meeting new people and socializing</li>
                        </ul>
            </div>
        </div>
        </>
     );
}
 
export default DashboardIntro;