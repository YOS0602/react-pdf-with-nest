import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { FC } from 'react';

Font.register({
  family: 'HackGen35',
  fonts: [
    {
      src: 'fonts/HackGen35-Regular.ttf',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    {
      src: 'fonts/HackGen35-Bold.ttf',
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  ],
});

// Create styles
export const styles = StyleSheet.create({
  page: {
    fontFamily: 'HackGen35',
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

// Create Document Component
export const PDFDocument: FC = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>こんにちは</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Text style={styles.boldText}>太字です</Text>
      </View>
    </Page>
  </Document>
);

export const toFile = (filePath: string) =>
  ReactPDF.renderToFile(<PDFDocument />, filePath);

export const toStream = () => ReactPDF.renderToStream(<PDFDocument />);
