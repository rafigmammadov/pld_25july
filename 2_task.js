const object = {
    Company:
    {
        name: 'Holberton School',
        location: "Baku",
        Domains:
        {
            Courses: ["DSA Self Paced Course",
                "Full Stack Development",
                "Devops Boot Camp",
                "GATE Prepration"],
            Articles: [
                `Interview Prepration, Algorithms,
                 Data Structures, Web Development`]
        }
    },
}

let {name = "Rafig"} = object.Company;
let {Courses} = object.Company.Domains;
console.log(name);
console.log(Courses);
