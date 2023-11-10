export function stringToHTML(str) {
    const parser = new DOMParser();

    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
};