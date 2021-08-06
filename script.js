window.addEventListener("DOMContentLoaded", () => {
  function toggleDropdown() {
    event.target.classList.toggle("colorDark");
    let imageIcon = event.target.lastChild.previousElementSibling;
    imageIcon.classList.toggle("rotateIcon");
    let sibling = event.target.nextElementSibling;
    sibling.classList.toggle("hideDisplay");
  }
  let listItem = document.querySelectorAll("li>p:nth-of-type(1)");
  console.log(listItem);
  listItem.forEach((item) => {
    item.addEventListener("click", toggleDropdown);
  });
});
