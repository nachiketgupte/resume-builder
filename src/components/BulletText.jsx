import React from "react";
import {Text, View} from '@react-pdf/renderer';
import styles from '../styles';

const BulletText = ({ items }) => (
    <div>
      {items.map((item, index) => (
        <View key={index} style={styles.textContainer}>
          <Text style={styles.text}>{'\u2022'} {item}</Text>
        </View>
      ))}
    </div>
  );

export default BulletText;
