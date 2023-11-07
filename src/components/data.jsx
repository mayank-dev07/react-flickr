import getImageUrl from "./details";

function Avatar({ person }) {
  console.log(person);
  return <img className="avatar" src={getImageUrl(person)} />;
}
function Data({ user }) {
  const images = { user }.user;
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap space-x-4 space-y-4">
          {images.map((img) => (
            <div>
              <Avatar person={img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Data;
