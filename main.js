document.addEventListener("DOMContentLoaded", function () {
    // get data-slider elements
    const sliders = document.querySelectorAll("[data-slider]");
    let activeIndex = 0;
    const slidersLength = sliders.length;
    const init = () => {
        sliders[0].classList.add("active");
        activeIndex = 0;
        setInterval(loop, 2000);
    };

    const loop = () => {
        activeIndex++;
        console.log(1);
        if (activeIndex >= slidersLength) {
            activeIndex = 0;
        }
        sliders.forEach((slider) => slider.classList.remove("active"));
        sliders[activeIndex].classList.add("active");
    };
    init();
});
