import * as categorysAPI from "./categoryService";

const courses = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    assigName: "Group Assignment",
    cate: { _id: "5b21ca3eeb7f6fbccd471818", name: "Introduction To Managment" },
    dueDate: "2022-09-10",
    mark: 60,
    completed: true
 ,   description: "Write the Assignment Question here",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    assigName: "indiviual Assignment",
    cate: { _id: "5b21ca3eeb7f6fbccd471818", name: "Introduction To Managment" },
    dueDate: "2018-01-03",
    mark: 20,
    description: "Write the Assignment Question here",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    assigName: "Tutorial Lap",
    cate: { _id: "5b21ca3eeb7f6fbccd471820", name: "OBJECT ORIENTED DEVELOPMENT WITH JAVA" },
    dueDate: "2018-01-03",
    mark: 10,
    description: "Write the Assignment Question here",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    assigName: "Lab Test",
    cate: { _id: "5b21ca3eeb7f6fbccd471814", name: "Database" },
    dueDate: "2018-01-03",
    mark: 15,
    description: "Write the Assignment Question here",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    assigName: "SQL Lap",
    cate: { _id: "5b21ca3eeb7f6fbccd471814", name: "Database" },
    dueDate: "2018-01-03",
    mark: 25,
    description: "Write the Assignment Question here",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    assigName: "FINAL Assignment",
    cate: { _id: "5b21ca3eeb7f6fbccd471814", name: "Database" },
    dueDate: "2018-01-03",
    mark: 60,
    description: "Write the Assignment Question here",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    assigName: "Final Assignment",
    cate: { _id: "5b21ca3eeb7f6fbccd471820", name: "OBJECT ORIENTED DEVELOPMENT WITH JAVA" },
    dueDate: "2018-01-03",
    mark: 70,
    description: "Write the Assignment Question here",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    assigName: "Java Test",
    cate: { _id: "5b21ca3eeb7f6fbccd471820", name: "OBJECT ORIENTED DEVELOPMENT WITH JAVA" },
    dueDate: "2018-01-03",
    mark: 20,
    description: "Write the Assignment Question here",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    assigName: "Assignmet Propsal",
    cate: { _id: "5b21ca3eeb7f6fbccd471818", name: "Introduction To Managment" },
    dueDate: "2018-01-03",
    mark: 20,
    description: "Write the Assignment Question here",
  }
];

export function getCourses() {
  return courses;
}

export function getCourse(id) {
  return courses.find(a => a._id === id);
}

export function savecCourse(course) {
  let courseInDb = courses.find(a => a._id === course._id) || {};
  courseInDb.assigName = course.assigName;
  courseInDb.cate = categorysAPI.category.find(c => c._id === course.categoryId);
  courseInDb.dueDate = course.dueDate;
  courseInDb.mark = course.mark;
  courseInDb.description = course.description;

  if (!courseInDb._id) {
    courseInDb._id = Date.now().toString();
    courses.push(courseInDb);
  }

  return courseInDb;
}

export function deleteCourse(id) {
  let courseInDb = courses.find(a => a._id === id);
  courses.splice(courses.indexOf(courseInDb), 1);
  return courseInDb;
}
