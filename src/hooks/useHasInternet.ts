import { useEffect, useState } from "react";

/* USAGE 
import useHasInternet from "@/hooks/useHasInternet";
const hasInternet = useHasInternet();
hasInternet ? "bg-green-400" : "bg-red-400";
*/

export default function useHasInternet() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(window?.navigator?.onLine);
  });
  //
  return status;
}
