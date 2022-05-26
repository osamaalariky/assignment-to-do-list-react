export const category = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Introduction To Managment" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Database" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "OBJECT ORIENTED DEVELOPMENT WITH JAVA" }
];

export function getCategory() {
  return category.filter(c => c);
}
