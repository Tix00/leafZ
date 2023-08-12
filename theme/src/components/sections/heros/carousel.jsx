<template>
  <p>TEST SONO QUI</p>
  <div class="slider-container">
    <div class="blaze-slider">
      <div class="blaze-slide">
        sdfsdfsdf
        <img src="path/to/image1.jpg" alt="Image 1" />
      </div>
      <div class="blaze-slide">
        dsfdsfsdf
        <img src="path/to/image2.jpg" alt="Image 2" />
      </div>
    </div>
  </div>
</template>

import BlazeSlider from "blaze-slider";
console.log("TESSSSS");
export function onMount() {
  const el = document.querySelector(".slider-container");
  const slider = new BlazeSlider(el, {
    all: {
      slidesToShow: 3,
    },
  });
}

<style>
  .slider-container {
    width: 100%;
  height: 100%;
  }
</style>
