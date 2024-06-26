"use client";

import React from "react";
import {
  ChevronLeftCircleIcon as BackIcon,
  RefreshCw as RetryIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Figure } from "./figure";
// 
import APP from "@/constants/APP";
import { getStatusText } from "@/constants/HTTP_STATUS_CODE";

interface IProps {
  status: number;
  message: string;
  variant?: "back" | "retry";
  action?: () => void;
}

const Tent = ({ status, message, variant, action }: IProps) => {
  const pathname = usePathname();
  const router = useRouter();
  let messageSlice = message.split("%s");
  //
  return (
    <main className="offwhite flex-centered">
      <div className="flex-col-center gap-4 px-5 w-full sm:w-[640px] mx-auto">
        <Figure
          src="/icon.png"
          dimension={[256, 256]}
          figureWidth="64px"
          alt={APP.name}
        />
        {/*  */}
        <h1 className="capitalize">
          <b>{status}</b> | {getStatusText(status)}
        </h1>
        {/*  */}
        <article className="text-gray-700 text-center">
          {messageSlice?.[0]}
          <b style={{ fontWeight: 500 }}>{pathname}</b>
          {messageSlice?.[1]}
        </article>
        {/*  */}
        <section className="mt-2 text-primary">
          {variant === "retry" ? (
            <i className="cursor-pointer" onClick={action} title="Retry">
              <RetryIcon size="2em" />
            </i>
          ) : (
            <i
              className="cursor-pointer"
              onClick={() => router.back()}
              title="Go Back"
            >
              <BackIcon size="2em" />
            </i>
          )}
        </section>
      </div>
    </main>
  );
};

export default React.memo(Tent);
