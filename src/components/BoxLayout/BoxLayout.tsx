import { StyleProps, Box } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React from 'react'

type BoxLayoutProps = StyleProps & {
    children: ReactJSXElement;
}

const BoxLayout = (props: BoxLayoutProps) => {
    const {children, ...rest} = props;
  return (
  <Box bgColor="white" px="5" py="4" borderRadius="20"  w="100%" mt="8" {...rest}>{children}</Box>
  )
}


export default BoxLayout;