var content = document.querySelector(".item")

var itemTemplate = ""

function checkName(name){
	if (name.length > 27) {
		return name.substring(0, 23) + "..."
	} else {
		return name
	}
}

items.results.forEach(function(item){
	itemTemplate += `
	<div class='each'>
		<a href="${item.url}">
			<img src="${unescape(item.Images[0].url_170x135)}">
		</a>
		<a href="${item.url}" id="itemTitle">${checkName(item.title)}</a>
		<a  id="shopName" href="#">${item.Shop.shop_name}</a>
		<span id="price">$${item.price}</span>
	</div>
	`
	
})

content.innerHTML = itemTemplate