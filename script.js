
// $(function () {

//     $(function () {
//         let wheelCount = 0; // ホイール回転数をカウントする変数
//         var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
//         $(document).on(mousewheelevent, function (e) {
//             // e.preventDefault();
//             var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);

//             if (delta < 0) {
//                 // マウスホイールを下にスクロールしたときの処理を記載
//                 wheelCount++;
//                 console.log(wheelCount);

//                 if (wheelCount === 1) {
//                     $('.paragraph--1').css({
//                         'opacity': "1",
//                     });
//                 } else if (wheelCount === 60) {
//                     $('.paragraph--2').css({
//                         'opacity': "1",
//                     });
//                 } else if (wheelCount === 120) {
//                     $('.paragraph--3').css({
//                         'opacity': "1",
//                     });
//                 }


//             } else if (delta > 0) {
//                 // マウスホイールを上にスクロールしたときの処理を記載
//                 wheelCount--;
//                 console.log(wheelCount);
//                 if (wheelCount < 1) {
//                     $('.paragraph--1').css({
//                         'opacity': "0",
//                     });
//                 } else if (wheelCount < 60) {
//                     $('.paragraph--2').css({
//                         'opacity': "0",
//                     });
//                 } else if (wheelCount < 120) {
//                     $('.paragraph--3').css({
//                         'opacity': "0",
//                     });
//                 }


//             };
//         });

//     }, { passive: false });
// }, { passive: false });



