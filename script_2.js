// const paragraph = document.querySelectorAll(".paragraph");


function start() {
    let paragraphWidth = [];
    let paragraph = [];
    let count = 0;
    let totalWidth = 0;
    let keyCount = 0;
    let wrapperCount = [];
    let pCount = -1;
    let lastChildCount = 0;
    let firstChildCount = 1;
    let $newDiv = $('<div class="paragraph__wrapper">');
    const twoLastParagraph = document.querySelector(".paragraph--27");
    const lastParagraph = document.querySelector(".paragraph--28");
    const currentWrapper = $('.currentWrapper');
    let timeoutId;



    $("p.paragraph").each((i, elem) => {
        paragraph[i] = $(elem);
        paragraphWidth[i] = $(elem).width();
    });
    console.log(paragraphWidth);




    //パラグラフ---------------------------
    $('p.paragraph').each(function () {

        var $this = $(this);
        var thisWidth = $this.outerWidth(true); // 外側のマージンも含めた幅を取得
        pCount++;

        // 合計幅が400pxを超える場合
        if (totalWidth + thisWidth > $(window).width() * 0.85) {
            // 新しいdiv要素をbodyに追加
            $('body').append($newDiv);
            // 合計幅をリセット
            totalWidth = 0;
            $newDiv = $('<div class="paragraph__wrapper">');
            wrapperCount[count] = pCount;
            pCount = 0;
            console.log(wrapperCount);
            count++;

        }


        // pタグを新しいdiv要素に追加
        $newDiv.append($this);
        // 合計幅に加算
        totalWidth += thisWidth;

        // $(".paragraph__wrapper p:last").addClass('last-child');

    });


    // 最後のdiv要素をbodyに追加（最後のpタグが追加されていない場合）
    if ($newDiv.children().length > 0) {
        $('body').append($newDiv);
        pCount++;
        wrapperCount[count] = pCount;
        console.log(wrapperCount);
    }

    const elements = $(".paragraph__wrapper");
    $(".paragraph__wrapper p:first-of-type").addClass('first-child');
    $(".paragraph__wrapper p:last-of-type").addClass('last-child');


    count = 0;
    totalWidth = 0;

    const lastChild = $('.last-child');
    const firstChild = $('.first-child');
    const paragraphWrapperP = $('.paragraph__wrapper p');
    const currentElement = $('.currentWrapper');
    const nextWrapper = currentElement.next('.paragraph__wrapper');
    const prevWrapper = currentElement.prev('.paragraph__wrapper');
    const prevWrapper2 = currentElement.prevAll('.paragraph__wrapper').eq(1);


    $(".paragraph__wrapper").each(function () {
        var $this = $(this);
        var $p = $this.find("p");

        if ($p.length === 1) {
            $p.addClass("single-p"); // クラス名を"single-p"に変更できます
        }
    });



    $(document).on("keydown touchstart", (event) => {
        const screenWidth = $(window).width();
        let touchX = screenWidth;
        // console.log(event.key, touchX);

        //両方
        if (event.key === 'ArrowLeft') {
            touchX = 0;
        } else if (event.key === 'ArrowRight') {
            touchX = screenWidth;
        } else {
            touchX = event.originalEvent.touches[0].clientX;
        }
        //ここまで両方

        // 左矢印キーが押された場合 またはタッチ
        if (event.key === 'ArrowLeft' || touchX < screenWidth / 2) {
            // クラス名last-childの要素を取得
            console.log("左");


            // lastChildのopacityが1の場合、targetDivのopacityを0にする
            if (lastChild[lastChildCount].style.opacity === '1') {

                if (!(lastParagraph.style.opacity === '1')) {
                    lastChildCount++;
                }


                elements.each(function (index) {
                    $(this).css("opacity", "0");
                });

                // $('.paragraph__wrapper p').each(function (index) {
                //     $(this).css("opacity", "0");
                // });


                // $('.next-Wrapper p').each(function (index) {
                //     $(this).css("opacity", "0");
                // });

                // $(elements[lastChildCount]).css({
                //     // ここに変更したいCSSプロパティを記述する
                //     opacity: '1',
                // });


                $(elements[lastChildCount]).addClass('currentWrapper');
                if (!(lastParagraph.style.opacity === '1')) {
                    $(elements[lastChildCount - 1]).removeClass('currentWrapper');
                }
                $(".currentWrapper").css({ 'opacity': '1' });

                $(".currentWrapper").next().addClass('next-Wrapper');
                $(".currentWrapper").removeClass('next-Wrapper');


                $(".currentWrapper").prev().addClass("prev-Wrapper");
                $(".currentWrapper").removeClass("prev-Wrapper");


                $(".currentWrapper").prev().prev().removeClass("prev-Wrapper");

            }


            if (0 <= count && count < 27) {
                count++;
                //PC処理
                paragraph[count].css({
                    opacity: '1',
                });
            };

            if (count === 4) {
                $('.bg-eye--1').css({
                    'opacity': "0",
                });
                $('.bg-eye--2').css({
                    'opacity': "0.1",
                });


            } else if (count === 5) {
                $('.bg-eye--1').css({
                    'opacity': "0.1",
                });
                $('.bg-eye--2').css({
                    'opacity': "0",
                });

            } else if (count === 8) {
                $('.body').css({
                    'background-color': "#000",
                });
                $('.paragraph__wrapper').css({
                    'color': "#F9EFE1",
                });
                $('.help__text').css({
                    'color': "#F9EFE1",
                });
                $('.st00').css({
                    'fill': "#F9EFE1",
                });
                $('.line--top').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--bottom').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--right').css({
                    'background-color': "#F9EFE1",
                }); $('.line--left').css({
                    'background-color': "#F9EFE1",
                });
                $('.cls-1').css({
                    'fill': "#F9EFE1",
                });
                $('.bg-eye').css({
                    'opacity': "0",
                });
                $('.st0').css({
                    'fill': "#F9EFE1",
                });

            }
            else if (count === 9) {
                $('#paper')[0].play();

                $('.body').css({
                    'background-color': "#F9EFE1",
                });
                $('.paragraph__wrapper').css({
                    'color': "#0B1632",
                });
                $('.help__text').css({
                    'color': "#0B1632",
                });
                $('.st00').css({
                    'fill': "#0B1632",
                });
                $('.line--top').css({
                    'background-color': "#0B1632",
                });
                $('.line--bottom').css({
                    'background-color': "#0B1632",
                });
                $('.line--right').css({
                    'background-color': "#0B1632",
                }); $('.line--left').css({
                    'background-color': "#0B1632",
                });
                $('.cls-1').css({
                    'fill': "#0B1632",
                });
                $('.bg-eye--1').css({
                    'opacity': "0.1",
                });
                $('.st0').css({
                    'fill': "#0B1632",
                });

            }
            else if (count === 11) {
                $('.body').css({
                    'animation': "tikatika .3s step-end forwards"
                });
                $('.paragraph__wrapper').css({
                    'color': "#F9EFE1",
                });
                $('.help__text').css({
                    'color': "#F9EFE1",
                });
                $('.st00').css({
                    'fill': "#F9EFE1",
                });
                $('.line--top').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--bottom').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--right').css({
                    'background-color': "#F9EFE1",
                }); $('.line--left').css({
                    'background-color': "#F9EFE1",
                });
                $('.cls-1').css({
                    'fill': "#F9EFE1",
                });
                $('.bg-eye').css({
                    'fill': "#F9EFE1",
                });
                $('.st0').css({
                    'fill': "#F9EFE1",
                });

            } else if (count === 15) {
                $('.bg-eye--1').css({
                    'opacity': "0",
                });
                $('.bg-eye--2').css({
                    'opacity': "0.1",
                });

            } else if (count === 16) {
                $('.bg-eye--1').css({
                    'opacity': "0.1",
                });
                $('.bg-eye--2').css({
                    'opacity': "0",
                });

            } else if (count === 18) {
                $('#clock')[0].play();
            } else if (count === 24) {
                $('.fire').css({ 'opacity': '0.3' });
                $('#bgm')[0].play();
                $('.frame').css({ 'animation': 'framerotate 1.5s ease  11.5s infinite' });
            }

        }
        //右矢印が押された場合 またはタッチ
        if (event.key === 'ArrowRight' || touchX >= screenWidth / 2) {
            console.log("右");


            let $firstP = $(".currentWrapper").find("p:first");
            let $otherPs = $(".currentWrapper").find("p:not(:first)");
            let $lastP = $(".currentWrapper").find("p:last");
            console.log($firstP);//ここ

            let secondP = $(".currentWrapper").find("p:eq(1)");

            if (lastChildCount > 0) {

                // 最初のp要素がopacity:1かつ、それ以外のp要素がすべてopacity:0の場合
                if ($firstP.css("opacity") === "1" && $otherPs.css("opacity") === "0" || $('.currentWrapper .single-p').css("opacity") === "1") {
                    console.log("適用されています");

                    const nextWrapperCount = $('.next-Wrapper').length;
                    // 最後の.next-Wrapper要素を取得し、クラス名を削除
                    const lastNextWrapper = $('.next-Wrapper').last();

                    // ここに処理内容を記述

                    $(elements[lastChildCount]).removeClass('currentWrapper');
                    $(elements[lastChildCount - 1]).addClass('currentWrapper');

                    $(currentWrapper).removeClass('next-Wrapper');
                    $(currentWrapper).next().addClass('next-Wrapper');
                    $('.next-Wrapper').css({ 'opacity': '0' });


                    $(".next-Wrapper").css({ 'opacity': '0' });
                    $(".next-Wrapper p").css({ 'opacity': '0' });

                    $(currentWrapper).css({ 'opacity': '1' });
                    $(".currentWrapper p").css({ 'opacity': '1' });

                    $(".prev-Wrapper").css({ 'opacity': '1' });
                    $(".prev-Wrapper p").css({ 'opacity': '1' });

                    $(currentWrapper).removeClass("prev-Wrapper");
                    $(currentWrapper).prev().addClass("prev-Wrapper");


                    lastNextWrapper.removeClass('next-Wrapper');

                    lastChildCount--;


                };
            }


            //ここまで
            console.log("count" + count);


            if (0 < count && count <= 27) {
                count--;

                paragraph[count + 1].css({
                    opacity: '0',
                });

            };


            if (count < 4) {
                $('.bg-eye--1').css({
                    'opacity': "0.1",
                });
                $('.bg-eye--2').css({
                    'opacity': "0",
                });
            } else if (count < 5) {
                $('.bg-eye--1').css({
                    'opacity': "0",
                });
                $('.bg-eye--2').css({
                    'opacity': "0.1",
                });
            } else if (count < 8) {
                $('.body').css({
                    'background-color': "#F9EFE1",
                });
                $('.paragraph__wrapper').css({
                    'color': "#0B1632",
                });
                $('.help__text').css({
                    'color': "#0B1632",
                });
                $('.st00').css({
                    'fill': "#0B1632",
                });
                $('.line--top').css({
                    'background-color': "#0B1632",
                });
                $('.line--bottom').css({
                    'background-color': "#0B1632",
                });
                $('.line--right').css({
                    'background-color': "#0B1632",
                }); $('.line--left').css({
                    'background-color': "#0B1632",
                });
                $('.cls-1').css({
                    'fill': "#0B1632",
                });
                $('.bg-eye--1').css({
                    'opacity': "0.1",
                });
                $('.st0').css({
                    'fill': "#0B1632",
                });
            }
            else if (count < 9) {
                $('.body').css({
                    'background-color': "#000",
                });
                $('.paragraph__wrapper').css({
                    'color': "#F9EFE1",
                });
                $('.help__text').css({
                    'color': "#F9EFE1",
                });
                $('.st00').css({
                    'fill': "#F9EFE1",
                });
                $('.line--top').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--bottom').css({
                    'background-color': "#F9EFE1",
                });
                $('.line--right').css({
                    'background-color': "#F9EFE1",
                }); $('.line--left').css({
                    'background-color': "#F9EFE1",
                });
                $('.cls-1').css({
                    'fill': "#F9EFE1",
                });
                $('.bg-eye').css({
                    'opacity': "0",
                });
                $('.st0').css({
                    'fill': "#F9EFE1",
                });
            }

            else if (count < 11) {

                $('.body').css({
                    'animation': "tikatika .3s step-end reverse"
                });

                $('.paragraph__wrapper').css({
                    'color': "#0B1632",
                });
                $('.help__text').css({
                    'color': "#0B1632",
                });
                $('.st00').css({
                    'fill': "#0B1632",
                });

                $('.line--top').css({
                    'background-color': "#0B1632",
                });
                $('.line--bottom').css({
                    'background-color': "#0B1632",
                });
                $('.line--right').css({
                    'background-color': "#0B1632",
                }); $('.line--left').css({
                    'background-color': "#0B1632",
                });
                $('.cls-1').css({
                    'fill': "#0B1632",
                });
                $('.bg-eye').css({
                    'fill': "#0B1632",
                });
                $('.st0').css({
                    'fill': "#0B1632",
                });

            }

            else if (count < 15) {
                $('.bg-eye--1').css({
                    'opacity': "0.1",
                });
                $('.bg-eye--2').css({
                    'opacity': "0",
                });

            } else if (count < 16) {
                $('.bg-eye--1').css({
                    'opacity': "0",
                });
                $('.bg-eye--2').css({
                    'opacity': "0.1",
                });

            }
            else if (count === 18) {
                $('#clock')[0].play();
            } else if (count < 24) {
                $('#bgm')[0].pause();
                $('#bgm')[0].currentTime = 0;
                $('.frame').css({ 'animation': 'none' });
                $('.fire').css({ 'opacity': '0' });

            }


        }
    });


    if ($('.single-p').hasClass('first-child last-child')) {

        $('.single-p').removeClass('last-child');
    }
};

