exports.handler = async function() {
    const CALENDAR_URL = 'https://calendar.misocs.com/CalendarSyncPROadmin.ashx?key=CF52C09A-B97A-49B8-AAFA-3A83152FD330&FT=&D=&C=602-603-4099-604-680-605-606-681-11800-609-611-2921-1480-612-3886-614-5677-8364-615-1482-2919-2920-616-5714-2859-620-618-619-3991-621-622&CC=&ET=Fixture-MultiSport-Training-Competition-SportEvent&Y=&H=&cal=School%20Calendar';

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
