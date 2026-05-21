import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import FormInput from '../components/formInput';
import PaymentSuccessModal from '../components/Modals/PaymentSuccess';

const PaymentScreen = ({ route, navigation }) => {
  const [form, setForm] = useState({
    cardNumber: '',
    cvv: '',
    expiry: '',
  });
  const [visible, setVisible] = useState(false);
  const totalPrice = route.params?.totalPrice;
  const gst = (totalPrice / 100) * 18;
  const convenienceFess = totalPrice / 10;
  const payableAmount = totalPrice + gst + convenienceFess;

  const onChangeText = (fieldName, text) => {
    setForm(prev => ({
      ...prev,
      [fieldName]: text,
    }));
  };

  const handlePayment = () => {
    setVisible(true);
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.invoiceContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.priceLabel}>Ticket Price:</Text>
            <Text style={styles.priceText}>₹{totalPrice}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.priceLabel}>GST (18%):</Text>
            <Text style={styles.priceText}>₹{gst}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.priceLabel}>Convenience Fees:</Text>
            <Text style={styles.priceText}>₹{convenienceFess}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.finalAmountContainer}>
            <Text
              style={[styles.priceLabel, { fontWeight: 'bold', fontSize: 18 }]}
            >
              Payable Amount:
            </Text>
            <Text
              style={[styles.priceText, { fontWeight: 'bold', fontSize: 18 }]}
            >
              ₹{payableAmount}
            </Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Payment Details</Text>
          <FormInput
            label="Card Number"
            placeholder="XXXX XXXX XXXX XXXX"
            value={form.cardNumber}
            onChangeText={text => onChangeText('cardNumber', text)}
            keyboardType="numeric"
          />
          <FormInput
            label="Expiry Date"
            placeholder="MM/YY"
            value={form.expiry}
            onChangeText={text => onChangeText('expiry', text)}
            keyboardType="numeric"
          />
          <FormInput
            label="CVV"
            placeholder="000"
            value={form.cvv}
            onChangeText={text => onChangeText('cvv', text)}
            keyboardType="numeric"
            secureTextEntry
          />
          <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
            <Text style={styles.payButtonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <PaymentSuccessModal
        visible={visible}
        message="Payment Successful"
        onClose={() => setVisible(false)}
      />
    </KeyboardAvoidingView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  invoiceContainer: {
    height: 250,
    width: '85%',
    backgroundColor: '#807676',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 20,
  },
  rowContainer: {
    padding: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  priceText: {
    fontWeight: '600',
    fontSize: 16,
  },
  divider: {
    marginTop: 10,
    height: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
  },
  finalAmountContainer: {
    padding: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#cfb3b3',
    overflow: 'hidden',
  },
  formContainer: {
    marginTop: 15,
    width: '85%',
    marginBottom: 30,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
