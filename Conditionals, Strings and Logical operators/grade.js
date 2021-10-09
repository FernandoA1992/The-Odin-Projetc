const grade = 50;

switch(true) {
case grade >= 90:
    console.log("A");
    break;
case grade >= 80:
    console.log("B");
    break;
case grade >= 70:
    console.log("C");
    break;
case grade >= 60:
    console.log("D");
    break;
default:
    console.log("F");
};

//Grade of 90 and above is an A
//Grade of 80 to 89 is a B
//Grade of 70 to 79 is a C
//Grade of 60 to 69 is a D
//Grade of 59 or below is an F