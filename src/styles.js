import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
      padding: 20,
      fontSize: 12,
    },
    section: {
      marginBottom: 10,
    },
    heading: {
      fontFamily: 'Garamond-bold',
      fontSize: 18,
      fontWeight: '400',
      marginBottom: 5,
    },
    heading2 : {
      fontFamily: 'Garamond-bold',
      fontSize: 14,
      marginBottom: 5,
      marginTop: 5,
    },
    heading3 : {
      fontFamily: 'Garamond-semibold',
      fontSize: 12,
      marginBottom: 5,
    },
    text: {
      fontFamily:'Garamond',
      fontSize: 12,
      marginBottom: 5,
    },
    underline: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      width: '100%',
      marginBottom: 5,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default styles;