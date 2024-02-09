using Microsoft.AspNetCore.Mvc;

namespace Mission5.Controllers
{
    [Route("calculator")]
    public class CalculatorController : Controller
    {
        [Route("index")]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}

