const DOG_URL =`https://dog.ceo/api/breeds/image/random`;
const doggo = document.querySelector('.doggo');
for(let i=0;i<10; i++){
    fetch(DOG_URL)
        .then(res=>res.json())
        .then(data=>{
           const img = document.createElement('img');
           img.src=data.message;
           img.alt='dog-cutty';
           doggo.appendChild(img) 
        })
}








// //////////////////////////////////////////////////////////////////////////////
// var promise = new Promise(function (resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.
//     then(function () {
//         console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//         console.log('Some error has occured');
//     }); 
// console.log(' [[[[[' ,promise)

// var promise = new Promise(function (resolve, reject) {
//     resolve('Geeks For Geeks');
// })
// console.log("*********",promise)
// promise
//     .then(function (successMessage) {
//         //success handler function is invoked 
//         console.log(successMessage);
//     }, function (errorMessage) {
//         console.log(errorMessage);
//     }) 

// var _promise = function (param) {

//     return new Promise(function (resolve, reject) {

//         // 비동기를 표현하기 위해 setTimeout 함수를 사용 
//         window.setTimeout(function () {

//             // 파라메터가 참이면, 
//             if (param) {

//                 // 해결됨 
//                 resolve("해결 완료");
//             }

//             // 파라메터가 거짓이면, 
//             else {

//                 // 실패 
//                 reject(Error("실패!!"));
//             }
//         }, 3000);
//     });
// };

// //Promise 실행
// _promise(true)
//     .then(function (text) {
//         // 성공시
//         console.log(text);
//     }, function (error) {
//         // 실패시 
//         console.error(error);
//     });

