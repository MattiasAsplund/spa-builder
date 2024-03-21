use actix_web::{web, get, App, HttpServer, Result, Responder};
use serde::Serialize;

#[derive(Serialize)]
struct OidcConfiguration {
    authority: String,
    scopes: String,
}

#[get("/api/OidcConfiguration")]
async fn oidc_configuration() -> Result<impl Responder> {
    let obj = OidcConfiguration {
        authority: "somecompany".to_string(),
        scopes: "login profile".to_string(),
    };
    Ok(web::Json(obj))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Server is running on http://localhost:8080/");
    HttpServer::new(|| {
        App::new()
            .service(oidc_configuration)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
