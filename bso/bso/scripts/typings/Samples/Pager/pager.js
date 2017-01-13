/// <reference path="../../jquery/jquery.d.ts" />
/// <reference path="../../bso/bso.ts" />
var Tests;
(function (Tests) {
    var Distance = (function () {
        function Distance(ToBegin, ToEnd) {
            this.ToBegin = ToBegin;
            this.ToEnd = ToEnd;
        }
        return Distance;
    }());
    var Pager = (function () {
        function Pager(itemCount, pageSize, handl) {
            this.itemCount = itemCount;
            this.pageSize = pageSize;
            this.CurrentPage = 1;
            if (handl)
                this.PageChange = handl;
        }
        Object.defineProperty(Pager.prototype, "FullPageCount", {
            /**
             * число страниц в которых заполнены все строки
             * @returns
             */
            get: function () {
                return Math.floor(this.itemCount / this.pageSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pager.prototype, "RowInLastPage", {
            /**
             * строк на последней странице
             * @returns
             */
            get: function () {
                return this.itemCount % this.pageSize;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pager.prototype, "PageCount", {
            /**
             * всего страниц
             * @returns
             */
            get: function () {
                return this.FullPageCount + (this.RowInLastPage > 0 ? 1 : 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pager.prototype, "Distance", {
            /**
             * где находимся
             * @returns
             */
            get: function () {
                return new Distance(this.CurrentPage - 1, this.PageCount - this.CurrentPage);
            },
            enumerable: true,
            configurable: true
        });
        Pager.prototype.Pager = function () {
            var res = this.CreatePager();
            this.RePaint();
            return res;
        };
        Pager.prototype.CreatePager = function () {
            return this.GetTab();
        };
        Pager.prototype.GetTab = function () {
            var _this = this;
            return table(EmptyAction, function () { return _this.GetRow(); });
        };
        Pager.prototype.GetRow = function () {
            return this.Row = tr();
        };
        Pager.prototype.GetEmptyCell = function () {
            return td(function (t) { return t.textContent = '...'; });
        };
        Pager.prototype.CreateCell = function (current, pageNumber) {
            var _this = this;
            return td(function (t) {
                t.style.cursor = Cursors.pointer;
                t.textContent = pageNumber ? pageNumber.toString() : '...';
                if (!current) {
                    t.style.color = Color.Blue;
                    t.style.textDecoration = TextDecoration.underline;
                }
                t.onclick = function (me) {
                    if (_this.PageChange && pageNumber) {
                        _this.PageChange({
                            oldPage: _this.CurrentPage,
                            newPage: pageNumber
                        });
                        _this.CurrentPage = pageNumber;
                        _this.RePaint();
                    }
                };
            });
        };
        Pager.prototype.RePaint = function () {
            this.DeleteCells();
            if (this.PageCount <= 10) {
                this.LessOrEqualTen();
                return;
            }
            this.ThanTen();
        };
        Pager.prototype.LessOrEqualTen = function () {
            for (var i = 1; i <= this.PageCount; i++) {
                var cell = this.CreateCell(i == this.CurrentPage, i);
                this.Row.appendChild(cell);
            }
        };
        Pager.prototype.ThanTen = function () {
            var distance = this.Distance;
            if (distance.ToBegin <= 5) {
                for (var i = 1; i <= 10; i++) {
                    this.Row.appendChild(this.CreateCell(i == this.CurrentPage, i));
                }
                this.Row.appendChild(this.GetEmptyCell());
                this.Row.appendChild(this.CreateCell(false, this.PageCount));
            }
            else if (distance.ToEnd <= 5) {
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
        };
        Pager.prototype.DeleteCells = function () {
            var len = this.Row.cells.length;
            for (var i = 0; i < len; i++) {
                this.Row.deleteCell(0);
            }
        };
        return Pager;
    }());
    Tests.Pager = Pager;
})(Tests || (Tests = {}));
$(document).ready(function () {
    var p = new Tests.Pager(253, 10, function (x) { alert(JSON.stringify(x)); });
    document.body.appendChild(p.Pager());
});
//# sourceMappingURL=pager.js.map