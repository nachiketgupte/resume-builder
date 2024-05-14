import React from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet, Font, View } from '@react-pdf/renderer';
import styles from '../styles'
import Education from './education';
import './fonts';
import './BulletText';
import BulletText from './BulletText';
import Heading2 from './Heading2';
import Projects from './Projects';
import '../index.css';

const Underline = () => (
  <View style={styles.underline}></View>
);

const ResumePreview = ({ fName, lName, email, phoneNo, city, state }) => {

  return (
    <div className='pdf'>
      <PDFViewer width="700" height="900">
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={styles.heading}>{fName || 'First' } {lName || 'Last'}</Text>
            <Text style={styles.text}>{email || 'example@email.com'} | {phoneNo || '9876543210'} | {city || 'City'} | {state || 'State'}</Text>
            <Text style={styles.heading2}>EDUCATION</Text>
            <Underline />
            <View style={styles.textContainer}>
              <Text style={styles.heading3}>School Name</Text>
              <View style={{width:440}}></View>
              <Text style={styles.heading3}>Year from - Year to</Text>
            </View>
            <Text style={styles.text}>Course Name</Text>
            <BulletText
            items={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat urna, auctor ac felis vel, euismod vestibulum neque.',
              'Nulla facilisi. Donec blandit velit nec libero fermentum ultricies.',
            ]}
          />
            <Education />
            <Heading2 title = "PROJECTS" />
            <Underline />
            <Projects />
            <Projects />
            <Heading2 title = "EXPERIENCE" />
            <Underline />
            <Projects />
            <Projects />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default ResumePreview;
