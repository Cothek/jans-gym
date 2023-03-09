const { google } = require("googleapis");

const SCOPES = "https://www.googleapis.com/auth/calendar.events";
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

export default async (req, res) => {
  if (req.method === `GET`) {
    const auth = new google.auth.JWT(
      CREDENTIALS.client_email,
      null,
      CREDENTIALS.private_key,
      SCOPES
    );

    const calendar = google.calendar({ version: "v3", auth });

    try {
      const results = await calendar.events.list({
        calendarId:
          "97d01b997155373b8a6dc020d6c12198a8be04d28b979d07601e709b6dd2d9ab@group.calendar.google.com",
        timeMin: new Date().toISOString(),
        maxResults: 4,
        singleEvents: true,
        orderBy: "startTime",
      });

      const eventDates = results.data.items.reduce((dates, event) => {
        return [...dates, { date: event.start.dateTime }];
      }, []);

      res.status(200).json(eventDates);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
