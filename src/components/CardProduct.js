import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardProduct = ({
  product_image,
  alt,
  product_name,
  product_description,
}) => {
  return (
    <Card
      boxShadow="md"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      p={4}
      marginBottom={4}
    >
      <Image
        dropShadow={"md"}
        // objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={product_image}
        alt={alt}
      />
      <Stack>
        <CardBody>
          <Heading letterSpacing={2} size="md">
            {product_name}
          </Heading>
          <Text py="2">{product_description}</Text>
        </CardBody>
        <CardFooter>
          <Button variant="solid" colorScheme="red">
            Comprar
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CardProduct;
