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
    };

    const scrollLoop = () => {
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
            currentScene++;
        }

        if (yOffset < prevScrollHeight) {
            if (currentScene === 0) return;
            currentScene--;
        }

        console.log(currentScene);
    };

    window.addEventListener("resize", setLayout);
    window.addEventListener("scroll", () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });

    setLayout();
})();
