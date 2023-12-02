function GetImageUrl(person) {
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

export default GetImageUrl;
