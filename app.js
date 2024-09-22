let percentage = document.querySelector(".Percentage");
let totalmarks = document.querySelector(".TotalMarks");
let name = document.querySelector("Name");
let rollno = document.querySelector(".RollNo");
let grade = document.querySelector(".Grade");

let intomarks= Number(prompt("Enter Total Marks Out Of 550:"));
let inname= prompt("Enter Your Name:");
let inrollno= prompt("Enter Your Roll No:");
let bgcolor = prompt("Enter Page Background Color:");
let textcolor = prompt("Enter Font Color:");
let h1color = prompt("Enter Color Of Main Heading:");
let bordercolor = prompt("Enter Border Color:");
percentage = (intomarks*100)/550;
percentage = percentage.toFixed(2);

if(percentage>=80 && percentage<100){
   document.querySelector(".Grade").innerText="Grade: A+";
}
else if(percentage<80 && percentage>=70){
    document.querySelector(".Grade").innerText="Grade: A";
}
else if(percentage<70 && percentage>=60){
    document.querySelector(".Grade").innerText="Grade: B";
}
else if(percentage<60 && percentage>=50){
    document.querySelector(".Grade").innerText="Grade: C";
}
else if(percentage<50 && percentage>=40){
    document.querySelector(".Grade").innerText="Grade: D";
}
else if(percentage<40 ){
    document.querySelector(".Grade").innerText="Grade: Fail";
}


document.querySelector(".Name").innerText= `NAME: ${inname}`;
document.querySelector(".RollNo").innerText= `ROLL NO: ${inrollno}`;
document.querySelector(".TotalMarks").innerText = `TOTAL MARKS: ${550}`;
document.querySelector(".obtainmarks").innerText = `Obtain Marks: ${intomarks}`;
document.querySelector("body").style.backgroundColor = `${bgcolor}`;
document.querySelector(".one").style.color= `${textcolor}`;
document.querySelector(".two").style.color= `${textcolor}`;
document.querySelector(".three").style.color= `${textcolor}`;
document.querySelector(".four").style.color= `${textcolor}`;
document.querySelector(".five").style.color= `${textcolor}`;
document.querySelector(".six").style.color= `${textcolor}`;
document.querySelector(".Percentage").innerText = `Percentage: ${percentage}`;
document.querySelector("h1").style.color= `${h1color}`;
document.querySelector("div").style.borderColor = `${bordercolor}`;