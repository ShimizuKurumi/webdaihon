function start() {
  let paragraph = [];
  let totalWidth = 0;
  let wrapperCount = [];
  let currentWrapper = 0;
  let count = 0;
  let pCount = -1;
  let $newDiv = $('<div class="paragraph__wrapper">');

  //パラグラフ---------------------------
  $("p.paragraph").each(function (i, elem) {
    paragraph[i] = $(elem);
    let $this = $(this);
    let thisWidth = $this.outerWidth(true); // 外側のマージンも含めた幅を取得
    pCount++;

    // 合計幅が400pxを超える場合
    if (totalWidth + thisWidth > $(window).width() * 0.8) {
      // 新しいdiv要素をbodyに追加
      $("body").append($newDiv);
      // 合計幅をリセット
      totalWidth = 0;
      $newDiv = $('<div class="paragraph__wrapper">');

      //場面ごとのp要素の数を追加
      wrapperCount.push(pCount);
      pCount = 0;
    }

    // pタグを新しいdiv要素に追加
    $newDiv.append($this);
    // 合計幅に加算
    totalWidth += thisWidth;
  });

  // 最後のdiv要素をbodyに追加（最後のpタグが追加されていない場合）
  if ($newDiv.children().length > 0) {
    $("body").append($newDiv);
    pCount++;
    wrapperCount.push(pCount);
    console.log(wrapperCount);
  }

  const elements = $(".paragraph__wrapper");
  pCount = 0;

  $(document).on("keydown touchstart", (event) => {
    const screenWidth = $(window).width();
    let touchX = screenWidth;
    // console.log(event.key, touchX);

    //両方
    if (event.key === "ArrowLeft") {
      touchX = 0;
    } else if (event.key === "ArrowRight") {
      touchX = screenWidth;
    } else {
      touchX = event.originalEvent.touches[0].clientX;
    }
    //ここまで両方

    // 左矢印キーが押された場合 またはタッチ
    if (event.key === "ArrowLeft" || touchX < screenWidth / 2) {
      // クラス名last-childの要素を取得
      console.log("左", count, pCount, currentWrapper);

      if (0 <= count && count < 28) {
        count++;
        pCount++;
        //PC処理
        paragraph[count].css({
          opacity: "1",
        });
      }

      if (pCount >= wrapperCount[currentWrapper] && currentWrapper < wrapperCount.length) {
        pCount = 0;
        currentWrapper++;

        elements.each(function (index) {
          $(this).css("opacity", "0");
        });

        $(elements[currentWrapper]).css("opacity", "1");
      }


      if (count === 1) {
        $("#step-heal")[0].play();

        $(".body").css({
          "background-color": "#F9EFE1",
        });
        $(".paragraph__wrapper").css({
          color: "#0B1632",
        });
        $(".help__text").css({
          color: "#0B1632",
        });
        $(".st00").css({
          fill: "#0B1632",
        });
        $(".line--top").css({
          "background-color": "#0B1632",
        });
        $(".line--bottom").css({
          "background-color": "#0B1632",
        });
        $(".line--right").css({
          "background-color": "#0B1632",
        });
        $(".line--left").css({
          "background-color": "#0B1632",
        });
        $(".cls-1").css({
          fill: "#0B1632",
        });
        $(".st0").css({
          fill: "#0B1632",
        });
      } else if (count === 4) {
        $(".bg-eye--1").css({
          opacity: "0",
        });
        $(".bg-eye--2").css({
          opacity: "0.1",
        });
      } else if (count === 5) {
        $(".bg-eye--1").css({
          opacity: "0.1",
        });
        $(".bg-eye--2").css({
          opacity: "0",
        });
      } else if (count === 6) {
        $(".bg-eye").css({
          filter: "blur(6px)",
        });
        $(".body").css({
          backgroundImage: "url(./images/noize.png)",
          "background-blend-mode": "overlay",
        });
      } else if (count === 7) {
        $(".bg-eye").css({
          filter: "blur(0px)",
        });
        $(".body").css({
          backgroundImage: "none",
          "background-blend-mode": "normal",
        });


      } else if (count === 8) {
        $(".bg-eye--1").css({
          opacity: "0",
        });
        $(".bg-eye--2").css({
          opacity: "0.1",
        });

        $(".body").css({
          "background-color": "#000",
        });
        $(".paragraph__wrapper").css({
          color: "#000",
        });

        $(".paragraph--9").css({
          color: "#F9EFE1",
        });
        $(".help__text").css({
          color: "#F9EFE1",
        });
        $(".st00").css({
          fill: "#F9EFE1",
        });
        $(".line--top").css({
          "background-color": "#F9EFE1",
        });
        $(".line--bottom").css({
          "background-color": "#F9EFE1",
        });
        $(".line--right").css({
          "background-color": "#F9EFE1",
        });
        $(".line--left").css({
          "background-color": "#F9EFE1",
        });
        $(".cls-1").css({
          fill: "#F9EFE1",
        });
        $(".bg-eye").css({
          opacity: "0",
        });
        $(".st0").css({
          fill: "#F9EFE1",
        });
      } else if (count === 9) {
        $("#paper")[0].play();
        $(".paragraph--9").css({
          color: "#0B1632",
        });

        $(".body").css({
          "background-color": "#F9EFE1",
        });
        $(".paragraph__wrapper").css({
          color: "#000",
        });
        $(".help__text").css({
          color: "#0B1632",
        });
        $(".st00").css({
          fill: "#0B1632",
        });
        $(".line--top").css({
          "background-color": "#0B1632",
        });
        $(".line--bottom").css({
          "background-color": "#0B1632",
        });
        $(".line--right").css({
          "background-color": "#0B1632",
        });
        $(".line--left").css({
          "background-color": "#0B1632",
        });
        $(".cls-1").css({
          fill: "#0B1632",
        });
        $(".bg-eye--1").css({
          opacity: "0.1",
        });
        $(".bg-eye--2").css({
          opacity: "0",
        });
        $(".st0").css({
          fill: "#0B1632",
        });
      } else if (count === 11) {
        $(".body").css({
          animation: "tikatika .3s step-end forwards",
        });
        $(".paragraph--9").css({
          color: "#F9EFE1",
        });
        $(".paragraph__wrapper").css({
          color: "#F9EFE1",
        });
        $(".help__text").css({
          color: "#F9EFE1",
        });
        $(".st00").css({
          fill: "#F9EFE1",
        });
        $(".line--top").css({
          "background-color": "#F9EFE1",
        });
        $(".line--bottom").css({
          "background-color": "#F9EFE1",
        });
        $(".line--right").css({
          "background-color": "#F9EFE1",
        });
        $(".line--left").css({
          "background-color": "#F9EFE1",
        });
        $(".cls-1").css({
          fill: "#F9EFE1",
        });
        $(".bg-eye").css({
          fill: "#F9EFE1",
        });
        $(".st0").css({
          fill: "#F9EFE1",
        });
      } else if (count === 15) {
        $(".bg-eye--1").css({
          opacity: "0",
        });
        $(".bg-eye--2").css({
          opacity: "0.1",
        });
      } else if (count === 16) {
        $(".bg-eye--1").css({
          opacity: "0.1",
        });
        $(".bg-eye--2").css({
          opacity: "0",
        });
      } else if (count === 18) {
        $("#clock")[0].play();
      } else if (count === 24) {
        $(".bgImg").css({ animation: "tika 2s step-end forwards", display: "block" });
        $(".bgRed").css({ animation: "redanime 1s  ease 11.5s forwards" });

        $("#bgm")[0].play();
        $(".frame").css({ animation: "framerotate 1.5s ease  11.5s infinite" });
      }
    }
    //右矢印が押された場合 またはタッチ
    if (event.key === "ArrowRight" || touchX >= screenWidth / 2) {
      console.log("右", count, pCount, currentWrapper);

      if (0 < count && count <= 28) {
        count--;
        pCount--;

        paragraph[count + 1].css({
          opacity: "0",
        });
      }

      if (pCount <= -1 && currentWrapper > 0) {
        currentWrapper--;
        pCount = wrapperCount[currentWrapper] - 1;

        elements.each(function (index) {
          $(this).css("opacity", "0");
        });

        $(elements[currentWrapper]).css("opacity", "1");
      }

      if (count < 1) {
        $(".body").css({
          "background-color": "#0B1632",
        });
        $(".paragraph__wrapper").css({
          color: "#F9EFE1",
        });
        $(".help__text").css({
          color: "#F9EFE1",
        });
        $(".st00").css({
          fill: "#F9EFE1",
        });
        $(".line--top").css({
          "background-color": "#F9EFE1",
        });
        $(".line--bottom").css({
          "background-color": "#F9EFE1",
        });
        $(".line--right").css({
          "background-color": "#F9EFE1",
        });
        $(".line--left").css({
          "background-color": "#F9EFE1",
        });
        $(".cls-1").css({
          fill: "#F9EFE1",
        });
        $(".bg-eye").css({
          fill: "#F9EFE1",
        });
        $(".st0").css({
          fill: "#F9EFE1",
        });

      } else if (count < 4) {
        $(".bg-eye--1").css({
          opacity: "0.1",
        });
        $(".bg-eye--2").css({
          opacity: "0",
        });
      } else if (count < 5) {
        $(".bg-eye--1").css({
          opacity: "0",
        });
        $(".bg-eye--2").css({
          opacity: "0.1",
        });
      } else if (count < 6) {
        $(".bg-eye").css({
          filter: "blur(0px)",
        });
        $(".body").css({
          backgroundImage: "none",
          "background-blend-mode": "normal",
        });
      } else if (count < 7) {
        $(".body").css({
          backgroundImage: "url(./images/noize.png)",
          "background-blend-mode": "overlay",
        });
        $(".bg-eye").css({
          filter: "blur(6px)",
        });
      } else if (count < 8) {
        $(".body").css({
          "background-color": "#F9EFE1",
        });
        $(".paragraph__wrapper").css({
          color: "#0B1632",
        });
        $(".help__text").css({
          color: "#0B1632",
        });
        $(".st00").css({
          fill: "#0B1632",
        });
        $(".line--top").css({
          "background-color": "#0B1632",
        });
        $(".line--bottom").css({
          "background-color": "#0B1632",
        });
        $(".line--right").css({
          "background-color": "#0B1632",
        });
        $(".line--left").css({
          "background-color": "#0B1632",
        });
        $(".cls-1").css({
          fill: "#0B1632",
        });
        $(".bg-eye--1").css({
          opacity: "0.1",
        });
        $(".bg-eye--2").css({
          opacity: "0",
        });
        $(".st0").css({
          fill: "#0B1632",
        });
      } else if (count < 9) {
        $(".paragraph--9").css({
          color: "#F9EFE1",
        });
        $(".body").css({
          "background-color": "#000",
        });
        $(".help__text").css({
          color: "#F9EFE1",
        });
        $(".st00").css({
          fill: "#F9EFE1",
        });
        $(".line--top").css({
          "background-color": "#F9EFE1",
        });
        $(".line--bottom").css({
          "background-color": "#F9EFE1",
        });
        $(".line--right").css({
          "background-color": "#F9EFE1",
        });
        $(".line--left").css({
          "background-color": "#F9EFE1",
        });
        $(".cls-1").css({
          fill: "#F9EFE1",
        });
        $(".bg-eye").css({
          opacity: "0",
        });
        $(".st0").css({
          fill: "#F9EFE1",
        });

        $(".bg-eye--1").css({
          opacity: "0",
        });
        $(".bg-eye--2").css({
          opacity: "0.1",
        });

      } else if (count < 11) {
        $(".body").css({
          animation: "tikatika .3s step-end reverse",
        });

        $(".paragraph__wrapper").css({
          color: "#0B1632",
        });
        $(".help__text").css({
          color: "#0B1632",
        });
        $(".st00").css({
          fill: "#0B1632",
        });

        $(".line--top").css({
          "background-color": "#0B1632",
        });
        $(".line--bottom").css({
          "background-color": "#0B1632",
        });
        $(".line--right").css({
          "background-color": "#0B1632",
        });
        $(".line--left").css({
          "background-color": "#0B1632",
        });
        $(".cls-1").css({
          fill: "#0B1632",
        });
        $(".bg-eye").css({
          fill: "#0B1632",
        });
        $(".st0").css({
          fill: "#0B1632",
        });
      } else if (count < 15) {
        $(".bg-eye--1").css({
          opacity: "0.1",
        });
        $(".bg-eye--2").css({
          opacity: "0",
        });
      } else if (count < 16) {
        $(".bg-eye--1").css({
          opacity: "0",
        });
        $(".bg-eye--2").css({
          opacity: "0.1",
        });
      } else if (count === 18) {
        $("#clock")[0].play();
      } else if (count < 24) {
        $("#bgm")[0].pause();
        $("#bgm")[0].currentTime = 0;
        $(".bgImg").css({ opacity: "0", animation: "none", display: "none" });
        $(".bgRed").css({ opacity: "0", animation: "none" });

        $(".frame").css({ animation: "none" });
      }
    }
  });

  if ($(".single-p").hasClass("first-child last-child")) {
    $(".single-p").removeClass("last-child");
  }
}

