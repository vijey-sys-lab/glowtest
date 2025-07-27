document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired. Initializing Glowcore App.');

    // Define all product data with updated prices and IMAGE ARRAYS
    const products = [
        {
            id: 'hair-serum',
            name: 'Advanced Hair Regrow Serum',
            images: ['images/hair serum.jpg'], // Removed extra images
            price: 959,
            description: 'A potent serum formulated with Redensyl, Rosemary, and Rice Water to promote hair regrowth and strengthen follicles.',
            quantity: '30ml',
            rating: 4.4,
            ratingsBreakdown: { 1: 10, 2: 5, 3: 15, 4: 25, 5: 45 },
            category: 'hairCare'
        },
        {
            id: 'glow-clear-combo',
            name: 'Glow and Clear Combo',
            images: ['images/glow and clear combo.jpg'],
            price: 1499,
            description: 'A comprehensive skincare combo for glowing and clear skin. Includes multiple serums and essentials.',
            quantity: 'Multiple Items',
            rating: 4.4,
            ratingsBreakdown: { 1: 20, 2: 10, 3: 30, 4: 50, 5: 90 },
            items: [
                { name: '2% Salicylic Acid Face Wash', image: 'images/salicylic face wash.jpg', quantity: '50ml' },
                { name: 'SPF 50 Sunscreen', image: 'images/sunscreen spf 50.jpg', quantity: '50ml' },
                { name: 'Alpha Arbutin + Niacinamide + Salicylic Moisturizer', image: 'images/moisturizer salicylic.jpg', quantity: '50ml' },
                { name: 'Vitamin C Serum', image: 'images/vitamin c serum.jpg', quantity: '60ml' },
                { name: '10% Niacinamide Serum', image: 'images/niacinamide serum.jpg', quantity: '30ml' },
                { name: '2% Salicylic + 3% Betaine Serum', image: 'images/salicylic betaine serum.jpg', quantity: '30ml' },
                { name: '2% Kojic Acid + 1% Alpha Arbutin Serum', image: 'images/kojic alpha serum.jpg', quantity: '10ml' }
            ],
            category: 'combo'
        },
        {
            id: 'vitamin-c-serum',
            name: 'Vitamin C Serum',
            images: ['images/vitamin c serum.jpg'], // Removed extra images
            price: 259,
            description: 'Boosts skin radiance and reduces dark spots with a powerful dose of Vitamin C.',
            quantity: '60ml',
            rating: 4.2,
            ratingsBreakdown: { 1: 5, 2: 3, 3: 10, 4: 20, 5: 35 },
            category: 'faceCareSerums'
        },
        {
            id: 'sunscreen-spf50',
            name: 'Sunscreen SPF 50',
            images: ['images/sunscreen spf 50.jpg'], // Removed extra images
            price: 349,
            description: 'Broad-spectrum SPF 50 protection against UVA/UVB rays, non-greasy formula.',
            quantity: '50ml',
            rating: 4.5,
            ratingsBreakdown: { 1: 2, 2: 1, 3: 8, 4: 25, 5: 50 },
            category: 'sunscreen'
        },
        {
            id: 'niacinamide-serum',
            name: 'Niacinamide Serum',
            images: ['images/niacinamide serum.jpg'],
            price: 299,
            description: '10% Niacinamide serum to improve skin texture, minimize pores, and balance oil production.',
            quantity: '30ml',
            rating: 4.3,
            ratingsBreakdown: { 1: 3, 2: 2, 3: 12, 4: 28, 5: 40 },
            category: 'faceCareSerums'
        },
        {
            id: 'kojic-alpha-serum',
            name: 'Kojic Alpha Serum',
            images: ['images/kojic alpha serum.jpg'],
            price: 299,
            description: 'Targets hyperpigmentation and dark spots with Kojic Acid and Alpha Arbutin.',
            quantity: '10ml',
            rating: 4.0,
            ratingsBreakdown: { 1: 8, 2: 7, 3: 18, 4: 22, 5: 30 },
            category: 'faceCareSerums'
        },
        {
            id: 'moisturizer-salicylic',
            name: 'Moisturizer Salicylic',
            images: ['images/moisturizer salicylic.jpg'],
            price: 359,
            description: 'Hydrating moisturizer with salicylic acid for acne-prone skin, keeps skin clear and supple.',
            quantity: '50ml',
            rating: 4.1,
            ratingsBreakdown: { 1: 4, 2: 3, 3: 11, 4: 23, 5: 32 },
            category: 'faceBodyCare'
        },
        {
            id: 'strawberry-lip-balm',
            name: 'Strawberry Lip Balm',
            images: ['images/strawberry lip balm.jpg'],
            price: 149,
            description: 'Nourishing lip balm with a sweet strawberry scent for soft and hydrated lips.',
            quantity: 'Standard lip balm size',
            rating: 4.6,
            ratingsBreakdown: { 1: 1, 2: 1, 3: 5, 4: 20, 5: 40 },
            category: 'faceBodyCare'
        },
        {
            id: 'salicylic-face-wash',
            name: 'Salicylic Face Wash',
            images: ['images/salicylic face wash.jpg'],
            price: 199,
            description: 'Gentle yet effective face wash with 2% Salicylic Acid to cleanse and prevent breakouts.',
            quantity: '50ml',
            rating: 4.3,
            ratingsBreakdown: { 1: 3, 2: 2, 3: 9, 4: 25, 5: 38 },
            category: 'faceBodyCare'
        },
        {
            id: 'coco-butter-moisturizer',
            name: 'Coco Butter Moisturizer',
            images: ['images/coco butter moisturizer.jpg'],
            price: 199,
            description: 'Deeply hydrates and nourishes dry skin with rich cocoa butter formula.',
            quantity: '100ml',
            rating: 4.4,
            ratingsBreakdown: { 1: 2, 2: 3, 3: 7, 4: 21, 5: 42 },
            category: 'faceBodyCare'
        },

        {
            id: 'salicylic-betaine-serum',
            name: '2% Salicylic Acid + 3% Betaine Serum',
            images: ['images/salicylic betaine serum.jpg'],
            price: 199,
            description: `
                <p>A powerful serum designed to target acne and improve skin clarity:</p>
                <ul>
                    <li><strong>Reduces acne & blackheads:</strong> Salicylic Acid deeply penetrates pores to clear blockages.</li>
                    <li><strong>Gently exfoliates and unclogs pores:</strong> Promotes cell turnover for smoother skin.</li>
                    <li><strong>Hydrates and soothes with Betaine:</strong> Counteracts potential dryness, keeping skin balanced.</li>
                    <li><strong>Suitable for oily and acne-prone skin:</strong> Formulated to control excess oil and prevent future breakouts.</li>
                </ul>
            `,
            quantity: '30ml',
            rating: 4.5,
            ratingsBreakdown: { 1: 5, 2: 2, 3: 10, 4: 30, 5: 50 },
            category: 'faceCareSerums'
        },
        {
            id: 'almond-body-lotion',
            name: 'Almond Body Lotion',
            images: ['images/almond body lotion.jpg'],
            price: 349,
            description: 'Deeply moisturizing body lotion infused with almond oil for silky smooth skin.',
            quantity: '300ml',
            rating: 4.5,
            ratingsBreakdown: { 1: 1, 2: 1, 3: 7, 4: 20, 5: 45 },
            category: 'faceBodyCare'
        },
        {
            id: 'sunscreen',
            name: 'Sunscreen',
            images: ['images/sunscreen.jpg'],
            price: 299,
            description: 'Everyday sunscreen for light protection against sun damage.',
            quantity: '50ml',
            rating: 4.0,
            ratingsBreakdown: { 1: 5, 2: 4, 3: 10, 4: 18, 5: 25 },
            category: 'sunscreen'
        },
        {
            id: 'glowcore-foundation',
            name: 'Glowcore Foundation',
            images: ['images/foundationg.png'],
            price: 169,
            description: 'Lightweight foundation for a natural, glowing finish. Available in various shades.',
            quantity: '50 grams',
            rating: 4.2,
            ratingsBreakdown: { 1: 6, 2: 4, 3: 15, 4: 25, 5: 30 },
            category: 'faceBodyCare' // Assuming foundation is also face/body care
        }
    ];

    // Define product categories for filtering
    const productCategories = {
        all: { name: 'All Products', ids: products.map(p => p.id) }, // Special category for all products
        faceCareSerums: {
            name: 'Face Care Serums',
            ids: ['vitamin-c-serum', 'niacinamide-serum', 'kojic-alpha-serum', 'salicylic-betaine-serum']
        },
        hairCare: {
            name: 'Hair Care',
            ids: ['hair-serum']
        },
        combo: {
            name: 'Combos',
            ids: ['glow-clear-combo']
        },
        sunscreen: {
            name: 'Sunscreen',
            ids: ['sunscreen-spf50', 'sunscreen']
        },
        faceBodyCare: {
            name: 'Face & Body Care',
            ids: ['almond-body-lotion', 'salicylic-face-wash', 'strawberry-lip-balm', 'glowcore-foundation', 'coco-butter-moisturizer']
        }
    };


    // Initialize cart from localStorage or as an empty array
    let cart = JSON.parse(localStorage.getItem('glowcoreCart')) || [];
    let couponApplied = false;

    // Get references to DOM elements
    const productGrid = document.getElementById('productGrid');
    const cartBadge = document.getElementById('cartBadge');
    const cartToggle = document.getElementById('cartToggle');
    const cartPanel = document.getElementById('cartPanel');
    const closeCartPanel = document.getElementById('closeCartPanel');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartSubtotalSpan = document.getElementById('cartSubtotal');
    const cartDiscountSpan = document.getElementById('cartDiscount');
    const cartGSTSpan = document.getElementById('cartGST');
    const cartDeliveryChargeSpan = document.getElementById('cartDeliveryCharge');
    const cartCODChargeSpan = document.getElementById('cartCODCharge'); // Reference for COD charge span
    const cartTotalSpan = document.getElementById('cartTotal');
    const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');
    const productAddedToast = document.getElementById('productAddedToast');
    const homeLink = document.getElementById('homeLink');
    const backToHomeFromCartBtn = document.getElementById('backToHomeFromCart');
    const productDetailModal = new bootstrap.Modal(document.getElementById('productDetailModal'));
    const modalProductName = document.getElementById('modalProductName');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const modalProductQuantitySpan = document.getElementById('modalProductQuantity');
    const increaseQtyBtn = document.getElementById('increaseQty');
    const decreaseQtyBtn = document.getElementById('decreaseQty');
    const addToCartModalBtn = document.getElementById('addToCartModalBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');
    const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetail');
    const productSearchInput = document.getElementById('productSearch');
    const couponCodeInput = document.getElementById('couponCodeInput');
    const applyCouponBtn = document.getElementById('applyCouponBtn');
    const couponMessage = document.getElementById('couponMessage');
    const deliveryInfoMessage = document.getElementById('deliveryInfoMessage');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    const modalProductRating = document.getElementById('modalProductRating');
    const modalStarBreakdown = document.getElementById('modalStarBreakdown');
    const suggestedProductsContainer = document.getElementById('suggestedProductsContainer');
    const modalThumbnailsContainer = document.getElementById('modalThumbnailsContainer');
    const categoryFiltersContainer = document.getElementById('categoryFilters'); // New: Reference to filter buttons container

    // Get reference to the payment method radio buttons
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');


    let currentProductInModal = null;
    let modalProductQty = 1;

    // --- Product Display Functions ---
    const displayProducts = (filterCategory = 'all') => {
        console.log(`Displaying products for category: ${filterCategory}`);
        productGrid.innerHTML = ''; // Clear existing products
        let productsToDisplay = [];

        if (filterCategory === 'all') {
            productsToDisplay = products;
        } else if (productCategories[filterCategory]) {
            const categoryProductIds = productCategories[filterCategory].ids;
            productsToDisplay = products.filter(p => categoryProductIds.includes(p.id));
        } else {
            console.warn(`Invalid category provided: ${filterCategory}. Displaying all products.`);
            productsToDisplay = products; // Fallback if an invalid category is passed
        }

        if (productsToDisplay.length === 0) {
            productGrid.innerHTML = '<p class="text-center w-100 fs-5 text-muted">No products found in this category.</p>';
            console.log('No products to display after filtering.');
            return;
        }

        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col'); // Bootstrap column
            productCard.innerHTML = `
                <div class="product-card">
                    <img src="${product.images[0]}" class="card-img-top" alt="${product.name}" data-product-id="${product.id}">
                    <div class="product-card-body">
                        <h5>${product.name}</h5>
                        <p>₹${product.price.toFixed(2)}</p>
                        ${product.id === 'glow-clear-combo' ?
                            `<button class="btn btn-sm view-items-btn" data-product-id="${product.id}">View Items</button>` : ''}
                        <button class="btn btn-primary btn-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
        console.log(`Displayed ${productsToDisplay.length} products.`);

        // Add event listeners for product image clicks to open detail modal
        document.querySelectorAll('.product-card img').forEach(img => {
            img.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                openProductDetailModal(productId);
            });
        });

        // Add event listeners for "Add to Cart" buttons on product cards
        document.querySelectorAll('.btn-add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                const product = products.find(p => p.id === productId); // Find product to get its name
                addToCart(productId);
                showProductAddedToast(product.name); // Pass product name to toast
            });
        });

        // Add event listeners for "View Items" button for Glow and Clear Combo
        document.querySelectorAll('.view-items-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                openProductDetailModal(productId); // Opens modal with combo details
            });
        });

        // Update active class on filter buttons
        document.querySelectorAll('.category-filter-btn').forEach(btn => {
            if (btn.dataset.category === filterCategory) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // Function to render category filter buttons
    const renderCategoryFilters = () => {
        console.log('Rendering category filters.');
        categoryFiltersContainer.innerHTML = ''; // Clear existing buttons

        // Create "All Products" button first
        const allBtn = document.createElement('button');
        allBtn.classList.add('btn', 'category-filter-btn', 'active'); // 'All' is active by default
        allBtn.textContent = 'All Products';
        allBtn.dataset.category = 'all';
        allBtn.addEventListener('click', () => {
            displayProducts('all');
            productSearchInput.value = ''; // Clear search when filtering by category
        });
        categoryFiltersContainer.appendChild(allBtn);

        // Create buttons for other categories
        for (const key in productCategories) {
            if (key === 'all') continue; // Skip the 'all' category here

            const category = productCategories[key];
            const btn = document.createElement('button');
            btn.classList.add('btn', 'category-filter-btn');
            btn.textContent = category.name;
            btn.dataset.category = key; // Store category key in data attribute
            btn.addEventListener('click', () => {
                displayProducts(key);
                productSearchInput.value = ''; // Clear search when filtering by category
            });
            categoryFiltersContainer.appendChild(btn);
        }
        console.log('Category filters rendered.');
    };


    // --- Product Detail Modal Functions ---
    const openProductDetailModal = (productId) => {
        console.log(`Opening product detail modal for: ${productId}`);
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error(`Product with ID ${productId} not found.`);
            return; // Exit if product not found
        }

        currentProductInModal = product; // Store current product for modal actions
        modalProductQty = 1; // Reset quantity for modal

        // Populate modal content
        modalProductName.textContent = product.name;
        modalProductImage.src = product.images[0]; // Set main image to the first one in the array
        modalProductImage.alt = product.name;
        modalProductQuantitySpan.textContent = modalProductQty;

        // Clear existing thumbnails
        modalThumbnailsContainer.innerHTML = '';
        // Add all images to thumbnails and set first as active
        const allImages = product.images || []; // Ensure it's an array, even if empty
        allImages.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imgSrc;
            thumbnail.alt = product.name + ' thumbnail ' + (index + 1);
            thumbnail.classList.add('img-fluid', 'thumbnail-item'); // Custom class for styling
            if (index === 0) {
                thumbnail.classList.add('active-thumbnail'); // Set initial active thumbnail
            }
            modalThumbnailsContainer.appendChild(thumbnail);
            thumbnail.addEventListener('click', () => {
                // Remove active class from all thumbnails
                modalThumbnailsContainer.querySelectorAll('.thumbnail-item').forEach(t => {
                    t.classList.remove('active-thumbnail');
                });
                // Set clicked thumbnail as active
                thumbnail.classList.add('active-thumbnail');
                // Change main modal image source
                modalProductImage.src = imgSrc;
            });
        });

        let descriptionHtml = `<p>${product.description}</p>`;
        if (product.items) { // For combo product, list included items
            descriptionHtml = '<h6>This combo includes:</h6><ul>'; // Adjusted heading for clarity
            product.items.forEach(item => {
                descriptionHtml += `<li>${item.name} (${item.quantity})</li>`;
            });
            descriptionHtml += '</ul>';
        }
        modalProductDescription.innerHTML = descriptionHtml;

        renderProductRating(product); // Display stars and overall rating
        renderStarBreakdown(product); // Display 1-5 star breakdown
        renderSuggestedProducts(product.id); // Display suggested products
        productDetailModal.show(); // Show the Bootstrap modal
        console.log('Product detail modal shown.');
    };

    const renderProductRating = (product) => {
        const rating = product.rating;
        modalProductRating.innerHTML = ''; // Clear previous content

        const fullStars = Math.floor(rating);
        for (let i = 0; i < fullStars; i++) {
            modalProductRating.innerHTML += '<i class="bi bi-star-fill"></i>';
        }
        const halfStar = rating % 1 >= 0.5;
        if (halfStar) {
            modalProductRating.innerHTML += '<i class="bi bi-star-half"></i>';
        }
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            modalProductRating.innerHTML += '<i class="bi bi-star"></i>';
        }
        modalProductRating.innerHTML += ` (${rating.toFixed(1)} out of 5)`;
    };

    const renderStarBreakdown = (product) => {
        modalStarBreakdown.innerHTML = ''; // Clear previous content
        const breakdown = product.ratingsBreakdown;
        const totalRatings = Object.values(breakdown).reduce((sum, count) => sum + count, 0);

        for (let i = 5; i >= 1; i--) {
            const count = breakdown[i] || 0;
            const percentage = totalRatings > 0 ? (count / totalRatings) * 100 : 0;
            modalStarBreakdown.innerHTML += `
                <div>
                    <span>${i} star</span>
                    <div class="star-bar-container">
                        <div class="star-bar" style="width: ${percentage}%"></div>
                    </div>
                    <span>${count}</span>
                </div>
            `;
        }
    };

    const renderSuggestedProducts = (currentProductId) => {
        suggestedProductsContainer.innerHTML = ''; // Clear previous suggestions
        const filteredProducts = products.filter(p => p.id !== currentProductId);

        const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5);

        selected.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('col-6', 'col-md-4', 'col-lg-2'); // Responsive columns for suggested products
            card.innerHTML = `
                <div class="product-card">
                    <img src="${product.images[0]}" class="card-img-top" alt="${product.name}" data-product-id="${product.id}">
                    <div class="product-card-body">
                        <h5>${product.name}</h5>
                        <p>₹${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary btn-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            suggestedProductsContainer.appendChild(card);
        });

        document.querySelectorAll('#suggestedProductsContainer .btn-add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                const product = products.find(p => p.id === productId); // Find product to get its name
                addToCart(productId);
                showProductAddedToast(product.name); // Pass product name to toast
            });
        });

        document.querySelectorAll('#suggestedProductsContainer .product-card img').forEach(img => {
            img.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                openProductDetailModal(productId);
            });
        });
    };


    increaseQtyBtn.addEventListener('click', () => {
        modalProductQty++;
        modalProductQuantitySpan.textContent = modalProductQty;
    });

    decreaseQtyBtn.addEventListener('click', () => {
        if (modalProductQty > 1) {
            modalProductQty--;
            modalProductQuantitySpan.textContent = modalProductQty;
        }
    });

    addToCartModalBtn.addEventListener('click', () => {
        if (currentProductInModal) {
            addToCart(currentProductInModal.id, modalProductQty);
            productDetailModal.hide(); // Hide modal after adding to cart
            showProductAddedToast(currentProductInModal.name); // Pass product name to toast
        }
    });

    buyNowBtn.addEventListener('click', () => {
        if (currentProductInModal) {
            addToCart(currentProductInModal.id, modalProductQty); // Add to cart first
            productDetailModal.hide(); // Hide modal
            // Open cart panel for immediate checkout
            cartPanel.classList.add('show');
            document.body.classList.add('cart-open');
            // Optional: Adjust search bar if it's visually pushed
            const searchBarElement = document.querySelector('.search-bar');
            if (searchBarElement) {
                searchBarElement.classList.add('cart-open');
            }
            updateCartUI(); // Ensure cart display is updated
        }
    });


    // --- Cart Functions ---
    const saveCart = () => {
        localStorage.setItem('glowcoreCart', JSON.stringify(cart));
        console.log('Cart saved to localStorage:', cart);
    };

    const addToCart = (productId, quantity = 1) => {
        console.log(`Attempting to add product ${productId} (qty: ${quantity}) to cart.`);
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += quantity;
                console.log(`Updated quantity for existing item ${productId}. New qty: ${existingItem.quantity}`);
            } else {
                cart.push({ ...product, quantity });
                console.log(`Added new item ${productId} to cart.`);
            }
            saveCart();
            updateCartBadge();
            updateCartUI(); // Update cart display immediately after adding
            console.log('Product added to cart successfully.');
        } else {
            console.error(`Product with ID ${productId} not found in products array.`);
        }
    };

    const removeFromCart = (productId) => {
        console.log(`Attempting to remove product ${productId} from cart.`);
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartBadge();
        updateCartUI();
        console.log(`Product ${productId} removed from cart.`);
    };

    const updateCartItemQuantity = (productId, change) => {
        console.log(`Updating quantity for product ${productId} by ${change}.`);
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            }
            saveCart();
            updateCartBadge();
            updateCartUI(); // Call updateCartUI to refresh the display
            console.log(`Quantity for ${productId} updated.`);
        } else {
            console.warn(`Attempted to update quantity for non-existent item ${productId}.`);
        }
    };

    const updateCartBadge = () => {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'block' : 'none'; // Changed to 'block' for better visibility
        console.log(`Cart badge updated. Total items: ${totalItems}`);
    };

    const calculateCartTotals = () => {
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let discount = 0;
        let codCharge = 0; // Initialize COD charge
        let deliveryCharge = 0; // Initialize delivery charge

        // Apply coupon discount if applicable
        if (couponApplied) {
            discount = subtotal * 0.10; // 10% discount
            subtotal -= discount; // Apply discount to subtotal
        }

        // Delivery charge logic: ₹50 if subtotal is less than ₹499, else free
        if (subtotal < 499) {
            deliveryCharge = 50;
        } else {
            deliveryCharge = 0;
        }

        // COD charge logic: Add ₹15 if Cash On Delivery is selected
        const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;
        if (selectedPaymentMethod === 'Cash On Delivery') {
            codCharge = 15; // Fixed ₹15 COD charge
        }

        const gst = subtotal * 0.05; // 5% GST
        const total = subtotal + gst + codCharge + deliveryCharge; // Add COD and Delivery charges to total

        console.log('Calculated totals:', { subtotal, discount, gst, codCharge, deliveryCharge, total });
        return { subtotal, discount, gst, codCharge, deliveryCharge, total };
    };

    const updateCartUI = () => {
        console.log('Updating cart display. Cart state:', cart);
        cartItemsContainer.innerHTML = ''; // Clear existing items

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            document.getElementById('discountRow').style.display = 'none'; // Hide discount row if cart is empty
            document.getElementById('codChargeRow').style.display = 'none'; // Hide COD charge row if cart is empty
            document.getElementById('deliveryChargeRow').style.display = 'none'; // Hide delivery charge row if cart is empty
            couponApplied = false; // Reset coupon if cart is empty
            couponCodeInput.value = '';
            couponMessage.textContent = '';
            console.log('Cart is empty. Showing empty message.');
        } else {
            emptyCartMessage.style.display = 'none';
            console.log('Cart has items. Rendering them.');
        }

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.images[0]}" alt="${item.name}">
                <div class="cart-item-details">
                    <h6>${item.name}</h6>
                    <p>₹${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity-controls">
                        <button class="btn btn-sm decrease-item-qty" data-product-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm increase-item-qty" data-product-id="${item.id}">+</button>
                    </div>
                    <button class="btn btn-danger btn-sm remove-from-cart-btn" data-product-id="${item.id}"><i class="bi bi-trash"></i></button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        const totals = calculateCartTotals();
        cartSubtotalSpan.textContent = totals.subtotal.toFixed(2);
        cartDiscountSpan.textContent = totals.discount.toFixed(2);
        cartGSTSpan.textContent = totals.gst.toFixed(2);
        cartDeliveryChargeSpan.textContent = totals.deliveryCharge.toFixed(2);
        cartCODChargeSpan.textContent = totals.codCharge.toFixed(2); // Update COD charge span
        cartTotalSpan.textContent = totals.total.toFixed(2);

        // Show/hide discount row based on if a discount was applied
        if (totals.discount > 0) {
            document.getElementById('discountRow').style.display = 'flex';
        } else {
            document.getElementById('discountRow').style.display = 'none';
        }

        // Show/hide COD charge row based on if COD charge is applied
        const codChargeRow = document.getElementById('codChargeRow');
        if (totals.codCharge > 0) {
            codChargeRow.style.display = 'flex';
        } else {
            codChargeRow.style.display = 'none';
        }

        // Show/hide Delivery Charge row based on if delivery charge is applied
        const deliveryChargeRow = document.getElementById('deliveryChargeRow');
        if (totals.deliveryCharge > 0) {
            deliveryChargeRow.style.display = 'flex';
        } else {
            deliveryChargeRow.style.display = 'none';
        }


        // Event delegation for cart item controls
        // Attach a single listener to the parent container
        // This listener will handle clicks on dynamically added buttons
        cartItemsContainer.removeEventListener('click', handleCartItemAction); // Remove old listener to prevent duplicates
        cartItemsContainer.addEventListener('click', handleCartItemAction);


        // Update delivery info message based on COD selection and new delivery charge logic
        const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;
        let deliveryMessage = '';
        if (totals.deliveryCharge > 0) {
            deliveryMessage = `Delivery charge of ₹${totals.deliveryCharge.toFixed(2)} applies for orders below ₹499. `;
        } else {
            deliveryMessage = `Enjoy FREE delivery for orders ₹499 and above! `;
        }

        if (selectedPaymentMethod === 'Cash On Delivery') {
            deliveryMessage += 'A COD charge of ₹15 applies. GST applies to all orders.';
        } else {
            deliveryMessage += 'GST applies to all orders.';
        }
        deliveryInfoMessage.textContent = deliveryMessage;
        console.log('Cart display updated successfully.');
    };

    // New function for handling cart item actions using event delegation
    const handleCartItemAction = (event) => {
        // Stop propagation immediately to prevent the cart panel from closing
        event.stopPropagation();

        const target = event.target;
        // Use closest to find the button or the element with data-product-id
        const productId = target.dataset.productId || target.closest('[data-product-id]')?.dataset.productId;

        if (!productId) {
            console.warn('Product ID not found on clicked element or its parent with data-product-id.');
            return;
        }

        if (target.classList.contains('increase-item-qty')) {
            console.log(`Delegated: Increase quantity clicked for product: ${productId}`);
            updateCartItemQuantity(productId, 1);
        } else if (target.classList.contains('decrease-item-qty')) {
            console.log(`Delegated: Decrease quantity clicked for product: ${productId}`);
            updateCartItemQuantity(productId, -1);
        } else if (target.closest('.remove-from-cart-btn')) { // Use closest for the trash icon inside the button
            console.log(`Delegated: Remove item clicked for product: ${productId}`);
            removeFromCart(productId);
        }
    };


    // --- Event Listeners ---
    cartToggle.addEventListener('click', () => {
        console.log('Cart toggle clicked. Showing cart panel.');
        cartPanel.classList.add('show');
        document.body.classList.add('cart-open');
        updateCartUI(); // Update cart display when panel is opened
    });

    closeCartPanel.addEventListener('click', () => {
        console.log('Close cart panel clicked. Hiding cart panel.');
        cartPanel.classList.remove('show');
        document.body.classList.remove('cart-open');
    });

    // Close cart panel when clicking outside
    document.addEventListener('click', (event) => {
        // Check if the click target is outside the cart panel AND not the cart toggle button
        if (!cartPanel.contains(event.target) && !cartToggle.contains(event.target) && cartPanel.classList.contains('show')) {
            console.log('Clicked outside cart panel. Hiding cart panel.');
            cartPanel.classList.remove('show');
            document.body.classList.remove('cart-open');
        }
    });

    homeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        console.log('Home link clicked. Resetting view.');
        cartPanel.classList.remove('show'); // Hide cart if open
        document.body.classList.remove('cart-open'); // Remove class from body
        productDetailModal.hide(); // Hide modal if open
        displayProducts('all'); // Re-display all products on home
        renderCategoryFilters(); // Re-render filters to ensure 'All Products' is active
        productSearchInput.value = ''; // Clear search bar
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Ensure scroll to top if needed
    });

    // "Back to Home" from inside cart panel
    backToHomeFromCartBtn.addEventListener('click', () => {
        console.log('Back to Home from Cart clicked. Hiding cart panel.');
        cartPanel.classList.remove('show');
        document.body.classList.remove('cart-open');
        displayProducts('all'); // Show all products
        renderCategoryFilters(); // Re-render filters with 'All' active
        productSearchInput.value = ''; // Clear search input
    });

    backToHomeFromDetailBtn.addEventListener('click', () => {
        console.log('Back to Home from Product Detail clicked. Hiding modal.');
        productDetailModal.hide();
        displayProducts('all'); // Show all products
        renderCategoryFilters(); // Re-render filters with 'All' active
        productSearchInput.value = ''; // Clear search input
    });


    productSearchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        console.log(`Search term entered: "${searchTerm}"`);

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            (product.category && productCategories[product.category] && productCategories[product.category].name.toLowerCase().includes(searchTerm))
        );

        productGrid.innerHTML = ''; // Clear current display
        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<p class="text-center w-100">No products found matching your search.</p>';
            console.log('No search results.');
        } else {
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('col');
                productCard.innerHTML = `
                    <div class="product-card">
                        <img src="${product.images[0]}" class="card-img-top" alt="${product.name}" data-product-id="${product.id}">
                        <div class="product-card-body">
                            <h5>${product.name}</h5>
                            <p>₹${product.price.toFixed(2)}</p>
                            ${product.id === 'glow-clear-combo' ?
                                `<button class="btn btn-sm view-items-btn" data-product-id="${product.id}">View Items</button>` : ''}
                            <button class="btn btn-primary btn-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                        </div>
                    </div>
                `;
                productGrid.appendChild(productCard);
            });
            console.log(`Displayed ${filteredProducts.length} search results.`);

            // Re-attach event listeners for newly rendered products
            document.querySelectorAll('.product-card img').forEach(img => {
                img.addEventListener('click', (e) => openProductDetailModal(e.target.dataset.productId));
            });
            document.querySelectorAll('.btn-add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const product = products.find(p => p.id === e.target.dataset.productId);
                    addToCart(e.target.dataset.productId);
                    showProductAddedToast(product.name);
                });
            });
            document.querySelectorAll('.view-items-btn').forEach(button => {
                button.addEventListener('click', (e) => openProductDetailModal(e.target.dataset.productId));
            });
        }
        // Deactivate all category filter buttons when searching
        document.querySelectorAll('.category-filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
    });


    // --- Coupon Code Logic ---
    applyCouponBtn.addEventListener('click', () => {
        const couponCode = couponCodeInput.value.trim().toUpperCase();
        // Updated valid coupons
        const validCoupons = ['VJYGC10', 'WELCOME10', 'FESTIV10', 'SAI10', 'VICHU10'];

        if (validCoupons.includes(couponCode)) {
            couponApplied = true;
            couponMessage.textContent = 'Coupon applied successfully!';
            couponMessage.style.color = 'green';
        } else {
            couponApplied = false;
            couponMessage.textContent = 'Invalid coupon code.';
            couponMessage.style.color = 'red';
        }
        updateCartUI(); // Recalculate totals with/without discount
    });

    // Event listener for payment method changes
    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            console.log(`Payment method changed to: ${radio.value}`);
            updateCartUI();
        });
    });


    // --- WhatsApp Checkout ---
    whatsappCheckoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            // Replaced alert with a more user-friendly message, as alerts are blocked in some environments.
            const toast = new bootstrap.Toast(productAddedToast); // Reusing toast for general messages
            productAddedToast.querySelector('.toast-body').textContent = 'Your cart is empty. Please add items before checking out.';
            productAddedToast.classList.remove('bg-success');
            productAddedToast.classList.add('bg-warning'); // Use a warning color
            toast.show();
            // Reset toast color after a delay if needed for subsequent uses
            setTimeout(() => {
                productAddedToast.classList.remove('bg-warning');
                productAddedToast.classList.add('bg-success');
            }, 3000); // 3 seconds
            return;
        }

        const totals = calculateCartTotals();
        let whatsappMessage = `Hello Glowcore! I'd like to place an order:%0A%0A*Order Details:*%0A`;

        cart.forEach((item, index) => {
            whatsappMessage += `${index + 1}. ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}%0A`;
        });

        whatsappMessage += `%0A*Summary:*%0A`;
        whatsappMessage += `Subtotal (before discount): ₹${(totals.subtotal + totals.discount).toFixed(2)}%0A`; // Show subtotal before discount
        if (couponApplied && totals.discount > 0) { // Only show discount if applied and greater than 0
            whatsappMessage += `Discount: -₹${totals.discount.toFixed(2)}%0A`; // Show amount, not percentage
        }
        whatsappMessage += `GST (5%): ₹${totals.gst.toFixed(2)}%0A`;
        if (totals.codCharge > 0) { // Only add COD charge to message if applicable
            whatsappMessage += `COD Charge: +₹${totals.codCharge.toFixed(2)}%0A`;
        }
        whatsappMessage += `Delivery Charge: ₹${totals.deliveryCharge.toFixed(2)}%0A`;
        whatsappMessage += `*Total Amount: ₹${totals.total.toFixed(2)}*%0A%0A`;

        // Get selected payment method
        let selectedPaymentMethod = 'Not specified'; // Default value
        for (const radio of paymentMethodRadios) {
            if (radio.checked) {
                selectedPaymentMethod = radio.value;
                break;
            }
        }
        whatsappMessage += `*Preferred Payment Method:* ${selectedPaymentMethod}%0A%0A`; // Add payment method to message

        whatsappMessage += `I would like to know info about glow core`; // Custom message as requested

        // Your WhatsApp number
        const whatsappNumber = '9150059199';

        window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    });


    // --- Product Added Toast Animation ---
    const showProductAddedToast = (productName = 'Product') => { // Accept product name parameter
        const toast = new bootstrap.Toast(productAddedToast);
        productAddedToast.querySelector('.toast-body').textContent = `${productName} added to cart successfully!`; // Use product name
        productAddedToast.classList.remove('bg-warning'); // Ensure it's green for product added
        productAddedToast.classList.add('bg-success');
        toast.show();
    };

    // --- Initial Page Load ---
    updateCartBadge(); // Update cart badge on page load
    renderCategoryFilters(); // Render category filter buttons
    displayProducts('all'); // Display all products initially
    console.log('Initial page load complete.');
});