$(document).ready(function () {
    let count = 0;


    $(document).keydown(function (e) {
        if (e.which === 37) { // 左矢印キー
            console.log(count);


            if (0 <= count && count < 28) {
                count++;
                $(".paragraph__wrapper").css("transform", "translateX(" + count * 3 + "%)");

            };


            if (count === 1) {
                // カウントが1になったときに行う処理
                $('.paragraph--2').css({
                    'opacity': "1",
                });
            } else if (count === 2) {
                $('.paragraph--3').css({
                    'opacity': "1",
                });
            } else if (count === 3) {
                $('.paragraph--4').css({
                    'opacity': "1",
                });
            } else if (count === 4) {
                $('.paragraph--5').css({
                    'opacity': "1",
                });
                $('.bg-eye').css({
                    'opacity': "0",
                });

            } else if (count === 5) {
                $('.paragraph--6').css({
                    'opacity': "1",
                });
                $('.bg-eye').css({
                    'opacity': "0.1",
                });
            } else if (count === 6) {
                $('.paragraph--7').css({
                    'opacity': "1",
                });
            } else if (count === 7) {
                $('.paragraph--8').css({
                    'opacity': "1",
                });
            }
            else if (count === 8) {
                $('.paragraph--9').css({
                    'opacity': "1",
                });
                $('.bar').css({
                    'background-color': "#000",
                })
                $('.body').css({
                    'background-color': "#000",
                });
                $('.paragraph__wrapper').css({
                    'color': "#F9EFE1",
                });
                $('.help__text').css({
                    'color': "#F9EFE1",
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

                $('.paragraph--10').css({
                    'opacity': "1",
                });
                $('.bar').css({
                    'background-color': "#F9EFE1",
                })

                $('.body').css({
                    'background-color': "#F9EFE1",
                });
                $('.paragraph__wrapper').css({
                    'color': "#0B1632",
                });
                $('.help__text').css({
                    'color': "#0B1632",
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
                    'opacity': "0.1",
                });
                $('.st0').css({
                    'fill': "#0B1632",
                });

            }
            else if (count === 10) {
                $('.paragraph--11').css({
                    'opacity': "1",
                });
            }
            else if (count === 11) {
                $('.paragraph--12').css({
                    'opacity': "1",
                });

                $('.bar').css({
                    'animation': "tikatika .3s step-end forwards"
                })

                $('.body').css({
                    'animation': "tikatika .3s step-end forwards"
                });
                $('.paragraph__wrapper').css({
                    'color': "#F9EFE1",
                });
                $('.help__text').css({
                    'color': "#F9EFE1",
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

            }
            else if (count === 12) {
                $('.paragraph--13').css({
                    'opacity': "1",
                });
            }
            else if (count === 13) {
                $('.paragraph--14').css({
                    'opacity': "1",
                });
            }
            else if (count === 14) {
                $('.paragraph--15').css({
                    'opacity': "1",
                });
            } else if (count === 15) {
                $('.paragraph--16').css({
                    'opacity': "1",
                });
                $('.bg-eye').css({
                    'opacity': "0",
                });
            } else if (count === 16) {
                $('.paragraph--17').css({
                    'opacity': "1",
                });
                $('.bg-eye').css({
                    'opacity': "0.1",
                });

            } else if (count === 17) {
                $('.paragraph--18').css({
                    'opacity': "1",
                });
            } else if (count === 18) {
                $('.paragraph--19').css({
                    'opacity': "1",
                });
                $('#clock')[0].play();
            } else if (count === 19) {
                $('.paragraph--20').css({
                    'opacity': "1",
                });
            } else if (count === 20) {
                $('.paragraph--21').css({
                    'opacity': "1",
                });
            } else if (count === 21) {
                $('.paragraph--22').css({
                    'opacity': "1",
                });
            } else if (count === 22) {
                $('.paragraph--23').css({
                    'opacity': "1",
                });
            } else if (count === 23) {
                $('.paragraph--24').css({
                    'opacity': "1",
                });
            } else if (count === 24) {
                $('.paragraph--25').css({
                    'opacity': "1",
                });

            } else if (count === 25) {
                $('#bgm')[0].play();
                $('.paragraph--26').css({
                    'opacity': "1",
                });
            } else if (count === 26) {
                $('.paragraph--27').css({
                    'opacity': "1",
                });

            } else if (count === 27) {
                $('.paragraph--28').css({
                    'opacity': "1",
                });

            }
            else if (count === 28) {
                $('.paragraph--29').css({
                    'opacity': "1",
                });

            }

        }


        //右矢印キー-------------------------------------
        else if (e.which === 39) { // 右矢印キー
            if (0 < count || count < 28) {
                count--;
            };

            console.log(count);
            $(".paragraph__wrapper").css("transform", "translateX(" + (count * 3) + "%)");

            if (count < 1) {
                // カウントが1になったときに行う処理
                $('.paragraph--2').css({
                    'opacity': "0",
                });
            } else if (count < 2) {
                $('.paragraph--3').css({
                    'opacity': "0",
                });
            } else if (count < 3) {
                $('.paragraph--4').css({
                    'opacity': "0",
                });
            } else if (count < 4) {
                $('.paragraph--5').css({
                    'opacity': "0",
                });

                $('.bg-eye').css({
                    'opacity': "0.1",
                });

            } else if (count < 5) {
                $('.paragraph--6').css({
                    'opacity': "0",
                });

                $('.bg-eye').css({
                    'opacity': "0",
                });

            } else if (count < 6) {
                $('.paragraph--7').css({
                    'opacity': "0",
                });
            } else if (count < 7) {
                $('.paragraph--8').css({
                    'opacity': "0",
                });

            }
            else if (count < 8) {
                $('.paragraph--9').css({
                    'opacity': "0",
                });
                $('.bar').css({
                    'background-color': "#F9EFE1",
                })
                $('.body').css({
                    'background-color': "#F9EFE1",
                });
                $('.paragraph__wrapper').css({
                    'color': "#0B1632",
                });
                $('.help__text').css({
                    'color': "#0B1632",
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
                    'opacity': "0.1",
                });
                $('.st0').css({
                    'fill': "#0B1632",
                });

            }
            else if (count < 9) {
                $('.paragraph--10').css({
                    'opacity': "0",
                });
                $('.bar').css({
                    'background-color': "#000",
                })
                $('.body').css({
                    'background-color': "#000",
                });
                $('.paragraph__wrapper').css({
                    'color': "#F9EFE1",
                });
                $('.help__text').css({
                    'color': "#F9EFE1",
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
            else if (count < 10) {
                $('.paragraph--11').css({
                    'opacity': "0",
                });

            }
            else if (count < 11) {
                $('.paragraph--12').css({
                    'opacity': "0",
                });
                $('.paragraph--13').css({
                    'opacity': "0",
                });

                $('.bar').css({
                    'animation': "beige .3s ease forwards"
                })

                $('.body').css({
                    'animation': "beige .3s ease forwards"
                });

                $('.paragraph__wrapper').css({
                    'color': "#0B1632",
                });
                $('.help__text').css({
                    'color': "#0B1632",
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
            else if (count < 12) {
                $('.paragraph--13').css({
                    'opacity': "0",
                });
            }
            else if (count < 13) {
                $('.paragraph--14').css({
                    'opacity': "0",
                });
            } else if (count < 14) {
                $('.paragraph--15').css({
                    'opacity': "0",
                });
            } else if (count < 15) {
                $('.paragraph--16').css({
                    'opacity': "0",
                });
                $('.bg-eye').css({
                    'opacity': "0.1",
                });

            } else if (count < 16) {
                $('.paragraph--17').css({
                    'opacity': "0",
                });
                $('.bg-eye').css({
                    'opacity': "0",
                });

            } else if (count < 17) {
                $('.paragraph--18').css({
                    'opacity': "0",
                });
            } else if (count < 18) {
                $('.paragraph--19').css({
                    'opacity': "0",
                });
            } else if (count < 19) {
                $('.paragraph--20').css({
                    'opacity': "0",
                });
            } else if (count < 20) {
                $('.paragraph--21').css({
                    'opacity': "0",
                });
            } else if (count < 21) {
                $('.paragraph--22').css({
                    'opacity': "0",
                });
            } else if (count < 22) {
                $('.paragraph--23').css({
                    'opacity': "0",
                });
            } else if (count < 23) {
                $('.paragraph--24').css({
                    'opacity': "0",
                });
            } else if (count < 24) {
                $('.paragraph--25').css({
                    'opacity': "0",
                });
            } else if (count < 25) {
                $('.paragraph--26').css({
                    'opacity': "0",
                });
                $('#bgm')[0].pause();
                $('#bgm')[0].currentTime = 0;

            } else if (count < 26) {
                $('.paragraph--27').css({
                    'opacity': "0",
                });
            } else if (count < 27) {
                $('.paragraph--28').css({
                    'opacity': "0",
                });
            } else if (count < 28) {
                $('.paragraph--29').css({
                    'opacity': "0",
                });
            }

        }

    });
}
);

$(document).ready(function () {
    // フェードアウトさせたい要素のセレクタをここに指定します
    $('.opening').delay(600).fadeOut(400);
});

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