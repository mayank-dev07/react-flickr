import GetImageUrl from "./GetImageUrl";

function Avatar(person) {
  console.log(person);
  return <img className="avatar" src={GetImageUrl(person)} />;
}

export default Avatar;
