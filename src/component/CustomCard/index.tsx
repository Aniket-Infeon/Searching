import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardType} from '../../utils/types';
import WebView from 'react-native-webview';
import {COLORS} from '../../utils';

const CustomCard = ({avatar, name, description, language, stars}: CardType) => {
  return (
    <View style={styles.container}>
      <View>
        <WebView
          source={{uri: avatar}}
          style={{height: 80, width: 80, margin: 5}}
        />
      </View>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: '500', color: '#000'}}>Repo name :</Text>
          <Text>{name}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: '500', color: '#000'}}>Dsescription :</Text>
          <Text>{description}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: '500', color: '#000'}}>Language :</Text>
          <Text>{language}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: '500', color: '#000'}}>Stars :</Text>
          <Text>{stars}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.COFFEE_BROWN,
    flexDirection: 'row',
  },
});
