"use client";

import React, { useState, createContext } from "react";
import styles from "./page.module.css";
import FirstScreen from "./components/FirstScreen/page";
import TopCloudCost from "./top-cloud-cost/page";
import { QueryProvider } from "./hooks/useQueryContext";

export default function Home() {

  return (
    <QueryProvider>
      <main className={styles.main}>
        <FirstScreen />
      </main>
    </QueryProvider>
  );
}
