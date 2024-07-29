const qty = document.querySelector('.qty');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.logo img');
const lightBox = document.querySelector('.sneaker');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cartIcon = document.querySelector('cart-icon');
const addToCart = document.querySelector('.addOn-cart');
const prodQty = document.querySelector('.addOn .text-dark--blue');
const cartBtns = Array.from(document.querySelectorAll('.addOn .text-orange'));
const thumbnailImgs = Array.from(document.querySelectorAll('.thumbnails img'));

console.log(menu);

const setActiveThumbnail = thumbnailImg => {
	thumbnailImgs.forEach(img => img.classList.remove('active'));
	thumbnailImg.classList.add('active');
	lightBox.src = thumbnailImg.src.replace('-thumbnail', '');
};

thumbnailImgs.forEach(thumbnailImg => {
	thumbnailImg.addEventListener('click', () =>
		setActiveThumbnail(thumbnailImg)
	);
});

const findActiveIndex = () =>
	thumbnailImgs.findIndex(img => img.classList.contains('active'));

prevBtn.addEventListener('click', () => {
	let activeIndex = findActiveIndex();
	if (!activeIndex) activeIndex = thumbnailImgs.length;
	setActiveThumbnail(thumbnailImgs[activeIndex - 1]);
});

nextBtn.addEventListener('click', () => {
	let activeIndex = findActiveIndex();
	if (activeIndex === thumbnailImgs.length - 1) activeIndex = -1;
	setActiveThumbnail(thumbnailImgs[activeIndex + 1]);
});

cartBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		if (btn.textContent === '-' && prodQty.textContent > 0)
			prodQty.textContent--;
		if (btn.textContent === '+') prodQty.textContent++;
		//localStorage.setItem('prodQty', prodQty.textContent)
	});
});

addToCart.addEventListener('click', () => {
	qty.style.display = 'inline';
	qty.textContent = prodQty.textContent;
});

menu.addEventListener('click', () => {
  nav.style.display = 'block';
  const nav_list = nav.querySelector('.nav_list');
})