import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Row } from "react-bootstrap";
import {
  Box,
  Button,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

function Statistics() {
  return (
    <Container id="statistics">
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "10px",
          backgroundColor: "white",
        }}
      >
        <h1
          style={{
            paddingBottom: "20px",
            color: "red",
            marginTop: "100px",
            marginBottom: "100px",
            fontWeight: "bold",
          }}
        >
          STATISTICS
        </h1>
        <GitHubCalendar
          username="lokeshahire"
          blockSize={20}
          blockMargin={5}
          fontSize={16}
        />
        <Stack>
          <Img
            id="gitstat"
            //   style={{ height: "300px", marginTop: "50px", marginBottom: "50px" }}
            h={350}
            mt={50}
            mb={100}
            src="https://github-readme-streak-stats.herokuapp.com/?user=lokeshahire"
            alt="lokeshahire's GitHub stats"
          />
        </Stack>
        {/* <Stack>
          <Img
            id="gitgraph"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
            h={350}
            mb={50}
            src="https://activity-graph.herokuapp.com/graph?username=lokeshahire&show_icons=true&count_private=true&include_all_commits=true&&hide_border=true&radius=4"
          />
        </Stack> */}
        <Stack align="center">
          <Img
            id="gitstat"
            // style={{ height: "400px", marginTop: "50px", marginBottom: "50px" }}
            h={350}
            mb={50}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=lokeshahire&langs_count=8&theme=algolia"
            alt="lokeshahire's GitHub stats"
          />
        </Stack>
      </Row>
      <div id="newid2"></div>
    </Container>
  );
}

export default Statistics;
