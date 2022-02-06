import aspose.words as aw

# Load word document
doc = aw.Document("assets/files/resume.docx")

# Save as PDF
doc.save("assets/files/resume.pdf")
