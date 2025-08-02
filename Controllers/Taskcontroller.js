const Taskmodel = require("../Models/Taskmodel");

const CreateTask = async (req, res) => {
  const { projectTitle, assignedTo, description, startDate, endDate } =
    req.body;
  try {
    //// to check if task exist in our db under task collection
    if (description.length < 5) {
      return res.status(511).json({
        message: "Minimium length of decription should be above 5 letter words",
      });
    }

    if (description.length > 1000) {
      return res.status(591).json({
        message:
          "Maximium length of decription shouldnot exceed 1000 letter words",
      });
    }
    const projectExist = await TaskModel.findOne({
      projectTitle,
      assignedTo,
    });
    if (projectExist) {
      return res.status(405).json({
        message: "Task already Assigned to this user",
      });
    }

    ///// to create a new task
    const createNewTask = new TaskModel({
      projectTitle,
      assignedTo,
      description,
      startDate,
      endDate,
    });

    /// we are saving the everything thing is the req.body to the db
    const taskResult = await createNewTask.save();

    /////where am returning the data if successful
    // res.status(200).json(taskResult);
    //  or this
    //where am returning the data if successful
    res.status(200).json({
      _id: taskResult._id,
      projectTitle: taskResult.projectTitle,
      assignedTo: taskResult.assignedTo,
      description: taskResult.description,
      startDate: taskResult.startDate,
      endDate: taskResult.endDate,
    });
  } catch (error) {
    ///where am hangling my server error message
    res.status(404).json({
      message: "internal server error",
    });
  }
};

const GetAllTask = async (req, res) => {
  try {
    const result = await TaskModel.find().sort({ createdAt: -1 });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: "Failed to fetch data",
    });
  }
};

module.exports = {
  CreateTask,
  GetAllTask,
};
