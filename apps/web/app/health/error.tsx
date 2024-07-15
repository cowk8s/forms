"use client";

const Error = ({ error }: { error: Error & { digest?: string }}) => {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
