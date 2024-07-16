"use client";

import { useRef, useState } from "react";

interface SignupOptionsProps {
  emailAuthEnabled: boolean;
}

export const SignupOptions = ({
  emailAuthEnabled
}: SignupOptionsProps) => {
  const [showLogin, setShowLogin] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  return (
    <div className="space-y-2">
      {emailAuthEnabled && (
        <form onSubmit={handleSubmit} ref={formRef} className="space-y-2" onChange={checkFormValidity}>
          {showLogin && (
            <div>
              
            </div>
          )}
        </form>
      )}
    </div>
  );
};