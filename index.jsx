const headerElem = document.getElementById("header");
const header = ReactDOM.createRoot(headerElem);

function hello() {
    return <h1>Hello React!</h1>;
}

header.render(
    <hello/>
);

const bodyElem = document.getElementById("app");
const body = ReactDOM.createRoot(bodyElem);

function kek() {
    body.render(
        <p>{new Date().toLocaleTimeString()}</p>
    );
}

setInterval(kek, 1000);