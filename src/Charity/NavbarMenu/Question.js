import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CenterHeaderText from "../../components/CenterHeaderText";
import MyBackButton from "../../components/MyBackButton";
import { Header } from "react-native-elements";
import MyNotiffButton from "../../components/MyNotiffButton";
import { List } from "react-native-paper";

const Question = ({ navigation }) => {
  const [expanded, setExpanded] = React.useState();
  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <Header
        backgroundImage={require("../../../assets/img/CharityIMG.png")}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={<CenterHeaderText text="АСУУЛТ ХАРИУЛТ" />}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
      <View
        style={{ backgroundColor: "#F5F5F5", borderRadius: 40, bottom: 20 }}
      >
        <ScrollView style={{ marginTop: 40 }}>
          <List.Section>
            <List.Accordion
              theme={{
                colors: {
                  primary: "#FF8D1A",
                },
              }}
              title="dem+ гэж юу вэ?"
              titleStyle={{ fontSize: 16, fontWeight: "bold" }}
              left={(props) => <List.Icon {...props} icon="cloud" />}
            >
              <List.Item
                descriptionNumberOfLines={30}
                descriptionStyle={{ marginRight: 40 }}
                description="Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. text ever since the 
1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen 
book. It has survived not only five centuries, 
but also the leap into electronic typesetting, 
remaining essentially 
unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum."
              />
            </List.Accordion>
            <List.Accordion
              theme={{
                colors: {
                  primary: "#FF8D1A",
                },
              }}
              titleNumberOfLines={2}
              title="Хэрхэн төсөлд санхүүжилт оруулах вэ?"
              titleStyle={{ fontSize: 16, fontWeight: "bold" }}
              left={(props) => <List.Icon {...props} icon="cloud" />}
            >
              <List.Item
                descriptionNumberOfLines={30}
                descriptionStyle={{ marginRight: 40 }}
                description="Lorem Ipsum is simply dummy text of the printing
 and typesetting industry. text ever since the 
1500s, when an unknown printer took a galley 
of type and scrambled it to make a type specimen 
book. It has survived not only five centuries, 
but also the leap into electronic typesetting, 
remaining essentially 
unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum."
              />
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({});
