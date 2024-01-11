import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { memo, useCallback } from "react";
import { COLORS } from "../../utils";
import { CustomFieldType } from "../../utils/types";

const CustomField = ({
  changeText,
  title,
  leftIcon,
  rightIcon,
  value,
  onFocus,
  getList,
}: CustomFieldType) => {
  const handleFocus = useCallback(() => {
    onFocus(true);
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    onFocus(false);
  }, [onFocus]);
  return (
    <View style={styles.container}>
      {leftIcon}
      <TextInput
        style={styles.text}
        value={value}
        onChangeText={changeText}
        placeholder={title}
        placeholderTextColor={COLORS.COFFEE_BROWN}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <TouchableOpacity onPress={() => getList()}>{rightIcon}</TouchableOpacity>
    </View>
  );
};

export default memo(CustomField);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    flexDirection: "row",
    borderWidth: 3,
    borderRadius: 15,
    borderColor: COLORS.COFFEE_BROWN,
    alignItems: "center",
    marginBottom: 10,
  },
  text: { flex: 1, height: 50, paddingLeft: 10, color: COLORS.COFFEE_BROWN },
});
