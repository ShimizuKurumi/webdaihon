// const paragraph = document.querySelectorAll(".paragraph");


$(document).ready(function () {
    let paragraphWidth = [];
    let paragraph = [];
    let count = 0;
    let totalWidth = 0;
    let keyCount = 0;
    let wrapperCount = 1;
    let lastChildCount = 0;



    $(".paragraph").each((i, elem) => {
        paragraph[i] = $(elem);
        paragraphWidth[i] = $(elem).width();
    });
    console.log(paragraphWidth);


    $(function () {
        var totalWidth = 0;
        var $newDiv = $('<div class="paragraph__wrapper">');
        var count = 0; // カウント用の変数を初期化


        //パラグラフ---------------------------
        $('p.paragraph').each(function () {
            var $this = $(this);
            var thisWidth = $this.outerWidth(true); // 外側のマージンも含めた幅を取得

            // 合計幅が400pxを超える場合
            if (totalWidth + thisWidth > $(window).width() * 0.9) {
                // 新しいdiv要素をbodyに追加
                $('body').append($newDiv);
                // 合計幅をリセット
                totalWidth = 0;
                $newDiv = $('<div class="paragraph__wrapper">');
                count++;
            }

            // pタグを新しいdiv要素に追加
            $newDiv.append($this);
            // 合計幅に加算
            totalWidth += thisWidth;

            $(".paragraph__wrapper p:last").addClass('last-child');

        });

        // 最後のdiv要素をbodyに追加（最後のpタグが追加されていない場合）
        if ($newDiv.children().length > 0) {
            $('body').append($newDiv);
        }

        const elements = $(".paragraph__wrapper");

        // 配列の要素数を確認
        console.log("paragraph__wrapperの数は" + elements.length);

        // elements.each(function () {
        //     let count = 0;
        //     // console.log(count);
        // });


        document.addEventListener('keydown', (event) => {
            // 左矢印キーが押された場合
            if (event.key === 'ArrowLeft') {
                // クラス名last-childの要素を取得
                const lastChild = $('.last-child');

                // lastChildのopacityが1の場合、targetDivのopacityを0にする
                if (lastChild[lastChildCount].style.opacity === '1') {
                    console.log(lastChild[lastChildCount]);
                    keyCount++;


                    if (keyCount === 2) {
                        // 2回押されたら処理を実行
                        console.log('左矢印キーが2回押されました');
                        // ここに実行したい処理を記述
                        // 例:
                        wrapperCount++;

                        $(".paragraph__wrapper").each(function (index) {
                            $(this).css("opacity", "0");
                        });


                        $(elements[wrapperCount]).css({
                            // ここに変更したいCSSプロパティを記述する
                            opacity: '1',
                        });
                    }
                    if (keyCount === 3) {
                        keyCount = 0;
                        console.log('左矢印キーが3回押されました');
                        lastChildCount++;
                    }

                }

            }
        });


    });

    $(document).keydown(function (e) {

        if (e.which === 37) { // 左矢印キー

            if (0 <= count && count < 29) {
                count++;
                //PC処理

                paragraph[count].css({
                    opacity: '1',
                });


            };

            // if (count === 1) {
            //     // カウントが1になったときに行う処理
            //     $('.paragraph--2').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 2) {
            //     $('.paragraph--3').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 3) {
            //     $('.paragraph--4').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 4) {
            //     $('.paragraph--5').css({
            //         'opacity': "1",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0",
            //     });

            // } else if (count === 5) {
            //     $('.paragraph--6').css({
            //         'opacity': "1",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0.1",
            //     });
            // } else if (count === 6) {
            //     $('.paragraph--7').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 7) {
            //     $('.paragraph--8').css({
            //         'opacity': "1",
            //     });
            // }
            // else if (count === 8) {
            //     $('.paragraph--9').css({
            //         'opacity': "1",
            //     });
            //     $('.bar').css({
            //         'background-color': "#000",
            //     })
            //     $('.body').css({
            //         'background-color': "#000",
            //     });
            //     $('.paragraph__wrapper').css({
            //         'color': "#F9EFE1",
            //     });
            //     $('.help__text').css({
            //         'color': "#F9EFE1",
            //     });
            //     $('.line--top').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.line--bottom').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.line--right').css({
            //         'background-color': "#F9EFE1",
            //     }); $('.line--left').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.cls-1').css({
            //         'fill': "#F9EFE1",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0",
            //     });
            //     $('.st0').css({
            //         'fill': "#F9EFE1",
            //     });

            // }
            // else if (count === 9) {
            //     $('#paper')[0].play();

            //     $('.paragraph--10').css({
            //         'opacity': "1",
            //     });
            //     $('.bar').css({
            //         'background-color': "#F9EFE1",
            //     })

            //     $('.body').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.paragraph__wrapper').css({
            //         'color': "#0B1632",
            //     });
            //     $('.help__text').css({
            //         'color': "#0B1632",
            //     });
            //     $('.line--top').css({
            //         'background-color': "#0B1632",
            //     });
            //     $('.line--bottom').css({
            //         'background-color': "#0B1632",
            //     });
            //     $('.line--right').css({
            //         'background-color': "#0B1632",
            //     }); $('.line--left').css({
            //         'background-color': "#0B1632",
            //     });
            //     $('.cls-1').css({
            //         'fill': "#0B1632",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0.1",
            //     });
            //     $('.st0').css({
            //         'fill': "#0B1632",
            //     });

            // }
            // else if (count === 10) {
            //     $('.paragraph--11').css({
            //         'opacity': "1",
            //     });
            // }
            // else if (count === 11) {
            //     $('.paragraph--12').css({
            //         'opacity': "1",
            //     });

            //     $('.bar').css({
            //         'animation': "tikatika .3s step-end forwards"
            //     })

            //     $('.body').css({
            //         'animation': "tikatika .3s step-end forwards"
            //     });
            //     $('.paragraph__wrapper').css({
            //         'color': "#F9EFE1",
            //     });
            //     $('.help__text').css({
            //         'color': "#F9EFE1",
            //     });
            //     $('.line--top').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.line--bottom').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.line--right').css({
            //         'background-color': "#F9EFE1",
            //     }); $('.line--left').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.cls-1').css({
            //         'fill': "#F9EFE1",
            //     });
            //     $('.bg-eye').css({
            //         'fill': "#F9EFE1",
            //     });
            //     $('.st0').css({
            //         'fill': "#F9EFE1",
            //     });

            // }
            // else if (count === 12) {
            //     $('.paragraph--13').css({
            //         'opacity': "1",
            //     });
            // }
            // else if (count === 13) {
            //     $('.paragraph--14').css({
            //         'opacity': "1",
            //     });
            // }
            // else if (count === 14) {
            //     $('.paragraph--15').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 15) {
            //     $('.paragraph--16').css({
            //         'opacity': "1",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0",
            //     });
            // } else if (count === 16) {
            //     $('.paragraph--17').css({
            //         'opacity': "1",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0.1",
            //     });

            // } else if (count === 17) {
            //     $('.paragraph--18').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 18) {
            //     $('.paragraph--19').css({
            //         'opacity': "1",
            //     });
            //     $('#clock')[0].play();
            // } else if (count === 19) {
            //     $('.paragraph--20').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 20) {
            //     $('.paragraph--21').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 21) {
            //     $('.paragraph--22').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 22) {
            //     $('.paragraph--23').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 23) {
            //     $('.paragraph--24').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 24) {
            //     $('.paragraph--25').css({
            //         'opacity': "1",
            //     });

            // } else if (count === 25) {
            //     $('#bgm')[0].play();
            //     $('.paragraph--26').css({
            //         'opacity': "1",
            //     });
            // } else if (count === 26) {
            //     $('.paragraph--27').css({
            //         'opacity': "1",
            //     });

            // } else if (count === 27) {
            //     $('.paragraph--28').css({
            //         'opacity': "1",
            //     });

            // }
            // else if (count === 28) {
            //     $('.paragraph--29').css({
            //         'opacity': "1",
            //     });

            // }

        }


        //右矢印キー-------------------------------------
        else if (e.which === 39) { // 右矢印キー
            if (0 < count && count <= 29) {
                count--;

                // if (count >= 3) {
                //     totalWidth -= paragraphWidth[count];
                //     // $(".paragraph__wrapper").css("transform", "translateX(" + totalWidth + "px)");
                // }

                paragraph[count + 1].css({
                    opacity: '0',
                });

            };

            // if (count < 1) {
            //     // カウントが1になったときに行う処理
            //     $('.paragraph--2').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 2) {
            //     $('.paragraph--3').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 3) {
            //     $('.paragraph--4').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 4) {
            //     $('.paragraph--5').css({
            //         'opacity': "0",
            //     });

            //     $('.bg-eye').css({
            //         'opacity': "0.1",
            //     });

            // } else if (count < 5) {
            //     $('.paragraph--6').css({
            //         'opacity': "0",
            //     });

            //     $('.bg-eye').css({
            //         'opacity': "0",
            //     });

            // } else if (count < 6) {
            //     $('.paragraph--7').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 7) {
            //     $('.paragraph--8').css({
            //         'opacity': "0",
            //     });

            // }
            // else if (count < 8) {
            //     $('.paragraph--9').css({
            //         'opacity': "0",
            //     });
            //     $('.bar').css({
            //         'background-color': "#F9EFE1",
            //     })
            //     $('.body').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.paragraph__wrapper').css({
            //         'color': "#0B1632",
            //     });
            //     $('.help__text').css({
            //         'color': "#0B1632",
            //     });
            //     $('.line--top').css({
            //         'background-color': "#0B1632",
            //     });
            //     $('.line--bottom').css({
            //         'background-color': "#0B1632",
            //     });
            //     $('.line--right').css({
            //         'background-color': "#0B1632",
            //     }); $('.line--left').css({
            //         'background-color': "#0B1632",
            //     });
            //     $('.cls-1').css({
            //         'fill': "#0B1632",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0.1",
            //     });
            //     $('.st0').css({
            //         'fill': "#0B1632",
            //     });

            // }
            // else if (count < 9) {
            //     $('.paragraph--10').css({
            //         'opacity': "0",
            //     });
            //     $('.bar').css({
            //         'background-color': "#000",
            //     })
            //     $('.body').css({
            //         'background-color': "#000",
            //     });
            //     $('.paragraph__wrapper').css({
            //         'color': "#F9EFE1",
            //     });
            //     $('.help__text').css({
            //         'color': "#F9EFE1",
            //     });
            //     $('.line--top').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.line--bottom').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.line--right').css({
            //         'background-color': "#F9EFE1",
            //     }); $('.line--left').css({
            //         'background-color': "#F9EFE1",
            //     });
            //     $('.cls-1').css({
            //         'fill': "#F9EFE1",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0",
            //     });
            //     $('.st0').css({
            //         'fill': "#F9EFE1",
            //     });

            // }
            // else if (count < 10) {
            //     $('.paragraph--11').css({
            //         'opacity': "0",
            //     });

            // }
            // else if (count < 11) {
            //     $('.paragraph--12').css({
            //         'opacity': "0",
            //     });
            //     $('.paragraph--13').css({
            //         'opacity': "0",
            //     });

            //     $('.bar').css({
            //         'animation': "beige .3s ease forwards"
            //     })

            //     $('.body').css({
            //         'animation': "beige .3s ease forwards"
            //     });

            //     $('.paragraph__wrapper').css({
            //         'color': "#0B1632",
            //     });
            //     $('.help__text').css({
            //         'color': "#0B1632",
            //     });
            //     $('.line--top').css({
            //         'background-color': "#0B1632",
            //     });
            //     $('.line--bottom').css({
            //         'background-color': "#0B1632",
            //     });
            //     $('.line--right').css({
            //         'background-color': "#0B1632",
            //     }); $('.line--left').css({
            //         'background-color': "#0B1632",
            //     });
            //     $('.cls-1').css({
            //         'fill': "#0B1632",
            //     });
            //     $('.bg-eye').css({
            //         'fill': "#0B1632",
            //     });
            //     $('.st0').css({
            //         'fill': "#0B1632",
            //     });

            // }
            // else if (count < 12) {
            //     $('.paragraph--13').css({
            //         'opacity': "0",
            //     });
            // }
            // else if (count < 13) {
            //     $('.paragraph--14').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 14) {
            //     $('.paragraph--15').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 15) {
            //     $('.paragraph--16').css({
            //         'opacity': "0",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0.1",
            //     });

            // } else if (count < 16) {
            //     $('.paragraph--17').css({
            //         'opacity': "0",
            //     });
            //     $('.bg-eye').css({
            //         'opacity': "0",
            //     });

            // } else if (count < 17) {
            //     $('.paragraph--18').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 18) {
            //     $('.paragraph--19').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 19) {
            //     $('.paragraph--20').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 20) {
            //     $('.paragraph--21').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 21) {
            //     $('.paragraph--22').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 22) {
            //     $('.paragraph--23').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 23) {
            //     $('.paragraph--24').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 24) {
            //     $('.paragraph--25').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 25) {
            //     $('.paragraph--26').css({
            //         'opacity': "0",
            //     });
            //     $('#bgm')[0].pause();
            //     $('#bgm')[0].currentTime = 0;

            // } else if (count < 26) {
            //     $('.paragraph--27').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 27) {
            //     $('.paragraph--28').css({
            //         'opacity': "0",
            //     });
            // } else if (count < 28) {
            //     $('.paragraph--29').css({
            //         'opacity': "0",
            //     });
            // }

        }

        console.log(count, totalWidth);

    });


    // 対象のdiv要素を取得（id属性で指定）
    // キーボードイベントリスナーを追加
}
);


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