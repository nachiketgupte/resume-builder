import React from 'react';
import { PDFViewer, Document, Page, Text, View } from '@react-pdf/renderer';
import styles from '../styles'
import './fonts';
import './BulletText';
import BulletText from './BulletText';
import Heading2 from './Heading2';
import Projects from './Projects';
import '../index.css';

const Underline = () => (
  <View style={styles.underline}></View>
);

const ResumePreview = ({ fName, lName, email, phoneNo, city, state, schools, experience }) => {

  return (
    <div className='pdf'>
      <PDFViewer width="700" height="900">
        <Document>
          <Page size="A4" style={styles.page}>
            <Text style={styles.heading}>{fName || 'First' } {lName || 'Last'}</Text>
            <Text style={styles.text}>{email || 'example@email.com'} | {phoneNo || '9876543210'} | {city || 'City'} | {state || 'State'}</Text>
            <Text style={styles.heading2}>EDUCATION</Text>
            <Underline />
            {schools && schools.map((school, index) => (
              <View key={index}>
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
                <Text style={styles.heading3}>{school.name}</Text>
                <View style={{ width: 440 }}></View>
                <Text style={styles.heading3}>{school.dateFrom} - {school.dateTo}</Text>
                </div>
                <Text style={styles.subheading}>{school.course}</Text>
                <BulletText items={school.description} />
              </View>
            ))}
            <Heading2 title = "EXPERIENCE" />
            <Underline />
            {experience && experience.map((exp, index) => (
              <View key={index}>
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: 5}}>
                <Text style={styles.heading3}>{exp.companyName}</Text>
                <View style={{ width: 440 }}></View>
                <Text style={styles.heading3}>{exp.dateFrom} - {exp.dateTo}</Text>
                </div>
                <Text style={styles.subheading}>{exp.role}</Text>
                <BulletText items={exp.description} />
              </View>
            ))}

            <Heading2 title = "PROJECTS" />
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
