const boxes = document.querySelectorAll(".ripple-box");

boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.width = ripple.style.height =
      Math.max(rect.width, rect.height) + "px";
    ripple.style.marginLeft = -parseInt(ripple.style.width) / 2 + "px";
    ripple.style.marginTop = -parseInt(ripple.style.height) / 2 + "px";

    box.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });
});
