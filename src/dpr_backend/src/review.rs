// Ürüne yorum girme fonksiyonu ->Update
#[update]
fn create_review(user_id: u32, product_id: u32, review: String) -> Result<(), String> {
    if (review.is_empty()) {
        return Err(String::from("Review cannot be empty."));
    };

    let product = PRODUCTS.with(|product| product.borrow().get(product_id));
    let review_count = product.reviews.len();
    let review_id: u32 = review_count + 1;


    let new_review: Reviews<u32, Review> = Review {
        review_id: review_id,
        text: review,
        user_id: user_id,
        r_upvotes: 0,
        r_downvotes: 0,
    };

    product.reviews.insert(review_id, new_review);

    update();
    Ok(())
}

// Yorumu oylama fonksiyonu -> Update
impl Review {
    // Review Upvote eklemek için fonksiyon
    #[update]
    fn r_upvote(product_id: u32, review_id: u32) {
        let product = PRODUCTS.with(|product| product.borrow().get(product_id));
        let review = product.reviews.get_mut(review_id);
        review.r_upvotes += 1;
        update();
    }

    // Review Downvote eklemek için fonksiyon
    #[update]
    fn r_downvote(product_id: u32, review_id: u32) {
        let product = PRODUCTS.with(|product| product.borrow().get(product_id));
        let review = product.reviews.get_mut(review_id);
        review.r_downvotes += 1;
        update();
    }

    // Get Review Upvotes -> Query

    #[query]
    fn get_review_upvotes(product_id: u32, review_id: u32) -> (u32) {
        let product = PRODUCTS.with(|product| product.borrow().get(product_id));
        let review = product.reviews.get(&review_id);
        return review.r_upvotes;
    }

    // Get Review Downvotes -> Query

    #[query]
    fn get_review_downvotes(product_id: u32, review_id: u32) -> (u32) {
        let product = PRODUCTS.with(|product| product.borrow().get(product_id));
        let review = product.reviews.get(&review_id);
        return review.r_downvotes;
    }
}

ic_cdk::export_candid!();
