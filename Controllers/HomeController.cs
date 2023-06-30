using Microsoft.AspNetCore.Mvc;

namespace DigitaVillage.Controllers
{
    /// <summary>
    /// 首页
    /// </summary>
    public class HomeController : Controller
    {
        public IActionResult Home()
        {
            ViewData["Title"] = "数字化乡村综合信息管理平台-首页";
            return View();
        }
    }
}
