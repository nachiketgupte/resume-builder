import React from "react";
import styles from "../styles";
import { Text } from "@react-pdf/renderer";
function Heading2(props) {
    return (
        <Text style={styles.heading2}>{props.title}</Text>
    )
}

export default Heading2;