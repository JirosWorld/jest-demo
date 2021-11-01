function add(num1,num2) {
    // console.log("ik word uitgevoerd");
    return num1 + num2;
}

test("~The add function adds two numbers andd returns the sum",  () => {
    // console.log("ik word uitgevoerd");
    // Arrange
    const number1 = 5;
    const number2 = 10;

    // Act
    const sum = add(number1,number2);

    // Assert = een bewering maken
    expect(sum).toBe(15);

})

function findByName(names, user) {
    // console.log("ik word uitgevoerd");
    // 1. itereer over de array met een for loop
    // 2. Vergelijk de name van iedere enty met de user die we moeten vinden
    // 3 als namen overeenkomen, hele object teruggeven
    // 4 object opslaan in de currentuser
    for (let i = 0; i < names.length; i++) {
        const currentUser = names[i];
        // console.log("Users 1 voor 1:",names[i]);
        if (currentUser.name === user) {
            // hier komt pas iets uit als er 1 gevonden is
            return currentUser;
        }
    }
}


test("findByName will return an object from an array with a specified name", () => {
    // Arrange
    const usernames = [
        { name: "Piet", id: 1},
        { name: "Klaas", id: 2},
        { name: "Priscilla", id: 3},
    ];

    const userToFind = "Klaas";

    // Act
    const result = findByName(usernames,userToFind);

    // Assert
    expect(result).toEqual({name:"Klaas",id:2})
})