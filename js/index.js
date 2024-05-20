// Product Card

function createProductCard(productName, price, imageUrl) {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = productName;
  img.className = "product-image";

  const name = document.createElement("h2");
  name.textContent = productName;
  name.className = "product-name";

  const priceTag = document.createElement("p");
  priceTag.textContent = price;
  priceTag.className = "product-price";

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(priceTag);

  return card;
}

// Comment Message

function createCommentMessage(author, message, timestamp) {
  const comment = document.createElement("div");
  comment.className = "comment";

  const authorTag = document.createElement("h3");
  authorTag.textContent = author;
  authorTag.className = "comment-author";

  const messageTag = document.createElement("p");
  messageTag.textContent = message;
  messageTag.className = "comment-message";

  const timeTag = document.createElement("span");
  timeTag.textContent = timestamp;
  timeTag.className = "comment-timestamp";

  comment.appendChild(authorTag);
  comment.appendChild(messageTag);
  comment.appendChild(timeTag);

  return comment;
}

// Menu item

function createMenuItem(name, price, description) {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";

  const itemName = document.createElement("h2");
  itemName.textContent = name;
  itemName.className = "menu-item-name";

  const itemPrice = document.createElement("p");
  itemPrice.textContent = price;
  itemPrice.className = "menu-item-price";

  const itemDescription = document.createElement("p");
  itemDescription.textContent = description;
  itemDescription.className = "menu-item-description";

  menuItem.appendChild(itemName);
  menuItem.appendChild(itemPrice);
  menuItem.appendChild(itemDescription);

  return menuItem;
}

const content = document.getElementById("content");

const productCard = createProductCard(
  "Product Name",
  "$19.99",
  "../images/iphone.jpeg"
);
content.appendChild(productCard);

const commentMessage = createCommentMessage(
  "Panahli Ibrahim",
  "12 yazarsızda müəllim zəhmət olmasa",
  "2008-04-17"
);
content.appendChild(commentMessage);

const menuItem = createMenuItem(
  "Menu Item",
  "$19.99",
  "Description of the menu item."
);
content.appendChild(menuItem);
