function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "React", "Python"];
    var member = {
        name: "John",
        age: 23,
        skills: skills,
        // Method
        calculateNumbers: function (var1, var2) {
            console.log(var1 + var2)
        }
    }
    console.log(member.skills[2]);
    member.calculateNumbers(2, 3);
}