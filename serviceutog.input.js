var head, body, btn, cls, iframeSU, style, css, target, frag, fragment;

function create(html) {
    var frag = document.createDocumentFragment();
    var temp = document.createElement("div");
    temp.innerHTML = html;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

head = document.getElementsByTagName("head")[0];
body = document.body;

btn = document.createElement("span");
btn.className = "btnServiceUTOG";
body.appendChild(btn);

fragment = create(
    '<div class="iframeSU">' +
        '<b class="closedIframeSU">&times;</b>' +
        '<iframe src="//app.service.utog.org/" height="600" width="350" title="Iframe Service UTOG">' +
            '<div style="color:salmon;">Ваш браузер не підтримує вставки.</div>' +
        '</iframe>' +
    '</div>'
);

body.insertBefore(fragment, document.body.lastChild[0]);

css = `
.iframeSU * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.btnServiceUTOG {
    background: url(//utog.org/assets/uploads/images/inbox/subtn.png) no-repeat left center;
    background-size: contain;
    border-radius: 25px;
    border: none;
    bottom: 16px;
    cursor: pointer;
    height: 60px;
    left: 16px;
    position: fixed;
    width: 190px;
    z-index: 100000;
}
.iframeSU {
    align-items: center;
    background: rgba(0,0,0,.9);
    bottom: 0;
    display: none;
    left: 0;
    justify-content: center;
    position: fixed;
    right: 0;
    top: 0;
    transition: .3s 1s linear;
    z-index: 100000;
}
.openIframe {
    display: flex;
}
.iframeSU iframe {
    background: #000;
    border-radius: 16px;
    border: 10px solid #000;
    box-sizing: content-box;
    height: 600px;
    overflow: hidden;
    transition: .3s linear;
    width: 350px;
    opacity: 0;
}
.openIframe iframe {
    opacity: 1;
}
.closedIframeSU {
    align-items: center;
    background: #fff;
    border-radius: 4px;
    color: salmon;
    cursor: pointer;
    display: flex;
    font-size: 20px;
    height: 32px;
    justify-content: center;
    position: absolute;
    right: 16px;
    top: 8px;
    width: 32px;
    z-index: 999999;
}
`;

style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
head.appendChild(style);

iframeSU = document.querySelector(".iframeSU");

btn.onclick = function(e) {
    iframeSU.classList.toggle("openIframe");
    e.preventDefault();
};

cls = document.querySelector(".closedIframeSU");
cls.onclick = function(e) {
    iframeSU.classList.toggle("openIframe");
    e.preventDefault();
};