const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".page__slider--value");
const sliderFilled = document.querySelector(".slider__filled");
const selector = document.querySelector(".selector");
const pageViews = document.querySelector(".page__views");
const billingType = document.querySelector(".billing__type");

const checkPrice = () => {
  if (billingType.checked) {
    const discountedPrice = slider.value * 0.75;
    sliderValue.innerHTML = discountedPrice.toLocaleString("en-us", {
      style: "currency",
      currency: "USD",
    });
    return;
  }
  const priceElement = parseInt(slider.value);
  sliderValue.innerHTML = priceElement.toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
  });
};

slider.addEventListener("input", () => {
  checkPrice();
  if (parseInt(slider.value) === 0) {
    const freeVersion = 10000;
    pageViews.innerHTML = freeVersion.toLocaleString();
  } else {
    const newValue = slider.value * 100000;
    pageViews.innerHTML = newValue.toLocaleString();
  }

  const maxValue = slider.getAttribute("max");
  const percent = (slider.value / maxValue) * 100;

  sliderFilled.style.width = `${percent}%`;

  selector.style.left = `${percent}%`;
  selector.style.transform = `translateX(-${percent}%)`;
});

billingType.addEventListener("change", () => {
  checkPrice();
});
