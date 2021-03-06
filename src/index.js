//import './index.css'; // for webpack to bundle for us

// import numeral from 'numeral';

// const courseValue = numeral(1000).format('$0,0.00');
// debugger  // uncomment this to set breakpoint
//console.log(`I would not pay ${courseValue} for this course!`);

import {getUsers} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
    let userBody = "";

    result.forEach(user => {
        userBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHTML = userBody;
});
