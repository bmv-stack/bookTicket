import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { formatDate } from '../utils/formatDate';
import { movieService } from '../database/movieService';
import { Colors } from '../theme/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const MyBookingCard = ({ item, onCancelled }) => {
  const { t } = useTranslation();
  const handleCancel = (id, movieName) => {
    Alert.alert(
      `Cancel booking for ${movieName}?`,
      'This action cannot be reverted',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: async () => {
            const result = await movieService.cancelBooking(id);
            if (result) {
              onCancelled();
            } else {
              Alert.alert('Error', 'Unable to cancel the booking');
            }
          },
        },
      ],
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.movieTitle} numberOfLines={1}>
          {item.movie_name}
        </Text>
        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>₹{item.payable_amount}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.detailsGrid}>
        <View style={styles.detailItem}>
          <Icon name="location-outline" size={14} color={Colors.subtitle} />
          <Text style={styles.detailLabel}>Theatre</Text>
          <Text style={styles.detailValue}>{item.theatre_name}</Text>
        </View>

        <View style={styles.detailItem}>
          <Icon name="calendar-outline" size={14} color={Colors.subtitle} />
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailValue}>
            {formatDate(item.booking_date)}
          </Text>
        </View>

        <View style={styles.detailItem}>
          <Icon name="time-outline" size={14} color={Colors.subtitle} />
          <Text style={styles.detailLabel}>Slot</Text>
          <Text style={styles.detailValue}>{item.slot_time}</Text>
        </View>

        <View style={styles.detailItem}>
          <Icon name="ticket-outline" size={14} color={Colors.subtitle} />
          <Text style={styles.detailLabel}>Seats</Text>
          <Text style={styles.detailValue} numberOfLines={1}>
            {item.selected_seats}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.cancelButton}
        activeOpacity={0.7}
        onPress={() => handleCancel(item.id, item.movie_name)}
      >
        <Icon
          name="close-circle-outline"
          size={15}
          color={Colors.cancelButton}
        />
        <Text style={styles.cancelButtonText}>{t('common.cancelBooking')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyBookingCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.title,
    flex: 1,
    marginRight: 10,
  },
  priceBadge: {
    backgroundColor: Colors.priceBadgeBg,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  priceText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.priceText,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.white,
    marginBottom: 12,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  detailItem: {
    width: '45%',
    gap: 2,
  },
  detailLabel: {
    fontSize: 10,
    color: Colors.subtitle,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  detailValue: {
    fontSize: 13,
    color: Colors.valueTitle,
    fontWeight: '500',
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.cancelButtonBorder,
    backgroundColor: Colors.cancelButtonBg,
  },
  cancelButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.cancelButtonText,
  },
});
