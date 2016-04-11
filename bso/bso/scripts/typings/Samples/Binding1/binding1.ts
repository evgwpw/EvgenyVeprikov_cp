/// <reference path="../../bso/bootstrapcss.ts" />
/// <reference path="../../bso/bootstrapcss.ts" />
/// <reference path="../../bso/bso.ts" />
/// <reference path="../../bso/bootstrapcss.ts" />
/// <reference path="../../bootstrap.datepicker/bootstrap.datepicker.d.ts" />
interface IBinding1Data {
    FirstName: string;
    LastName: string;
    BirthDay: Date;
}

var data: IBinding1Data =
    {
        FirstName: 'Семен',
        LastName: 'Горбунков',
        BirthDay: new Date(1941, 08, 27)
    };
class Binder1 extends Binder<IBinding1Data>
{
    public constructor(public srcData: IBinding1Data) {
        super(srcData);
    }
}

var binder = new Binder1(data);
var binding1 = div(t=> { t.style.width = '200px'; },
    () => inputText(t=> {
        binder.BS(t, x=> x.value, x=> x.FirstName);
        t.className = bootstrapCss.form_control;
    }),
    () => br(),
    () => inputText(t=> {
        binder.BS(t, x=> x.value, x=> x.LastName);
        t.className = bootstrapCss.form_control;
    }),
    () => br(),
    () => div(EmptyAction,
        () => inputText(t=> {
            t.className = bootstrapCss.form_control;
            var dp = $(t).datetimepicker(
                {
                    autoclose: true,
                    format: "dd.mm.yyyy",
                    language: "ru",
                    todayBtn: true,
                    startView: 2,
                    minView: 2,
                    showClear: true,
                    showClose: true,
                    pickTime: false 
                })
                .data('datetimepicker');

            binder.BC(t, t=> binder.Data.BirthDay,
                t=> dp.getDate(),
                e=> {
                    dp.setDate(binder.Data.BirthDay);
                });
            dp.setDate(binder.srcData.BirthDay);
        }),
        () => br(),
        () => button(t=> {
            t.textContent = 'Button1';
            t.onclick = me=> {
                var obj = binder.Data;
                var str = JSON.stringify(obj);
                alert(str);
            };
        }))); 

$(document).ready(() => {
    $('body')[0].appendChild(binding1);
});