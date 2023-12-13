import {
  Box,
  Heading,
  Tab,
  TabList,
  Tabs,
  Text,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import CardProduct from "../components/CardProduct";

export const Shop = () => {
  return (
    <Box
      backgroundColor={"gray.100"}
      p={16}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Heading color={"black"} marginBottom={16}>
        Catálogo de Produtos
      </Heading>
      <Tabs variant="soft-rounded" isFitted colorScheme="red" padding={8}>
        <TabList>
          <Tab>Whey</Tab>
          <Tab>Creatina</Tab>
          <Tab>Pré-Treino</Tab>
          <Tab>Hiper Calóricos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CardProduct
              product_image='https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new-v3.png'
              product_name={
                "WHEY PROTEIN CONCENTRADO (1KG) - GROWTH SUPPLEMENTS"
              }
              alt={"Imagem Whey"}
              product_description="Whey Protein Growth é a proteína ideal para quem treina hipertrofia e quer ganhar massa muscular."
            />
            <CardProduct 
              product_image="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/96/produto-principal.png"
              product_name={"MEDIUM WHEY PROTEIN (1KG) - GROWTH SUPPLEMENTS"}
              alt={"Imagem Whey"}
              product_description={"O Whey Medium é 100% Whey Protein! Isso significa que 100% da proteína presente no produto é derivada do soro do leite. Grande concentração de proteínas, ferro e cálcio, como todo derivado de leite."}
            />
          </TabPanel>
          <TabPanel>
            <p>Creatina</p>
          </TabPanel>
          <TabPanel>
            <p>Pré-Treino</p>
          </TabPanel>
          <TabPanel>
            <p>Hiper Calórico</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Shop;
