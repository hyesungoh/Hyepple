(() => {
    let yOffset = 0; // pageYOffset
    let prevScrollHeight = 0;
    let currentScene = 0;

    const sceneInfo = [
        {
            type: "sticky",
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-0"),
                msessageA: document.querySelector(
                    "#scroll-section-0 .main-message.a"
                ),
                msessageB: document.querySelector(
                    "#scroll-section-0 .main-message.b"
                ),
                msessageC: document.querySelector(
                    "#scroll-section-0 .main-message.c"
                ),
                msessageD: document.querySelector(
                    "#scroll-section-0 .main-message.d"
                ),
            },
            values: {
                messageA_opacity: [0, 1],
            },
        },
        {
            type: "normal",
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-1"),
            },
        },
        {
            type: "sticky",
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-2"),
            },
        },
        {
            type: "sticky",
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector("#scroll-section-3"),
            },
        },
    ];

    const setLayout = () => {
        // 각 스크롤 섹션의 높이 세팅
        for (let i = 0; i < sceneInfo.length; i++) {
            sceneInfo[i].scrollHeight =
                sceneInfo[i].heightNum * window.innerHeight;

            sceneInfo[
                i
            ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalScrollHeight += sceneInfo[i].scrollHeight;
            if (totalScrollHeight >= yOffset) {
                currentScene = i;
                break;
            }
        }

        document.body.setAttribute("id", `show-scene-${currentScene}`);
    };

    const playAnimation = () => {
        switch (currentScene) {
            case 0:
                console.log("0 play");
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
    };

    const scrollLoop = () => {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
            document.body.setAttribute("id", `show-scene-${currentScene}`);
        }

        if (yOffset < prevScrollHeight) {
            if (currentScene === 0) return;
            currentScene--;
            document.body.setAttribute("id", `show-scene-${currentScene}`);
        }

        playAnimation();
    };

    window.addEventListener("load", setLayout);
    // window.addEventListener("DOMContentLoaded", setLayout);
    window.addEventListener("resize", setLayout);
    window.addEventListener("scroll", () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });
})();
