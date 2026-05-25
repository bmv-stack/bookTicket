import {
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
import { styles } from './PaymentScreen.styles';
//import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/slices/bookingSlice';
import { formatDate } from '../utils/formatDate';

const PaymentScreen = ({ route, navigation }) => {
  const [form, setForm] = useState({
    cardNumber: '',
    cvv: '',
    expiry: '',
  });
  //const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const movieName = route.params?.movie;
  const selectedSeats = route.params?.selectedSeats;
  const theatre = route.params?.theatre;
  const date = route.params?.date;
  const slot = route.params?.slot;
  console.log('SLot: ', slot);
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
    const booking = {
      id: String(Date.now()),
      movieName,
      theatre,
      selectedSeats,
      slot,
      payableAmount,
      date,
    };
    console.log('Booking Data: ', booking);
    // dispatch(addBooking(booking));
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
        <View style={styles.bookingSummaryContainer}>
          <Text style={styles.summaryTitle}>Booking Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Movie: </Text>
            <Text style={styles.summaryValue}>{movieName.name}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Theatre: </Text>
            <Text style={styles.summaryValue}>{theatre.name}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Date: </Text>
            <Text style={styles.summaryValue}>{formatDate(date)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Slot: </Text>
            <Text style={styles.summaryValue}>{slot.time}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Seats: </Text>
            <Text style={[styles.summaryValue, { color: '#FF3B30' }]}>
              {Array.isArray(selectedSeats)
                ? selectedSeats.join(',')
                : selectedSeats}
            </Text>
          </View>
        </View>
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
