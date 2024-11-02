import { join } from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
    const filePath = join(process.cwd(), 'public', 'KiranResume.pdf');

    // Check if the file exists
    try {
        await fs.access(filePath);
        res.setHeader('Content-Disposition', 'attachment; filename="KiranResume.pdf"');
        res.setHeader('Content-Type', 'application/pdf');
        res.sendFile(filePath);
    } catch (error) {
        res.status(404).send('File not found');
    }
}
