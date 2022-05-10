import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

type SideBarDraweContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDraweContextData);

export function SideBarDrawerProvider({
  children,
}: SideBarDrawerProviderProps) {
  const disClosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disClosure.onClose();
  }, [router.asPath]);

  return (
    <SideBarDrawerContext.Provider value={disClosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext);
