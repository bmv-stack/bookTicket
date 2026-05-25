import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const FormInput = ({ label, value, onChangeText, placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#BCBCBC"
        autoCapitalize="none"
        {...props}
      ></TextInput>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  input: {
    width: '100%',
    fontSize: 16,
    color: '#000',
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 15,
    color: '#555',
    marginBottom: 8,
    fontWeight: '600',
    marginTop: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionalLabelText: {
    fontSize: 12,
    color: '#9f9999',
    fontWeight: '300',
    marginLeft: 4,
  },
});
