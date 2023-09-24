
//function that make soundto depend on which button or key that was clicked or presssed  
function handleClick(key) {
        switch (key) {
            case "w" : 
                var crash = new Audio("./sounds/crash.mp3");
                crash.play(); 
                break; 
            case "a" : 
                var kickBass = new Audio("./sounds/kick-bass.mp3");
                kickBass.play(); 
                break;
            case "s" : 
                var snare = new Audio("./sounds/snare.mp3");
                snare.play(); 
                break;
            case "d" : 
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play(); 
                break;
            case "j" : 
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play(); 
                break;
            case "k" : 
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play(); 
                break;
            case "l" : 
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play(); 
                break;
            default: console.log(buttonInnerHTML);
        }
}

//to detect which button that was clicked
var numberOfDrum = document.querySelectorAll(".drum").length ; 
//เดิมนางให้ค่าเป็น array ของ html ที่มี class drum พอใช้ lenght จะได้จำนวนใน array ทั้งหมด

for(var i = 0; i<numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML; 
        handleClick(buttonInnerHTML);
}
);
} 
//ใช้ for loop โดยเริ่มที่ i = 0 ทำต่อๆปเรื่อยๆ หาก i ยังไม่เกินจำนวนทั้งหมดของ class drum ใน array 
//document.querySelectorAll(".drum")[i] ถ้า i = 0 มันจะเลือกตำแหน่งที่ 0 ในค่าarray ของ document.querySelectorAll(".drum") แล้วใส่ event listener เข้าไปใน html นี้
//โดยevent listener ก็จะฟัง(ตรวจจับ) การ click ถ้าเกิดการ click ก็จะกระตุ้น function() 
//ใน function() สร้างค่า var ใหม่คือ buttonInnerHTML โดยใช้ this.innerHTML โดย This จะเป็นการบอก javascript ว่าเราต้องการค่าที่ตัวนี้ ตัวที่เรากำลังใช้อยู่ ซึ่งก็คือ document.querySelectorAll(".drum")[i]
//ได้ innerHTML ของแต่ละ document.querySelectorAll(".drum")[i] ก็จะเป็นพวกตัวอังษรภาษาอังกฤษต่างๆ 
//ต่อด้วยการรัน  handleClick(buttonInnerHTML); 
//buttonInnerHTML = key 

// to decect which key that was pressed
document.addEventListener("keydown", function(event){
    handleClick(event.key);
});
 //เรา add evet listener เข้าไปทั้ง document เพราะไม่ได้จะเฉพาะเจาะจงกับ button ไหน 
 //เราก็ให้มันตรวจจับดูว่าเราการ keydown หรือการกด key ใดๆ แล้วให้กระตุ้นfunction() 
 //โดยใน funtion มี event อยู่ โดยมันจะ passing(?) event ที่ถูกกระตุ้นโดย keydown (ถ้าลองใช้ console.log นางจะให้ข้อมูลทุกอย่างเกี่ยวกับ Event นี้ ปุ้มไรโดนกดงี้)
 //จากนั้นก็ใช้ property key ของ event เพื่อจะเอาค่า key ของ event (wasjkl) 
 //้handleClick(event.key) event.key = key ถ้า event.key=a key=a
