var tableSelect = document.querySelector('table1');
var productArr=[{
"name":"car1"
,
"description":"fdsfsdf",
"image":'<img src="http://placehold.it/350x150">',
"rate":"5",
"price":"25" ,
"color":'#800000'
},
{
"name":"car2"
,
"description":"fdsfsdf",
"image":'<img src="http://placehold.it/350x150">'
,
"rate":"5",
"price":"25" ,
"color":"red"
},
{
"name":"car3"
,
"description":"77777777f",
"image":'<img src="http://placehold.it/350x150">'
,
"rate":"55",
"price":"20" ,
"color":'#800000'
}]
var product={
"name":"car4"
,
"description":"fdsfsdf"
,
"image":'<img src="http://placehold.it/350x150">',
"rate":"5",
"price":"25" ,
"color":'#FFFF00'
}
productArr.push(product);

function tableFunc(array,tableSelect)
{

for (key in array){
console.log("for" + key);console.log(array[key].name);
  tableSelect.innerHTML+="\
  <tr style='background-color: "+ array[key].color+ "'>\
  <td id="+key+">"+array[key].name+"\
</td>\
<td id="+key+">"+array[key].description+"\
</td>\
<td id="+key+">"+array[key].image+"\
</td>\
<td id="+key+">"+array[key].rate+"\
</td>\
<td id="+key+">"+array[key].price+"\
</td>\
</tr>";
}
}
tableFunc(productArr,table1);
