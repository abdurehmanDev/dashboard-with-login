import React from 'react'
import {
    HStack,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
  } from "@chakra-ui/react";

export default function BreadComp() {
  return (
    <HStack>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Pages</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Main Dashboard</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </HStack>
  )
}
