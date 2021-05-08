const DashboardIntro = (props) => {
  return (
    <>
      <div className="dashContainer">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="dashHeading">
              Welcome To The Members Dashboard {props.name}
            </h3>
            <p className="dashP">
              The dashboard is a place to track and view significant events in
              your cats journey. Here are some examples of events you might log.
            </p>
          </div>
          <ul className="dashList">
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
};

export default DashboardIntro;
