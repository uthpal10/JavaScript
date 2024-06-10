function convertToMilitaryTime(time) 
{
    // Extract components from the input time
    let period = time.slice(-2);
    let [hour, minute, second] = time.slice(0, -2).split(':');
    
    // Convert hour to integer
    hour = parseInt(hour, 10);
    
    // Perform conversion based on the period
    if (period === 'AM') 
    {
        if (hour === 12) 
        {
            hour = '00';
        } else 
        {
            hour = hour.toString().padStart(2, '0');
        }
    } else if (period === 'PM') 
    {
        if (hour !== 12) 
        {
            hour = (hour + 12).toString();
        }
    }
    
    // Format the hour, minute, and second to ensure two digits each
    hour = hour.toString().padStart(2, '0');
    minute = minute.padStart(2, '0');
    second = second.padStart(2, '0');
    
    // Combine the components into the final 24-hour format string
    return `${hour}:${minute}:${second}`;
}

// Example usage:
let time = "07:05:45PM";
console.log(convertToMilitaryTime(time)); // Output: 19:05:45

time = "12:40:22AM";
console.log(convertToMilitaryTime(time)); // Output: 00:40:22

time = "12:45:54PM";
console.log(convertToMilitaryTime(time)); // Output: 12:45:54

time = "01:00:00AM";
console.log(convertToMilitaryTime(time)); // Output: 01:00:00