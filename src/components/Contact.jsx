import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Center,
  VStack,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { Stack } from "react-bootstrap";

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) =>
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  return (
    <Box
      id="contact"
      margin="4rem auto"
      border="1px solid red"
      w={"50%"}
      borderColor="#eee"
      borderRadius="40px"
      overflow="hidden"
      padding={"5%"}
    >
      <h1
        className="project-heading"
        style={{ fontSize: "2.6em", fontWeight: "bold", marginBottom: "2em" }}
      >
        CONTACTS
      </h1>
      <form
        target="_blank"
        action="https://formsubmit.co/iamlokeshahire@gmail.com"
        method="POST"
      >
        <Stack>
          <Stack>
            <Stack mb={"10px"}>
              <Input
                type="text"
                h={"50px"}
                name="name"
                placeholder="Full Name"
                required
                borderRadius="20px"
                // paddingLeft={"30px"}
                border="none"
                marginBottom={"10px"}
              />
            </Stack>
            <Stack mb={"10px"}>
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                borderRadius="20px"
                h={"50px"}
                // paddingLeft={"30px"}
                border="none"
                marginBottom={"10px"}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack mb={"10px"}>
          <Textarea
            placeholder="Your Message"
            name="message"
            rows="10"
            required
            borderRadius="20px"
            // paddingLeft={"30px"}
            border="none"
            marginBottom={"10px"}
          ></Textarea>
        </Stack>
        <Button
          borderRadius="20px"
          border="none"
          marginBottom={"10px"}
          type="submit"
          // h={"15%"}
          // w={"20%"}
          // color="red"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
