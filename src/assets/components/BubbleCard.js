import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import BubblesIcon from '../icons/bubbles.svg';

const BubbleCard = ({ width, height, IconComponent, IconColor, IconWidth, IconHeight, number, status, price }) => {
  return (
    <View style={[styles.card, { width, height }]}>
      <View style={styles.iconContainer}>
        <IconComponent width={IconWidth} height={IconHeight} fill={IconColor} style={styles.icon} />
        <BubblesIcon  />
      </View>

      {price ? (
        <View style={styles.infoContainer}>
          <View style={styles.priceRow}>
            <Text style={styles.number}>{number}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.currency}>$</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
          </View>
          <Text style={styles.status}>{status}</Text>
        </View>
      ) : (
        <View style={styles.infoContainer}>
          <Text style={styles.number}>{number}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      )}
    </View>
  );
};

BubbleCard.propTypes = {
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  IconColor: PropTypes.string,
  IconWidth: PropTypes.number,
  IconHeight: PropTypes.number,
  number: PropTypes.any.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.any,
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    backgroundColor: '#fff',
    position: 'relative',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  infoContainer: {
    marginLeft: 21,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 21,
  },
  number: {
    fontFamily: 'Gilroy',
    fontSize: 32,
    color: '#383874',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  currency: {
    fontFamily: 'Gilroy',
    fontSize: 18,
    color: '#69789F',
  },
  price: {
    fontFamily: 'Gilroy',
    fontSize: 18,
    fontWeight: '600',
    color: '#69789F',
  },
  status: {
    fontFamily: 'Gilroy',
    fontSize: 12,
    fontWeight: '600',
    color: '#969FB6',
  },
});

export default BubbleCard;
