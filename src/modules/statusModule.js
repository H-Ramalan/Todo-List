export default function statusChange(passedItem) {
  passedItem.completed = !passedItem.completed;
  return passedItem;
}
