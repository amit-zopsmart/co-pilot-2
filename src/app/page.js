"use client";

import React from "react";
import styles from "./page.module.css";
import FirstScreen from "./components/FirstScreen/page";

import { QueryProvider } from "./hooks/useQueryContext";
import CloudCostsScreen from "./components/CloudCostsScreen";

export default function Home() {
  return (
    <QueryProvider>
      <main className={styles.main}>
        <CloudCostsScreen />
        <FirstScreen />
      </main>
    </QueryProvider>
  );
}
