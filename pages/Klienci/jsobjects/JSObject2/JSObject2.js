export default {
_parser: new XMLParser.j2xParser(),
jsonToXML: async (jsonData) => {
try {
return this._parser.parse(jsonData);
} catch (error) {
console.error("Error parsing JSON to XML:", error);
return null;
}
}
