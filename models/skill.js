const skills = [
  { id: 22, skill: "Javascript", level: "Expert" },
  { id: 23, skill: "Python", level: "Beginner" },
  { id: 24, skill: "Solidity", level: "Beginner" },
  { id: 25, skill: "CSS", level: "Beginner" },
];

module.exports = {
  getAll,
  getOne,
  create,
};
function create(skill) {
  skill.id = Date.now() * 1000000;
  skill.level = "Beginner";
  skills.push(skill);
}
function getAll() {
  return skills;
}
function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}
