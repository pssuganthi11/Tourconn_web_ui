import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface GuideInfo {
  name: string;
  expertise: string;
}

interface PackageData {
  packageTitle: string;
  destination: string;
  duration: string;
  price: number;
  description: string;
  itinerary: string;
  guide: GuideInfo;
}

export const generatePackagePDF = (data: PackageData) => {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.setTextColor(79, 70, 229); 
  doc.text("TOURCONN", 14, 20);
  
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text("Official Tour Package Plan", 14, 28);
  doc.line(14, 32, 196, 32);

  doc.setFontSize(16);
  doc.setTextColor(0);
  doc.text(data.packageTitle.toUpperCase(), 14, 45);
  
  doc.setFontSize(12);
  doc.text(`Destination: ${data.destination}`, 14, 55);
  doc.text(`Duration: ${data.duration}`, 14, 62);
  doc.text(`Price: Rs. ${data.price.toLocaleString()}`, 14, 69);

  doc.setFontSize(14);
  doc.setTextColor(79, 70, 229);
  doc.text("Assigned Guide Information", 14, 85);
  doc.setFontSize(11);
  doc.setTextColor(0);
  doc.text(`Name: ${data.guide.name}`, 14, 92);
  doc.text(`Expertise: ${data.guide.expertise}`, 14, 98);

  autoTable(doc, {
    startY: 110,
    head: [['Section', 'Details']],
    body: [
      ['Overview', data.description],
      ['Day-wise Plan', data.itinerary],
    ],
    styles: { fontSize: 10, cellPadding: 5, overflow: 'linebreak' },
    headStyles: { fillColor: [79, 70, 229] },
  });

  const fileName = data.packageTitle.replace(/\s+/g, '_') + "_Plan.pdf";
  doc.save(fileName);
};