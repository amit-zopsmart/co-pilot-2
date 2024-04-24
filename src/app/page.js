"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import FirstScreen from "./components/FirstScreen/page";
import TopCloudCost from "./top-cloud-cost/page";

export default function Home() {
  const [isQuestionAsk, setIsQuestionAsk] = useState(false);
  return (
    <main className={styles.main}>
      <FirstScreen setIsQuestionAsk={setIsQuestionAsk} />
      {/* <TopCloudCost /> */}
    </main>
  );
}
