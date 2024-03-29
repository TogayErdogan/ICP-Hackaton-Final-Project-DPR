// Ürün ekleme fonksiyonu

// Ürün silme fonksiyonu

// Upvote eklemek için fonksiyon -> update
#[update]
fn p_upvote(product_id: u32) {
    PRODUCTS.with(|_product| {
        let mut product = _product.borrow_mut().get(product_id);

        product.p_upvote += 1;
    });

    update();
}

// Downvote eklemek için fonksiyon -> update
#[update]
fn p_downvote(product_id: u32) {
    PRODUCTS.with(|_product| {
        let mut product = _product.borrow_mut().get(product_id);

        product.p_downvote += 1;
    });

    update();
}

// Get Product Upvotes -> Query
#[query]
fn get_product_upvotes(product_id: u32) -> (u32) {
    
    let product = PRODUCTS.with(|product| product.borrow().get(product_id));
    let p_upvotes: u32 = product.p_upvotes;
    return p_upvotes;
}

// Get Product Downvotes -> Query

#[query]
fn get_product_downvotes(product_id: u32) -> (u32) {
    let product = PRODUCTS.with(|product| product.borrow().get(product_id));
    let p_downvotes: u32 = product.p_downvotes;
    return p_downvotes;
}

// Get Product Reviews -> Query
#[query]
fn get_product_reviews(product_id: u32) -> HashMap<u32,Review> {
    let product = PRODUCTS.with(|product| product.borrow().get(product_id));
    let reviews : HashMap<u32, Review> = product.reviews;
    return reviews;
}
