"use client";

import React from "react";
import CloudCostsScreen from "./CloudCostsScreen";
import { QueryProvider } from "../hooks/useQueryContext";

const TopCloudCost = () => {
  return (
    <QueryProvider>
      <CloudCostsScreen queryTitle="Top cloud costs by services in production account (#24542)" />
    </QueryProvider>
  );
};

export default TopCloudCost;
