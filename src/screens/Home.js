import { Feather, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stories from '../components/Stories';
import Post from '../components/Posts';

const Home = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={{ fontSize: 25, fontWeight: '500' }}>Instagram</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <FontAwesome
            name="plus-square-o"
            style={{ fontSize: 24, paddingHorizontal: 15 }}
          />
          <Feather name="navigation" style={{ fontSize: 24 }} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
