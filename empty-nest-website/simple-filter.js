// WORKING CATEGORY FILTER - BASED ON SUCCESSFUL TEST
window.filterDiscountCodes = function(category) {
    console.log('🔍 Filtering for category:', category);
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });
    
    // Get all cards
    const allCards = document.querySelectorAll('.code-card');
    let visibleCount = 0;
    
    allCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const isFeatured = card.classList.contains('featured-card');
        
        let shouldShow = false;
        
        if (category === 'featured') {
            shouldShow = isFeatured;
        } else if (category === 'all') {
            shouldShow = true;
        } else {
            shouldShow = cardCategory === category;
        }
        
        if (shouldShow) {
            card.classList.remove('filter-hide');
            card.classList.add('filter-show');
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.classList.remove('filter-show');
            card.classList.add('filter-hide');
            card.style.display = 'none';
        }
    });
    
    console.log(`✅ Filter complete - ${visibleCount}/${allCards.length} cards visible for: ${category}`);
};

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Simple filter loaded');
    if (window.filterDiscountCodes) {
        window.filterDiscountCodes('featured');
    }
});

console.log('📂 Simple filter script loaded successfully');