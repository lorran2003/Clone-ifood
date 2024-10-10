import { Text, View } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Input } from "../components/input/Input";
import { Section } from "../components/section/Section";
import { Trending } from "../components/tranding/Trending";
import { Restaurant } from "../components/tranding/Restaurant";

export default function Index() {
  return (
    <View>
      <Header />
      <Banner />
      <Input />
      <Section 
        name="Comidas em alta"
        label="Veja mais"
        action={() => alert('ola')}
        size="text-xl"
      />
      <Trending/>
      <Section 
        name="Famosos no DevFood"
        label="Veja mais"
        action={() => alert('ola')}
        size="text-xl"
      />
      <Restaurant />
    </View>
  );
}
