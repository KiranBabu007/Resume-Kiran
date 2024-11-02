export default function handler(req, res) {
    // Set headers to force download
    res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
    res.setHeader('Content-Type', 'application/pdf');
    res.sendFile('/path/to/your/public/KiranResume.pdf', { root: '.' });
}
