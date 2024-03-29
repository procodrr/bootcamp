const username = 'Atul'
const userAge = 19;

// if (!username) {
//   username = 'Procodrr'
// }

if(username) {
    console.log(`Name: ${username}`)
}

if(userAge) {
    console.log(`Age: ${userAge}`)
}

// console.log(`Name: ${username}`)
// console.log(`Age: ${userAge}`)


debugger


if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
} else if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
} else if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
    if(userAge >=20) {
        console.log('He is above 19.');
    } else {
        console.log('He is below 20.');
        if(username.length > 5) {
            console.log('Username has length greater than 5.');
        } else {
            console.log('Username is very short.');
        }
    }
} else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
} else if (userAge > 45 && userAge < 121) {
    console.log(`${username} is retired.`);
    console.log('And he/she reads newspaper.');
} else if (userAge >= 121) {
    console.log(`${username} is immortal.`);
    console.log('And he/she reads newspaper.');
} else {
    console.log('Please Enter a Valid Age');
}

console.log('Program Ended!!')
