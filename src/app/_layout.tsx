import "../style/global.css"
import { Slot } from "expo-router";
import { ScrollView, View } from "react-native";
import Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight;

export default function RootLayout() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor:'#eee' }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{marginTop:statusBarHeight}} className="p-6">
        <Slot />
      </View>
    </ScrollView>
  );
}
