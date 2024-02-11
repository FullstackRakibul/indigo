import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
const Login = () => {
  return (
    <>
      <Container className="mx-auto" maxWidth="sm">
        <ButtonGroup
          color="primary"
          disabled={false}
          size="medium"
          variant="text"
        >
          <Button>Submit</Button>
          <Button>Submit</Button>
          <Button>Submit</Button>
        </ButtonGroup>
      </Container>
    </>
  );
};
export default Login;
