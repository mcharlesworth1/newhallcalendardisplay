exports.handler = async function() {
    const CALENDAR_URL = 'https://www.newhallschoolcalendar.co.uk/CalendarSync.ashx?Cal=New%20Hall%20School%20Calendar&ID=3282&A=1';

    try {
        const response = await fetch(CALENDAR_URL);
        const icsData = await response.text();

        return {
            statusCode: 200,
            body: icsData
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch calendar data.' })
        };
    }
};
