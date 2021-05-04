const email = 'nastiadgaf@gmail.com';

function testEmail(EMAIL){
    const regexp =   /[-.\w]+@([\w-]+\.)+[\w-]+/g;
    return regexp.test(EMAIL);
}

console.log(testEmail(email));