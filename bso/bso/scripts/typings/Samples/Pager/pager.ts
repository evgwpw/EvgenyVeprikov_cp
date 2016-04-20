/// <reference path="../../jquery/jquery.d.ts" />
/// <reference path="../../bso/bso.ts" />
module Tests {
    interface IPagerPageChangeEventArgs {
        oldPage: number;
        newPage: number;
    }
    class Distance {
        public constructor(public ToBegin: number, public ToEnd: number) { }
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
            return Math.floor(this.itemCount / this.pageSize);
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
            return this.FullPageCount + (this.RowInLastPage > 0 ? 1 : 0);
        }
        /**
         * где находимся
         * @returns
         */
        private get Distance(): Distance {
            return new Distance(this.CurrentPage - 1, this.PageCount - this.CurrentPage);
        }
        public constructor(private itemCount: number, private pageSize: number, handl?: (arg: IPagerPageChangeEventArgs) => void) {
            if (handl)
                this.PageChange = handl;
        }
        public Pager(): HTMLElement {
            var res = this.CreatePager();
            this.RePaint();
            return res;
        }
        private CreatePager(): HTMLElement {
            return this.GetTab();
        }
        private GetTab(): HTMLTableElement {
            return table(EmptyAction, () => this.GetRow());
        }
        private GetRow(): HTMLTableRowElement {
            return this.Row = tr();
        }
        private GetEmptyCell(): HTMLTableCellElement {
            return td(t=> t.textContent = '...');
        }
        private CreateCell(current: boolean, pageNumber?: number): HTMLTableCellElement {
            return td(t=> {
                t.style.cursor = Cursors.pointer;
                t.textContent = pageNumber ? pageNumber.toString() : '...';
                if (!current) {
                    t.style.color = Color.Blue;
                    t.style.textDecoration = TextDecoration.underline;
                }
                t.onclick = me=> {
                    if (this.PageChange && pageNumber) {
                        this.PageChange({
                            oldPage: this.CurrentPage,
                            newPage: pageNumber
                        });
                        this.CurrentPage = pageNumber;
                        this.RePaint();
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
            this.ThanTen();
        }
        private LessOrEqualTen() {
            for (var i = 1; i <= this.PageCount; i++) {
                var cell = this.CreateCell(i == this.CurrentPage, i);
                this.Row.appendChild(cell);
            }
        }
        private ThanTen() {
            var distance = this.Distance;
            if (distance.ToBegin <= 5)//рисуем первые 10
            {
                for (var i = 1; i <= 10; i++) {
                    this.Row.appendChild(this.CreateCell(i == this.CurrentPage, i));
                }
                this.Row.appendChild(this.GetEmptyCell());
                this.Row.appendChild(this.CreateCell(false, this.PageCount));
            }
            else if (distance.ToEnd <= 5)//рисуем последние10
            {
                this.Row.appendChild(this.CreateCell(false, 1));
                this.Row.appendChild(this.GetEmptyCell());
                for (var i = this.PageCount - 10; i <= this.PageCount; i++) {
                    this.Row.appendChild(this.CreateCell(i == this.CurrentPage, i));
                }
            }
            else {
                this.Row.appendChild(this.CreateCell(false, 1));
                this.Row.appendChild(this.CreateCell(false));
                for (var i = this.CurrentPage - 5; i < this.CurrentPage + 5; i++) {
                    this.Row.appendChild(this.CreateCell(i == this.CurrentPage, i));
                }
                this.Row.appendChild(this.CreateCell(false));
                this.Row.appendChild(this.CreateCell(false, this.PageCount));
            }

        }
        private DeleteCells(): void {
            var len = this.Row.cells.length;
            for (var i = 0; i < len; i++) {
                this.Row.deleteCell(0);
            }
        }
    }
}

$(document).ready(() => {
    var p = new Tests.Pager(253, 10, x=> { alert(JSON.stringify(x)); });
    document.body.appendChild(p.Pager());
});