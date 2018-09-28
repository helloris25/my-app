import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

function parseData(parse) {
    return function(d) {
        d.date = parse(d.date);
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
        d.volume = +d.volume;

        return d;
    };
}

const parseDate = timeParse("%Y-%m-%d");

export function getChartData(symbolCode) {

    const promiseData = fetch(`/${symbolCode}.tsv`)
        .then(response => response.text())
        .then(data => {
            tsvParse(data, parseData(parseDate))});
    return promiseData;
}

export function getSymbols() {

    const promiseData = fetch(`/symbols.json`)
        .then(response => response.json());
    return promiseData;
}