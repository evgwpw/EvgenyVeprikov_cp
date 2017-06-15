/// <reference path="../bso/bso.ts" />
interface IContainer
{

}
interface IComponent
{
}
/**
 * Контейнер для нескольких панелей
 */
export class SplitContainer
{

}
export class BsoArray<T> extends Array<T>
{
    public Add(el: T): number {
        return this.push(el);
    }
    public Insert(index: number, el: T): Array<T>
    {
        if (index < 0 || index >= this.length)
            throw new BsoError("Индекс находится за пределами диапазонов массива");
        return this.splice(index, 0, el);
    }
    public Delete(index: number): Array<T>
    {
        if (index < 0 || index >= this.length)
            throw new BsoError("Индекс находится за пределами диапазонов массива");
        return this.splice(index, 1);
    }
}
/**
 * Контейнер для строк
 */
export class ElementRowsCollection extends BsoArray<HTMLElement> 
{
   
   
}
/**
 * все строки в одном столбце, но у разных строк разное количество ячеек
 */
export class ElementColumn extends BsoArray<ElementRowsCollection>
{

}
export class ElementCollection
{
    
}
/**
 * 
 */
function Test()
{
    var ec = new ElementColumn();
    ec[1][2].onload = (ev) =>
    {
        alert(ev.srcElement.innerHTML);
    };
}