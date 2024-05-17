import Image from "next/image";

export const FormFileUploader = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <figure className="text-center">
      <Image
        src="/images/upload.png"
        alt="Upload"
        width={33}
        height={34}
        className="inline"
      />
      {/*  */}
      <figcaption className="mt-4">
        {children || (
          <>
            <h1 className="text-sm font-semibold">Drag and Drop Receipts</h1>
            <p className="text-sm text-gray-500 mt-0">
              or click here to upload
            </p>
          </>
        )}
      </figcaption>
    </figure>
  );
};
