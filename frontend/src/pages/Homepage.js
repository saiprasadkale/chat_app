import React from "react";
import {
  Box,
  Container,
  Text,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p="3"
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize={"4xl"} fontFamily={"Work sans"} color={"black"}>
          Talk-a-Tive
        </Text>
      </Box>
      <Box bg="white" p={4} w="100%" borderWidth="1px" borderRadius="lg">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
