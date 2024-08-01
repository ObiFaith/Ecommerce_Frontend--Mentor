const qty = document.querySelector('.qty');
const modal = document.querySelector('.modal');
const navSm = document.querySelector('.nav-sm');
const menu = document.querySelector('.logo img');
const cartIcon = document.querySelector('cart-icon');
const addToCart = document.querySelector('.addOn-cart');
const header = document.querySelector('header').firstElementChild;
const prodQty = document.querySelector('.addOn .text-dark--blue');
const prevBtns = Array.from(document.querySelectorAll('.prev-btn'));
const nextBtns = Array.from(document.querySelectorAll('.next-btn'));
const lightBoxs = Array.from(document.querySelectorAll('.sneaker'));
const cartBtns = Array.from(document.querySelectorAll('.addOn .text-orange'));
const thumbnailImgs = Array.from(document.querySelectorAll('.thumbnails img'));

const setActiveThumbnail = thumbnailImg => {
	thumbnailImgs.forEach(img => img.classList.remove('active'));
	thumbnailImg.classList.add('active');
	lightBoxs.forEach(
		lightBox => (lightBox.src = thumbnailImg.src.replace('-thumbnail', ''))
	);
};

lightBoxs[0].addEventListener('click', () => {
	modal.style.display = 'grid';
});

thumbnailImgs.forEach(thumbnailImg => {
	thumbnailImg.addEventListener('click', () =>
		setActiveThumbnail(thumbnailImg)
	);
});

const findActiveIndex = () =>
	thumbnailImgs.findIndex(img => img.classList.contains('active'));

prevBtns.forEach(prevBtn =>
	prevBtn.addEventListener('click', () => {
		let activeIndex = findActiveIndex();
		if (!activeIndex) activeIndex = thumbnailImgs.length;
		setActiveThumbnail(thumbnailImgs[activeIndex - 1]);
	})
);

nextBtns.forEach(nextBtn =>
	nextBtn.addEventListener('click', () => {
		let activeIndex = findActiveIndex();
		if (activeIndex === thumbnailImgs.length - 1) activeIndex = -1;
		setActiveThumbnail(thumbnailImgs[activeIndex + 1]);
	})
);

cartBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		if (btn.textContent === '-' && prodQty.textContent > 0)
			prodQty.textContent--;
		if (btn.textContent === '+') prodQty.textContent++;
		//localStorage.setItem('prodQty', prodQty.textContent)
	});
});

addToCart.addEventListener('click', () => {
	if (prodQty.textContent > 0) {
		qty.style.display = 'inline';
		qty.textContent = prodQty.textContent;
	}
});

menu.addEventListener('click', () => {
	if (menu.src.includes('menu')) {
		navSm.style.display = 'block';
		header.style.alignItems = 'flex-start';
		header.parentElement.style.paddingBottom = '1rem';
		menu.src = menu.src.replace('menu', 'close');
		const nav_list = navSm.querySelector('.nav_list');
		nav_list.parentElement.style.paddingBottom = '1rem';
		nav_list.style.width = '100%';
		nav_list.style.textAlign = 'center';
	} else {
		nav.style.display = 'none';
		menu.src = menu.src.replace('close', 'menu');
	}
});

modal.addEventListener('click', event => {
	const modalBox = modal.firstElementChild;
	if (!modalBox.contains(event.target)) {
		modal.style.display = 'none';
	}
});
