function Cat() {
  return (
    <>
      {{ animals: { cat: "🐈" } }}
    </>
  );
}

function Dog() {
  return (
    <>
      {{ animals: { dog: "🐕" } }}
    </>
  );
}

const data = (
  <>
    <Cat />
    <Dog />
  </>
);

console.log({ data });
