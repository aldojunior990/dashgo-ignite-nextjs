import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>

        <NavLink icon={RiContactsLine} href="/users">Usuarios</NavLink>
      </NavSection>

      <NavSection title="AUTOMÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>

        <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
      </NavSection>
    </Stack>
  );
}
