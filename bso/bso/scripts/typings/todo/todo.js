var chekBoxes = new Array() < ItemForList > ();
var list;
var todoapp = div(null, function () {
    return header(null, function () {
        return h1(function (x) {
            return x.textContent = 'Todos';
        });
    }, function () {
        return inputText(function (x) {
            x.placeholder = 'What needs to be done?';
            x.onkeypress = function (e) {
                if(e.keyCode == 13) {
                    list.appendChild(GetItem(x.value));
                    x.value = '';
                }
            };
        });
    });
}, function () {
    return section(null, function () {
        return inputCheckbox(function (x) {
            x.id = "toggle-all";
            x.onchange = function (ev) {
                chekBoxes.forEach(function (v, i) {
                    v.checkBox.checked = x.checked;
                    $(v.checkBox).change();
                });
            };
        });
    }, function () {
        return label(function (x) {
            return x.htmlFor = 'toggle-all';
        });
    }, function () {
        return ul(function (x) {
            list = x;
        });
    });
}, function () {
    return footer();
});
function GetItem(str) {
    var lb;
    var res = li(null, function () {
        return div(null, function () {
            return inputCheckbox(function (x) {
                chekBoxes.push({
                    checkBox: x,
                    listItem: res
                });
                x.onchange = function (ev) {
                    lb.style.textDecoration = x.checked ? TextDecoration.line_through : TextDecoration.none;
                };
            });
        }, function () {
            return label(function (x) {
                x.textContent = str;
                lb = x;
            });
        });
    }, function () {
        return inputText(function (x) {
            x.hidden = true;
        });
    });
    return res;
}
$(document).ready(function () {
    $('body')[0].appendChild(todoapp);
});
//@ sourceMappingURL=todo.js.map
