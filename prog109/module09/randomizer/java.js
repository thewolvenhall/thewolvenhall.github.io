var dessert = {
  type: getType(),
  flavor: getFlavor()
}
function getType() {
  types = ["Cake","Candy","Cookie","Pudding","Doughnut","Pastry","Tart"];
  yourType = Math.floor(Math.random()*7);
  return types[yourType];
}
function getFlavor() {
  flavors = ["Apple","Apricot","Banana","Blackberry","Blueberry","Cherry","Coconut","Grape","Lemon","Lime","Melon","Orange","Pear","Pineapple","Pomegranate","Raspberry","Strawberry"];
  yourFlavor = Math.floor(Math.random()*18);
  return flavors[yourFlavor];
}

var output = document.getElementById("output");
var msg;	
msg = "<p>Here's a dessert for you!</p>" + "<p>Type: " + dessert.type + "<br>" + "Flavor: " + dessert.flavor + "</p>";
output.innerHTML = msg;
