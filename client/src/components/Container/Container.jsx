const Container = (props) => {
  return (
    <>
        <div className="container"
        style={{marginBottom: "300px"}}
        >
          <div className="row">
            {props.children}
          </div>
        </div>
    </>
  );
};

export default Container;