function start2() {
  let paragraph = [];
  let totalWidth = 0;
  let wrapperCount = [];
  let currentWrapper = 0;
  let count = 0;
  let pCount = -1;
  let $newDiv = $('<div class="paragraph__wrapper">');

  //パラグラフ---------------------------
  $("p.paragraph2").each(function (i, elem) {
    paragraph[i] = $(elem);
    let $this = $(this);
    let thisWidth = $this.outerWidth(true); // 外側のマージンも含めた幅を取得
    pCount++;

    // 合計幅が400pxを超える場合
    if (totalWidth + thisWidth > $(window).width() * 0.8) {
      // 新しいdiv要素をbodyに追加
      $("body").append($newDiv);
      // 合計幅をリセット
      totalWidth = 0;
      $newDiv = $('<div class="paragraph__wrapper">');

      //場面ごとのp要素の数を追加
      wrapperCount.push(pCount);
      pCount = 0;
    }

    // pタグを新しいdiv要素に追加
    $newDiv.append($this);
    // 合計幅に加算
    totalWidth += thisWidth;
  });

  // 最後のdiv要素をbodyに追加（最後のpタグが追加されていない場合）
  if ($newDiv.children().length > 0) {
    $("body").append($newDiv);
    pCount++;
    wrapperCount.push(pCount);
    console.log(wrapperCount);
  }

  const elements = $(".paragraph__wrapper");
  pCount = 0;

  $(document).on("keydown touchstart", (event) => {
    const screenWidth = $(window).width();
    let touchX = screenWidth;
    // console.log(event.key, touchX);

    //両方
    if (event.key === "ArrowLeft") {
      touchX = 0;
    } else if (event.key === "ArrowRight") {
      touchX = screenWidth;
    } else {
      touchX = event.originalEvent.touches[0].clientX;
    }
    //ここまで両方

    // 左矢印キーが押された場合 またはタッチ
    if (event.key === "ArrowLeft" || touchX < screenWidth / 2) {
      // クラス名last-childの要素を取得
      console.log("左", count, pCount, currentWrapper);

      if (0 <= count && count < 18) {
        count++;
        pCount++;
        //PC処理
        paragraph[count].css({
          opacity: "1",
        });
      }

      if (pCount >= wrapperCount[currentWrapper] && currentWrapper < wrapperCount.length) {
        pCount = 0;
        currentWrapper++;

        elements.each(function (index) {
          $(this).css("opacity", "0");
        });

        $(elements[currentWrapper]).css("opacity", "1");
      }


      if (count === 1) {
        $("#door")[0].play();
      } else if (count === 2) {
      } else if (count === 4) {
        $('.blue-circle').css({ opacity: "0.8" });
        $('.bg-eye--1').css({ opacity: "0.3" });
        $('.bg-eye--2').css({ opacity: "0" });

      } else if (count === 8) {
        $("#step")[0].play();
      }
      else if (count === 9) {
        $("#clap")[0].play();
        $(".intro--rock").css({ opacity: "0", "z-index": "0" });
        $('.blue-circle').css({ opacity: "0" });
        $('.bg-eye--1').css({ opacity: "0" });
        $('.bg-eye--2').css({ opacity: "0.3" });
      } else if (count === 11) {
        $('.bg-eye--1').css({ opacity: "0.3" });
        $('.bg-eye--2').css({ opacity: "0" });
        $('.blue-circle').css({ opacity: "1", width: "30%" });
      } else if (count === 13) {
        $("#step")[0].play();
      } else if (count === 14) {
        $("#clap")[0].play();
      } else if (count === 16) {
        $("#tape")[0].play();
        setTimeout(function () {
          // audio要素のIDを"myAudio"と仮定
          $("#bgm-night")[0].play();
        }, 1000);
      }
    }
    //右矢印が押された場合 またはタッチ
    if (event.key === "ArrowRight" || touchX >= screenWidth / 2) {
      console.log("右", count);

      if (0 < count && count <= 18) {
        count--;
        pCount--;

        paragraph[count + 1].css({
          opacity: "0",
        });
      }

      if (count === 1) {
        $("#door")[0].play();
      } else if (count === 2) {
      } else if (count === 3) {
        $('.blue-circle').css({ opacity: "0" });
        $('.bg-eye--1').css({ opacity: "0" });
        $('.bg-eye--2').css({ opacity: "0.3" });

      } else if (count === 7) {
        $("#step")[0].play();
      } else if (count === 8) {
        $('.bg-eye--1').css({ opacity: "0.3" });
        $('.bg-eye--2').css({ opacity: "0" });
        $('.blue-circle').css({ opacity: "1", width: "30%" });
      }
      else if (count === 9) {
        $("#clap")[0].play();
        $('.blue-circle').css({ opacity: "0" });
        $('.bg-eye--1').css({ opacity: "0" });
        $('.bg-eye--2').css({ opacity: "0.3" });
      } else if (count === 10) {
        $('.blue-circle').css({ opacity: "0" });
        $('.bg-eye--1').css({ opacity: "0" });
        $('.bg-eye--2').css({ opacity: "0.3" });
      } else if (count === 13) {
        $("#step")[0].play();
      } else if (count === 14) {
        $("#clap")[0].play();
      } else if (count === 15) {
        $("#bgm-night")[0].pause();
        $("#bgm-night")[0].currentTime = 0;
      }

      if (pCount <= -1 && currentWrapper > 0) {
        currentWrapper--;
        pCount = wrapperCount[currentWrapper] - 1;

        elements.each(function (index) {
          $(this).css("opacity", "0");
        });

        $(elements[currentWrapper]).css("opacity", "1");
      }

    }
  });

  if ($(".single-p").hasClass("first-child last-child")) {
    $(".single-p").removeClass("last-child");
  }
}

