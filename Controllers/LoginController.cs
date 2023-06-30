using Microsoft.AspNetCore.Mvc;

namespace DigitaVillage.Controllers
{
    /// <summary>
    /// 登录界面
    /// </summary>
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
