let Images = {
    imgsDB: [
        [
            "funny-cat1_part1x1.jpg",
            "funny-cat1_part2x1.jpg",
            "funny-cat1_part3x1.jpg",
            "funny-cat1_part4x1.jpg",
            "funny-cat1_part5x1.jpg"
        ],
        [
            "monkey_part1x1.jpg",
            "monkey_part2x1.jpg",
            "monkey_part3x1.jpg",
            "monkey_part4x1.jpg",
            "monkey_part5x1.jpg"
        ],
        [
            "panda_swap_part1x1.jpg",
            "panda_swap_part2x1.jpg",
            "panda_swap_part3x1.jpg",
            "panda_swap_part4x1.jpg",
            "panda_swap_part5x1.jpg"
        ]
    ],
    imgpos: [0, 0, 0, 0, 0]
};

function placeImage(imgpos1, imgToggle) {
    Images.imgpos[imgpos1 - 1] = imgToggle;
    let imageName = "#img" + imgpos1;
    // Ảnh nằm cùng thư mục
    $(imageName).attr("src", Images.imgsDB[imgToggle][imgpos1 - 1]);
}

function setImagesRandom() {
    for (let i = 1; i <= 5; i++) {
        let num = Math.floor(Math.random() * 3);
        placeImage(i, num);
    }
}

function imageClick(imgpos1) {
    let imgToggle = Images.imgpos[imgpos1 - 1];
    placeImage(imgpos1, (imgToggle + 1) % 3);
}

function checkSet() {
    let first = Images.imgpos[0];
    let same = Images.imgpos.every(function (val) {
        return val === first;
    });

    if (same) {
        $("img").css("box-shadow", "4px 4px 9px red");
    } else {
        $("img").css("box-shadow", "2px 3px 3px black");
    }
}

let main = function () {
    setImagesRandom();
    checkSet();

    for (let i = 1; i <= 5; i++) {
        $("#img" + i).click(function () {
            imageClick(i);
            checkSet();
        });
    }

    $("#reset-btn").click(function () {
        setImagesRandom();
        checkSet();
    });
};

$(document).ready(main);
