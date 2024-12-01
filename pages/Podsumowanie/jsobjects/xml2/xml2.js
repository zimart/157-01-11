export default {
 _parser: new XMLParser.prototype(),
    jsonToXML: async (json = {"abc": "def"}) => {
        return this._parser.parse(json);
    }
}