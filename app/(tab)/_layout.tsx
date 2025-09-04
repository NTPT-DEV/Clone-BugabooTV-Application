

import { colors } from '@/constants/utils';
import { Tabs } from 'expo-router';
import { House, Search, Tv, User } from 'lucide-react-native';
import { useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';

const CustomTabButton = ({ children, onPress }: any) => {
  const rippleAnim = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.timing(rippleAnim, {
      toValue: 0.2,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(rippleAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    onPress?.();
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.tabButton}
    >
      <Animated.View
        style={[
          styles.ripple,
          { opacity: rippleAnim },
        ]}
      />
      {children}
    </Pressable>
  );
};

const TabsLayout = () => (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: colors.purple,
      tabBarInactiveTintColor: colors.gray,
      tabBarLabelStyle: { fontFamily: 'sukumvit-bold', textAlign: 'center' },
      tabBarItemStyle: { justifyContent: 'center', alignItems: 'center' },
      tabBarButton: (props) => <CustomTabButton {...props} />,
      tabBarStyle : {
        height: 110,
      }
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        headerShown: false,
        title: 'หน้าแรก',
        tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
      }}
    />
    <Tabs.Screen
      name="searchScreen"
      options={{
        headerShown: false,
        title: 'ค้นหา',
        tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
      }}
    />
    <Tabs.Screen
      name="liveScreen"
      options={{
        headerShown: false,
        title: 'รายการสด',
        tabBarIcon: ({ color, size }) => <Tv color={color} size={size} />,
      }}
    />
    <Tabs.Screen
      name="profileScreen"
      options={{
        headerShown: false,
        title: 'โปรไฟล์',
        tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
      }}
    />
  </Tabs>
);

export default TabsLayout;

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    width: 100,
    margin: 5,
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ripple: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#a6a6a6ff',
  },
});
