import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "./src/utils";
import CustomField from "./src/component/CustomField";
import axios from "axios";
import { Urls } from "./src/utils/urls";
import { CardType } from "./src/utils/types";
import CustomCard from "./src/component/CustomCard";
import SearchIcon from "./src/assets/icons/SearchIcon";
import SortIcon from "./src/assets/icons/SortIcon";

const App = () => {
  const [searchedText, setSearchedText] = useState<string>("");
  const [apiData, setApiData] = useState<any>({});
  const [cardData, setCardData] = useState<CardType[]>([]);
  const [focus, setFocus] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  console.log("cardData ==>", cardData);

  const getList = () => {
    if (searchedText.length == 0) {
      setCardData([]);
      return;
    }
    setLoader(true);
    console.log("url ==>", Urls.DATA_URL + searchedText.trim());
    axios
      .get(Urls.DATA_URL + searchedText)
      .then((response) => {
        console.log("in response");
        setApiData(response.data);
      })
      .catch((error) => {
        console.log("error ==>", error);
        setCardData([]);
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    const prepareCardData = () => {
      if (apiData.length == 0) return;
      console.log("process data");
      apiData?.items?.map((item: any, index: any) => {
        let tempArr: CardType[] = cardData;
        console.log("in");
        let tempCardData = {
          avatar: item.owner.avatar_url,
          name: item.name,
          description: item.description,
          language: item.language,
          stars: item.stargazers_count,
        };
        tempArr.push(tempCardData);
        setCardData(tempArr);
      });
    };
    prepareCardData();
  }, [apiData]);

  return (
    <View style={styles.container}>
      <CustomField
        value={searchedText}
        changeText={(text: string) => {
          setSearchedText(text);
          if (searchedText.length == 0) {
            setCardData([]);
          }
        }}
        title={"Search..."}
        rightIcon={<SearchIcon color={COLORS.COFFEE_BROWN} />}
        onFocus={(value: boolean) => {
          setFocus(value);
        }}
        getList={() => getList()}
      />
      {cardData.length > 0 && (
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 2,
              width: 40,
              borderColor: COLORS.COFFEE_BROWN,
              borderRadius: 5,
            }}
          >
            <SortIcon color={COLORS.COFFEE_BROWN} />
          </TouchableOpacity>
        </View>
      )}
      {loader ? (
        <View
          style={{
            flex: 1,
          }}
        >
          <ActivityIndicator color={COLORS.COFFEE_BROWN} />
        </View>
      ) : (
        <FlatList
          style={{ flex: 1 }}
          data={cardData}
          renderItem={({ item, index }) => {
            return (
              <CustomCard
                key={index}
                avatar={item.avatar}
                name={item.name}
                description={item.description}
                language={item.language}
                stars={item.stars}
              />
            );
          }}
        />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    backgroundColor: COLORS.WHITE,
    paddingTop: 42,
  },
});
