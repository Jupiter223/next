import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome abord!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text>
              Hello {name}!<Link href="localhost:3000">your page</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
const body: CSSProperties = {
  background: "#fff",
};

export default WelcomeTemplate;
