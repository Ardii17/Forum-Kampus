import { Button, TextField } from "@mui/material";
import AuthLayout from "../../../Layouts/Auth";
import { useNavigate } from "react-router-dom";

const SigninView = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout title="Masuk Akun" button="Daftar" onClickButton="/signup">
      <form className="flex flex-col w-full gap-4">
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Username"
          autoComplete="false"
          variant="outlined"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Password"
          type="password"
          autoComplete="false"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          onClick={() => navigate("/home")}
        >
          Masuk
        </Button>
        <a href="#" className="text-blue-700">
          Lupa password?
        </a>
      </form>
    </AuthLayout>
  );
};

export default SigninView;
