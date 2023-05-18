import React, { ReactNode } from "react";
import {
  Flex,
  Icon,
  Link,
  FlexProps,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ReactText } from "react";




    interface NavItemProps extends FlexProps {
        icon: IconType;
        children: ReactText;
        address: string;
      }
      const NavItem = ({ icon, address, children, ...rest }: NavItemProps) => {
        return (
          <Link
            href={address}
            cursor="pointer"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <Flex
              align="center"
              my="4"
              px="4"
              role="group"
            
              color="gray.500"
              _hover={{
                color: "black",
                borderRight: "3px solid blue",
              }}
              {...rest}
            >
              {icon && (
                <Icon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                    color: "blue",
                  }}
                  as={icon}
                />
              )}
              {children}
            </Flex>
          </Link>
        );
      };
      
      export default NavItem;
