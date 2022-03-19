import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Auth";
import { Grid, Button, TextField } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { VERSION } from "../VERSION";

import "./Login.css";

function Login({ authenticated }) {
  const history = useHistory();
  const [backedVersion, setBackendVersion] = React.useState("");

  const styles = {
    smallIcon: {
      width: 60,
      height: 60,
    },
    small: {
      marginTop: "50px",
      width: 120,
      height: 120,
      padding: 16,
    },
  };

  if (authenticated) {
    history.push("/");
  }

  return (
    <Grid container justify="center">
      <center>
        <GitHubIcon iconStyle={styles.smallIcon} style={styles.small} />
        <br />
        <h1 className="first-page-title">GitHub Views</h1>
        <Button
          className="loginBtn"
          color="primary"
          variant="outlined"
          onClick={(_) => window.location.replace("/api/auth/github")}
        >
          Click Here to Login With GitHub
        </Button>
        <br />
        <br />
        <p>
          This tool will automatically collect views data for all the
          repositories you have access to.
        </p>
      </center>
    </Grid>
  );
}

export default Login;
