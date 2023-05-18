import React, { ReactNode } from "react";
import {
  HStack,
  VStack,
  Icon,
  Text,
  InputLeftElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import {
  FiArrowUpCircle,
  FiAlertCircle,
  FiAperture,
} from "react-icons/fi";
import { ReactText } from "react";
import { SearchIcon } from "@chakra-ui/icons";


export default function Searchbar() {
  return (
    <HStack
    spacing={{ base: "0", md: "2" }}
    display={{ base: "none", md: "flex" }}
    border="1px solid white"
    borderRadius="30px"
    background="white"
    padding="8px"
  >
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.600" />
      </InputLeftElement>
      <Input
        borderRadius={20}
        type="text"
        bg="gray.100"
        placeholder="Search..."
      />
    </InputGroup>
    <Icon as={FiArrowUpCircle} />
    <Icon as={FiAlertCircle} />
    <Icon as={FiAperture} />
    <Text
      as="span"
      background="darkblue"
      color="white"
      borderRadius="50%"
      padding="6px"
      pl="7px"
      pr="7px"
    >
      AP
    </Text>
    
  </HStack>
  )
}