function clickBtn() {
  $(".opening__button--main").click(function () {
    start();
    $("#water")[0].play();
    $(".opening").css({ animation: "btn 1s ease forwards" });
    $(".opening__bg").css({ animation: "btn 1s ease forwards" });
    $(".frame").css({
      "opacity": "1",
    });
    $(".intro--rock").css({ display: "none" });
    $(".intro--book").css({ display: "none" });
    $(".glitch").css({ opacity: "0" });
    setTimeout(function () {
      // audio要素のIDを"myAudio"と仮定
      $(".glitch").css({ display: "none" });
    }, 1000);
  });
}

function clickBtn2() {
  $(".opening__button--secret").click(function () {
    start2();
    $('.bg-eye--1').css({ opacity: "0" });
    $('.bg-eye--2').css({ opacity: "0.3" });
    $('.bg-eye .cls-1').css({ fill: "#F9EFE1" });
    $("#water")[0].play();
    $(".opening").css({ animation: "btn 1s ease forwards" });
    $(".opening__bg").css({ animation: "btn 1s ease forwards" });
    $(".frame").css({
      "opacity": "1",
    });
    $(".glitch").css({ opacity: "0" });
    setTimeout(function () {
      // audio要素のIDを"myAudio"と仮定
      $(".glitch").css({ display: "none" });
    }, 1000);
  });
}


