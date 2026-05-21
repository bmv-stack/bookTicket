import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import React from 'react';

const PaymentSuccessModal = ({ visible, message, onClose }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalOverlay}>
        <TouchableOpacity
          style={styles.modalContent}
          activeOpacity={1}
          onPress={onClose}
        >
          <Text style={styles.modalText}>{message}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default PaymentSuccessModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
  },
  modalContent: {
    backgroundColor: '#c1b4b4',
    padding: 30,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});
