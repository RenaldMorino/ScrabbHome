using Microsoft.AspNetCore.Mvc;

namespace ScrabbHomeBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordsController : ControllerBase
    {
        private readonly ILogger<WordsController> _logger;
        public WordsController(ILogger<WordsController> logger)
        {
            _logger = logger;
        }
    }
}
