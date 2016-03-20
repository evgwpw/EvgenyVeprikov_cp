/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../bso/bso.ts" />

var chekBoxes = new Array<ItemForList>();
var list: HTMLUListElement;
interface ItemForList
{
    checkBox: HTMLInputElement;
    listItem: HTMLLIElement;
}
var todoapp = div(null,
    () => header(null,
        () => h1(x=> x.textContent = 'Todos'),
        () => inputText(x=> {
            x.placeholder = 'What needs to be done?';
            x.onkeypress = e=>
            {
                if (e.keyCode == 13)
                {
                    list.appendChild(GetItem(x.value));
                    x.value = '';
                }
            };
        })),
    () => section(null,
        () => inputCheckbox(x=> {
            x.id = "toggle-all";
            x.onchange = ev=>
            {
                chekBoxes.forEach((v, i) => {
                    v.checkBox.checked = x.checked;
                    $(v.checkBox).change();
                });
            };
        }),
        () => label(x=> x.htmlFor = 'toggle-all'),
        () => ul(x=> { list = x; })
    ),
    () => footer()
);

function GetItem(str: string): HTMLLIElement
{
    var lb: HTMLLabelElement;
    var res = li(null,
        () => div(null,
            () => inputCheckbox(x=>
            {
                chekBoxes.push(
                    {
                        checkBox: x,
                        listItem: res
                    });
                x.onchange = ev=>
                {
                    lb.style.textDecoration = x.checked ? TextDecoration.line_through : TextDecoration.none;
                };
            }),
            () => label(x=>
            {
                x.textContent = str;
                lb = x;
            })
        ),
        () => inputText(x=>
        {
            x.hidden = true; 
        })
    );

    return res;
}
$(document).ready(()=>
{
    $('body')[0].appendChild(todoapp);
});
