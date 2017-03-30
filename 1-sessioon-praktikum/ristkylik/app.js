function draw(){
   const g = document.querySelector("#board").getContext("2d");
   const width = parseInt(document.querySelector("#widthbox").value);
   const height = parseInt(document.querySelector("#heightbox").value);
   const x = parseInt(document.querySelector("#leftbox").value);
   const y = parseInt(document.querySelector("#upperbox").value);
   g.fillStyle = "yellow";
   //g.fillRect(0, 0, 300, 200);
   g.fillStyle = "black";
   g.fillRect(x, y, width, height); //x, y, laius, kõrgus
   g.fillText(height, x - 20, y + 20);
   g.fillText(width, x + 20, y - 20);
}