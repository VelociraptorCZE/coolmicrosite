export default async function pickColor() {
  return new Promise(resolve => {
    const blackColor = "#000000";
    const input = document.createElement("input");
    input.type = "color";
    input.oninput = () => resolve(input.value);
    input.click();

    if (input.value === "") {
      resolve(blackColor);
    }
  });
}