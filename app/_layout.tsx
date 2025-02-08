import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loaded] = useFonts({
    Koulen: require('../assets/fonts/Koulen-Regular.ttf'),
    RopaSans: require('../assets/fonts/RopaSans-Regular.ttf')
  });
  return <Stack 
    screenOptions={{
      headerShown: false, 
      orientation: "landscape",
    }}
  />;
}
