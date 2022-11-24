//  ===========DAY 3 Task==============



// RESUME
var resume = {
    name : 'Gopinath',
    age: 26,
    qualification : ['10th', '12th', 'DEEE' ],
    JobProfile : 'Sales Manager',
    workExperience : '8 Years',
    language : ['English', 'Tamil']
}

// print RESUME
console.log(resume)


// Using FOR Loop to print qualification Seperately/
for (var i =0; i < resume.qualification.length; i++) {
    console.log(resume.qualification[i])
}

// Using FOR IN to print property & keys Seperately
 for ( var i in resume) {
    console.log( i, "  : ", resume[i])
 }

