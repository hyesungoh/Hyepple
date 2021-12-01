<br/><br/><br/><br/><br/><br/>

<div align=center>
<h1> 
<!-- <img width="150px" src="https://user-images.githubusercontent.com/26461307/127677346-8bb6ca31-1d6c-4786-92d0-95ed98b15f0e.png"/>  -->
<br/>
Hyepple </h1>

<p>Apple clone coding</p>
</div>

<div align="center">
  <a href="#using">Using</a> •
  <a href="#what-i-learn">What I learn</a>
</div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

## Using

- Vanilla JS

## What I learn

#### Css not pseudo element

```css
.className:not(.doNotThis) {
  font-size: 12px;
}
```

#### window can ignore

```js
console.log(innerHeight);
console.log(window.innerHeight); // 같다
```

#### checking Load

```js
// DOM, 이미지등 모든 것이 load 되었을 때
window.addEventListener("load", setLayout);

// DOM만이 로드 완료되었을 때
window.addEventListener("DOMContentLoaded", setLayout);
```

#### translateXYZ vs translate3d

`translate3d`의 경우 **하드웨어 가속이 보장**되기 때문에, 애플의 경우 3d 이동이 아니더라도 사용하고 있다.

#### Scroll 비율 구하기

`현재 스크롤된 값 / (전체 화면 높이 - 화면의 크기)`

```js
pageYOffset / (document.body.offsetHeight - window.innerHeight);
```

전체 화면에서 화면의 크기까지 스크롤되기 때문

#### Scroll 이용 Video duration 조작

`Video` 태그를 직접 Scroll을 이용하여 조작하면 해상도가 높아질 시, 사용자 경험이 좋지 않다.

그렇기에 Apple도 해당 방법을 사용하지 않는다.

```js
const videoElem = document.querySelector(".sample-video");
let progress;
let currentFrame;
function init() {
  document.body.classList.remove("before-load");

  window.addEventListener("scroll", function () {
    progress = pageYOffset / (document.body.offsetHeight - window.innerHeight);
    console.log(progress);
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    videoElem.currentTime = videoElem.duration * progress;
  });
}

window.addEventListener("load", init);
```

#### Scroll, Canvas 이용 Image 조작

`Canvas`를 이용하는 것이 `Video`와 `Image`를 직접 조작하는 것보다 사용자 경험이 좋다.

Apple에서 실제로 사용하는 방법

`ctx.drawImage(imageSrc, xPos, yPos)`

```js
const canvas = document.querySelector(".sample-canvas");
const context = canvas.getContext("2d");
const videoImages = [];
let totalImagesCount = 960;
let progress;
let currentFrame;

function setImages() {
  for (let i = 0; i < totalImagesCount; i++) {
    let imgElem = new Image();
    imgElem.src = `../video/002/IMG_${7027 + i}.JPG`;
    videoImages.push(imgElem);
  }
}

function init() {
  document.body.classList.remove("before-load");
  context.drawImage(videoImages[0], 0, 0);

  window.addEventListener("scroll", function () {
    progress = pageYOffset / (document.body.offsetHeight - window.innerHeight);
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    currentFrame = Math.round((totalImagesCount - 1) * progress);
    context.drawImage(videoImages[currentFrame], 0, 0);
  });
}

window.addEventListener("load", init);
setImages();
```

#### Canvas 크기 조작

`Canvas 객체의 width, height 값을 조정하는 방법`, `css를 이용해 transform`하는 방법이 있다.

전자의 방법은 Canvas의 픽셀 수가 달라지는 단점이 있어, 애플은 후자의 방법을 사용한다고 한다.
