import { Observable } from "rxjs";
import {render} from "typings/dist/support/cli";

let output = document.getElementById("output");
let button = document.getElementById("button")

let click = Observable.fromEvent(button, "click");

function load(url: string) {

    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => {
            let data = JSON.parse(xhr.responseText);
            observer.next(data);
            observer.complete();
        });

        xhr.open("GET", url);
        xhr.send();
    });
}

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

click.flatMap(e => load("movies.json"))
    .subscribe(
        renderMovies,
    e => console.log(`error: ${e}`),
    () => console.log("complete")
    );