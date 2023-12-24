// Function to get the current date and time
function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
}

// Function to get the current day of the week
function getCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayIndex = now.getDay();
    return daysOfWeek[dayIndex];
}

// Function to get the user's current location using Google Maps API
function getUserLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const apiKey = 'AIzaSyDJp9hP-Wt3q6EJw9azqzdJ1uLV5c2kdt4'; // Replace with your Google Maps API key

            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
                const data = await response.json();

                if (data.results && data.results.length > 0) {
                    const locationName = data.results[0].formatted_address;
                    document.getElementById("loginLocation").textContent = `Location: ${locationName}`;
                } else {
                    document.getElementById("loginLocation").textContent = "Location not found.";
                }
            } catch (error) {
                console.error(error);
                document.getElementById("loginLocation").textContent = "Error getting location.";
            }
        });
    } else {
        document.getElementById("loginLocation").textContent = "Geolocation not supported.";
    }
}

// Update the HTML with login information
document.getElementById("loginDate").textContent = getCurrentDateTime();
document.getElementById("loginDay").textContent = getCurrentDay();
getUserLocation(); // Call the function to get the user's location
