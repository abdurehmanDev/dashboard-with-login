import React, { useState, useEffect } from "react";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  FormControl,
  FormLabel,
  Progress,
  Button,
  Heading,
  Text,
  Checkbox,
  Container,
  Box,
  Link,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputGroupComp from "@/components/InputGroupComp";

export default function SignUp() {
  const [show, setShow] = useState(false);
  const [progValue, setProgValue] = useState<null | number>(null);
  const [progColor, setProgColor] = useState<null | string>(null);
  const router = useRouter();
  const handleClick = () => setShow(!show);


  const Schema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .matches(/^[a-zA-Z\s]*$/, "Enter Valid Name")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .matches(/^[a-zA-Z\s]*$/, "Enter Valid Name")
      .required("Required"),
    email: Yup.string()
      .required("Required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
      ),
    termConditions: Yup.bool().oneOf(
      [true],
      "You need to accept the terms and conditions"
    ),
  });

  function validatePassword(value: string) {
    let error;
    if (!value) {
      error = "Required";
      setProgValue(null);
      setProgColor(null);
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
        value
      )
    ) {
      setProgValue(100);
      setProgColor("green");
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/i.test(
        value
      )
    ) {
      setProgValue(60);
      setProgColor("orange");
    } else {
      setProgValue(20);
      setProgColor("red");
      error = "Set Valid password";
    }
    return error;
  }


  return (
    <Container maxW="2xl" marginTop={20} centerContent>
      <Box padding="4" color="black" maxW="xl" w="md">
        <Heading paddingBottom={4}>Create an account</Heading>
        <Text fontSize={16} color="gray" pb={4}>
          Enter the details sign up!
        </Text>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            termConditions: false,
          }}
          validationSchema={Schema}
          onSubmit={(values) => {
            const SignUpDataString = JSON.stringify(values, null, 2);
            localStorage.setItem(`user_${Math.floor(Math.random() * (100 ))}`,  SignUpDataString);
            router.push('/SignIn');
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <Stack>
                <Flex>
                  <InputGroupComp
                    errors={errors.firstName}
                    touched={touched.firstName}
                    type="text"
                    label="FirstName"
                    id="firstName"
                    name="firstName"
                    placeholder="First name..."
                    pr="4"
                  />
                  <InputGroupComp
                    errors={errors.lastName}
                    touched={touched.lastName}
                    type="text"
                    label="LastName"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name..."
                  />
                </Flex>
                <InputGroupComp
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  variant="filled"
                  placeholder="mail@simmmple.com"
                  errors={errors.email}
                  touched={touched.email}
                />
                <InputGroupComp
                  id="password"
                  name="password"
                  label="Password"
                  placeholder="Min. 8 characters"
                  typetext="text"
                  type="password"
                  validate={validatePassword}
                  show={show}
                  handleClick={handleClick}
                  ViewIcon={ViewIcon}
                  ViewOffIcon={ViewOffIcon}
                  errors={errors.password}
                  touched={touched.password}
                />
                {progValue && (
                  <Progress
                    value={progValue}
                    size="xs"
                    colorScheme={progColor ? progColor : ""}
                    m={2}
                  />
                )}
                <Stack
                  spacing={5}
                  py={2}
                  justifyContent="space-between"
                  direction="row"
                >
                  <Field
                    as={Checkbox}
                    id="termConditions"
                    name="termConditions"
                    colorScheme="green"
                  >
                    I agree to the{" "}
                    <Link href="#" color="blue">
                      Terms & Condition
                    </Link>
                  </Field>
                </Stack>
                {errors.termConditions && touched.termConditions ? (
                  <Box color="red">{errors.termConditions}</Box>
                ) : null}
                <Button
                  mt={4}
                  colorScheme="blue"
                  borderRadius={15}
                  type="submit"
                  _hover={{ variant: "outline" }}
                >
                  Sign up
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
        <Stack pt={4} direction="row">
          <Text>Registered user?</Text>
          <Link href="/SignIn" color="blue" fontWeight="500">
            Sign in
          </Link>
        </Stack>
      </Box>
    </Container>
  );
}
