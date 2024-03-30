#[update]
fn create_user(username: String, password: String) -> Result<(), String> {
    if username.is_empty() || password.is_empty() {
        return Err(String::from("Username or password cannot be empty."));
    }

    // Kullanıcı adı mevcut mu değil mi kontrol et
    if USERS.with(|user| user.borrow().contains_key(username)) {
        return Err("User already exists".to_string());
    };

    let users_count = users.len();
    let user_id: u32 = users_count + 1;

    let new_user = User {
        user_id,
        username,
        password,
    };

    USERS.with(user_id, new_user);

    update();

    Ok(())
}


ic_cdk::export_candid!();
