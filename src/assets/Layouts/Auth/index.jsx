import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ title, children, button, onClickButton }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-full h-screen gap-12 md:flex-col lg:flex-row">
      <div className="relative flex-col hidden gap-2 lg:flex">
        <img
          src="./../Image/fk1.png"
          alt="Forum Kampus"
          className="hidden md:block"
        />
        <p className="absolute text-xl font-semibold text-center text-gray-600 top-2/3">
          Menghubungkan Mahasiswa dalam Diskusi, Kolaborasi, dan Pengetahuan di
          Satu Platform
        </p>
      </div>
      <div className="hidden md:block lg:hidden">
        <img
          src="./../Image/fk1.png"
          alt="Forum Kampus"
          className="object-cover max-h-32 w-96"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4 p-4 rounded-md md:shadow md:bg-white md:w-2/3 lg:w-1/3 ">
        <img
          src="./../Image/fk.png"
          alt="Forum Kampus"
          className="object-cover w-60 sm:block md:hidden max-h-32"
        />
        <h1 className="w-full text-2xl font-semibold text-center text-black">
          {title}
        </h1>
        {children}
        <hr className="w-full" />
        <Button
          type="button"
          color="success"
          className="w-full"
          variant="contained"
          onClick={() => navigate(onClickButton)}
          size="large"
        >
          {button}
        </Button>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  button: PropTypes.string.isRequired,
  onClickButton: PropTypes.string.isRequired,
};

export default AuthLayout;
