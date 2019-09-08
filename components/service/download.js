export default function downloadContent(content, filename = "filename", type = "text/plain") {
  const link = document.createElement("a");
  const textContent = new Blob([content], {type});
  link.href = URL.createObjectURL(textContent);
  link.download = filename;
  link.click();
}