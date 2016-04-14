/// <reference path="../../jquery/jquery.d.ts" />
/// <reference path="../../bso/bso.ts" />
module Tests {
    interface IPagerPageChangeEventArgs {
        oldPage: number;
        newPage: number;
    }

    export class Pager {
        public PageChange: (arg: IPagerPageChangeEventArgs) => void;
        private CurrentPage: number = 1;
        private Row: HTMLTableRowElement;
        /**
         * число страниц в которых заполнены все строки
         * @returns
         */
        private get FullPageCount(): number {
            return this.itemCount / this.pageSize;
        }
        /**
         * строк на последней странице
         * @returns
         */
        private get RowInLastPage(): number {
            return this.itemCount % this.pageSize;
        }
        /**
         * всего страниц
         * @returns
         */
        private get PageCount(): number {
            return this.FullPageCount + this.RowInLastPage > 0 ? 1 : 0;
        }
        public constructor(private itemCount: number, private pageSize: number, handl?: (arg: IPagerPageChangeEventArgs) => void)
        {
            if (handl)
                this.PageChange = handl;
        }
        public Pager(): HTMLElement {
            return this.CreatePager();
        }
        private CreatePager(): HTMLElement {
            return this.GetTab();
        }
        private GetTab(): HTMLTableElement {
            return table(EmptyAction, () => this.GetRow());
        }
        private GetRow(): HTMLTableRowElement {
            this.Row = tr();
            return this.Row;
        }
        private GetCells(): HTMLTableCellElement[] {
            return [td()];
        }
        private CreateCell(current: boolean, pageNumber?: number): HTMLTableCellElement {
            return td(t=> {
                t.style.cursor = Cursors.pointer;
                t.textContent = (!current && pageNumber) ? pageNumber.toString() : '...';
                if (!current)
                {
                    t.style.color = Color.Blue;
                    t.style.textDecoration = TextDecoration.underline;
                }
                t.onclick = me=> {
                    if (this.PageChange && pageNumber) {
                        this.PageChange(
                            {
                                oldPage: this.CurrentPage,
                                newPage: pageNumber
                            });
                        this.CurrentPage = pageNumber;
                    }
                }

            });
        }
        public RePaint(): void {
            this.DeleteCells();
            if (this.PageCount <= 10) {
                this.LessOrEqualTen();
                return;
            }
        }
        private LessOrEqualTen()
        {
            for (var i = 1; i <= 10; i++)
            {
                var cell = this.CreateCell(i == this.CurrentPage, i);
                this.Row.appendChild(cell);
            }
        }
        private DeleteCells(): void {
            for (var i = 0; i < this.Row.cells.length; i++) {
                this.Row.deleteCell(0);
            }
        }
    }
}

$(document).ready(() =>
{
    var p = new Tests.Pager(9, 10, x=> { alert(JSON.stringify(x)); });
    document.body.appendChild(p.Pager());
    p.RePaint();
});