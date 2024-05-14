import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "../styles";
import "./fonts";
import BulletText from "./BulletText";
function Education(edu) {
  return (
    <div>
      <View style={styles.textContainer}>
        <Text style={styles.heading3}>School Name {edu.name}</Text>
        <View style={{ width: 440 }}></View>
        <Text style={styles.heading3}>Year from - Year to {edu.year}</Text>
      </View>
      <Text style={styles.text}>Course Name {edu.courseName}</Text>
      <BulletText
        items={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat urna, auctor ac felis vel, euismod vestibulum neque. Nullam porta ex sit amet turpis faucibus, eu vestibulum ipsum eleifend.",
          " Nam elementum felis a elit rhoncus feugiat. Proin pellentesque varius diam at molestie. Praesent quis ultrices justo. Vivamus lacinia turpis sed.",
        ]}
      ></BulletText>
    </div>
  );
}
export default Education;
