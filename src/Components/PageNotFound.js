import React from "react";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";

function PageNotFound(props) {
  console.log(props);
  const BackToHome = () => {
    props.history.push("/");
  };

  return (
    <div>
      <h3>Error : Oops Page Not Found</h3>
      <Button
        variant="contained"
        color="dark"
        startIcon={<HomeIcon />}
        onClick={BackToHome}
        style={{ marginLeft: "3px" }}
      >
        Back to Home
      </Button>
    </div>
  );
}
export default PageNotFound;
