import React, { useState, useEffect } from "react";
import { PhoneIcon, CheckIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import InputGroupComp from "@/components/InputGroupComp";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [progValue, setProgValue] = useState<null | number>(null);
  const [progColor, setProgColor] = useState<null | string>(null);
  const router = useRouter();
  const handleClick = () => setShow(!show);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && JSON.parse(isLoggedIn)) {
      router.replace('/');
    }
  }, []);


  const Schema = Yup.object().shape({
    email: Yup.string()
      .required("Required")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Invalid email address"
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
        <Heading paddingBottom={4}>Sign In</Heading>
        <Text fontSize={16} color="gray" pb={4}>
          Enter the email and password to sign in!
        </Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Schema}
          onSubmit={(values) => {

             for (let index = 0; index < localStorage.length; index++) {
              const key = localStorage.key(index); 
               if (key && key.match("user_")) {
                const getValue = localStorage.getItem(key && key);
                const item = JSON.parse(getValue?  getValue : "");
             if ((item.email === values.email) && (item.password === values.password)) {
              localStorage.setItem('isLoggedIn', "true");
              router.push('/');
              return false;
             } else {
              setError(true);
              console.log("not-verify");
             } 
               }
             }
            }
            
          }
        >
          {({ handleSubmit, errors, touched}) => (
            <form onSubmit={handleSubmit}>
              <Stack>
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
              {error && <Box color="red">Invalid email or password.</Box>}
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
                  <Checkbox colorScheme="green">Keep me logged in</Checkbox>

                  <Link href="#" color="blue" fontWeight="500">
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  mt={4}
                  colorScheme="blue"
                  borderRadius={15}
                  type="submit"
                  _hover={{ variant: "outline" }}
                >
                  Sign in
                </Button>
              </Stack>
            </form>
          )}
        </Formik>
        <Stack pt={4} direction="row">
          <Text>Not registered yet?</Text>
          <Link href="/SignUp" color="blue" fontWeight="500">
            Create an Account
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default SignIn;
