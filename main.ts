import { Observable } from "rxjs";
import { load, loadWithFetch } from "./loader"

// Will stop after error
let source = Observable.merge(
  Observable.of(1),
  Observable.from([2,3,4]),
  Observable.throw(new Error("Stop!")),
  Observable.of(5)
);

source.subscribe(
  value => console.log(`value: ${value}`),
  error => console.log(`error: ${error}`),
    () => console.log("complete")
);

// Swallow error and continue on
let source2 = Observable.onErrorResumeNext(
    Observable.of(1),
    Observable.from([2,3,4]),
    Observable.throw(new Error("Stop!")),
    Observable.of(5)
);

source2.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log("complete")
);

// Catch error then return new Observable
let source3 = Observable.merge(
    Observable.of(1),
    Observable.from([2,3,4]),
    Observable.throw(new Error("Stop!")),
    Observable.of(5)
).catch(e => {
    console.log(`caught: ${e}`);
    return Observable.of(10);
})

source3.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log("complete")
);




// let output = document.getElementById("output");
// let button = document.getElementById("button")
//
// let click = Observable.fromEvent(button, "click");
//
// function renderMovies(movies) {
//     movies.forEach(m => {
//         let div = document.createElement("div");
//         div.innerText = m.title;
//         output.appendChild(div);
//     });
// }
//
// click.flatMap(e => loadWithFetch("movies.json"))
//     .subscribe(
//         renderMovies,
//     e => console.log(`error: ${e}`),
//     () => console.log("complete")
//     );