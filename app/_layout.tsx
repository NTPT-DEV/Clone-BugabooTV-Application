import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
export default function RootLayout() {

    const [loaded] = useFonts({
    'sukumvit-text': require('../assets/fonts/SukhumvitSet-Text.ttf'),
    'sukumvit-semibold': require('../assets/fonts/SukhumvitSet-SemiBold.ttf'),
    'sukumvit-bold': require('../assets/fonts/SukhumvitSet-Bold.ttf'),
  });

  if (!loaded) { return null; }
  return (
    <Stack screenOptions={{ headerShown: false }} />
  )
}
