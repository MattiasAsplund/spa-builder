namespace backend.Models;

public class OidcConfiguration
{
    public string Authority { get; set; }
    public string ClientId { get; set; }
    public string RedirectUrl { get; set; }
    public string PostLogoutRedirectUrl { get; set; }
    public string SilentRedirectUrl { get; set; }
    public string Scopes { get; set; }
}
