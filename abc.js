let globalVar='global'
function addFive(num){
    globalVar='nonono'
    function add(num){
        num=globalVar;
        return num+"NONONO";
    }
    // globalVar='inFunctionl'
    return add(num);
}
// console.log(add(3,3));
console.log(globalVar)
console.log(addFive(10))
console.log(globalVar);
// console.log(add());
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
//??? displayName ??? ??(name ??? ??)
console.log('1234567890123456'.substring(2,8));
console.log('1234567890123456'.substr(2,8));

const dog = {
    name:'Puppy',
    speak(){
        console.log('Woof woof');
    }
}

function ani (){
    return `${me.name.first} ${me.name.last}
    ${me.location.city}`
}
function ani (){
    return `${me.name.first} ${me.name.last}
    ${me.location.city}`
}
const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
console.log(`====================`)
// method 2
let kok=0;
cities.forEach(
    city=>{kok++;console.log(city)}
    //  function(city){
        //     console.log(city)
        // }
        )
        console.log(kok)
        console.log(`**************************`)
        for( const city of cities){
            console.log(city);
        }
        console.log(Object.values(cities).join(" "));
        
        console.log(Object.values(cities));
        const newCities=Object.values(cities);
        newCities.forEach(city=>console.log(city));
        
const me = {
  name: {
    first: "Brian",
    last: "Holt",
    second:null
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA"
  }
};
console.log(`------------------------------------------`);
console.log(me.name, me['name'].first, me['name']['last']);
const {name,location} = me;
let {first, last,second} =name;
second='3333333';
console.log('============++++++++++++++++++++++++++++++++===')
console.log(first, me.name.first, me.name['first'], second);
console.log(name, location);
const newName={a:11, 'prop-3':'pop-3', 3:999999,[3]: 80808888,'3':700, $ : 200,}
const nomo={ _:55, "****": 66, first:9000, [first]:10000}
console.log(newName.a, newName[3], nomo[first], nomo._, newName.$, nomo['****'])
console.log( newName)
console.log(  nomo)