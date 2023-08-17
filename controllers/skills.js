const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
};

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}
function show(req, res) {
  res.render("skills/show", {
    skills: Skill.getOne(req.params.id),
  });
}
function newSkill(req, res) {
  res.render("skills/new", { title: "New Todo" });
}
function create(req, res) {
  Skill.create(req.body);
  res.redirect("/skills");
}
