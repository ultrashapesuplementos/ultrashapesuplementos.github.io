import {
  AspectRatio,
  Box,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Logo from "../imgs/Logo.png";

const Navbar = () => {
  return (
    <Box
      bg={"black"}
      p={"1rem"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Image src={Logo} objectFit={"cover"} maxW={"200px"} />
    </Box>
  );
};

export default Navbar;
