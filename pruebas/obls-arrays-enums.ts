const person={
    firstName: 'carlos',
    age: 31,
    hobbies:['Sports','Cooking']
}

let favoriteActivities:any[];

favoriteActivities = ['sports',1];
console.log(person.firstName);

for(let hobby of person.hobbies){
    console.log(hobby.toUpperCase());

}