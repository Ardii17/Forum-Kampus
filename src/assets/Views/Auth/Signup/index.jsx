import { Button, TextField } from "@mui/material";
import AuthLayout from "../../../Layouts/Auth";
import { useNavigate } from "react-router-dom";

const SignupView = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout title="Daftar Akun" button="Masuk" onClickButton="/">
      <form className="flex flex-col w-full gap-4">
        <TextField
          className="w-full"
          id="outlined-basic"
          autoComplete="off"
          label="Username"
          variant="outlined"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          autoComplete="off"
          label="Phone"
          type="number"
          variant="outlined"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          autoComplete="off"
          type="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          autoComplete="off"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button
          type="submit"
          onClick={() => navigate("/")}
          variant="contained"
          size="large"
        >
          Daftar
        </Button>
      </form>
    </AuthLayout>
  );
};

export default SignupView;
