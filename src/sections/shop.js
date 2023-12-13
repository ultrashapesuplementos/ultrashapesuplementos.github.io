import {
  Box,
  Heading,
  Tab,
  TabList,
  Tabs,
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
              product_image="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto-selo-topo-new-v3.png"
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
              product_description={
                "O Whey Medium é 100% Whey Protein! Isso significa que 100% da proteína presente no produto é derivada do soro do leite. Grande concentração de proteínas, ferro e cálcio, como todo derivado de leite."
              }
            />
          </TabPanel>
          <TabPanel>
            <CardProduct
              product_image="https://www.gsuplementos.com.br/upload/produto/layout/72/produto1-mono-250.webp"
              product_name="CREATINA MONOHIDRATADA 250G - GROWTH SUPPLEMENTS"
              alt="Foto Creatina"
              product_description="A creatina monohidratada tem excelente absorção; E contribui para melhor performance nos treinos, recuperação muscular acelerada, combate da fadiga e muito mais. Esse suplemento está sempre presente na dieta de atletas de ponta."
            />
            <CardProduct
              product_image="https://www.gsuplementos.com.br/upload/produto/layout/70/big-creatina-creapure-growth-v2.webp"
              product_name="CREATINA (250g) Creapure® - GROWTH SUPPLEMENTS"
              alt="Foto Creatina"
              product_description={
                "Sua lista de suplementos não está completa sem a Creatina Monohidratada da Growth Supplements. Esse produto é uma das principais escolhas dos atletas mais famosos e de quem está investindo na hipertrofia. Você consegue ganhar massa muscular e, ao mesmo tempo, garantir um ganho de força sem igual"
              }
            />
          </TabPanel>
          <TabPanel>
            <CardProduct
              product_image="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/1069/insanity-300g-growth-supplements-v3.png"
              product_name="PRÉ-TREINO INSANITY 300G - GROWTH SUPPLEMENTS"
              product_description="A combinação de nutrientes não calóricos age em sinergia criando um ambiente metabólico propício para aquelas pessoas que desejam resultados expressivos!
              Se você já treina em alta intensidade e deseja ir além ou você que precisa de uma ajuda extra naqueles dias de indisposição, o INSANITY pode te ajudar!!!"
              alt="Foto Pré-treino"
            />
          </TabPanel>
          <TabPanel>
            <CardProduct 
              product_image="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/82/hipercalorico-chocolate-growth-supplements.png"
              product_name="(TOP) HIPERCALÓRICO (SABOR CHOCOLATE) (1KG) - GROWTH SUPPLEMENTS"
              product_description="Se energia é o que você precisa, você chegou ao lugar certo. Os hipercalóricos são os suplementos perfeitos para combinar uma série de ingredientes que podem ampliar seu desempenho nos treinos. E os resultados, da mesma forma, vão seguir os mesmos avanços. Perfeito para quem precisa de várias fontes energéticas na dieta, esse produto pode revolucionar seus treinos. Tudo em um só lugar para garantir treinos cada vez mais intensos e aproximar você dos seus objetivos."
              alt="Foto hiper calórico"
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Shop;
