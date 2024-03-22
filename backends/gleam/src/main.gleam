import gleam/http
import gleam/http/response.{type Response}
import gleam/http/request.{type Request}
import gleam/bytes_builder.{type BytesBuilder}

pub fn oidc_configuration(_request: Request(t)) -> Response(BytesBuilder) {
  // Create the JSON payload
  let payload = object
  { [#("authority", string("company")), #("scopes", string("login profile"))] }

  // Return a JSON response
  http.json_response(payload)
}

pub fn main() {
  // Serve the web server on port 8099 with the "/api" prefix
  http.serve(oidc_configuration, 8099, "/api")
}
