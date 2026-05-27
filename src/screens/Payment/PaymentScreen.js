import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import FormInput from '../../components/formInput';
import PaymentSuccessModal from '../../components/Modals/PaymentSuccess';
import { styles } from './PaymentScreen.styles';
//import { useDispatch } from 'react-redux';
//import { addBooking } from '../redux/slices/bookingSlice';
import { formatDate } from '../../utils/formatDate';
import { movieService } from '../../database/movieService';
import { useAuth } from '../../contexts/AuthContext';
import { Colors } from '../../theme/Color';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

const PaymentScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
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
  const { user } = useAuth();
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

  const handlePayment = async () => {
    if (!slot?.id || !selectedSeats) return;

    console.log('userId:', user.id);

    const booking = await movieService.createBooking(
      user?.id,
      slot.id,
      selectedSeats,
      payableAmount,
      date,
    );
    if (booking) {
      console.log('Booking done');
      setVisible(true);
    } else {
      console.log('Failed to book a seat');
    }
  };
  const handleModalClose = () => {
    setVisible(false);
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
          <View style={styles.summaryHeader}>
            <Icon name="ticket-outline" size={18} color={Colors.title} />
            <Text style={styles.summaryTitle}>Booking Summary</Text>
          </View>

          {[
            { label: 'Movie', value: movieName?.name },
            { label: 'Theatre', value: theatre?.name },
            { label: 'Date', value: formatDate(date) },
            { label: 'Slot', value: slot?.time },
            { label: 'Screen', value: slot?.screenName },
          ].map(({ label, value }) => (
            <View key={label} style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>{label}</Text>
              <Text style={styles.summaryValue}>{value}</Text>
            </View>
          ))}
          <View style={[styles.summaryRow, styles.seatsRow]}>
            <Text style={styles.summaryLabel}>Seats</Text>
            <View style={styles.seatPillsRow}>
              {(Array.isArray(selectedSeats)
                ? selectedSeats
                : selectedSeats.split(',')
              ).map(seat => (
                <View key={seat} style={styles.seatPill}>
                  <Text style={styles.seatPillText}>{seat.trim()}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.invoiceContainer}>
          <Text style={styles.invoiceTitle}>Price Breakdown</Text>

          <View style={styles.invoiceRow}>
            <Text style={styles.invoiceLabel}>Ticket Price</Text>
            <Text style={styles.invoiceValue}>₹{totalPrice}</Text>
          </View>
          <View style={styles.invoiceRow}>
            <Text style={styles.invoiceLabel}>GST (18%)</Text>
            <Text style={styles.invoiceValue}>₹{gst.toFixed(2)}</Text>
          </View>
          <View style={styles.invoiceRow}>
            <Text style={styles.invoiceLabel}>Convenience Fee</Text>
            <Text style={styles.invoiceValue}>
              ₹{convenienceFess.toFixed(2)}
            </Text>
          </View>

          <View style={styles.invoiceDivider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Payable</Text>
            <Text style={styles.totalValue}>₹{payableAmount.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Icon name="card-outline" size={18} color={Colors.title} />
            <Text style={styles.formTitle}>Payment Details</Text>
          </View>

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
            placeholder="•••"
            value={form.cvv}
            onChangeText={text => onChangeText('cvv', text)}
            keyboardType="numeric"
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.payButton}
            onPress={handlePayment}
            activeOpacity={0.85}
          >
            <Icon name="lock-closed" size={16} color={Colors.white} />
            <Text style={styles.payButtonText}>
              Pay ₹{payableAmount.toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <PaymentSuccessModal
        visible={visible}
        message="Payment Successful"
        onClose={handleModalClose}
      />
    </KeyboardAvoidingView>
  );
};

export default PaymentScreen;
