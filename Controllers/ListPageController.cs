using Microsoft.AspNetCore.Mvc;

namespace DigitaVillage.Controllers
{
    public class ListPageController : Controller
    {
        public IActionResult ListPage()
        {
            ViewData["Title"] = "数字化乡村综合信息管理平台-列表页";
            ViewData["CurrentIndex"]=1;
            return View();
        }
    }
}
