"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface NavContextProps {
  selected: number;
  navUrl: string;
  handleSelected: (value: number, url: string) => void;
}

export const NavContext = React.createContext({} as NavContextProps);

export function NavProvider({ children }: any) {
  const [selected, setSelected] = useState(0);
  const [navUrl, setNavUrl] = useState("portfolio");

  const router = useRouter();

  const handleSelected = (value: number, url: string) => {
    router.push(`/${url}`);
    setSelected(value);
    setNavUrl(url);
  };

  return (
    <NavContext.Provider value={{ selected, navUrl, handleSelected }}>
      {children}
    </NavContext.Provider>
  );
}
