using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class OidcController : ControllerBase
{
    private readonly IConfiguration configuration;
    private readonly ILogger<OidcController> logger;

    public OidcController(IConfiguration configuration, ILogger<OidcController> logger)
    {
        this.configuration = configuration;
        this.logger = logger;
    }

    [HttpGet]
    [Route("/api/oidc-configuration")]
    public OidcConfiguration GetOidcConfiguration()
    {
        var oidcConfiguration = new OidcConfiguration 
        {
            Authority = configuration["OIDC:Authority"],
            ClientId = configuration["OIDC:ClientId"],
            RedirectUrl = configuration["OIDC:RedirectUrl"],
            PostLogoutRedirectUrl = configuration["OIDC:PostLogoutRedirectUrl"],
            SilentRedirectUrl = configuration["OIDC:SilentRedirectUrl"],
            Scopes = configuration["OIDC:Scopes"]
        };
        return oidcConfiguration;
    }
}
