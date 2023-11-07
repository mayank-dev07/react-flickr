export default function getImageUrl(person) {
  console.log(person);
  return (
    "https://live.staticflickr.com/" +
    person.server +
    "/" +
    person.id +
    "_" +
    person.secret +
    ".png"
  );
}
