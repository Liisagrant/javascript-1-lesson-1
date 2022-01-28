//example 1
// Global and local scope (functional scope

//var myName = "Lisa";

//function login(arg){
    //var myVar = arg
    //return myVar = arg;
//};

//myVar = "hello";
//console.log(myVar);

//var someVar = login ("Lisa");
//console.log(someVar);

//console.log(someVar);

//console.log(myName)


//LOCAL SCOPE
//function myfunction () {
  //  var carName ="volvo";
//};

//GLOBAL SCOPE
//var carName = "volvo";

//function myfunction () {

//}

//EXAMPLE 2 CALLBACK FUNCTIONS

//var enterSite = function () {
    //console.log("You may log in");
//};

//function logIntoSite(arg){
   // arg();
//};

//logIntoSite(enterSite);

// EXAMPLE 3 assign a function to a variable

//var login = function (name) {
    //console.log("you may log in " + name);
//};

//login("lisa");

// EXAMPLE 4

//var user = {
   // name: "Lisa",
   // occupation: "student",
    //login: function(name) {
     //   console.log("Hello name is ", name)
    //}
//};

//console.log("My user object", user);
//console.log("name:",user.name);

//user.login("Lisa");

//console.log("some message" , user.status); //DEBUGGING
//console.log("some message 2",user.status); //normal code

//CONST.. constant
//const count = 1;
//count = 99;        //this does not work.
//count = count + 99;

//LET
//let count = 1;
//count = 2;
//count = count + 1;

//console.log("my count is ", count);


// block scope. if let var can not be used outside. if var it can be used outside.
//{
   // let pet = "dog"
    //pet = "new dog"

   // function bark(){
   //     console.dir(pet)
   // }
 //   bark();
//}

//const  profile = {
  //  name: "lisa",
   // age: 32,
    //job: "student"
//}

//console.log(profile);
//console.dir(profile);


//This is backticks
//const sentences = `One
//Two`;
//console.log(sentences);

//TODO show what are falsy values (meaning they are false)

//const profile = {
    //name: "lisa",
    //age: 32,
    //job: "student"
//}

//console.log(profile["name"]);
//console.log((profile.name));

