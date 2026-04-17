import { Text, ScrollView } from 'react-native';
import { globalStyles } from '@/styles/global';
import HomeHeader from '../components/home-header';
import MacroGrid from '../components/macro-grid';
import RecentMeals from '../components/recent-meals';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView>
  );
}
