"use client";

import React, { useState } from "react";
import { Button } from "@/components/shadcn/ui/button";
import fakerHelper from "@/lib/faker-js/main";

export default function Try() {
  const [count, setCount] = useState(-1);
  function increament() {
    setCount((prev) => prev + 1);
  }
  // fakerHelper.log(fakerHelper.getCollection);
  //
  return (
    <main className="flex-centered">
      <Button onClick={increament}>{count}</Button>
    </main>
  );
}
