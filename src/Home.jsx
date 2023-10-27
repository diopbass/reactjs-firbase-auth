import React from 'react'
import { database } from './firebaseConfig'
import { ref, onValue } from "firebase/database";

const Home = () => {
    const [actifUsersPerDay, setActifUsersPerDay] = React.useState(0);
    const [actifUsersPerMonth, setActifUsersPerMonth] = React.useState(0);

    // get actif users per day
    React.useEffect(() => {
        const actifUsersPerDayRef = ref(database, 'userSessions');
        onValue(actifUsersPerDayRef, (snapshot) => {
            const data = snapshot.val();
            // console.log(data);
            setActifUsersPerMonth(calculateTimeOnApp(data));
        });
    }, []);

    function calculateTimeOnApp(data) {
        const userTimes = {};

        for (const userId in data) {
            userTimes[userId] = 0;
            for (const sessionKey in data[userId]) {
                const session = data[userId][sessionKey];
                const startTime = new Date(session.startTime);
                const endTime = new Date(session.endTime || Date.now());
                console.log(startTime, endTime);
                if (!isNaN(startTime) && !isNaN(endTime)) {
                    userTimes[userId] += (endTime - startTime)
                }
            }
        }
        // convert to hours or minutes
        for (const userId in userTimes) {
            console.log( userId,  userTimes[userId]);
            const durationInHours = Math.floor(userTimes[userId] / 3600000);
            const durationInMinutes = Math.floor((userTimes[userId] % 3600000) / 60000);
            userTimes[userId] = durationInHours < 1 ? `${durationInMinutes} munites` : `${durationInHours} heurs`;
        }
        // If duration is less than 1 hour, convert to minutes
        // otherwise convert to hours

        return userTimes;
    }

    // console.log(actifUsersPerMonth);

    return (
        <div>
            <h1>Time on App per User per Month</h1>
            <ul>
                {Object.entries(actifUsersPerMonth).map(([userId, time]) => (
                    <li key={userId}>
                        ID: {userId}, Time: {time}  heurs
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
