"use client";
import { useEffect } from "react";

interface ModelInfo {
  name: String;
  description: String;
  pulls: String;
  tags: String;
  updated: String;
}

export default function ModelDetail(props: ModelInfo) {
  const item = props;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}
