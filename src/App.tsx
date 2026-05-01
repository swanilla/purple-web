import { Center, Stack, Title } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import './App.css';

export const App = () => {
    return (
        <Center h="100%">
            <Stack align="center" gap="xs">
                <IconSettings size={64} className="spin" color="white" />
                <Title order={1} c="white">
                    Under construction
                </Title>
            </Stack>
        </Center>
    );
};