//リサイズしたらリロード
var timer = false;
var prewidth = $(window).width(); //初期幅設定
$(window).on("load resize", function () {
  //実際は、resizeのみでなく、load 時にもセットが必要
  if (timer !== false) {
    //timer セット
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    var nowWidth = $(window).width(); //変化後の幅取得
    if (prewidth !== nowWidth) {
      //初期幅と変化後が同じで無い場合
      location.reload(); //リロードする
    }
    prewidth = nowWidth; //初期幅と変化後が同じになった（変化が止まる）
  }, 200); //止まる判定までのミリ秒
});


//時間
function changeContent() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();


  if (hours >= 19 || hours < 4) {
    clickBtn2();
    $(".opening--main").css({ display: "none" });
    $(".secret").css({ display: "block" });
    $(".glitch__img").css({ background: "url(./images/doa.jpg) no-repeat 46% 50%/cover" });
    $(".paragraph__all--2").css({ display: "block" });
    $(".paragraph__all--1").css({ display: "none" });
  } else {
    $(".paragraph__all--2").css({ display: "none" });
    $(".paragraph__all--1").css({ display: "block" });
    $(".secret").css({ display: "none" });
    $(".opening").css({ display: "flex" });
    clickBtn();
  }
}
changeContent();
// setInterval(changeContent, 60000); // 1分ごとに更新


//ミュート
$(document).ready(function () {
  $('.opening__button--off').click(function () {
    // 全てのaudio要素を取得
    $('audio').each(function () {
      // 各audio要素にmuted属性を追加
      $(this).prop('muted', true);
    });
  });
});

$(".start-btn").click(function () {
  location.reload();
});