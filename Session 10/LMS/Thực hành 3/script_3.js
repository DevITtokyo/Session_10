let userName = prompt("who's there?");
if (userName == 'Admin') {
    
} else if (userName==null) {
    alert('Canceled');
} else {
    alert ("I don't know you");
}
let password = prompt('Password?');
    if (password=='TheMaster') {
        alert ('Wellcome');
    } else if (password == null) {
        alert('Canceled');
    } else {
        alert ('Wrong password');
    }
