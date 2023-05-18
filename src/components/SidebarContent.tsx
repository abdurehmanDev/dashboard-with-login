import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  useDisclosure,
  BoxProps,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiBarChart2,
  FiUser,
  FiLock,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import NavItem from "@/components/Navbar";




interface LinkItemProps {
    name: string;
    icon: IconType;
    address: string;
  }
  const LinkItems: Array<LinkItemProps> = [
    { name: "Main Dashboard", icon: FiHome , address: "#"},
    { name: "NFT Marketplace", icon: FiTrendingUp, address: "#" },
    { name: "Data Tables", icon: FiBarChart2, address: "#" },
    { name: "Profile", icon: FiUser, address: "#" },
    { name: "Sign In", icon: FiLock , address: "SignIn"},
    { name: "RTL Admin", icon: FiHome, address: "#" },
  ];

  

  
interface SidebarProps extends BoxProps {
    onClose: () => void;
  }
  
 const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
      <Box
        transition="3s ease"
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text
            fontSize="2xl"
            fontFamily="monospace"
            textTransform="uppercase"
            fontWeight="bold"
          >
            Horizon free
          </Text>
          <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} address={link.address}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    );
  };
  


  export default SidebarContent
