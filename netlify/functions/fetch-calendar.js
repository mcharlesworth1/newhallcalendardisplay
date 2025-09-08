exports.handler = async function() {
    const CALENDAR_URL = 'https://www.gov.uk/bank-holidays/england-and-wales.ics';

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