import React from "react";
import {Text, View} from '@react-pdf/renderer';
import styles from '../styles';

function BulletText({ items }) {
  console.log(items);
  return (
    <View>
      {items.map((item, index) => (
        <View key={index} style={styles.textContainer}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export default BulletText;
