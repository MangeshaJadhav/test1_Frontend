//Here we create the array of nav link
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cNmae: "nav-links",
    icons: <HomeIcon />,
  },
  {
    title: "About",
    url: "/about",
    cNmae: "nav-links",
    icons: <InfoIcon />,
  },
  {
    title: "Service",
    url: "/service",
    cNmae: "nav-links",
    icons: <HomeRepairServiceIcon />,
  },
  {
    title: "Contact",
    url: "/contact",
    cNmae: "nav-links",
    icons: <PhoneIcon />,
  },
  {
    title: "Sign Up",
    url: "/signup",
    cNmae: "nav-links-mobile",
  },
];
