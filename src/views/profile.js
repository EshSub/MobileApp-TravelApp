import {
  VStack,
  HStack,
  Text,
  Heading,
  Box,
  Select,
} from '@gluestack-ui/themed';
import { Background } from '../components/background';
import { StyleSheet, View } from 'react-native';
import { useDataProvider } from '../apis';

const example_user = {
  id: 1,
  username: 'admin',
  first_name: 'Human',
  last_name: 'Go-saurus',
  email: 'admin@gmail.com',
};

const example_profile = {
  district: 'Kandy',
  preferred_activities: [1, 2, 3, 4, 5],
};

// Utility function to generate random colors
function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function Profile() {
  const { data: activities, loading } = useDataProvider().activities.get();

  // Filter activities based on preferred IDs
  const preferredActivities = activities?.filter((activity) =>
    example_profile.preferred_activities.includes(activity.id)
  );

  const availableActivities = activities?.filter(
    (activity) => !preferredActivities.includes(activity.id)
  );

  return (
    <Background>
      <VStack space='xl' align='start' px='lg' style={{ alignItems: 'center' }}>
        <Heading size='lg' mb='md'>
          My Profile
        </Heading>

        <VStack space='lg' align='start'>
          {/* User details sections (Name, Username, Email) */}
          <HStack space='lg' align='start'>
            <Box
              px='md'
              py='sm'
              bg='$backgroundCard'
              rounded='lg'
              style={{ minWidth: 100 }}
            >
              <Text fontWeight='bold'>Name</Text>
            </Box>
            <Box px='md' py='sm' bg='$backgroundCard' rounded='lg' flexGrow={1}>
              <Text>
                {example_user.first_name} {example_user.last_name}
              </Text>
            </Box>
          </HStack>

          <HStack space='lg' align='start'>
            <Box
              px='md'
              py='sm'
              bg='$backgroundCard'
              rounded='lg'
              style={{ minWidth: 100 }}
            >
              <Text fontWeight='bold'>Username</Text>
            </Box>
            <Box px='md' py='sm' bg='$backgroundCard' rounded='lg' flexGrow={1}>
              <Text>{example_user.username}</Text>
            </Box>
          </HStack>

          <HStack space='lg' align='start'>
            <Box
              px='md'
              py='sm'
              bg='$backgroundCard'
              rounded='lg'
              style={{ minWidth: 100 }}
            >
              <Text fontWeight='bold'>Email</Text>
            </Box>
            <Box px='md' py='sm' bg='$backgroundCard' rounded='lg' flexGrow={1}>
              <Text>{example_user.email}</Text>
            </Box>
          </HStack>

          {/* Display preferred activities */}
          <Heading size='md' mb='md'>
            Preferred Activities
          </Heading>
          <HStack space='md' style={{ flexWrap: 'wrap', alignItems: 'center' }}>
            {loading ? (
              <Text>Loading activities...</Text>
            ) : preferredActivities.length > 0 ? (
              preferredActivities.map((activity) => (
                <Box
                  key={activity.id}
                  px='md'
                  py='sm'
                  bg='$backgroundCard'
                  rounded='lg'
                  style={{ minWidth: 100, margin: 4, flex: 1 }}
                >
                  <Text style={{ color: randomColor() }}>{activity.name}</Text>
                </Box>
              ))
            ) : (
              <Text>No preferred activities found.</Text>
            )}
          </HStack>
        </VStack>
      </VStack>
    </Background>
  );
}

export default Profile;
