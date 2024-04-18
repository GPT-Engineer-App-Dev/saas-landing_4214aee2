import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaRocket, FaChartLine, FaShieldAlt } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md">
      <Flex align="center" mb={4}>
        <Icon as={icon} boxSize={8} mr={4} color="blue.500" />
        <Heading as="h3" size="md">
          {title}
        </Heading>
      </Flex>
      <Text>{text}</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Box>
      {/* Hero section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Supercharge Your Business with Our SaaS Solution
              </Heading>
              <Text fontSize="xl" mb={8}>
                Streamline your operations, boost productivity, and grow your business with our powerful software.
              </Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Box>
            <Box>
              <Image src="https://images.unsplash.com/photo-1556155092-490a1ba16284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkfGVufDB8fHx8MTcxMzQwOTI1OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="SaaS Dashboard" />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Key Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature title="Fast & Efficient" text="Our software is built for speed and efficiency, helping you get more done in less time." icon={FaRocket} />
            <Feature title="Actionable Insights" text="Gain valuable insights from your data to make informed decisions and drive growth." icon={FaChartLine} />
            <Feature title="Secure & Reliable" text="We prioritize the security and reliability of your data, giving you peace of mind." icon={FaShieldAlt} />
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA section */}
      <Box bg="blue.500" py={20} color="white">
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Take Your Business to the Next Level?
          </Heading>
          <Text fontSize="xl" mb={8}>
            Sign up today and experience the difference our SaaS solution can make.
          </Text>
          <Button colorScheme="white" size="lg">
            Get Started Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
