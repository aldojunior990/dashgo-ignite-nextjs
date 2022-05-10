import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <>
      <Flex align="center">
        {showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Aldo Junior</Text>
            <Text color="gray.300" fontSize="small">
              aldojunior990@gmail.com
            </Text>
          </Box>
        )}
        <Avatar
          size="md"
          name="Aldo Junior"
          src="https://avatars.githubusercontent.com/u/39300788?v=4"
        />
      </Flex>
    </>
  );
}
