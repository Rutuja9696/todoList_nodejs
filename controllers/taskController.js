//all route handlers
const getAllTasks = (req, res, next) => {
  console.log("response from controller");
  res.send("Response to user");
};
const createTask = (req, res, next) => {
  console.log("create task");
  res.send("created task");
};
module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
