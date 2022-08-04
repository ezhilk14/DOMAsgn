//Create a DOM form which consits of following details
//1.firstname
//2.lastname
//3.email
//4.phonenumber
var fname=createlabel("label","for","fname","FirstName");
var b1=linebreak("br")
var input=inputlabel("input","type","text","id","fname");
var b2=linebreak("br")

var lname=createlabel("label","for","lname","Lastname");
var b3=linebreak("br")
var input1=inputlabel("input","type","text","id","lname");
var b4=linebreak("br")

var email=createlabel("label","for","email","Email");
var b5=linebreak("br")
var input2=inputlabel("input","type","email","id","email");
var b6=linebreak("br")

var phone=createlabel("label","for","phone","PhoneNumber");
var b7=linebreak("br")
var input3=inputlabel("input","type","text","id","phone");
var b8=linebreak("br")
var button=createlabel("button","type","button","Submit");

document.body.append(fname,b1,input,b2,lname,b3,input1,b4,email,b5,input2,b6,phone,b7,input3,b8,button);

function createlabel(tagname,aname,avalue,content)
{
    var ele=document.createElement(tagname);
    ele.setAttribute(aname,avalue);
    ele.innerHTML=content;
    return ele;

}

function inputlabel(tagname,aname,avalue,aname1,avalue1)
{
    var input=document.createElement(tagname);
    input.setAttribute(aname,avalue);
    input.setAttribute(aname1,avalue1);
    input.innerHTML=content;
    return input;
}

function linebreak(breaker){
    var b1=document.createElement(breaker)
    return b1;
}