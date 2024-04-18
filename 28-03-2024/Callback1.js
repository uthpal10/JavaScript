function login(un, pwd) {
    console.log(`Login credentials username --> ${un} , password --> ${pwd}`);
}

function addTicket(count) {
    console.log(`Ticket Count is ${count}`);
}

function book(q1, q2, q3, callback1, callback2) {
    callback1(q1, q2, login)
    console.log("Login successful");

    setTimeout ( () => {
        console.log("Welcome, Good to see you here!!!");
        console.log('Before booking the ticket add the ticket count');
    }, 3000);
    
    setTimeout(() => {
        callback2(q3, addTicket)
    }, 3000);
}
book('uthpal', 'qwerty@123', 4, login, addTicket)

