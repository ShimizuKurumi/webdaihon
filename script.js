
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
            $(".paragraph__wrapper").css("transform", "translateX(" + count * 4 + "%)");
            console.log(count);


            if (0 <= count) {
                count++;
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
            }

        }


        //右矢印キー-------------------------------------
        else if (e.which === 39) { // 右矢印キー
            if (0 < count) {
                count--;
            };

            console.log(count);
            $(".paragraph__wrapper").css("transform", "translateX(" + (count * 4) + "%)");

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
            } else if (count < 17) {
                $('.paragraph--19').css({
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