$(document).ready(function () {
    $(".opening__button").click(function () {
        start();
        $('#water')[0].play();
        $(".opening").css({ 'animation': 'btn 1s ease forwards', });
        $(".opening__bg").css({ 'animation': 'btn 1s ease forwards', });
        // $(".frame-img .cls-1").css({ 'fill': '#0B1632', });
        // $(".line--top").css({ 'background-color': '#0B1632', });
        // $(".line--bottom").css({ 'background-color': '#0B1632', });
        // $(".line--left").css({ 'background-color': '#0B1632', });
        // $(".line--right").css({ 'background-color': '#0B1632', });
    });
});

// $(document).ready(function () {
//     // フェードアウトさせたい要素のセレクタをここに指定します
//     $('.opening').delay(600).fadeOut(400);
// });

// $(document).ready(function () {
//     // ホバー対象の要素を指定
//     $(".border-line").hover(function () {
//         // 画像の生成
//         var img = $("<img />");
//         img.attr("src", "./images/dictionary.png"); // 画像のパスを設定
//         img.addClass("hover-image"); // 画像にクラスを追加（CSSでスタイルを定義）

//         // 画像を要素の近くに絶対配置
//         $(this).append(img);

//         // 画像の位置調整 (例: 右上に表示)
//         $(".hover-image").css({
//             position: "absolute",
//             top: "100px",
//             right: "-220px",
//             width: "250px",
//             animation: "opacity1 ease .5s forwards"
//         });
//     }, function () {
//         // ホバー終了時に画像を削除
//         $(".hover-image").remove();
//     });
// });


