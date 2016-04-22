/// <reference path="../../bso/bso.ts" />
class Test1
{
    private label: HTMLLabelElement;
    public Element(): HTMLDivElement
    {
        return div(EmptyAction,
            () => label(t=> { this.label = t; }),
            () => button(t=>
            {
                t.textContent = 'Кнопка1';
                t.onclick = me=>
                {
                    this.label.textContent = 'Хвост';
                };
            }));
    }
}
window.onload = ev=> {
    var e = new Test1().Element();
    document.body.appendChild(e);
    (e.childNodes[1] as HTMLButtonElement).click();
    var text = (e.childNodes[0] as HTMLLabelElement).textContent;
    if (text == 'Хвост') {
        alert('Тест прошел');
    }
    else {
        alert('Тест не прошел');
    }
}
