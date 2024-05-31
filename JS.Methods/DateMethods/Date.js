const now = new Date();
console.log(now);     

// Returns a string representation of a date. The format of the string depends on the locale.
console.log(now.toString());

// Returns a date as a string value.
console.log(now.toDateString());

// Converts a date and time to a string by using the current or specified locale.
console.log(now.toLocaleString());

console.log(now.toLocaleDateString()); // Local date format

console.log(now.toLocaleTimeString()); // Local time format

console.log(now.toISOString()); // ISO 8601 format

console.log(now.toUTCString()); // UTC format

console.log(now.getFullYear()); // Year (e.g., 2024)

console.log(now.getMonth()); // Month (0-11)

console.log(now.getDate()); // Day of the month (1-31)

console.log(now.getDay()); // Day of the week (0-6)

console.log(now.getHours()); // Hours (0-23)

console.log(now.getMinutes()); // Minutes (0-59)

console.log(now.getSeconds()); // Seconds (0-59)

console.log(now.getMilliseconds()); // Milliseconds (0-999)

console.log(now.getTime()); // Timestamp (milliseconds since January 1, 1970)