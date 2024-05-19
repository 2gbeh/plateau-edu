import { useState } from "react";
import { TPrimaryKey } from "@/types/common.type";

export function useOptimisticDelete() {
  const [toBeDeleted, setToBeDeleted] = useState<TPrimaryKey>("");

  const toggleToBeDeleted = (id?: TPrimaryKey) => setToBeDeleted(id ?? "");

  const isToBeDeleted = (id?: TPrimaryKey) => ({
    "bg-red-50 cursor-progress": toBeDeleted == id,
  });

  return { isToBeDeleted, toggleToBeDeleted };
}
