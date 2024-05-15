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
    },
    text: {
      fontFamily:'Garamond',
      fontSize: 12,
      marginBottom: 5,
    },
    subheading: {
      fontFamily: 'Garamond-italic',
      fontSize: 12,
    },
    underline: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      width: '100%',
      marginBottom: 5,
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    bullet: {
      width: 10,
      textAlign: 'center',
      marginRight: 4,
    },
    bulletText: {
      flex: 1,
      fontSize: 12,
      fontFamily: 'Garamond',
    }
  });

export default styles;