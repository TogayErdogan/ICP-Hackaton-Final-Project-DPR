use core::cell::RefCell;
use serde::Deserialize;
use std::collections::HashMap;

// Structs

pub struct User {
    user_id: u32,
    username: String,
    password: String,
}

#[derive(Debug, Deserialize)]
pub struct Review {
    review_id: u32,
    text: String,
    user_id: u32,
    r_upvotes: u32,
    r_downvotes: u32,
}

#[derive(Debug, Deserialize)]
pub struct Product {
    product_id: u32,
    img: String,
    title: String,
    new_price: String,
    company: String,
    ram: String,
    brand: String,
    p_upvotes: u32,
    p_downvotes: u32,
    reviews: HashMap<u32, Review>,
}

// Types

pub type Products = HashMap<u32, Product>;
pub type Users = HashMap<u32, User>;
pub type Reviews = HashMap<u32, Review>;

thread_local! {
    pub static PRODUCTS: RefCell<Products> = RefCell::default();
    pub static USERS: RefCell<Users> = RefCell::default();
}


