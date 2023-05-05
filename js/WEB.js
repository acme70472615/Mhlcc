const showInfo = () => {
    let y = 0;
    const profileButton = document.querySelector("#profile-button");
    const webButton = document.querySelector("#web-button");
    const emailButton = document.querySelector("#email-button");
    const locationButton = document.querySelector("#location-button");
    const text = document.querySelector("#text");

    profileButton.setAttribute("visible", true);
    setTimeout(() => {
        webButton.setAttribute("visible", true);
    }, 300);
    setTimeout(() => {
        emailButton.setAttribute("visible", true);
    }, 600);
    setTimeout(() => {
        locationButton.setAttribute("visible", true);
    }, 900);

    let currentTab = '';
    webButton.addEventListener('click', function (evt) {
        text.setAttribute("value", "https://softmind.tech");
        currentTab = 'web';
    });
    emailButton.addEventListener('click', function (evt) {
        text.setAttribute("value", "hello@softmind.tech");
        currentTab = 'email';
    });
    profileButton.addEventListener('click', function (evt) {
        text.setAttribute("value", "AR, VR solutions and consultation");
        currentTab = 'profile';
    });
    locationButton.addEventListener('click', function (evt) {
        console.log("loc");
        text.setAttribute("value", "Vancouver, Canada | Hong Kong");
        currentTab = 'location';
    });

    text.addEventListener('click', function (evt) {
        if (currentTab === 'web') {
            window.location.href = "https://softmind.tech";
        }
    });
}

const showPortfolio = (done) => {
    const portfolio = document.querySelector("#portfolio-panel");
    const portfolioLeftButton = document.querySelector("#portfolio-left-button");
    const portfolioRightButton = document.querySelector("#portfolio-right-button");
    const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");

    let y = 0;
    let currentItem = 0;

    portfolio.setAttribute("visible", true);

    const showPortfolioItem = (item) => {
        for (let i = 0; i <= 2; i++) {
            document.querySelector("#portfolio-item" + i).setAttribute("visible", i === item);
        }
    }
    const id = setInterval(() => {
        y += 0.008;
        if (y >= 0.6) {
            clearInterval(id);
            portfolioLeftButton.setAttribute("visible", true);
            portfolioRightButton.setAttribute("visible", true);
            portfolioLeftButton.addEventListener('click', () => {
                currentItem = (currentItem + 1) % 3;
                showPortfolioItem(currentItem);
            });
            portfolioRightButton.addEventListener('click', () => {
                currentItem = (currentItem - 1 + 3) % 3;
                showPortfolioItem(currentItem);
            });

            paintandquestPreviewButton.addEventListener('click', () => {
                paintandquestPreviewButton.setAttribute("visible", false);
                const testVideo = document.createElement("video");
                const canplayWebm = testVideo.canPlayType('video/webm; codecs="vp8, vorbis"');
                if (canplayWebm == "") {
                    document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
                    document.querySelector("#paintandquest-video-mp4").play();
                } else {
                    document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
                    document.querySelector("#paintandquest-video-webm").play();
                }
            });

            setTimeout(() => {
                done();
            }, 500);
        }
        portfolio.setAttribute("position", "0 " + y + " -0.01");
    }, 10);
}

const showAvatar = (onDone) => {
    const avatar = document.querySelector("#avatar");
    let z = -0.3;
    const id = setInterval(() => {
        z += 0.008;
        if (z >= 0.3) {
            clearInterval(id);
            onDone();
        }
        avatar.setAttribute("position", "0 -0.25 " + z);
    }, 10);
}

AFRAME.registerComponent('mytarget', {
    init: function () {
        this.el.addEventListener('targetFound', event => {
            console.log("target found");
            //網頁跳轉
            //window.location.assign("http://210.68.227.123:7499/");
            //window.location.assign("http://210.68.227.123:7499/VideoPlayer.aspx");
            //先串木瓜資訊
            //window.location.assign("https://kmweb.coa.gov.tw/subject/subject.php?id=8272");
            
            //document.querySelector("#Video1").play();
            //document.querySelector("#Video2").play();

            document.querySelector("#vid1").play();
            document.querySelector("#vid2").play();
            document.querySelector("#vid3").play();
            document.querySelector("#vid4").play();
            //console.log(N.val());
            //var NDate =  portfolio = document.querySelector("#N");
            // var NDate = document.getElementsByName("#Now".values);
            // console.log("這啥: " + NDate);
            // console.log("這啥: " + NDate.values);
            // console.log(document.getElementsByName("#Now"));
            // console.log(index.Now.values);
            //console.log("#vid4".src);
            //conseole.log(document.querySelector("#vid4").src());
            // var A = document.getElementById('#Now').value.ToString();
            // var B = document.getElementById('#vid4').value.ToString();
            // console.log("這啥: " + A);
            // console.log("這啥: " + B);
            
        });
        this.el.addEventListener('targetLost', event => {
            console.log("target lost");
        });
        //this.el.emit('targetFound');
    }
});
