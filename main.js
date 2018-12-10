const content = document.querySelector(".item")

items.results.forEach(function(item){
	var itemTemplate = `
	<a href=${item.results.url}>
			<img src=${item.results.Images[0].url_170x135}>
	</a>
	<a href="${item.results.url}" id="itemTitle">${item.results.title}</a>
	<a  id="shopName" href="${item.results.Shop.shop_name}"></a>
	<span id="price">${item.results.price}</span>
	`
	content.innerHTML += itemTemplate
})