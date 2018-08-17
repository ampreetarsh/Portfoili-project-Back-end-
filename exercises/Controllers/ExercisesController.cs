using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace exercises.Controllers
{
    public class ExercisesController : Controller
    {
        // GET: Exercise
        public ActionResult JSExercises()
        {
            return View();
        }
    }
}