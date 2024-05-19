"use client";

import React from "react";
import { Dialog } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

interface IProps {
  children?: React.ReactNode;
  success?: boolean;
  h1: string;
  p?: string;
  confirm: Record<string, () => void>;
  cancel?: Record<string, () => void>;
}

const XDialog = ({ children, success, h1, p, confirm, cancel }: IProps) => {
  let [confirmText, confirmAction] = [
    Object.keys(confirm).pop(),
    Object.values(confirm).pop(),
  ];
  let [cancelText, cancelAction] = cancel
    ? [Object.keys(cancel).pop(), Object.values(cancel).pop()]
    : ["Cancel", () => {}];
  //
  return (
    <>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div
            className={clsx(
              "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full  sm:mx-0 sm:h-10 sm:w-10",
              success ? "bg-green-100" : "bg-red-100"
            )}
          >
            {success ? (
              <ShieldCheckIcon
                className="h-6 w-6 text-green-600"
                aria-hidden="true"
              />
            ) : (
              <ExclamationTriangleIcon
                className="h-6 w-6 text-red-600"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-900"
            >
              {h1}
            </Dialog.Title>
            <div className="mt-2">
              {p ? <p className="text-sm text-gray-500">{p}</p> : children}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className={clsx(
            "inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto",
            success
              ? "bg-green-600 hover:bg-green-500"
              : "bg-red-600 hover:bg-red-500"
          )}
          onClick={confirmAction}
        >
          {confirmText}
        </button>
        {/*  */}
        {cancel && (
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={cancelAction}
          >
            {cancelText}
          </button>
        )}
      </div>
    </>
  );
};

export default React.memo(XDialog);
