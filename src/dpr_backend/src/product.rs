use ic_cdk::{query, update};
use lib::Product;
use lib::Products;

// Ürün ekleme fonksiyonu
#[update]
fn add_product(img_url: String, title: String, price: String, brand: String, ram: u32) -> Result<(), String> {
    if title.is_empty()
        || img_url.is_empty()
        || price.is_empty()
        || company.is_empty()
        || ram.is_empty()
    {
        return Err(String::from("You must enter all parameters."));
    }

    let products_length = PRODUCTS.with(|products| products.borrow()).len();

    let product_id: u32 = products_length + 1;

    let new_product = Product {
        product_id,
        img: img_url,
        title,
        p_upvotes: 0,
        p_downvotes: 0,
        new_price: price,
        company: 0,
        brand,
        ram,
        reviews,
    };

    PRODUCTS.with(product_id, new_product);

    update();

    Ok(())
}

// Ürün silme fonksiyonu
#[update]
fn delete_product(product_id: u32) -> Result<(), String> {
    if !PRODUCTS.with(|products| products.borrow().contains_key(&product_id)) {
        return Err("Product not found".to_string());
    }

    PRODUCTS.with(|products| products.borrow_mut().remove(&product_id));

    update();

    Ok(())
}

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
fn get_product_reviews(product_id: u32) -> HashMap<u32, Review> {
    let product = PRODUCTS.with(|product| product.borrow().get(product_id));
    let reviews: HashMap<u32, Review> = product.reviews;
    return reviews;
}
