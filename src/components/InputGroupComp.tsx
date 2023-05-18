import React, { useState } from 'react';
import {
    Stack,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    FormControl,
    FormLabel,
    Button,
    Heading,
    Text,
    Checkbox,
    Container,
    Box,
    Icon,
} from "@chakra-ui/react";
import { Field } from "formik";


function InputGroupComp(props: any) {

    return (
        <FormControl pt={4} pr={props.pr} isRequired>
          { props.label &&  <FormLabel htmlFor={props.label}>{props.label}</FormLabel>}
            <InputGroup>
                <Field as={Input} type={props.show? props.typetext : props.type} validate={props.validate} placeholder={props.placeholder}  id={props.id}
                name={props.name} borderRadius={15}  required={false}  />
          { props.typeText && <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" bg="none" onClick={props.handleClick}>
                  { props.show? <Icon as={props.ViewIcon} /> : <Icon as={props.ViewOffIcon} />}
                </Button>
              </InputRightElement> }
            </InputGroup>
            {props.errors && props.touched ? (
                      <Box color="red">{props.errors}</Box>
                    ) : null}
        </FormControl>
    );
}

export default InputGroupComp;