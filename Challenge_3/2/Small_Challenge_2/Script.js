function()
{
//let Element = document.getElementsByTagName('input').style.border-color ='red';
let Elements = document.getElementsByTagName('input');

console.log(Elements);

for(let Element of Elements)
{
	//console.log(Element.attributeStyleMap.size);
	if (Element.attributeStyleMap.size>0 )
	{
		//console.log(Element.attributeStyleMap.size);
		Element.value = 'Found it';
	}
}
	 
	 
	 
}

