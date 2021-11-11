import React from "react";

import { Container, Section, Bar } from "react-simple-resizer";

import "./index.scss";

export function App() {
  return (
    <Container className="app">
      <Section className="app-nav" minSize={40} defaultSize={210} />
      <Bar size={10} className="app-resizer" />
      <Section className="app-view" minSize={100} />
    </Container>
  );
}
