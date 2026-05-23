const artworks = [

    {
        name: "アカデミックなめいが",
        image: "images/sample1.png",
        fake: "images/dummy1.png",
        description: "右上にシミがない",
        owned: false
    },

    {
        name: "あらぶるめいがのひだり",
        image: "images/sample2.png",
        fake: "images/dummy2.png",
        description: "雷神の体が白",
        owned: false
    },

    {
        name: "あらぶるめいがのみぎ",
        image: "images/sample3.png",
        fake: "images/dummy3.png",
        description: "風神の体が緑",
        owned: false
    },

    {
        name: "いいかんじのめいが",
        image: "images/sample4.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "いいめいが",
        image: "images/sample5.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "いきなめいが",
        image: "images/sample6.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "いさましいめいが",
        image: "images/sample7.png",
        fake: "images/dummy7.png",
        description: "前髪がM字",
        owned: false
    },

    {
        name: "いなせなめいが",
        image: "images/sample8.png",
        fake: "images/dummy8.png",
        description: "眉が上がっている",
        owned: false
    },

    {
        name: "おごそかなめいが",
        image: "images/sample9.png",
        fake: "images/dummy9.png",
        description: "奥の男性の手がカーテンの向こうにある",
        owned: false
    },

    {
        name: "おだやかなめいが",
        image: "images/sample10.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "おちついためいが",
        image: "images/sample11.png",
        fake: "images/dummy11.png",
        description: "ミルクの量が少ない",
        owned: false
    },

    {
        name: "おもしろいめいが",
        image: "images/sample12.png",
        fake: "images/dummy12.png",
        description: "胸元に装飾がある",
        owned: false
    },

    {
        name: "かちのあるめいが",
        image: "images/sample13.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "きれいなめいが",
        image: "images/sample14.png",
        fake: "images/dummy14.png",
        description: null,
        owned: false
    },

    {
        name: "しずみゆくめいが",
        image: "images/sample15.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "しなやかなめいが",
        image: "images/sample16.png",
        fake: "images/dummy16.png",
        description: "振り返っている、人物が小さい",
        owned: false
    },

    {
        name: "すごいめいが",
        image: "images/sample17.png",
        fake: "images/dummy17.png",
        description: "中央の男性が帽子を被っている",
        owned: false
    },

    {
        name: "すてきなめいが",
        image: "images/sample18.png",
        fake: "images/dummy18.png",
        description: null,
        owned: false
    },

    {
        name: "すばらしいめいが",
        image: "images/sample19.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "たおやかなめいが",
        image: "images/sample20.png",
        fake: "images/dummy20.png",
        description: "抱いているイタチが白",
        owned: false
    },

    {
        name: "たぐいまれなるめいが",
        image: "images/sample21.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "ちからづよいめいが",
        image: "images/sample22.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "ちみつなめいが",
        image: "images/sample23.png",
        fake: "images/dummy23.png",
        description: "花の色が青",
        owned: false
    },

    {
        name: "なぞめいためいが",
        image: "images/sample24.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "にぎやかなめいが",
        image: "images/sample25.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "ひかりのめいが",
        image: "images/sample26.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "またたくめいが",
        image: "images/sample27.png",
        fake: null,
        description: null,
        owned: false
    },

    {
        name: "みごとなめいが",
        image: "images/sample28.png",
        fake: "images/dummy28.png",
        description: "手前に2人が描かれている",
        owned: false
    },

    {
        name: "ゆうめいなめいが",
        image: "images/sample29.png",
        fake: "images/dummy29.png",
        description: "まゆげがない",
        owned: false
    },

    {
        name: "よくみるめいが",
        image: "images/sample30.png",
        fake: null,
        description: null,
        owned: false
    }
];

const artGrid = document.getElementById("art-grid");

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

let currentFilter = "all";

loadOwnedData();

function saveOwnedData() {

    const ownedData = artworks.map((art) => art.owned);

    localStorage.setItem(
        "atsumori_art_owned",
        JSON.stringify(ownedData)
    );
}

function loadOwnedData() {

    const savedData =
        localStorage.getItem("atsumori_art_owned");

    if (!savedData) {

        return;
    }

    const ownedData =
        JSON.parse(savedData);

    artworks.forEach((art, index) => {

        art.owned = ownedData[index];
    });
}

function updateProgress() {

    const ownedCount =
        artworks.filter(art => art.owned).length;

    const remaining =
        artworks.length - ownedCount;

    document.getElementById("progress-count").textContent =
        `収集率 ${ownedCount} / ${artworks.length}`;

    const remainingText =
        document.getElementById("remaining-count");

    if (remaining === 0) {

        remainingText.textContent =
            "コンプリート達成！";

        remainingText.classList.add("complete");
    }

    else {

        remainingText.textContent =
            `コンプリートまであと${remaining}個`;

        remainingText.classList.remove("complete");
    }
}

function openModal(art) {

    if (art.fake) {

        modalContent.innerHTML = `
            <div class="compare-area">

                <div class="compare-block">
                    <div class="compare-label real-label">本物</div>
                    <img src="${art.image}">
                </div>

                <div class="compare-block">
                    <div class="compare-label">偽物</div>
                    <img src="${art.fake}">
                </div>

            </div>

            <div class="description-text">
                ${art.description || "特徴情報なし"}
            </div>
        `;
    }

    else {

        modalContent.innerHTML = `
            <div class="no-fake">
                偽物は存在しません
            </div>
        `;
    }

    modal.classList.remove("hidden");
}

function closeModal() {

    modal.classList.add("hidden");
}

function renderArtworks() {

    artGrid.innerHTML = "";

    artworks
        .filter((art) => {

            if (currentFilter === "owned") {

                return art.owned;
            }

            if (currentFilter === "unowned") {

                return !art.owned;
            }

            return true;
        })
        .forEach((art) => {

            const card = document.createElement("div");

            card.className = "art-card";

            card.innerHTML = `
                <img src="${art.image}">

                <div class="art-name">
                    ${art.name}
                </div>

                <div class="checkbox-area">
                    <label>
                        <input type="checkbox" ${art.owned ? "checked" : ""}>
                        <span>所持</span>
                    </label>
                </div>

                <button class="check-btn">
                    本物チェック
                </button>
            `;

            const checkbox =
                card.querySelector("input");

            checkbox.addEventListener("change", () => {

                art.owned = checkbox.checked;

                saveOwnedData();

                updateProgress();

                renderArtworks();
            });

            const checkBtn =
                card.querySelector(".check-btn");

            checkBtn.addEventListener("click", () => {

                openModal(art);
            });

            artGrid.appendChild(card);
        });
}

document
    .getElementById("show-all")
    .addEventListener("click", () => {

        currentFilter = "all";

        renderArtworks();
    });

document
    .getElementById("show-owned")
    .addEventListener("click", () => {

        currentFilter = "owned";

        renderArtworks();
    });

document
    .getElementById("show-unowned")
    .addEventListener("click", () => {

        currentFilter = "unowned";

        renderArtworks();
    });

document
    .getElementById("modal-close")
    .addEventListener("click", closeModal);

document
    .getElementById("modal-bg")
    .addEventListener("click", closeModal);

renderArtworks();

updateProgress();