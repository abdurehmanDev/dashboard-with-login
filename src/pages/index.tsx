import React, { ReactNode, useState, useEffect } from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Searchbar from "@/components/Searchbar";
import SidebarContent from "@/components/SidebarContent";
import MobileNav from "@/components/MobileNav";
import BreadComp from "@/components/BreadComp";
import BoxLayout from "@/components/BoxLayout/BoxLayout";

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const arr = ["first","second","three","four","five","six"];
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!(isLoggedIn && JSON.parse(isLoggedIn))) {
      router.replace('/SignIn');
    }
  }, []);


  const signOut = () => {
     localStorage.setItem('isLoggedIn', "false");
  }

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: "0", md: "60" }} px="4" pt="4">
        <Flex justifyContent="space-between" alignItems="center">
        <BreadComp />
          <Searchbar />
        </Flex>
        <Flex justifyContent= "space-between" alignItems= "center">
        <Heading as="h2">Main Dashboard</Heading>
      <Link fontWeight={500} color="blue.600" href='/SignIn' onClick={signOut}>Sign out</Link>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
       { arr.map((item,i)=>  
       <BoxLayout key={i} h="20" mr={item === "six"? "0" :"5"}>
          <Heading>{item}</Heading>
        </BoxLayout>
        )}
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
           <BoxLayout mr="5" h="60">
           <Heading>col</Heading>
           </BoxLayout>
           <BoxLayout h="60">
           <Heading>col</Heading>
           </BoxLayout>
        </Flex>
        <Flex flexWrap={{ base: "wrap", md: "nowrap" }}>
          <BoxLayout mr="5" h="60">
           <Heading>col</Heading>
           </BoxLayout>
           <BoxLayout w="49%" mr="5" h="60">
           <Heading>col</Heading>
           </BoxLayout>
           <BoxLayout  w="40%" mr="5" h="60">
           <Heading>col</Heading>
           </BoxLayout>
        </Flex>
      </Box>
    </Box>
  );
}
