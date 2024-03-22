use actix_web::{web, route, App, HttpServer, Result, Responder};
use serde::Serialize;

#[derive(Serialize)]
struct OidcConfiguration {
    authority: String,
    scopes: String,
}

#[route("/api/oidc-configuration", method="GET", method="HEAD")]
async fn oidc_configuration() -> Result<impl Responder> {
    let obj = OidcConfiguration {
        authority: "somecompany".to_string(),
        scopes: "login profile".to_string(),
    };
    Ok(web::Json(obj))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Server starting on port 8099...");
    HttpServer::new(|| {
        App::new()
            .service(oidc_configuration)
    })
    .bind("localhost:8099")?
    .run()
    .await
}
