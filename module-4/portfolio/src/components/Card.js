import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box bg="gray.50" letterSpacing="wide" borderTopRadius="2xl" borderBottomRadius="2xl"  textAlign="left" textStyle="sm" color="black">
      <VStack>
        <Box>
          <Image src={imageSrc} borderTopRadius="md" borderBottomRadius="2xl" />
        </Box>
        <VStack padding="30px 20px 30px 20px">
          <Box w="100%">
            <Heading size="md" >{title}</Heading>
          </Box>
          <Box w="100%">
            <Text>{description}</Text>
          </Box>
          <Box w="100%">
            <Text textAlign="left" fontWeight="bold">See More <FontAwesomeIcon icon={faArrowRight} size="1x"/> </Text>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
