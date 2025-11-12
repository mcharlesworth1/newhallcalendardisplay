exports.handler = async function() {
    const CALENDAR_URL = 'https://www.newhallschoolcalendar.co.uk/CalendarSync.ashx?Cal=New%20Hall%20School%20Calendar&ID=3282&A=1';

    try {
        // We add headers to make the request look like a normal browser
        const response = await fetch(CALENDAR_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const icsData = await response.text();

        if (!response.ok) {
            throw new Error(`Failed to fetch calendar. Status: ${response.status}. Body: ${icsData}`);
        }

        return {
            statusCode: 200,
            body: icsData
        };
    } catch (error) {
        console.error('Calendar fetch error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch calendar data.' })
        };
    }
};
