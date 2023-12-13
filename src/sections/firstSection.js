import React from "react";
import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";

import FitStats from "../imgs/undraw_fitness_stats.svg";

const FirstSection = () => {
  return (
    <Box p={32} display={"flex"} justifyContent={"center"} alignItems={"start"}>
      <Container
        p={0}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"stretch"}
      >
        <Container
          p={0}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Heading letterSpacing={2} fontSize={"3xl"} fontWeight={"700"} color={"red.600"} lineHeight={1.2} marginBottom={4}>
            Ajudando você a melhorar seu desempenho nos esportes.
          </Heading>
          <Text fontSize={"sm"}>
            Nós temos os melhores suplementos com os melhores preços de Marabá e
            Região
          </Text>
        </Container>
        <Button marginTop={10} colorScheme="red" fontSize={"sm"} rounded={32}>
          Comprar agora
        </Button>
      </Container>
      <Container>
        <Image src={FitStats} maxW={"38rem"} />
      </Container>
    </Box>
  );
};

export default FirstSection;
