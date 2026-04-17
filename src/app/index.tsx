import { globalStyles } from '@/styles/global';
import { Link } from 'expo-router';
import { Text, ScrollView } from 'react-native';
import { HomeHeader } from './components/home-header';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <Link href='/add-meal' style={{ fontSize: 18, color: '#007bff' }}>
        Go to Add Meal
      </Link>
    </ScrollView>
  );
}
