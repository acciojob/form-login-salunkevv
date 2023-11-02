function getFormvalue() {
    //Write your code here
	let arr = document.getElementsByTagName("input");
	alert(`${arr["fname"].value} ${arr["lname"].value}`);
}
