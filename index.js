var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var pokemonList = document.getElementById('pokemons');
var offset = 0;
window.onload = function () {
    loadPokemons();
};
function loadPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + offset).then(function (response) {
        response.json().then(function (pokelist) {
            var html = '';
            for (var _i = 0, _a = pokelist.results; _i < _a.length; _i++) {
                var pokemon = _a[_i];
                html += "<tr><td>" + pokemon.name + "</td><td><button type=\"button\" id=\"" + pokemon.id + ("\" onclick=\"detail('" + pokemon.url + "')\">Detail</button></td></tr>");
            }
            pokemonList.innerHTML = html;
        });
    });
}
;
function next() {
    offset += 20;
    loadPokemons();
}
;
function previous() {
    if (offset >= 20) {
        offset -= 20;
        loadPokemons();
    }
}
;
function display() {
    if (pokemonList.style.display === "none") {
        pokemonList.style.display = "block";
        document.getElementById('btnPrevious').style.display = "block";
        document.getElementById('btnNext').style.display = "block";
        document.getElementById('pokemon').style.display = "none";
    }
    else {
        pokemonList.style.display = "none";
        document.getElementById('btnPrevious').style.display = "none";
        document.getElementById('btnNext').style.display = "none";
        document.getElementById('pokemon').style.display = "block";
    }
}
function detail(url) {
    return __awaiter(this, void 0, void 0, function () {
        var detailTable, response, poke, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    display();
                    detailTable = document.getElementById('pokemon');
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    poke = _a.sent();
                    html = '';
                    html = "<table><tr><td>" + poke.name + "</td></tr>\n          <tr><td><img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + poke.id + (".png\"</td></tr>\n          <tr><td>Weight: </td><td>" + poke.weight + "</td></tr>\n          <tr><td>Height: </td><td>" + poke.height + "</td></tr></table>\n          <button type=\"button\" id=\"btnBack\" onclick=\"display()\">zur\u00FCck zu Liste</button>");
                    detailTable.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
;
