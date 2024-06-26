import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from "googleapis";

type SheetForm = {
    fullName: string;
    email: string;
    company: string;
    GOOGLE_CLIENT_EMAIL: string;
    GOOGLE_PRIVATE_KEY: string;
    GOOGLE_SHEET_ID: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' });
    }
    
  const body = req.body as SheetForm;

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: body.GOOGLE_CLIENT_EMAIL,
                private_key: body.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: body.GOOGLE_SHEET_ID,
            range: 'A1:C1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.fullName, body.email, body.company]
                ]
            }
        });

        return res.status(201).json({
            data: response.data
        });
    } catch (e: any) {
        console.error("Error:", e);

        // Debugging: Log the error message
        console.error("Error Message:", e.message);

        return res.status(500).send({ message: e.message });
    }
}
