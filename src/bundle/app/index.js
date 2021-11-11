import React, { useState, useEffect } from "react";

import axios from "axios";
import { Container, Section, Bar } from "react-simple-resizer";

import { Tabs } from "../../components/tabs";

import "./index.scss";

export function App() {
  const [tabs, setTabs] = useState([]);
  const [isTabsLoading, setIsTabsLoading] = useState(true);
  const [isTabsError, setIsTabsError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `${window.location.protocol}://${window.location.host}/mock-data/tabs.json`
        )
        .then((result) => {
          setTabs(result.data);
        })
        .catch((error) => {
          setIsTabsError(error.message);
        })
        .finally(() => {
          setIsTabsLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <Container className="app">
      <Section className="app-nav" minSize={40} defaultSize={210} />
      <Bar size={10} className="app-resizer" />
      <Section className="app-view" minSize={100}>
        {isTabsLoading && "loading..."}
        {isTabsError && !isTabsLoading && isTabsError}
        {!isTabsError && !isTabsLoading && <Tabs tabs={tabs} />}
      </Section>
    </Container>
  );
}
