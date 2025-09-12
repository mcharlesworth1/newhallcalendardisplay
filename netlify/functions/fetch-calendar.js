exports.handler = async function() {
    const CALENDAR_URL = 'https://calendar.misocs.com/CalendarSyncPROadmin.ashx?key=CF52C09A-B97A-49B8-AAFA-3A83152FD330&A=1&D=&cal=School%20Calendar';

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