//もや
$(function () {
    var isDown = true;
    var isLeft = true;

    var lowLimit = 3;
    var highLimit = 6;

    // Adjust speed of H and V (for random feeling)
    var randHDuration = Math.floor(Math.random() * (highLimit * 6500)) + (lowLimit + 6500);
    var randVDuration = Math.floor(Math.random() * (highLimit * 6500)) + (lowLimit + 6500);

    function hAnimate() {
        if (isLeft) {
            $("#object").animate(
                {
                    left: $(".bounce-wrapper").innerWidth() - $("#object").outerWidth()
                },
                {
                    duration: randHDuration,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        isLeft = false;
                        hAnimate();
                    }
                }
            );
        } else {
            $("#object").animate(
                {
                    left: 0
                },
                {
                    duration: randHDuration,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        isLeft = true;
                        hAnimate();
                    }
                }
            );
        }
    }

    function vAnimate() {
        if (isDown) {
            $("#object").animate(
                {
                    top: $(".bounce-wrapper").innerHeight() - $("#object").outerHeight()
                },
                {
                    duration: randVDuration,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        isDown = false;
                        vAnimate();
                    }
                }
            );
        } else {
            $("#object").animate(
                {
                    top: 0
                },
                {
                    duration: randVDuration,
                    easing: "linear",
                    queue: false,
                    complete: function () {
                        isDown = true;
                        vAnimate();
                    }
                }
            )
        }
    }

    hAnimate();
    vAnimate();
});


//リサイズしたらリロード
var timer = false;
var prewidth = $(window).width();//初期幅設定
$(window).on('load resize', function () {//実際は、resizeのみでなく、load 時にもセットが必要
    if (timer !== false) {//timer セット
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        var nowWidth = $(window).width();//変化後の幅取得
        if (prewidth !== nowWidth) {//初期幅と変化後が同じで無い場合
            location.reload();//リロードする
        }
        prewidth = nowWidth;//初期幅と変化後が同じになった（変化が止まる）
    }, 200);//止まる判定までのミリ秒
});