// Type definitions for bootstrap.datepicker
// Project: https://github.com/eternicode/bootstrap-datepicker
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

/**
 * All options that take a “Date” can handle a Date object; a String
 * formatted according to the given format; or a timedelta relative
 * to today, eg “-1d”, “+6m +1y”, etc, where valid units are “d” (day),
 * “w” (week), “m” (month), and “y” (year).
 * 
 * See online docs for more info:
 *  http://bootstrap-datepicker.readthedocs.org/en/release/options.html
 */

declare module DatetimepickerModule {
     interface DatepickerOptions {
        format?: string;
        weekStart?: number;
        startDate?: any;
        endDate?: any;
        autoclose?: boolean;
        startView?: number;
        todayBtn?: any;
        todayHighlight?: boolean;
        keyboardNavigation?: boolean;
        language?: string;
        beforeShowDay?: (date: any) => any;
        calendarWeeks?: boolean;
        clearBtn?: boolean;
        daysOfWeekDisabled?: number[];
        forceParse?: boolean;
        inputs?: any[];
        minViewMode?: any;
        multidate?: any;
        multidateSeparator?: string;
        orientation?: string;
        minView?: number;
        showClear?: boolean;
        showClose?: boolean;
        pickTime?: boolean;
        sideBySide?: boolean;
        maxView?: number;
        //  pickDate?: boolean;
    }

     interface DatepickerEventObject extends JQueryEventObject {
        date: Date;
        // format(format?: string): string;
        type: string;
    }
     interface Datetimepicker
     {
         remove(): void;
         show(e?: any): void;
         hide(e?: any): void;
         getDate(): Date;
         getUTCDate(): Date;
         setDate(d: Date): void;
         setUTCDate(d: Date): void;
         update(arg?: string | Date): void;
         element: JQuery;
     }
}
interface JQuery {
    datetimepicker(): JQuery;
    datetimepicker(methodName: string): any;
    datetimepicker(methodName: string, params: any): any;
    datetimepicker(options: DatetimepickerModule.DatepickerOptions): JQuery;

    off(events: "changeDate", selector?: string, handler?: (eventObject: DatetimepickerModule.DatepickerEventObject) => any): JQuery;
    off(events: "changeDate", handler: (eventObject: DatetimepickerModule.DatepickerEventObject) => any): JQuery;

    on(events: "changeDate", selector: string, data: any, handler?: (eventObject: DatetimepickerModule.DatepickerEventObject) => any): JQuery;
    on(events: "changeDate", selector: string, handler: (eventObject: DatetimepickerModule.DatepickerEventObject) => any): JQuery;
    on(events: 'changeDate', handler: (eventObject: DatetimepickerModule.DatepickerEventObject) => any): JQuery;
    data(key: 'datetimepicker'): DatetimepickerModule.Datetimepicker;
}
