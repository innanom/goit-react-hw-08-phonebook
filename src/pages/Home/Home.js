import React from "react";
import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Welcome to your phonebook!
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
