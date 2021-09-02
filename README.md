<br/><br/><br/><br/><br/><br/>

<div align=center>
<h1> 
<!-- <img width="150px" src="https://user-images.githubusercontent.com/26461307/127677346-8bb6ca31-1d6c-4786-92d0-95ed98b15f0e.png"/>  -->
<br/>
Hyepple </h1>

<p>Apple clone coding</p>
</div>

<div align="center">
  <a href="#what-i-learn">What I learn</a> •
  <a href="#using">Using</a>
</div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

## Using

-   Vanilla JS

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
