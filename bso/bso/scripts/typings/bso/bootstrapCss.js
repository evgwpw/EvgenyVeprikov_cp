/**
 * классы css для bootstrap
 * имеем следующие замены
 * [=>$
 * ]=>$
 * .=>D
 * :=>DD
 * -=>_
 */
var bootstrapCss;
(function (bootstrapCss) {
    /**
     * active
     */
    bootstrapCss.active = "active"; 
    /**
     * active.left
     */
    bootstrapCss.activeDleft = "active.left";
    /**
     * active.right
     */
    bootstrapCss.activeDright = "active.right";
    /**
     * active:hover
     */
    bootstrapCss.activeDDhover = "active:hover";
    /**
     * affix
     */
    bootstrapCss.affix = "affix";
    /**
     * alert
     */
    bootstrapCss.alert = "alert";
    /**
     * alert-danger
     */
    bootstrapCss.alert_danger = "alert-danger";
    /**
     * alert-dismissable
     */
    bootstrapCss.alert_dismissable = "alert-dismissable";
    /**
     * alert-dismissible
     */
    bootstrapCss.alert_dismissible = "alert-dismissible";
    /**
     * alert-info
     */
    bootstrapCss.alert_info = "alert-info";
    /**
     * alert-link
     */
    bootstrapCss.alert_link = "alert-link";
    /**
     * alert-success
     */
    bootstrapCss.alert_success = "alert-success";
    /**
     * alert-warning
     */
    bootstrapCss.alert_warning = "alert-warning";
    /**
     * arrow
     */
    bootstrapCss.arrow = "arrow";
    /**
     * arrow:after
     */
    bootstrapCss.arrowDDafter = "arrow:after";
    /**
     * badge
     */
    bootstrapCss.badge = "badge";
    /**
     * badge:empty
     */
    bootstrapCss.badgeDDempty = "badge:empty";
    /**
     * badge:focus
     */
    bootstrapCss.badgeDDfocus = "badge:focus";
    /**
     * badge:hover
     */
    bootstrapCss.badgeDDhover = "badge:hover";
    /**
     * bg-danger
     */
    bootstrapCss.bg_danger = "bg-danger";
    /**
     * bg-danger:focus
     */
    bootstrapCss.bg_dangerDDfocus = "bg-danger:focus";
    /**
     * bg-danger:hover
     */
    bootstrapCss.bg_dangerDDhover = "bg-danger:hover";
    /**
     * bg-info
     */
    bootstrapCss.bg_info = "bg-info";
    /**
     * bg-info:focus
     */
    bootstrapCss.bg_infoDDfocus = "bg-info:focus";
    /**
     * bg-info:hover
     */
    bootstrapCss.bg_infoDDhover = "bg-info:hover";
    /**
     * bg-primary
     */
    bootstrapCss.bg_primary = "bg-primary";
    /**
     * bg-primary:focus
     */
    bootstrapCss.bg_primaryDDfocus = "bg-primary:focus";
    /**
     * bg-primary:hover
     */
    bootstrapCss.bg_primaryDDhover = "bg-primary:hover";
    /**
     * bg-success
     */
    bootstrapCss.bg_success = "bg-success";
    /**
     * bg-success:focus
     */
    bootstrapCss.bg_successDDfocus = "bg-success:focus";
    /**
     * bg-success:hover
     */
    bootstrapCss.bg_successDDhover = "bg-success:hover";
    /**
     * bg-warning
     */
    bootstrapCss.bg_warning = "bg-warning";
    /**
     * bg-warning:focus
     */
    bootstrapCss.bg_warningDDfocus = "bg-warning:focus";
    /**
     * bg-warning:hover
     */
    bootstrapCss.bg_warningDDhover = "bg-warning:hover";
    /**
     * blockquote-reverse
     */
    bootstrapCss.blockquote_reverse = "blockquote-reverse";
    /**
     * breadcrumb
     */
    bootstrapCss.breadcrumb = "breadcrumb";
    /**
     * btn
     */
    bootstrapCss.btn = "btn";
    /**
     * btn.active
     */
    bootstrapCss.btnDactive = "btn.active";
    /**
     * btn.active.focus
     */
    bootstrapCss.btnDactiveDfocus = "btn.active.focus";
    /**
     * btn.active:focus
     */
    bootstrapCss.btnDactiveDDfocus = "btn.active:focus";
    /**
     * btn.disabled
     */
    bootstrapCss.btnDdisabled = "btn.disabled";
    /**
     * btn.focus
     */
    bootstrapCss.btnDfocus = "btn.focus";
    /**
     * btn:active
     */
    bootstrapCss.btnDDactive = "btn:active";
    /**
     * btn:active.focus
     */
    bootstrapCss.btnDDactiveDfocus = "btn:active.focus";
    /**
     * btn:active:focus
     */
    bootstrapCss.btnDDactiveDDfocus = "btn:active:focus";
    /**
     * btn:first-child
     */
    bootstrapCss.btnDDfirst_child = "btn:first-child";
    /**
     * btn:first-child:not
     */
    bootstrapCss.btnDDfirst_childDDnot = "btn:first-child:not";
    /**
     * btn:focus
     */
    bootstrapCss.btnDDfocus = "btn:focus";
    /**
     * btn:hover
     */
    bootstrapCss.btnDDhover = "btn:hover";
    /**
     * btn:last-child
     */
    bootstrapCss.btnDDlast_child = "btn:last-child";
    /**
     * btn:last-child:not
     */
    bootstrapCss.btnDDlast_childDDnot = "btn:last-child:not";
    /**
     * btn:not
     */
    bootstrapCss.btnDDnot = "btn:not";
    /**
     * btn[disabled]
     */
    bootstrapCss.btn$disabled$ = "btn[disabled]";
    /**
     * btn-block
     */
    bootstrapCss.btn_block = "btn-block";
    /**
     * btn-danger
     */
    bootstrapCss.btn_danger = "btn-danger";
    /**
     * btn-danger.active
     */
    bootstrapCss.btn_dangerDactive = "btn-danger.active";
    /**
     * btn-danger.active.focus
     */
    bootstrapCss.btn_dangerDactiveDfocus = "btn-danger.active.focus";
    /**
     * btn-danger.active:focus
     */
    bootstrapCss.btn_dangerDactiveDDfocus = "btn-danger.active:focus";
    /**
     * btn-danger.active:hover
     */
    bootstrapCss.btn_dangerDactiveDDhover = "btn-danger.active:hover";
    /**
     * btn-danger.disabled.focus
     */
    bootstrapCss.btn_dangerDdisabledDfocus = "btn-danger.disabled.focus";
    /**
     * btn-danger.disabled:focus
     */
    bootstrapCss.btn_dangerDdisabledDDfocus = "btn-danger.disabled:focus";
    /**
     * btn-danger.disabled:hover
     */
    bootstrapCss.btn_dangerDdisabledDDhover = "btn-danger.disabled:hover";
    /**
     * btn-danger.focus
     */
    bootstrapCss.btn_dangerDfocus = "btn-danger.focus";
    /**
     * btn-danger:active
     */
    bootstrapCss.btn_dangerDDactive = "btn-danger:active";
    /**
     * btn-danger:active.focus
     */
    bootstrapCss.btn_dangerDDactiveDfocus = "btn-danger:active.focus";
    /**
     * btn-danger:active:focus
     */
    bootstrapCss.btn_dangerDDactiveDDfocus = "btn-danger:active:focus";
    /**
     * btn-danger:active:hover
     */
    bootstrapCss.btn_dangerDDactiveDDhover = "btn-danger:active:hover";
    /**
     * btn-danger:focus
     */
    bootstrapCss.btn_dangerDDfocus = "btn-danger:focus";
    /**
     * btn-danger:hover
     */
    bootstrapCss.btn_dangerDDhover = "btn-danger:hover";
    /**
     * btn-danger[disabled].focus
     */
    bootstrapCss.btn_danger$disabled$Dfocus = "btn-danger[disabled].focus";
    /**
     * btn-danger[disabled]:focus
     */
    bootstrapCss.btn_danger$disabled$DDfocus = "btn-danger[disabled]:focus";
    /**
     * btn-danger[disabled]:hover
     */
    bootstrapCss.btn_danger$disabled$DDhover = "btn-danger[disabled]:hover";
    /**
     * btn-default
     */
    bootstrapCss.btn_default = "btn-default";
    /**
     * btn-default.active
     */
    bootstrapCss.btn_defaultDactive = "btn-default.active";
    /**
     * btn-default.active.focus
     */
    bootstrapCss.btn_defaultDactiveDfocus = "btn-default.active.focus";
    /**
     * btn-default.active:focus
     */
    bootstrapCss.btn_defaultDactiveDDfocus = "btn-default.active:focus";
    /**
     * btn-default.active:hover
     */
    bootstrapCss.btn_defaultDactiveDDhover = "btn-default.active:hover";
    /**
     * btn-default.disabled.focus
     */
    bootstrapCss.btn_defaultDdisabledDfocus = "btn-default.disabled.focus";
    /**
     * btn-default.disabled:focus
     */
    bootstrapCss.btn_defaultDdisabledDDfocus = "btn-default.disabled:focus";
    /**
     * btn-default.disabled:hover
     */
    bootstrapCss.btn_defaultDdisabledDDhover = "btn-default.disabled:hover";
    /**
     * btn-default.focus
     */
    bootstrapCss.btn_defaultDfocus = "btn-default.focus";
    /**
     * btn-default:active
     */
    bootstrapCss.btn_defaultDDactive = "btn-default:active";
    /**
     * btn-default:active.focus
     */
    bootstrapCss.btn_defaultDDactiveDfocus = "btn-default:active.focus";
    /**
     * btn-default:active:focus
     */
    bootstrapCss.btn_defaultDDactiveDDfocus = "btn-default:active:focus";
    /**
     * btn-default:active:hover
     */
    bootstrapCss.btn_defaultDDactiveDDhover = "btn-default:active:hover";
    /**
     * btn-default:focus
     */
    bootstrapCss.btn_defaultDDfocus = "btn-default:focus";
    /**
     * btn-default:hover
     */
    bootstrapCss.btn_defaultDDhover = "btn-default:hover";
    /**
     * btn-default[disabled].focus
     */
    bootstrapCss.btn_default$disabled$Dfocus = "btn-default[disabled].focus";
    /**
     * btn-default[disabled]:focus
     */
    bootstrapCss.btn_default$disabled$DDfocus = "btn-default[disabled]:focus";
    /**
     * btn-default[disabled]:hover
     */
    bootstrapCss.btn_default$disabled$DDhover = "btn-default[disabled]:hover";
    /**
     * btn-group
     */
    bootstrapCss.btn_group = "btn-group";
    /**
     * btn-group.open
     */
    bootstrapCss.btn_groupDopen = "btn-group.open";
    /**
     * btn-group:after
     */
    bootstrapCss.btn_groupDDafter = "btn-group:after";
    /**
     * btn-group:before
     */
    bootstrapCss.btn_groupDDbefore = "btn-group:before";
    /**
     * btn-group:first-child:not
     */
    bootstrapCss.btn_groupDDfirst_childDDnot = "btn-group:first-child:not";
    /**
     * btn-group:last-child:not
     */
    bootstrapCss.btn_groupDDlast_childDDnot = "btn-group:last-child:not";
    /**
     * btn-group:not
     */
    bootstrapCss.btn_groupDDnot = "btn-group:not";
    /**
     * btn-group-justified
     */
    bootstrapCss.btn_group_justified = "btn-group-justified";
    /**
     * btn-group-lg
     */
    bootstrapCss.btn_group_lg = "btn-group-lg";
    /**
     * btn-group-sm
     */
    bootstrapCss.btn_group_sm = "btn-group-sm";
    /**
     * btn-group-vertical
     */
    bootstrapCss.btn_group_vertical = "btn-group-vertical";
    /**
     * btn-group-xs
     */
    bootstrapCss.btn_group_xs = "btn-group-xs";
    /**
     * btn-info
     */
    bootstrapCss.btn_info = "btn-info";
    /**
     * btn-info.active
     */
    bootstrapCss.btn_infoDactive = "btn-info.active";
    /**
     * btn-info.active.focus
     */
    bootstrapCss.btn_infoDactiveDfocus = "btn-info.active.focus";
    /**
     * btn-info.active:focus
     */
    bootstrapCss.btn_infoDactiveDDfocus = "btn-info.active:focus";
    /**
     * btn-info.active:hover
     */
    bootstrapCss.btn_infoDactiveDDhover = "btn-info.active:hover";
    /**
     * btn-info.disabled.focus
     */
    bootstrapCss.btn_infoDdisabledDfocus = "btn-info.disabled.focus";
    /**
     * btn-info.disabled:focus
     */
    bootstrapCss.btn_infoDdisabledDDfocus = "btn-info.disabled:focus";
    /**
     * btn-info.disabled:hover
     */
    bootstrapCss.btn_infoDdisabledDDhover = "btn-info.disabled:hover";
    /**
     * btn-info.focus
     */
    bootstrapCss.btn_infoDfocus = "btn-info.focus";
    /**
     * btn-info:active
     */
    bootstrapCss.btn_infoDDactive = "btn-info:active";
    /**
     * btn-info:active.focus
     */
    bootstrapCss.btn_infoDDactiveDfocus = "btn-info:active.focus";
    /**
     * btn-info:active:focus
     */
    bootstrapCss.btn_infoDDactiveDDfocus = "btn-info:active:focus";
    /**
     * btn-info:active:hover
     */
    bootstrapCss.btn_infoDDactiveDDhover = "btn-info:active:hover";
    /**
     * btn-info:focus
     */
    bootstrapCss.btn_infoDDfocus = "btn-info:focus";
    /**
     * btn-info:hover
     */
    bootstrapCss.btn_infoDDhover = "btn-info:hover";
    /**
     * btn-info[disabled].focus
     */
    bootstrapCss.btn_info$disabled$Dfocus = "btn-info[disabled].focus";
    /**
     * btn-info[disabled]:focus
     */
    bootstrapCss.btn_info$disabled$DDfocus = "btn-info[disabled]:focus";
    /**
     * btn-info[disabled]:hover
     */
    bootstrapCss.btn_info$disabled$DDhover = "btn-info[disabled]:hover";
    /**
     * btn-lg
     */
    bootstrapCss.btn_lg = "btn-lg";
    /**
     * btn-link
     */
    bootstrapCss.btn_link = "btn-link";
    /**
     * btn-link.active
     */
    bootstrapCss.btn_linkDactive = "btn-link.active";
    /**
     * btn-link:active
     */
    bootstrapCss.btn_linkDDactive = "btn-link:active";
    /**
     * btn-link:focus
     */
    bootstrapCss.btn_linkDDfocus = "btn-link:focus";
    /**
     * btn-link:hover
     */
    bootstrapCss.btn_linkDDhover = "btn-link:hover";
    /**
     * btn-link[disabled]
     */
    bootstrapCss.btn_link$disabled$ = "btn-link[disabled]";
    /**
     * btn-link[disabled]:focus
     */
    bootstrapCss.btn_link$disabled$DDfocus = "btn-link[disabled]:focus";
    /**
     * btn-link[disabled]:hover
     */
    bootstrapCss.btn_link$disabled$DDhover = "btn-link[disabled]:hover";
    /**
     * btn-primary
     */
    bootstrapCss.btn_primary = "btn-primary";
    /**
     * btn-primary.active
     */
    bootstrapCss.btn_primaryDactive = "btn-primary.active";
    /**
     * btn-primary.active.focus
     */
    bootstrapCss.btn_primaryDactiveDfocus = "btn-primary.active.focus";
    /**
     * btn-primary.active:focus
     */
    bootstrapCss.btn_primaryDactiveDDfocus = "btn-primary.active:focus";
    /**
     * btn-primary.active:hover
     */
    bootstrapCss.btn_primaryDactiveDDhover = "btn-primary.active:hover";
    /**
     * btn-primary.disabled.focus
     */
    bootstrapCss.btn_primaryDdisabledDfocus = "btn-primary.disabled.focus";
    /**
     * btn-primary.disabled:focus
     */
    bootstrapCss.btn_primaryDdisabledDDfocus = "btn-primary.disabled:focus";
    /**
     * btn-primary.disabled:hover
     */
    bootstrapCss.btn_primaryDdisabledDDhover = "btn-primary.disabled:hover";
    /**
     * btn-primary.focus
     */
    bootstrapCss.btn_primaryDfocus = "btn-primary.focus";
    /**
     * btn-primary:active
     */
    bootstrapCss.btn_primaryDDactive = "btn-primary:active";
    /**
     * btn-primary:active.focus
     */
    bootstrapCss.btn_primaryDDactiveDfocus = "btn-primary:active.focus";
    /**
     * btn-primary:active:focus
     */
    bootstrapCss.btn_primaryDDactiveDDfocus = "btn-primary:active:focus";
    /**
     * btn-primary:active:hover
     */
    bootstrapCss.btn_primaryDDactiveDDhover = "btn-primary:active:hover";
    /**
     * btn-primary:focus
     */
    bootstrapCss.btn_primaryDDfocus = "btn-primary:focus";
    /**
     * btn-primary:hover
     */
    bootstrapCss.btn_primaryDDhover = "btn-primary:hover";
    /**
     * btn-primary[disabled].focus
     */
    bootstrapCss.btn_primary$disabled$Dfocus = "btn-primary[disabled].focus";
    /**
     * btn-primary[disabled]:focus
     */
    bootstrapCss.btn_primary$disabled$DDfocus = "btn-primary[disabled]:focus";
    /**
     * btn-primary[disabled]:hover
     */
    bootstrapCss.btn_primary$disabled$DDhover = "btn-primary[disabled]:hover";
    /**
     * btn-sm
     */
    bootstrapCss.btn_sm = "btn-sm";
    /**
     * btn-success
     */
    bootstrapCss.btn_success = "btn-success";
    /**
     * btn-success.active
     */
    bootstrapCss.btn_successDactive = "btn-success.active";
    /**
     * btn-success.active.focus
     */
    bootstrapCss.btn_successDactiveDfocus = "btn-success.active.focus";
    /**
     * btn-success.active:focus
     */
    bootstrapCss.btn_successDactiveDDfocus = "btn-success.active:focus";
    /**
     * btn-success.active:hover
     */
    bootstrapCss.btn_successDactiveDDhover = "btn-success.active:hover";
    /**
     * btn-success.disabled.focus
     */
    bootstrapCss.btn_successDdisabledDfocus = "btn-success.disabled.focus";
    /**
     * btn-success.disabled:focus
     */
    bootstrapCss.btn_successDdisabledDDfocus = "btn-success.disabled:focus";
    /**
     * btn-success.disabled:hover
     */
    bootstrapCss.btn_successDdisabledDDhover = "btn-success.disabled:hover";
    /**
     * btn-success.focus
     */
    bootstrapCss.btn_successDfocus = "btn-success.focus";
    /**
     * btn-success:active
     */
    bootstrapCss.btn_successDDactive = "btn-success:active";
    /**
     * btn-success:active.focus
     */
    bootstrapCss.btn_successDDactiveDfocus = "btn-success:active.focus";
    /**
     * btn-success:active:focus
     */
    bootstrapCss.btn_successDDactiveDDfocus = "btn-success:active:focus";
    /**
     * btn-success:active:hover
     */
    bootstrapCss.btn_successDDactiveDDhover = "btn-success:active:hover";
    /**
     * btn-success:focus
     */
    bootstrapCss.btn_successDDfocus = "btn-success:focus";
    /**
     * btn-success:hover
     */
    bootstrapCss.btn_successDDhover = "btn-success:hover";
    /**
     * btn-success[disabled].focus
     */
    bootstrapCss.btn_success$disabled$Dfocus = "btn-success[disabled].focus";
    /**
     * btn-success[disabled]:focus
     */
    bootstrapCss.btn_success$disabled$DDfocus = "btn-success[disabled]:focus";
    /**
     * btn-success[disabled]:hover
     */
    bootstrapCss.btn_success$disabled$DDhover = "btn-success[disabled]:hover";
    /**
     * btn-toolbar
     */
    bootstrapCss.btn_toolbar = "btn-toolbar";
    /**
     * btn-toolbar:after
     */
    bootstrapCss.btn_toolbarDDafter = "btn-toolbar:after";
    /**
     * btn-toolbar:before
     */
    bootstrapCss.btn_toolbarDDbefore = "btn-toolbar:before";
    /**
     * btn-warning
     */
    bootstrapCss.btn_warning = "btn-warning";
    /**
     * btn-warning.active
     */
    bootstrapCss.btn_warningDactive = "btn-warning.active";
    /**
     * btn-warning.active.focus
     */
    bootstrapCss.btn_warningDactiveDfocus = "btn-warning.active.focus";
    /**
     * btn-warning.active:focus
     */
    bootstrapCss.btn_warningDactiveDDfocus = "btn-warning.active:focus";
    /**
     * btn-warning.active:hover
     */
    bootstrapCss.btn_warningDactiveDDhover = "btn-warning.active:hover";
    /**
     * btn-warning.disabled.focus
     */
    bootstrapCss.btn_warningDdisabledDfocus = "btn-warning.disabled.focus";
    /**
     * btn-warning.disabled:focus
     */
    bootstrapCss.btn_warningDdisabledDDfocus = "btn-warning.disabled:focus";
    /**
     * btn-warning.disabled:hover
     */
    bootstrapCss.btn_warningDdisabledDDhover = "btn-warning.disabled:hover";
    /**
     * btn-warning.focus
     */
    bootstrapCss.btn_warningDfocus = "btn-warning.focus";
    /**
     * btn-warning:active
     */
    bootstrapCss.btn_warningDDactive = "btn-warning:active";
    /**
     * btn-warning:active.focus
     */
    bootstrapCss.btn_warningDDactiveDfocus = "btn-warning:active.focus";
    /**
     * btn-warning:active:focus
     */
    bootstrapCss.btn_warningDDactiveDDfocus = "btn-warning:active:focus";
    /**
     * btn-warning:active:hover
     */
    bootstrapCss.btn_warningDDactiveDDhover = "btn-warning:active:hover";
    /**
     * btn-warning:focus
     */
    bootstrapCss.btn_warningDDfocus = "btn-warning:focus";
    /**
     * btn-warning:hover
     */
    bootstrapCss.btn_warningDDhover = "btn-warning:hover";
    /**
     * btn-warning[disabled].focus
     */
    bootstrapCss.btn_warning$disabled$Dfocus = "btn-warning[disabled].focus";
    /**
     * btn-warning[disabled]:focus
     */
    bootstrapCss.btn_warning$disabled$DDfocus = "btn-warning[disabled]:focus";
    /**
     * btn-warning[disabled]:hover
     */
    bootstrapCss.btn_warning$disabled$DDhover = "btn-warning[disabled]:hover";
    /**
     * btn-xs
     */
    bootstrapCss.btn_xs = "btn-xs";
    /**
     * caption
     */
    bootstrapCss.caption = "caption";
    /**
     * caret
     */
    bootstrapCss.caret = "caret";
    /**
     * carousel
     */
    bootstrapCss.carousel = "carousel";
    /**
     * carousel-caption
     */
    bootstrapCss.carousel_caption = "carousel-caption";
    /**
     * carousel-control
     */
    bootstrapCss.carousel_control = "carousel-control";
    /**
     * carousel-control.left
     */
    bootstrapCss.carousel_controlDleft = "carousel-control.left";
    /**
     * carousel-control.right
     */
    bootstrapCss.carousel_controlDright = "carousel-control.right";
    /**
     * carousel-control:focus
     */
    bootstrapCss.carousel_controlDDfocus = "carousel-control:focus";
    /**
     * carousel-control:hover
     */
    bootstrapCss.carousel_controlDDhover = "carousel-control:hover";
    /**
     * carousel-indicators
     */
    bootstrapCss.carousel_indicators = "carousel-indicators";
    /**
     * carousel-inner
     */
    bootstrapCss.carousel_inner = "carousel-inner";
    /**
     * center-block
     */
    bootstrapCss.center_block = "center-block";
    /**
     * checkbox
     */
    bootstrapCss.checkbox = "checkbox";
    /**
     * checkbox.disabled
     */
    bootstrapCss.checkboxDdisabled = "checkbox.disabled";
    /**
     * checkbox-inline
     */
    bootstrapCss.checkbox_inline = "checkbox-inline";
    /**
     * checkbox-inline.disabled
     */
    bootstrapCss.checkbox_inlineDdisabled = "checkbox-inline.disabled";
    /**
     * clearfix:after
     */
    bootstrapCss.clearfixDDafter = "clearfix:after";
    /**
     * clearfix:before
     */
    bootstrapCss.clearfixDDbefore = "clearfix:before";
    /**
     * close
     */
    bootstrapCss.close = "close";
    /**
     * close:focus
     */
    bootstrapCss.closeDDfocus = "close:focus";
    /**
     * close:hover
     */
    bootstrapCss.closeDDhover = "close:hover";
    /**
     * collapse
     */
    bootstrapCss.collapse = "collapse";
    /**
     * collapse.in
     */
    bootstrapCss.collapseDin = "collapse.in";
    /**
     * collapsing
     */
    bootstrapCss.collapsing = "collapsing";
    /**
     * col-lg-1
     */
    bootstrapCss.col_lg_1 = "col-lg-1";
    /**
     * col-lg-10
     */
    bootstrapCss.col_lg_10 = "col-lg-10";
    /**
     * col-lg-11
     */
    bootstrapCss.col_lg_11 = "col-lg-11";
    /**
     * col-lg-12
     */
    bootstrapCss.col_lg_12 = "col-lg-12";
    /**
     * col-lg-2
     */
    bootstrapCss.col_lg_2 = "col-lg-2";
    /**
     * col-lg-3
     */
    bootstrapCss.col_lg_3 = "col-lg-3";
    /**
     * col-lg-4
     */
    bootstrapCss.col_lg_4 = "col-lg-4";
    /**
     * col-lg-5
     */
    bootstrapCss.col_lg_5 = "col-lg-5";
    /**
     * col-lg-6
     */
    bootstrapCss.col_lg_6 = "col-lg-6";
    /**
     * col-lg-7
     */
    bootstrapCss.col_lg_7 = "col-lg-7";
    /**
     * col-lg-8
     */
    bootstrapCss.col_lg_8 = "col-lg-8";
    /**
     * col-lg-9
     */
    bootstrapCss.col_lg_9 = "col-lg-9";
    /**
     * col-lg-offset-0
     */
    bootstrapCss.col_lg_offset_0 = "col-lg-offset-0";
    /**
     * col-lg-offset-1
     */
    bootstrapCss.col_lg_offset_1 = "col-lg-offset-1";
    /**
     * col-lg-offset-10
     */
    bootstrapCss.col_lg_offset_10 = "col-lg-offset-10";
    /**
     * col-lg-offset-11
     */
    bootstrapCss.col_lg_offset_11 = "col-lg-offset-11";
    /**
     * col-lg-offset-12
     */
    bootstrapCss.col_lg_offset_12 = "col-lg-offset-12";
    /**
     * col-lg-offset-2
     */
    bootstrapCss.col_lg_offset_2 = "col-lg-offset-2";
    /**
     * col-lg-offset-3
     */
    bootstrapCss.col_lg_offset_3 = "col-lg-offset-3";
    /**
     * col-lg-offset-4
     */
    bootstrapCss.col_lg_offset_4 = "col-lg-offset-4";
    /**
     * col-lg-offset-5
     */
    bootstrapCss.col_lg_offset_5 = "col-lg-offset-5";
    /**
     * col-lg-offset-6
     */
    bootstrapCss.col_lg_offset_6 = "col-lg-offset-6";
    /**
     * col-lg-offset-7
     */
    bootstrapCss.col_lg_offset_7 = "col-lg-offset-7";
    /**
     * col-lg-offset-8
     */
    bootstrapCss.col_lg_offset_8 = "col-lg-offset-8";
    /**
     * col-lg-offset-9
     */
    bootstrapCss.col_lg_offset_9 = "col-lg-offset-9";
    /**
     * col-lg-pull-0
     */
    bootstrapCss.col_lg_pull_0 = "col-lg-pull-0";
    /**
     * col-lg-pull-1
     */
    bootstrapCss.col_lg_pull_1 = "col-lg-pull-1";
    /**
     * col-lg-pull-10
     */
    bootstrapCss.col_lg_pull_10 = "col-lg-pull-10";
    /**
     * col-lg-pull-11
     */
    bootstrapCss.col_lg_pull_11 = "col-lg-pull-11";
    /**
     * col-lg-pull-12
     */
    bootstrapCss.col_lg_pull_12 = "col-lg-pull-12";
    /**
     * col-lg-pull-2
     */
    bootstrapCss.col_lg_pull_2 = "col-lg-pull-2";
    /**
     * col-lg-pull-3
     */
    bootstrapCss.col_lg_pull_3 = "col-lg-pull-3";
    /**
     * col-lg-pull-4
     */
    bootstrapCss.col_lg_pull_4 = "col-lg-pull-4";
    /**
     * col-lg-pull-5
     */
    bootstrapCss.col_lg_pull_5 = "col-lg-pull-5";
    /**
     * col-lg-pull-6
     */
    bootstrapCss.col_lg_pull_6 = "col-lg-pull-6";
    /**
     * col-lg-pull-7
     */
    bootstrapCss.col_lg_pull_7 = "col-lg-pull-7";
    /**
     * col-lg-pull-8
     */
    bootstrapCss.col_lg_pull_8 = "col-lg-pull-8";
    /**
     * col-lg-pull-9
     */
    bootstrapCss.col_lg_pull_9 = "col-lg-pull-9";
    /**
     * col-lg-push-0
     */
    bootstrapCss.col_lg_push_0 = "col-lg-push-0";
    /**
     * col-lg-push-1
     */
    bootstrapCss.col_lg_push_1 = "col-lg-push-1";
    /**
     * col-lg-push-10
     */
    bootstrapCss.col_lg_push_10 = "col-lg-push-10";
    /**
     * col-lg-push-11
     */
    bootstrapCss.col_lg_push_11 = "col-lg-push-11";
    /**
     * col-lg-push-12
     */
    bootstrapCss.col_lg_push_12 = "col-lg-push-12";
    /**
     * col-lg-push-2
     */
    bootstrapCss.col_lg_push_2 = "col-lg-push-2";
    /**
     * col-lg-push-3
     */
    bootstrapCss.col_lg_push_3 = "col-lg-push-3";
    /**
     * col-lg-push-4
     */
    bootstrapCss.col_lg_push_4 = "col-lg-push-4";
    /**
     * col-lg-push-5
     */
    bootstrapCss.col_lg_push_5 = "col-lg-push-5";
    /**
     * col-lg-push-6
     */
    bootstrapCss.col_lg_push_6 = "col-lg-push-6";
    /**
     * col-lg-push-7
     */
    bootstrapCss.col_lg_push_7 = "col-lg-push-7";
    /**
     * col-lg-push-8
     */
    bootstrapCss.col_lg_push_8 = "col-lg-push-8";
    /**
     * col-lg-push-9
     */
    bootstrapCss.col_lg_push_9 = "col-lg-push-9";
    /**
     * col-md-1
     */
    bootstrapCss.col_md_1 = "col-md-1";
    /**
     * col-md-10
     */
    bootstrapCss.col_md_10 = "col-md-10";
    /**
     * col-md-11
     */
    bootstrapCss.col_md_11 = "col-md-11";
    /**
     * col-md-12
     */
    bootstrapCss.col_md_12 = "col-md-12";
    /**
     * col-md-2
     */
    bootstrapCss.col_md_2 = "col-md-2";
    /**
     * col-md-3
     */
    bootstrapCss.col_md_3 = "col-md-3";
    /**
     * col-md-4
     */
    bootstrapCss.col_md_4 = "col-md-4";
    /**
     * col-md-5
     */
    bootstrapCss.col_md_5 = "col-md-5";
    /**
     * col-md-6
     */
    bootstrapCss.col_md_6 = "col-md-6";
    /**
     * col-md-7
     */
    bootstrapCss.col_md_7 = "col-md-7";
    /**
     * col-md-8
     */
    bootstrapCss.col_md_8 = "col-md-8";
    /**
     * col-md-9
     */
    bootstrapCss.col_md_9 = "col-md-9";
    /**
     * col-md-offset-0
     */
    bootstrapCss.col_md_offset_0 = "col-md-offset-0";
    /**
     * col-md-offset-1
     */
    bootstrapCss.col_md_offset_1 = "col-md-offset-1";
    /**
     * col-md-offset-10
     */
    bootstrapCss.col_md_offset_10 = "col-md-offset-10";
    /**
     * col-md-offset-11
     */
    bootstrapCss.col_md_offset_11 = "col-md-offset-11";
    /**
     * col-md-offset-12
     */
    bootstrapCss.col_md_offset_12 = "col-md-offset-12";
    /**
     * col-md-offset-2
     */
    bootstrapCss.col_md_offset_2 = "col-md-offset-2";
    /**
     * col-md-offset-3
     */
    bootstrapCss.col_md_offset_3 = "col-md-offset-3";
    /**
     * col-md-offset-4
     */
    bootstrapCss.col_md_offset_4 = "col-md-offset-4";
    /**
     * col-md-offset-5
     */
    bootstrapCss.col_md_offset_5 = "col-md-offset-5";
    /**
     * col-md-offset-6
     */
    bootstrapCss.col_md_offset_6 = "col-md-offset-6";
    /**
     * col-md-offset-7
     */
    bootstrapCss.col_md_offset_7 = "col-md-offset-7";
    /**
     * col-md-offset-8
     */
    bootstrapCss.col_md_offset_8 = "col-md-offset-8";
    /**
     * col-md-offset-9
     */
    bootstrapCss.col_md_offset_9 = "col-md-offset-9";
    /**
     * col-md-pull-0
     */
    bootstrapCss.col_md_pull_0 = "col-md-pull-0";
    /**
     * col-md-pull-1
     */
    bootstrapCss.col_md_pull_1 = "col-md-pull-1";
    /**
     * col-md-pull-10
     */
    bootstrapCss.col_md_pull_10 = "col-md-pull-10";
    /**
     * col-md-pull-11
     */
    bootstrapCss.col_md_pull_11 = "col-md-pull-11";
    /**
     * col-md-pull-12
     */
    bootstrapCss.col_md_pull_12 = "col-md-pull-12";
    /**
     * col-md-pull-2
     */
    bootstrapCss.col_md_pull_2 = "col-md-pull-2";
    /**
     * col-md-pull-3
     */
    bootstrapCss.col_md_pull_3 = "col-md-pull-3";
    /**
     * col-md-pull-4
     */
    bootstrapCss.col_md_pull_4 = "col-md-pull-4";
    /**
     * col-md-pull-5
     */
    bootstrapCss.col_md_pull_5 = "col-md-pull-5";
    /**
     * col-md-pull-6
     */
    bootstrapCss.col_md_pull_6 = "col-md-pull-6";
    /**
     * col-md-pull-7
     */
    bootstrapCss.col_md_pull_7 = "col-md-pull-7";
    /**
     * col-md-pull-8
     */
    bootstrapCss.col_md_pull_8 = "col-md-pull-8";
    /**
     * col-md-pull-9
     */
    bootstrapCss.col_md_pull_9 = "col-md-pull-9";
    /**
     * col-md-push-0
     */
    bootstrapCss.col_md_push_0 = "col-md-push-0";
    /**
     * col-md-push-1
     */
    bootstrapCss.col_md_push_1 = "col-md-push-1";
    /**
     * col-md-push-10
     */
    bootstrapCss.col_md_push_10 = "col-md-push-10";
    /**
     * col-md-push-11
     */
    bootstrapCss.col_md_push_11 = "col-md-push-11";
    /**
     * col-md-push-12
     */
    bootstrapCss.col_md_push_12 = "col-md-push-12";
    /**
     * col-md-push-2
     */
    bootstrapCss.col_md_push_2 = "col-md-push-2";
    /**
     * col-md-push-3
     */
    bootstrapCss.col_md_push_3 = "col-md-push-3";
    /**
     * col-md-push-4
     */
    bootstrapCss.col_md_push_4 = "col-md-push-4";
    /**
     * col-md-push-5
     */
    bootstrapCss.col_md_push_5 = "col-md-push-5";
    /**
     * col-md-push-6
     */
    bootstrapCss.col_md_push_6 = "col-md-push-6";
    /**
     * col-md-push-7
     */
    bootstrapCss.col_md_push_7 = "col-md-push-7";
    /**
     * col-md-push-8
     */
    bootstrapCss.col_md_push_8 = "col-md-push-8";
    /**
     * col-md-push-9
     */
    bootstrapCss.col_md_push_9 = "col-md-push-9";
    /**
     * col-sm-1
     */
    bootstrapCss.col_sm_1 = "col-sm-1";
    /**
     * col-sm-10
     */
    bootstrapCss.col_sm_10 = "col-sm-10";
    /**
     * col-sm-11
     */
    bootstrapCss.col_sm_11 = "col-sm-11";
    /**
     * col-sm-12
     */
    bootstrapCss.col_sm_12 = "col-sm-12";
    /**
     * col-sm-2
     */
    bootstrapCss.col_sm_2 = "col-sm-2";
    /**
     * col-sm-3
     */
    bootstrapCss.col_sm_3 = "col-sm-3";
    /**
     * col-sm-4
     */
    bootstrapCss.col_sm_4 = "col-sm-4";
    /**
     * col-sm-5
     */
    bootstrapCss.col_sm_5 = "col-sm-5";
    /**
     * col-sm-6
     */
    bootstrapCss.col_sm_6 = "col-sm-6";
    /**
     * col-sm-7
     */
    bootstrapCss.col_sm_7 = "col-sm-7";
    /**
     * col-sm-8
     */
    bootstrapCss.col_sm_8 = "col-sm-8";
    /**
     * col-sm-9
     */
    bootstrapCss.col_sm_9 = "col-sm-9";
    /**
     * col-sm-offset-0
     */
    bootstrapCss.col_sm_offset_0 = "col-sm-offset-0";
    /**
     * col-sm-offset-1
     */
    bootstrapCss.col_sm_offset_1 = "col-sm-offset-1";
    /**
     * col-sm-offset-10
     */
    bootstrapCss.col_sm_offset_10 = "col-sm-offset-10";
    /**
     * col-sm-offset-11
     */
    bootstrapCss.col_sm_offset_11 = "col-sm-offset-11";
    /**
     * col-sm-offset-12
     */
    bootstrapCss.col_sm_offset_12 = "col-sm-offset-12";
    /**
     * col-sm-offset-2
     */
    bootstrapCss.col_sm_offset_2 = "col-sm-offset-2";
    /**
     * col-sm-offset-3
     */
    bootstrapCss.col_sm_offset_3 = "col-sm-offset-3";
    /**
     * col-sm-offset-4
     */
    bootstrapCss.col_sm_offset_4 = "col-sm-offset-4";
    /**
     * col-sm-offset-5
     */
    bootstrapCss.col_sm_offset_5 = "col-sm-offset-5";
    /**
     * col-sm-offset-6
     */
    bootstrapCss.col_sm_offset_6 = "col-sm-offset-6";
    /**
     * col-sm-offset-7
     */
    bootstrapCss.col_sm_offset_7 = "col-sm-offset-7";
    /**
     * col-sm-offset-8
     */
    bootstrapCss.col_sm_offset_8 = "col-sm-offset-8";
    /**
     * col-sm-offset-9
     */
    bootstrapCss.col_sm_offset_9 = "col-sm-offset-9";
    /**
     * col-sm-pull-0
     */
    bootstrapCss.col_sm_pull_0 = "col-sm-pull-0";
    /**
     * col-sm-pull-1
     */
    bootstrapCss.col_sm_pull_1 = "col-sm-pull-1";
    /**
     * col-sm-pull-10
     */
    bootstrapCss.col_sm_pull_10 = "col-sm-pull-10";
    /**
     * col-sm-pull-11
     */
    bootstrapCss.col_sm_pull_11 = "col-sm-pull-11";
    /**
     * col-sm-pull-12
     */
    bootstrapCss.col_sm_pull_12 = "col-sm-pull-12";
    /**
     * col-sm-pull-2
     */
    bootstrapCss.col_sm_pull_2 = "col-sm-pull-2";
    /**
     * col-sm-pull-3
     */
    bootstrapCss.col_sm_pull_3 = "col-sm-pull-3";
    /**
     * col-sm-pull-4
     */
    bootstrapCss.col_sm_pull_4 = "col-sm-pull-4";
    /**
     * col-sm-pull-5
     */
    bootstrapCss.col_sm_pull_5 = "col-sm-pull-5";
    /**
     * col-sm-pull-6
     */
    bootstrapCss.col_sm_pull_6 = "col-sm-pull-6";
    /**
     * col-sm-pull-7
     */
    bootstrapCss.col_sm_pull_7 = "col-sm-pull-7";
    /**
     * col-sm-pull-8
     */
    bootstrapCss.col_sm_pull_8 = "col-sm-pull-8";
    /**
     * col-sm-pull-9
     */
    bootstrapCss.col_sm_pull_9 = "col-sm-pull-9";
    /**
     * col-sm-push-0
     */
    bootstrapCss.col_sm_push_0 = "col-sm-push-0";
    /**
     * col-sm-push-1
     */
    bootstrapCss.col_sm_push_1 = "col-sm-push-1";
    /**
     * col-sm-push-10
     */
    bootstrapCss.col_sm_push_10 = "col-sm-push-10";
    /**
     * col-sm-push-11
     */
    bootstrapCss.col_sm_push_11 = "col-sm-push-11";
    /**
     * col-sm-push-12
     */
    bootstrapCss.col_sm_push_12 = "col-sm-push-12";
    /**
     * col-sm-push-2
     */
    bootstrapCss.col_sm_push_2 = "col-sm-push-2";
    /**
     * col-sm-push-3
     */
    bootstrapCss.col_sm_push_3 = "col-sm-push-3";
    /**
     * col-sm-push-4
     */
    bootstrapCss.col_sm_push_4 = "col-sm-push-4";
    /**
     * col-sm-push-5
     */
    bootstrapCss.col_sm_push_5 = "col-sm-push-5";
    /**
     * col-sm-push-6
     */
    bootstrapCss.col_sm_push_6 = "col-sm-push-6";
    /**
     * col-sm-push-7
     */
    bootstrapCss.col_sm_push_7 = "col-sm-push-7";
    /**
     * col-sm-push-8
     */
    bootstrapCss.col_sm_push_8 = "col-sm-push-8";
    /**
     * col-sm-push-9
     */
    bootstrapCss.col_sm_push_9 = "col-sm-push-9";
    /**
     * col-xs-1
     */
    bootstrapCss.col_xs_1 = "col-xs-1";
    /**
     * col-xs-10
     */
    bootstrapCss.col_xs_10 = "col-xs-10";
    /**
     * col-xs-11
     */
    bootstrapCss.col_xs_11 = "col-xs-11";
    /**
     * col-xs-12
     */
    bootstrapCss.col_xs_12 = "col-xs-12";
    /**
     * col-xs-2
     */
    bootstrapCss.col_xs_2 = "col-xs-2";
    /**
     * col-xs-3
     */
    bootstrapCss.col_xs_3 = "col-xs-3";
    /**
     * col-xs-4
     */
    bootstrapCss.col_xs_4 = "col-xs-4";
    /**
     * col-xs-5
     */
    bootstrapCss.col_xs_5 = "col-xs-5";
    /**
     * col-xs-6
     */
    bootstrapCss.col_xs_6 = "col-xs-6";
    /**
     * col-xs-7
     */
    bootstrapCss.col_xs_7 = "col-xs-7";
    /**
     * col-xs-8
     */
    bootstrapCss.col_xs_8 = "col-xs-8";
    /**
     * col-xs-9
     */
    bootstrapCss.col_xs_9 = "col-xs-9";
    /**
     * col-xs-offset-0
     */
    bootstrapCss.col_xs_offset_0 = "col-xs-offset-0";
    /**
     * col-xs-offset-1
     */
    bootstrapCss.col_xs_offset_1 = "col-xs-offset-1";
    /**
     * col-xs-offset-10
     */
    bootstrapCss.col_xs_offset_10 = "col-xs-offset-10";
    /**
     * col-xs-offset-11
     */
    bootstrapCss.col_xs_offset_11 = "col-xs-offset-11";
    /**
     * col-xs-offset-12
     */
    bootstrapCss.col_xs_offset_12 = "col-xs-offset-12";
    /**
     * col-xs-offset-2
     */
    bootstrapCss.col_xs_offset_2 = "col-xs-offset-2";
    /**
     * col-xs-offset-3
     */
    bootstrapCss.col_xs_offset_3 = "col-xs-offset-3";
    /**
     * col-xs-offset-4
     */
    bootstrapCss.col_xs_offset_4 = "col-xs-offset-4";
    /**
     * col-xs-offset-5
     */
    bootstrapCss.col_xs_offset_5 = "col-xs-offset-5";
    /**
     * col-xs-offset-6
     */
    bootstrapCss.col_xs_offset_6 = "col-xs-offset-6";
    /**
     * col-xs-offset-7
     */
    bootstrapCss.col_xs_offset_7 = "col-xs-offset-7";
    /**
     * col-xs-offset-8
     */
    bootstrapCss.col_xs_offset_8 = "col-xs-offset-8";
    /**
     * col-xs-offset-9
     */
    bootstrapCss.col_xs_offset_9 = "col-xs-offset-9";
    /**
     * col-xs-pull-0
     */
    bootstrapCss.col_xs_pull_0 = "col-xs-pull-0";
    /**
     * col-xs-pull-1
     */
    bootstrapCss.col_xs_pull_1 = "col-xs-pull-1";
    /**
     * col-xs-pull-10
     */
    bootstrapCss.col_xs_pull_10 = "col-xs-pull-10";
    /**
     * col-xs-pull-11
     */
    bootstrapCss.col_xs_pull_11 = "col-xs-pull-11";
    /**
     * col-xs-pull-12
     */
    bootstrapCss.col_xs_pull_12 = "col-xs-pull-12";
    /**
     * col-xs-pull-2
     */
    bootstrapCss.col_xs_pull_2 = "col-xs-pull-2";
    /**
     * col-xs-pull-3
     */
    bootstrapCss.col_xs_pull_3 = "col-xs-pull-3";
    /**
     * col-xs-pull-4
     */
    bootstrapCss.col_xs_pull_4 = "col-xs-pull-4";
    /**
     * col-xs-pull-5
     */
    bootstrapCss.col_xs_pull_5 = "col-xs-pull-5";
    /**
     * col-xs-pull-6
     */
    bootstrapCss.col_xs_pull_6 = "col-xs-pull-6";
    /**
     * col-xs-pull-7
     */
    bootstrapCss.col_xs_pull_7 = "col-xs-pull-7";
    /**
     * col-xs-pull-8
     */
    bootstrapCss.col_xs_pull_8 = "col-xs-pull-8";
    /**
     * col-xs-pull-9
     */
    bootstrapCss.col_xs_pull_9 = "col-xs-pull-9";
    /**
     * col-xs-push-0
     */
    bootstrapCss.col_xs_push_0 = "col-xs-push-0";
    /**
     * col-xs-push-1
     */
    bootstrapCss.col_xs_push_1 = "col-xs-push-1";
    /**
     * col-xs-push-10
     */
    bootstrapCss.col_xs_push_10 = "col-xs-push-10";
    /**
     * col-xs-push-11
     */
    bootstrapCss.col_xs_push_11 = "col-xs-push-11";
    /**
     * col-xs-push-12
     */
    bootstrapCss.col_xs_push_12 = "col-xs-push-12";
    /**
     * col-xs-push-2
     */
    bootstrapCss.col_xs_push_2 = "col-xs-push-2";
    /**
     * col-xs-push-3
     */
    bootstrapCss.col_xs_push_3 = "col-xs-push-3";
    /**
     * col-xs-push-4
     */
    bootstrapCss.col_xs_push_4 = "col-xs-push-4";
    /**
     * col-xs-push-5
     */
    bootstrapCss.col_xs_push_5 = "col-xs-push-5";
    /**
     * col-xs-push-6
     */
    bootstrapCss.col_xs_push_6 = "col-xs-push-6";
    /**
     * col-xs-push-7
     */
    bootstrapCss.col_xs_push_7 = "col-xs-push-7";
    /**
     * col-xs-push-8
     */
    bootstrapCss.col_xs_push_8 = "col-xs-push-8";
    /**
     * col-xs-push-9
     */
    bootstrapCss.col_xs_push_9 = "col-xs-push-9";
    /**
     * com
     */
    bootstrapCss.com = "com";
    /**
     * container
     */
    bootstrapCss.container = "container";
    /**
     * container:after
     */
    bootstrapCss.containerDDafter = "container:after";
    /**
     * container:before
     */
    bootstrapCss.containerDDbefore = "container:before";
    /**
     * container-fluid
     */
    bootstrapCss.container_fluid = "container-fluid";
    /**
     * container-fluid:after
     */
    bootstrapCss.container_fluidDDafter = "container-fluid:after";
    /**
     * container-fluid:before
     */
    bootstrapCss.container_fluidDDbefore = "container-fluid:before";
    /**
     * control-label
     */
    bootstrapCss.control_label = "control-label";
    /**
     * css
     */
    bootstrapCss.css = "css";
    /**
     * css.map
     */
    bootstrapCss.cssDmap = "css.map";
    /**
     * danger
     */
    bootstrapCss.danger = "danger";
    /**
     * danger:hover
     */
    bootstrapCss.dangerDDhover = "danger:hover";
    /**
     * disabled
     */
    bootstrapCss.disabled = "disabled";
    /**
     * divider
     */
    bootstrapCss.divider = "divider";
    /**
     * dl-horizontal
     */
    bootstrapCss.dl_horizontal = "dl-horizontal";
    /**
     * dropdown
     */
    bootstrapCss.dropdown = "dropdown";
    /**
     * dropdown-backdrop
     */
    bootstrapCss.dropdown_backdrop = "dropdown-backdrop";
    /**
     * dropdown-header
     */
    bootstrapCss.dropdown_header = "dropdown-header";
    /**
     * dropdown-menu
     */
    bootstrapCss.dropdown_menu = "dropdown-menu";
    /**
     * dropdown-menu.pull-right
     */
    bootstrapCss.dropdown_menuDpull_right = "dropdown-menu.pull-right";
    /**
     * dropdown-menu-left
     */
    bootstrapCss.dropdown_menu_left = "dropdown-menu-left";
    /**
     * dropdown-menu-right
     */
    bootstrapCss.dropdown_menu_right = "dropdown-menu-right";
    /**
     * dropdown-toggle
     */
    bootstrapCss.dropdown_toggle = "dropdown-toggle";
    /**
     * dropdown-toggle.btn-danger
     */
    bootstrapCss.dropdown_toggleDbtn_danger = "dropdown-toggle.btn-danger";
    /**
     * dropdown-toggle.btn-danger.focus
     */
    bootstrapCss.dropdown_toggleDbtn_dangerDfocus = "dropdown-toggle.btn-danger.focus";
    /**
     * dropdown-toggle.btn-danger:focus
     */
    bootstrapCss.dropdown_toggleDbtn_dangerDDfocus = "dropdown-toggle.btn-danger:focus";
    /**
     * dropdown-toggle.btn-danger:hover
     */
    bootstrapCss.dropdown_toggleDbtn_dangerDDhover = "dropdown-toggle.btn-danger:hover";
    /**
     * dropdown-toggle.btn-default
     */
    bootstrapCss.dropdown_toggleDbtn_default = "dropdown-toggle.btn-default";
    /**
     * dropdown-toggle.btn-default.focus
     */
    bootstrapCss.dropdown_toggleDbtn_defaultDfocus = "dropdown-toggle.btn-default.focus";
    /**
     * dropdown-toggle.btn-default:focus
     */
    bootstrapCss.dropdown_toggleDbtn_defaultDDfocus = "dropdown-toggle.btn-default:focus";
    /**
     * dropdown-toggle.btn-default:hover
     */
    bootstrapCss.dropdown_toggleDbtn_defaultDDhover = "dropdown-toggle.btn-default:hover";
    /**
     * dropdown-toggle.btn-info
     */
    bootstrapCss.dropdown_toggleDbtn_info = "dropdown-toggle.btn-info";
    /**
     * dropdown-toggle.btn-info.focus
     */
    bootstrapCss.dropdown_toggleDbtn_infoDfocus = "dropdown-toggle.btn-info.focus";
    /**
     * dropdown-toggle.btn-info:focus
     */
    bootstrapCss.dropdown_toggleDbtn_infoDDfocus = "dropdown-toggle.btn-info:focus";
    /**
     * dropdown-toggle.btn-info:hover
     */
    bootstrapCss.dropdown_toggleDbtn_infoDDhover = "dropdown-toggle.btn-info:hover";
    /**
     * dropdown-toggle.btn-link
     */
    bootstrapCss.dropdown_toggleDbtn_link = "dropdown-toggle.btn-link";
    /**
     * dropdown-toggle.btn-primary
     */
    bootstrapCss.dropdown_toggleDbtn_primary = "dropdown-toggle.btn-primary";
    /**
     * dropdown-toggle.btn-primary.focus
     */
    bootstrapCss.dropdown_toggleDbtn_primaryDfocus = "dropdown-toggle.btn-primary.focus";
    /**
     * dropdown-toggle.btn-primary:focus
     */
    bootstrapCss.dropdown_toggleDbtn_primaryDDfocus = "dropdown-toggle.btn-primary:focus";
    /**
     * dropdown-toggle.btn-primary:hover
     */
    bootstrapCss.dropdown_toggleDbtn_primaryDDhover = "dropdown-toggle.btn-primary:hover";
    /**
     * dropdown-toggle.btn-success
     */
    bootstrapCss.dropdown_toggleDbtn_success = "dropdown-toggle.btn-success";
    /**
     * dropdown-toggle.btn-success.focus
     */
    bootstrapCss.dropdown_toggleDbtn_successDfocus = "dropdown-toggle.btn-success.focus";
    /**
     * dropdown-toggle.btn-success:focus
     */
    bootstrapCss.dropdown_toggleDbtn_successDDfocus = "dropdown-toggle.btn-success:focus";
    /**
     * dropdown-toggle.btn-success:hover
     */
    bootstrapCss.dropdown_toggleDbtn_successDDhover = "dropdown-toggle.btn-success:hover";
    /**
     * dropdown-toggle.btn-warning
     */
    bootstrapCss.dropdown_toggleDbtn_warning = "dropdown-toggle.btn-warning";
    /**
     * dropdown-toggle.btn-warning.focus
     */
    bootstrapCss.dropdown_toggleDbtn_warningDfocus = "dropdown-toggle.btn-warning.focus";
    /**
     * dropdown-toggle.btn-warning:focus
     */
    bootstrapCss.dropdown_toggleDbtn_warningDDfocus = "dropdown-toggle.btn-warning:focus";
    /**
     * dropdown-toggle.btn-warning:hover
     */
    bootstrapCss.dropdown_toggleDbtn_warningDDhover = "dropdown-toggle.btn-warning:hover";
    /**
     * dropdown-toggle:active
     */
    bootstrapCss.dropdown_toggleDDactive = "dropdown-toggle:active";
    /**
     * dropdown-toggle:focus
     */
    bootstrapCss.dropdown_toggleDDfocus = "dropdown-toggle:focus";
    /**
     * dropdown-toggle:not
     */
    bootstrapCss.dropdown_toggleDDnot = "dropdown-toggle:not";
    /**
     * dropup
     */
    bootstrapCss.dropup = "dropup";
    /**
     * embed-responsive
     */
    bootstrapCss.embed_responsive = "embed-responsive";
    /**
     * embed-responsive-16by9
     */
    bootstrapCss.embed_responsive_16by9 = "embed-responsive-16by9";
    /**
     * embed-responsive-4by3
     */
    bootstrapCss.embed_responsive_4by3 = "embed-responsive-4by3";
    /**
     * embed-responsive-item
     */
    bootstrapCss.embed_responsive_item = "embed-responsive-item";
    /**
     * eot
     */
    bootstrapCss.eot = "eot";
    /**
     * fade
     */
    bootstrapCss.fade = "fade";
    /**
     * fade.in
     */
    bootstrapCss.fadeDin = "fade.in";
    /**
     * form-control
     */
    bootstrapCss.form_control = "form-control";
    /**
     * form-control::-moz-placeholder
     */
    bootstrapCss.form_controlDDDD_moz_placeholder = "form-control::-moz-placeholder";
    /**
     * form-control::-ms-expand
     */
    bootstrapCss.form_controlDDDD_ms_expand = "form-control::-ms-expand";
    /**
     * form-control::-webkit-input-placeholder
     */
    bootstrapCss.form_controlDDDD_webkit_input_placeholder = "form-control::-webkit-input-placeholder";
    /**
     * form-control:first-child
     */
    bootstrapCss.form_controlDDfirst_child = "form-control:first-child";
    /**
     * form-control:focus
     */
    bootstrapCss.form_controlDDfocus = "form-control:focus";
    /**
     * form-control:last-child
     */
    bootstrapCss.form_controlDDlast_child = "form-control:last-child";
    /**
     * form-control:-ms-input-placeholder
     */
    bootstrapCss.form_controlDD_ms_input_placeholder = "form-control:-ms-input-placeholder";
    /**
     * form-control:not
     */
    bootstrapCss.form_controlDDnot = "form-control:not";
    /**
     * form-control[disabled]
     */
    bootstrapCss.form_control$disabled$ = "form-control[disabled]";
    /**
     * form-control[readonly]
     */
    bootstrapCss.form_control$readonly$ = "form-control[readonly]";
    /**
     * form-control-feedback
     */
    bootstrapCss.form_control_feedback = "form-control-feedback";
    /**
     * form-control-static
     */
    bootstrapCss.form_control_static = "form-control-static";
    /**
     * form-control-static.input-lg
     */
    bootstrapCss.form_control_staticDinput_lg = "form-control-static.input-lg";
    /**
     * form-control-static.input-sm
     */
    bootstrapCss.form_control_staticDinput_sm = "form-control-static.input-sm";
    /**
     * form-group
     */
    bootstrapCss.form_group = "form-group";
    /**
     * form-group:after
     */
    bootstrapCss.form_groupDDafter = "form-group:after";
    /**
     * form-group:before
     */
    bootstrapCss.form_groupDDbefore = "form-group:before";
    /**
     * form-group:last-child
     */
    bootstrapCss.form_groupDDlast_child = "form-group:last-child";
    /**
     * form-group-lg
     */
    bootstrapCss.form_group_lg = "form-group-lg";
    /**
     * form-group-sm
     */
    bootstrapCss.form_group_sm = "form-group-sm";
    /**
     * form-horizontal
     */
    bootstrapCss.form_horizontal = "form-horizontal";
    /**
     * form-inline
     */
    bootstrapCss.form_inline = "form-inline";
    /**
     * glyphicon
     */
    bootstrapCss.glyphicon = "glyphicon";
    /**
     * glyphicon-adjust:before
     */
    bootstrapCss.glyphicon_adjustDDbefore = "glyphicon-adjust:before";
    /**
     * glyphicon-alert:before
     */
    bootstrapCss.glyphicon_alertDDbefore = "glyphicon-alert:before";
    /**
     * glyphicon-align-center:before
     */
    bootstrapCss.glyphicon_align_centerDDbefore = "glyphicon-align-center:before";
    /**
     * glyphicon-align-justify:before
     */
    bootstrapCss.glyphicon_align_justifyDDbefore = "glyphicon-align-justify:before";
    /**
     * glyphicon-align-left:before
     */
    bootstrapCss.glyphicon_align_leftDDbefore = "glyphicon-align-left:before";
    /**
     * glyphicon-align-right:before
     */
    bootstrapCss.glyphicon_align_rightDDbefore = "glyphicon-align-right:before";
    /**
     * glyphicon-apple:before
     */
    bootstrapCss.glyphicon_appleDDbefore = "glyphicon-apple:before";
    /**
     * glyphicon-arrow-down:before
     */
    bootstrapCss.glyphicon_arrow_downDDbefore = "glyphicon-arrow-down:before";
    /**
     * glyphicon-arrow-left:before
     */
    bootstrapCss.glyphicon_arrow_leftDDbefore = "glyphicon-arrow-left:before";
    /**
     * glyphicon-arrow-right:before
     */
    bootstrapCss.glyphicon_arrow_rightDDbefore = "glyphicon-arrow-right:before";
    /**
     * glyphicon-arrow-up:before
     */
    bootstrapCss.glyphicon_arrow_upDDbefore = "glyphicon-arrow-up:before";
    /**
     * glyphicon-asterisk:before
     */
    bootstrapCss.glyphicon_asteriskDDbefore = "glyphicon-asterisk:before";
    /**
     * glyphicon-baby-formula:before
     */
    bootstrapCss.glyphicon_baby_formulaDDbefore = "glyphicon-baby-formula:before";
    /**
     * glyphicon-backward:before
     */
    bootstrapCss.glyphicon_backwardDDbefore = "glyphicon-backward:before";
    /**
     * glyphicon-ban-circle:before
     */
    bootstrapCss.glyphicon_ban_circleDDbefore = "glyphicon-ban-circle:before";
    /**
     * glyphicon-barcode:before
     */
    bootstrapCss.glyphicon_barcodeDDbefore = "glyphicon-barcode:before";
    /**
     * glyphicon-bed:before
     */
    bootstrapCss.glyphicon_bedDDbefore = "glyphicon-bed:before";
    /**
     * glyphicon-bell:before
     */
    bootstrapCss.glyphicon_bellDDbefore = "glyphicon-bell:before";
    /**
     * glyphicon-bishop:before
     */
    bootstrapCss.glyphicon_bishopDDbefore = "glyphicon-bishop:before";
    /**
     * glyphicon-bitcoin:before
     */
    bootstrapCss.glyphicon_bitcoinDDbefore = "glyphicon-bitcoin:before";
    /**
     * glyphicon-blackboard:before
     */
    bootstrapCss.glyphicon_blackboardDDbefore = "glyphicon-blackboard:before";
    /**
     * glyphicon-bold:before
     */
    bootstrapCss.glyphicon_boldDDbefore = "glyphicon-bold:before";
    /**
     * glyphicon-book:before
     */
    bootstrapCss.glyphicon_bookDDbefore = "glyphicon-book:before";
    /**
     * glyphicon-bookmark:before
     */
    bootstrapCss.glyphicon_bookmarkDDbefore = "glyphicon-bookmark:before";
    /**
     * glyphicon-briefcase:before
     */
    bootstrapCss.glyphicon_briefcaseDDbefore = "glyphicon-briefcase:before";
    /**
     * glyphicon-btc:before
     */
    bootstrapCss.glyphicon_btcDDbefore = "glyphicon-btc:before";
    /**
     * glyphicon-bullhorn:before
     */
    bootstrapCss.glyphicon_bullhornDDbefore = "glyphicon-bullhorn:before";
    /**
     * glyphicon-calendar:before
     */
    bootstrapCss.glyphicon_calendarDDbefore = "glyphicon-calendar:before";
    /**
     * glyphicon-camera:before
     */
    bootstrapCss.glyphicon_cameraDDbefore = "glyphicon-camera:before";
    /**
     * glyphicon-cd:before
     */
    bootstrapCss.glyphicon_cdDDbefore = "glyphicon-cd:before";
    /**
     * glyphicon-certificate:before
     */
    bootstrapCss.glyphicon_certificateDDbefore = "glyphicon-certificate:before";
    /**
     * glyphicon-check:before
     */
    bootstrapCss.glyphicon_checkDDbefore = "glyphicon-check:before";
    /**
     * glyphicon-chevron-down:before
     */
    bootstrapCss.glyphicon_chevron_downDDbefore = "glyphicon-chevron-down:before";
    /**
     * glyphicon-chevron-left
     */
    bootstrapCss.glyphicon_chevron_left = "glyphicon-chevron-left";
    /**
     * glyphicon-chevron-left:before
     */
    bootstrapCss.glyphicon_chevron_leftDDbefore = "glyphicon-chevron-left:before";
    /**
     * glyphicon-chevron-right
     */
    bootstrapCss.glyphicon_chevron_right = "glyphicon-chevron-right";
    /**
     * glyphicon-chevron-right:before
     */
    bootstrapCss.glyphicon_chevron_rightDDbefore = "glyphicon-chevron-right:before";
    /**
     * glyphicon-chevron-up:before
     */
    bootstrapCss.glyphicon_chevron_upDDbefore = "glyphicon-chevron-up:before";
    /**
     * glyphicon-circle-arrow-down:before
     */
    bootstrapCss.glyphicon_circle_arrow_downDDbefore = "glyphicon-circle-arrow-down:before";
    /**
     * glyphicon-circle-arrow-left:before
     */
    bootstrapCss.glyphicon_circle_arrow_leftDDbefore = "glyphicon-circle-arrow-left:before";
    /**
     * glyphicon-circle-arrow-right:before
     */
    bootstrapCss.glyphicon_circle_arrow_rightDDbefore = "glyphicon-circle-arrow-right:before";
    /**
     * glyphicon-circle-arrow-up:before
     */
    bootstrapCss.glyphicon_circle_arrow_upDDbefore = "glyphicon-circle-arrow-up:before";
    /**
     * glyphicon-cloud:before
     */
    bootstrapCss.glyphicon_cloudDDbefore = "glyphicon-cloud:before";
    /**
     * glyphicon-cloud-download:before
     */
    bootstrapCss.glyphicon_cloud_downloadDDbefore = "glyphicon-cloud-download:before";
    /**
     * glyphicon-cloud-upload:before
     */
    bootstrapCss.glyphicon_cloud_uploadDDbefore = "glyphicon-cloud-upload:before";
    /**
     * glyphicon-cog:before
     */
    bootstrapCss.glyphicon_cogDDbefore = "glyphicon-cog:before";
    /**
     * glyphicon-collapse-down:before
     */
    bootstrapCss.glyphicon_collapse_downDDbefore = "glyphicon-collapse-down:before";
    /**
     * glyphicon-collapse-up:before
     */
    bootstrapCss.glyphicon_collapse_upDDbefore = "glyphicon-collapse-up:before";
    /**
     * glyphicon-comment:before
     */
    bootstrapCss.glyphicon_commentDDbefore = "glyphicon-comment:before";
    /**
     * glyphicon-compressed:before
     */
    bootstrapCss.glyphicon_compressedDDbefore = "glyphicon-compressed:before";
    /**
     * glyphicon-console:before
     */
    bootstrapCss.glyphicon_consoleDDbefore = "glyphicon-console:before";
    /**
     * glyphicon-copy:before
     */
    bootstrapCss.glyphicon_copyDDbefore = "glyphicon-copy:before";
    /**
     * glyphicon-copyright-mark:before
     */
    bootstrapCss.glyphicon_copyright_markDDbefore = "glyphicon-copyright-mark:before";
    /**
     * glyphicon-credit-card:before
     */
    bootstrapCss.glyphicon_credit_cardDDbefore = "glyphicon-credit-card:before";
    /**
     * glyphicon-cutlery:before
     */
    bootstrapCss.glyphicon_cutleryDDbefore = "glyphicon-cutlery:before";
    /**
     * glyphicon-dashboard:before
     */
    bootstrapCss.glyphicon_dashboardDDbefore = "glyphicon-dashboard:before";
    /**
     * glyphicon-download:before
     */
    bootstrapCss.glyphicon_downloadDDbefore = "glyphicon-download:before";
    /**
     * glyphicon-download-alt:before
     */
    bootstrapCss.glyphicon_download_altDDbefore = "glyphicon-download-alt:before";
    /**
     * glyphicon-duplicate:before
     */
    bootstrapCss.glyphicon_duplicateDDbefore = "glyphicon-duplicate:before";
    /**
     * glyphicon-earphone:before
     */
    bootstrapCss.glyphicon_earphoneDDbefore = "glyphicon-earphone:before";
    /**
     * glyphicon-edit:before
     */
    bootstrapCss.glyphicon_editDDbefore = "glyphicon-edit:before";
    /**
     * glyphicon-education:before
     */
    bootstrapCss.glyphicon_educationDDbefore = "glyphicon-education:before";
    /**
     * glyphicon-eject:before
     */
    bootstrapCss.glyphicon_ejectDDbefore = "glyphicon-eject:before";
    /**
     * glyphicon-envelope:before
     */
    bootstrapCss.glyphicon_envelopeDDbefore = "glyphicon-envelope:before";
    /**
     * glyphicon-equalizer:before
     */
    bootstrapCss.glyphicon_equalizerDDbefore = "glyphicon-equalizer:before";
    /**
     * glyphicon-erase:before
     */
    bootstrapCss.glyphicon_eraseDDbefore = "glyphicon-erase:before";
    /**
     * glyphicon-eur:before
     */
    bootstrapCss.glyphicon_eurDDbefore = "glyphicon-eur:before";
    /**
     * glyphicon-euro:before
     */
    bootstrapCss.glyphicon_euroDDbefore = "glyphicon-euro:before";
    /**
     * glyphicon-exclamation-sign:before
     */
    bootstrapCss.glyphicon_exclamation_signDDbefore = "glyphicon-exclamation-sign:before";
    /**
     * glyphicon-expand:before
     */
    bootstrapCss.glyphicon_expandDDbefore = "glyphicon-expand:before";
    /**
     * glyphicon-export:before
     */
    bootstrapCss.glyphicon_exportDDbefore = "glyphicon-export:before";
    /**
     * glyphicon-eye-close:before
     */
    bootstrapCss.glyphicon_eye_closeDDbefore = "glyphicon-eye-close:before";
    /**
     * glyphicon-eye-open:before
     */
    bootstrapCss.glyphicon_eye_openDDbefore = "glyphicon-eye-open:before";
    /**
     * glyphicon-facetime-video:before
     */
    bootstrapCss.glyphicon_facetime_videoDDbefore = "glyphicon-facetime-video:before";
    /**
     * glyphicon-fast-backward:before
     */
    bootstrapCss.glyphicon_fast_backwardDDbefore = "glyphicon-fast-backward:before";
    /**
     * glyphicon-fast-forward:before
     */
    bootstrapCss.glyphicon_fast_forwardDDbefore = "glyphicon-fast-forward:before";
    /**
     * glyphicon-file:before
     */
    bootstrapCss.glyphicon_fileDDbefore = "glyphicon-file:before";
    /**
     * glyphicon-film:before
     */
    bootstrapCss.glyphicon_filmDDbefore = "glyphicon-film:before";
    /**
     * glyphicon-filter:before
     */
    bootstrapCss.glyphicon_filterDDbefore = "glyphicon-filter:before";
    /**
     * glyphicon-fire:before
     */
    bootstrapCss.glyphicon_fireDDbefore = "glyphicon-fire:before";
    /**
     * glyphicon-flag:before
     */
    bootstrapCss.glyphicon_flagDDbefore = "glyphicon-flag:before";
    /**
     * glyphicon-flash:before
     */
    bootstrapCss.glyphicon_flashDDbefore = "glyphicon-flash:before";
    /**
     * glyphicon-floppy-disk:before
     */
    bootstrapCss.glyphicon_floppy_diskDDbefore = "glyphicon-floppy-disk:before";
    /**
     * glyphicon-floppy-open:before
     */
    bootstrapCss.glyphicon_floppy_openDDbefore = "glyphicon-floppy-open:before";
    /**
     * glyphicon-floppy-remove:before
     */
    bootstrapCss.glyphicon_floppy_removeDDbefore = "glyphicon-floppy-remove:before";
    /**
     * glyphicon-floppy-save:before
     */
    bootstrapCss.glyphicon_floppy_saveDDbefore = "glyphicon-floppy-save:before";
    /**
     * glyphicon-floppy-saved:before
     */
    bootstrapCss.glyphicon_floppy_savedDDbefore = "glyphicon-floppy-saved:before";
    /**
     * glyphicon-folder-close:before
     */
    bootstrapCss.glyphicon_folder_closeDDbefore = "glyphicon-folder-close:before";
    /**
     * glyphicon-folder-open:before
     */
    bootstrapCss.glyphicon_folder_openDDbefore = "glyphicon-folder-open:before";
    /**
     * glyphicon-font:before
     */
    bootstrapCss.glyphicon_fontDDbefore = "glyphicon-font:before";
    /**
     * glyphicon-forward:before
     */
    bootstrapCss.glyphicon_forwardDDbefore = "glyphicon-forward:before";
    /**
     * glyphicon-fullscreen:before
     */
    bootstrapCss.glyphicon_fullscreenDDbefore = "glyphicon-fullscreen:before";
    /**
     * glyphicon-gbp:before
     */
    bootstrapCss.glyphicon_gbpDDbefore = "glyphicon-gbp:before";
    /**
     * glyphicon-gift:before
     */
    bootstrapCss.glyphicon_giftDDbefore = "glyphicon-gift:before";
    /**
     * glyphicon-glass:before
     */
    bootstrapCss.glyphicon_glassDDbefore = "glyphicon-glass:before";
    /**
     * glyphicon-globe:before
     */
    bootstrapCss.glyphicon_globeDDbefore = "glyphicon-globe:before";
    /**
     * glyphicon-grain:before
     */
    bootstrapCss.glyphicon_grainDDbefore = "glyphicon-grain:before";
    /**
     * glyphicon-hand-down:before
     */
    bootstrapCss.glyphicon_hand_downDDbefore = "glyphicon-hand-down:before";
    /**
     * glyphicon-hand-left:before
     */
    bootstrapCss.glyphicon_hand_leftDDbefore = "glyphicon-hand-left:before";
    /**
     * glyphicon-hand-right:before
     */
    bootstrapCss.glyphicon_hand_rightDDbefore = "glyphicon-hand-right:before";
    /**
     * glyphicon-hand-up:before
     */
    bootstrapCss.glyphicon_hand_upDDbefore = "glyphicon-hand-up:before";
    /**
     * glyphicon-hdd:before
     */
    bootstrapCss.glyphicon_hddDDbefore = "glyphicon-hdd:before";
    /**
     * glyphicon-hd-video:before
     */
    bootstrapCss.glyphicon_hd_videoDDbefore = "glyphicon-hd-video:before";
    /**
     * glyphicon-header:before
     */
    bootstrapCss.glyphicon_headerDDbefore = "glyphicon-header:before";
    /**
     * glyphicon-headphones:before
     */
    bootstrapCss.glyphicon_headphonesDDbefore = "glyphicon-headphones:before";
    /**
     * glyphicon-heart:before
     */
    bootstrapCss.glyphicon_heartDDbefore = "glyphicon-heart:before";
    /**
     * glyphicon-heart-empty:before
     */
    bootstrapCss.glyphicon_heart_emptyDDbefore = "glyphicon-heart-empty:before";
    /**
     * glyphicon-home:before
     */
    bootstrapCss.glyphicon_homeDDbefore = "glyphicon-home:before";
    /**
     * glyphicon-hourglass:before
     */
    bootstrapCss.glyphicon_hourglassDDbefore = "glyphicon-hourglass:before";
    /**
     * glyphicon-ice-lolly:before
     */
    bootstrapCss.glyphicon_ice_lollyDDbefore = "glyphicon-ice-lolly:before";
    /**
     * glyphicon-ice-lolly-tasted:before
     */
    bootstrapCss.glyphicon_ice_lolly_tastedDDbefore = "glyphicon-ice-lolly-tasted:before";
    /**
     * glyphicon-import:before
     */
    bootstrapCss.glyphicon_importDDbefore = "glyphicon-import:before";
    /**
     * glyphicon-inbox:before
     */
    bootstrapCss.glyphicon_inboxDDbefore = "glyphicon-inbox:before";
    /**
     * glyphicon-indent-left:before
     */
    bootstrapCss.glyphicon_indent_leftDDbefore = "glyphicon-indent-left:before";
    /**
     * glyphicon-indent-right:before
     */
    bootstrapCss.glyphicon_indent_rightDDbefore = "glyphicon-indent-right:before";
    /**
     * glyphicon-info-sign:before
     */
    bootstrapCss.glyphicon_info_signDDbefore = "glyphicon-info-sign:before";
    /**
     * glyphicon-italic:before
     */
    bootstrapCss.glyphicon_italicDDbefore = "glyphicon-italic:before";
    /**
     * glyphicon-jpy:before
     */
    bootstrapCss.glyphicon_jpyDDbefore = "glyphicon-jpy:before";
    /**
     * glyphicon-king:before
     */
    bootstrapCss.glyphicon_kingDDbefore = "glyphicon-king:before";
    /**
     * glyphicon-knight:before
     */
    bootstrapCss.glyphicon_knightDDbefore = "glyphicon-knight:before";
    /**
     * glyphicon-lamp:before
     */
    bootstrapCss.glyphicon_lampDDbefore = "glyphicon-lamp:before";
    /**
     * glyphicon-leaf:before
     */
    bootstrapCss.glyphicon_leafDDbefore = "glyphicon-leaf:before";
    /**
     * glyphicon-level-up:before
     */
    bootstrapCss.glyphicon_level_upDDbefore = "glyphicon-level-up:before";
    /**
     * glyphicon-link:before
     */
    bootstrapCss.glyphicon_linkDDbefore = "glyphicon-link:before";
    /**
     * glyphicon-list:before
     */
    bootstrapCss.glyphicon_listDDbefore = "glyphicon-list:before";
    /**
     * glyphicon-list-alt:before
     */
    bootstrapCss.glyphicon_list_altDDbefore = "glyphicon-list-alt:before";
    /**
     * glyphicon-lock:before
     */
    bootstrapCss.glyphicon_lockDDbefore = "glyphicon-lock:before";
    /**
     * glyphicon-log-in:before
     */
    bootstrapCss.glyphicon_log_inDDbefore = "glyphicon-log-in:before";
    /**
     * glyphicon-log-out:before
     */
    bootstrapCss.glyphicon_log_outDDbefore = "glyphicon-log-out:before";
    /**
     * glyphicon-magnet:before
     */
    bootstrapCss.glyphicon_magnetDDbefore = "glyphicon-magnet:before";
    /**
     * glyphicon-map-marker:before
     */
    bootstrapCss.glyphicon_map_markerDDbefore = "glyphicon-map-marker:before";
    /**
     * glyphicon-menu-down:before
     */
    bootstrapCss.glyphicon_menu_downDDbefore = "glyphicon-menu-down:before";
    /**
     * glyphicon-menu-hamburger:before
     */
    bootstrapCss.glyphicon_menu_hamburgerDDbefore = "glyphicon-menu-hamburger:before";
    /**
     * glyphicon-menu-left:before
     */
    bootstrapCss.glyphicon_menu_leftDDbefore = "glyphicon-menu-left:before";
    /**
     * glyphicon-menu-right:before
     */
    bootstrapCss.glyphicon_menu_rightDDbefore = "glyphicon-menu-right:before";
    /**
     * glyphicon-menu-up:before
     */
    bootstrapCss.glyphicon_menu_upDDbefore = "glyphicon-menu-up:before";
    /**
     * glyphicon-minus:before
     */
    bootstrapCss.glyphicon_minusDDbefore = "glyphicon-minus:before";
    /**
     * glyphicon-minus-sign:before
     */
    bootstrapCss.glyphicon_minus_signDDbefore = "glyphicon-minus-sign:before";
    /**
     * glyphicon-modal-window:before
     */
    bootstrapCss.glyphicon_modal_windowDDbefore = "glyphicon-modal-window:before";
    /**
     * glyphicon-move:before
     */
    bootstrapCss.glyphicon_moveDDbefore = "glyphicon-move:before";
    /**
     * glyphicon-music:before
     */
    bootstrapCss.glyphicon_musicDDbefore = "glyphicon-music:before";
    /**
     * glyphicon-new-window:before
     */
    bootstrapCss.glyphicon_new_windowDDbefore = "glyphicon-new-window:before";
    /**
     * glyphicon-object-align-bottom:before
     */
    bootstrapCss.glyphicon_object_align_bottomDDbefore = "glyphicon-object-align-bottom:before";
    /**
     * glyphicon-object-align-horizontal:before
     */
    bootstrapCss.glyphicon_object_align_horizontalDDbefore = "glyphicon-object-align-horizontal:before";
    /**
     * glyphicon-object-align-left:before
     */
    bootstrapCss.glyphicon_object_align_leftDDbefore = "glyphicon-object-align-left:before";
    /**
     * glyphicon-object-align-right:before
     */
    bootstrapCss.glyphicon_object_align_rightDDbefore = "glyphicon-object-align-right:before";
    /**
     * glyphicon-object-align-top:before
     */
    bootstrapCss.glyphicon_object_align_topDDbefore = "glyphicon-object-align-top:before";
    /**
     * glyphicon-object-align-vertical:before
     */
    bootstrapCss.glyphicon_object_align_verticalDDbefore = "glyphicon-object-align-vertical:before";
    /**
     * glyphicon-off:before
     */
    bootstrapCss.glyphicon_offDDbefore = "glyphicon-off:before";
    /**
     * glyphicon-oil:before
     */
    bootstrapCss.glyphicon_oilDDbefore = "glyphicon-oil:before";
    /**
     * glyphicon-ok:before
     */
    bootstrapCss.glyphicon_okDDbefore = "glyphicon-ok:before";
    /**
     * glyphicon-ok-circle:before
     */
    bootstrapCss.glyphicon_ok_circleDDbefore = "glyphicon-ok-circle:before";
    /**
     * glyphicon-ok-sign:before
     */
    bootstrapCss.glyphicon_ok_signDDbefore = "glyphicon-ok-sign:before";
    /**
     * glyphicon-open:before
     */
    bootstrapCss.glyphicon_openDDbefore = "glyphicon-open:before";
    /**
     * glyphicon-open-file:before
     */
    bootstrapCss.glyphicon_open_fileDDbefore = "glyphicon-open-file:before";
    /**
     * glyphicon-option-horizontal:before
     */
    bootstrapCss.glyphicon_option_horizontalDDbefore = "glyphicon-option-horizontal:before";
    /**
     * glyphicon-option-vertical:before
     */
    bootstrapCss.glyphicon_option_verticalDDbefore = "glyphicon-option-vertical:before";
    /**
     * glyphicon-paperclip:before
     */
    bootstrapCss.glyphicon_paperclipDDbefore = "glyphicon-paperclip:before";
    /**
     * glyphicon-paste:before
     */
    bootstrapCss.glyphicon_pasteDDbefore = "glyphicon-paste:before";
    /**
     * glyphicon-pause:before
     */
    bootstrapCss.glyphicon_pauseDDbefore = "glyphicon-pause:before";
    /**
     * glyphicon-pawn:before
     */
    bootstrapCss.glyphicon_pawnDDbefore = "glyphicon-pawn:before";
    /**
     * glyphicon-pencil:before
     */
    bootstrapCss.glyphicon_pencilDDbefore = "glyphicon-pencil:before";
    /**
     * glyphicon-phone:before
     */
    bootstrapCss.glyphicon_phoneDDbefore = "glyphicon-phone:before";
    /**
     * glyphicon-phone-alt:before
     */
    bootstrapCss.glyphicon_phone_altDDbefore = "glyphicon-phone-alt:before";
    /**
     * glyphicon-picture:before
     */
    bootstrapCss.glyphicon_pictureDDbefore = "glyphicon-picture:before";
    /**
     * glyphicon-piggy-bank:before
     */
    bootstrapCss.glyphicon_piggy_bankDDbefore = "glyphicon-piggy-bank:before";
    /**
     * glyphicon-plane:before
     */
    bootstrapCss.glyphicon_planeDDbefore = "glyphicon-plane:before";
    /**
     * glyphicon-play:before
     */
    bootstrapCss.glyphicon_playDDbefore = "glyphicon-play:before";
    /**
     * glyphicon-play-circle:before
     */
    bootstrapCss.glyphicon_play_circleDDbefore = "glyphicon-play-circle:before";
    /**
     * glyphicon-plus:before
     */
    bootstrapCss.glyphicon_plusDDbefore = "glyphicon-plus:before";
    /**
     * glyphicon-plus-sign:before
     */
    bootstrapCss.glyphicon_plus_signDDbefore = "glyphicon-plus-sign:before";
    /**
     * glyphicon-print:before
     */
    bootstrapCss.glyphicon_printDDbefore = "glyphicon-print:before";
    /**
     * glyphicon-pushpin:before
     */
    bootstrapCss.glyphicon_pushpinDDbefore = "glyphicon-pushpin:before";
    /**
     * glyphicon-qrcode:before
     */
    bootstrapCss.glyphicon_qrcodeDDbefore = "glyphicon-qrcode:before";
    /**
     * glyphicon-queen:before
     */
    bootstrapCss.glyphicon_queenDDbefore = "glyphicon-queen:before";
    /**
     * glyphicon-question-sign:before
     */
    bootstrapCss.glyphicon_question_signDDbefore = "glyphicon-question-sign:before";
    /**
     * glyphicon-random:before
     */
    bootstrapCss.glyphicon_randomDDbefore = "glyphicon-random:before";
    /**
     * glyphicon-record:before
     */
    bootstrapCss.glyphicon_recordDDbefore = "glyphicon-record:before";
    /**
     * glyphicon-refresh:before
     */
    bootstrapCss.glyphicon_refreshDDbefore = "glyphicon-refresh:before";
    /**
     * glyphicon-registration-mark:before
     */
    bootstrapCss.glyphicon_registration_markDDbefore = "glyphicon-registration-mark:before";
    /**
     * glyphicon-remove:before
     */
    bootstrapCss.glyphicon_removeDDbefore = "glyphicon-remove:before";
    /**
     * glyphicon-remove-circle:before
     */
    bootstrapCss.glyphicon_remove_circleDDbefore = "glyphicon-remove-circle:before";
    /**
     * glyphicon-remove-sign:before
     */
    bootstrapCss.glyphicon_remove_signDDbefore = "glyphicon-remove-sign:before";
    /**
     * glyphicon-repeat:before
     */
    bootstrapCss.glyphicon_repeatDDbefore = "glyphicon-repeat:before";
    /**
     * glyphicon-resize-full:before
     */
    bootstrapCss.glyphicon_resize_fullDDbefore = "glyphicon-resize-full:before";
    /**
     * glyphicon-resize-horizontal:before
     */
    bootstrapCss.glyphicon_resize_horizontalDDbefore = "glyphicon-resize-horizontal:before";
    /**
     * glyphicon-resize-small:before
     */
    bootstrapCss.glyphicon_resize_smallDDbefore = "glyphicon-resize-small:before";
    /**
     * glyphicon-resize-vertical:before
     */
    bootstrapCss.glyphicon_resize_verticalDDbefore = "glyphicon-resize-vertical:before";
    /**
     * glyphicon-retweet:before
     */
    bootstrapCss.glyphicon_retweetDDbefore = "glyphicon-retweet:before";
    /**
     * glyphicon-road:before
     */
    bootstrapCss.glyphicon_roadDDbefore = "glyphicon-road:before";
    /**
     * glyphicon-rub:before
     */
    bootstrapCss.glyphicon_rubDDbefore = "glyphicon-rub:before";
    /**
     * glyphicon-ruble:before
     */
    bootstrapCss.glyphicon_rubleDDbefore = "glyphicon-ruble:before";
    /**
     * glyphicon-save:before
     */
    bootstrapCss.glyphicon_saveDDbefore = "glyphicon-save:before";
    /**
     * glyphicon-saved:before
     */
    bootstrapCss.glyphicon_savedDDbefore = "glyphicon-saved:before";
    /**
     * glyphicon-save-file:before
     */
    bootstrapCss.glyphicon_save_fileDDbefore = "glyphicon-save-file:before";
    /**
     * glyphicon-scale:before
     */
    bootstrapCss.glyphicon_scaleDDbefore = "glyphicon-scale:before";
    /**
     * glyphicon-scissors:before
     */
    bootstrapCss.glyphicon_scissorsDDbefore = "glyphicon-scissors:before";
    /**
     * glyphicon-screenshot:before
     */
    bootstrapCss.glyphicon_screenshotDDbefore = "glyphicon-screenshot:before";
    /**
     * glyphicon-sd-video:before
     */
    bootstrapCss.glyphicon_sd_videoDDbefore = "glyphicon-sd-video:before";
    /**
     * glyphicon-search:before
     */
    bootstrapCss.glyphicon_searchDDbefore = "glyphicon-search:before";
    /**
     * glyphicon-send:before
     */
    bootstrapCss.glyphicon_sendDDbefore = "glyphicon-send:before";
    /**
     * glyphicon-share:before
     */
    bootstrapCss.glyphicon_shareDDbefore = "glyphicon-share:before";
    /**
     * glyphicon-share-alt:before
     */
    bootstrapCss.glyphicon_share_altDDbefore = "glyphicon-share-alt:before";
    /**
     * glyphicon-shopping-cart:before
     */
    bootstrapCss.glyphicon_shopping_cartDDbefore = "glyphicon-shopping-cart:before";
    /**
     * glyphicon-signal:before
     */
    bootstrapCss.glyphicon_signalDDbefore = "glyphicon-signal:before";
    /**
     * glyphicon-sort:before
     */
    bootstrapCss.glyphicon_sortDDbefore = "glyphicon-sort:before";
    /**
     * glyphicon-sort-by-alphabet:before
     */
    bootstrapCss.glyphicon_sort_by_alphabetDDbefore = "glyphicon-sort-by-alphabet:before";
    /**
     * glyphicon-sort-by-alphabet-alt:before
     */
    bootstrapCss.glyphicon_sort_by_alphabet_altDDbefore = "glyphicon-sort-by-alphabet-alt:before";
    /**
     * glyphicon-sort-by-attributes:before
     */
    bootstrapCss.glyphicon_sort_by_attributesDDbefore = "glyphicon-sort-by-attributes:before";
    /**
     * glyphicon-sort-by-attributes-alt:before
     */
    bootstrapCss.glyphicon_sort_by_attributes_altDDbefore = "glyphicon-sort-by-attributes-alt:before";
    /**
     * glyphicon-sort-by-order:before
     */
    bootstrapCss.glyphicon_sort_by_orderDDbefore = "glyphicon-sort-by-order:before";
    /**
     * glyphicon-sort-by-order-alt:before
     */
    bootstrapCss.glyphicon_sort_by_order_altDDbefore = "glyphicon-sort-by-order-alt:before";
    /**
     * glyphicon-sound-5-1:before
     */
    bootstrapCss.glyphicon_sound_5_1DDbefore = "glyphicon-sound-5-1:before";
    /**
     * glyphicon-sound-6-1:before
     */
    bootstrapCss.glyphicon_sound_6_1DDbefore = "glyphicon-sound-6-1:before";
    /**
     * glyphicon-sound-7-1:before
     */
    bootstrapCss.glyphicon_sound_7_1DDbefore = "glyphicon-sound-7-1:before";
    /**
     * glyphicon-sound-dolby:before
     */
    bootstrapCss.glyphicon_sound_dolbyDDbefore = "glyphicon-sound-dolby:before";
    /**
     * glyphicon-sound-stereo:before
     */
    bootstrapCss.glyphicon_sound_stereoDDbefore = "glyphicon-sound-stereo:before";
    /**
     * glyphicon-star:before
     */
    bootstrapCss.glyphicon_starDDbefore = "glyphicon-star:before";
    /**
     * glyphicon-star-empty:before
     */
    bootstrapCss.glyphicon_star_emptyDDbefore = "glyphicon-star-empty:before";
    /**
     * glyphicon-stats:before
     */
    bootstrapCss.glyphicon_statsDDbefore = "glyphicon-stats:before";
    /**
     * glyphicon-step-backward:before
     */
    bootstrapCss.glyphicon_step_backwardDDbefore = "glyphicon-step-backward:before";
    /**
     * glyphicon-step-forward:before
     */
    bootstrapCss.glyphicon_step_forwardDDbefore = "glyphicon-step-forward:before";
    /**
     * glyphicon-stop:before
     */
    bootstrapCss.glyphicon_stopDDbefore = "glyphicon-stop:before";
    /**
     * glyphicon-subscript:before
     */
    bootstrapCss.glyphicon_subscriptDDbefore = "glyphicon-subscript:before";
    /**
     * glyphicon-subtitles:before
     */
    bootstrapCss.glyphicon_subtitlesDDbefore = "glyphicon-subtitles:before";
    /**
     * glyphicon-sunglasses:before
     */
    bootstrapCss.glyphicon_sunglassesDDbefore = "glyphicon-sunglasses:before";
    /**
     * glyphicon-superscript:before
     */
    bootstrapCss.glyphicon_superscriptDDbefore = "glyphicon-superscript:before";
    /**
     * glyphicon-tag:before
     */
    bootstrapCss.glyphicon_tagDDbefore = "glyphicon-tag:before";
    /**
     * glyphicon-tags:before
     */
    bootstrapCss.glyphicon_tagsDDbefore = "glyphicon-tags:before";
    /**
     * glyphicon-tasks:before
     */
    bootstrapCss.glyphicon_tasksDDbefore = "glyphicon-tasks:before";
    /**
     * glyphicon-tent:before
     */
    bootstrapCss.glyphicon_tentDDbefore = "glyphicon-tent:before";
    /**
     * glyphicon-text-background:before
     */
    bootstrapCss.glyphicon_text_backgroundDDbefore = "glyphicon-text-background:before";
    /**
     * glyphicon-text-color:before
     */
    bootstrapCss.glyphicon_text_colorDDbefore = "glyphicon-text-color:before";
    /**
     * glyphicon-text-height:before
     */
    bootstrapCss.glyphicon_text_heightDDbefore = "glyphicon-text-height:before";
    /**
     * glyphicon-text-size:before
     */
    bootstrapCss.glyphicon_text_sizeDDbefore = "glyphicon-text-size:before";
    /**
     * glyphicon-text-width:before
     */
    bootstrapCss.glyphicon_text_widthDDbefore = "glyphicon-text-width:before";
    /**
     * glyphicon-th:before
     */
    bootstrapCss.glyphicon_thDDbefore = "glyphicon-th:before";
    /**
     * glyphicon-th-large:before
     */
    bootstrapCss.glyphicon_th_largeDDbefore = "glyphicon-th-large:before";
    /**
     * glyphicon-th-list:before
     */
    bootstrapCss.glyphicon_th_listDDbefore = "glyphicon-th-list:before";
    /**
     * glyphicon-thumbs-down:before
     */
    bootstrapCss.glyphicon_thumbs_downDDbefore = "glyphicon-thumbs-down:before";
    /**
     * glyphicon-thumbs-up:before
     */
    bootstrapCss.glyphicon_thumbs_upDDbefore = "glyphicon-thumbs-up:before";
    /**
     * glyphicon-time:before
     */
    bootstrapCss.glyphicon_timeDDbefore = "glyphicon-time:before";
    /**
     * glyphicon-tint:before
     */
    bootstrapCss.glyphicon_tintDDbefore = "glyphicon-tint:before";
    /**
     * glyphicon-tower:before
     */
    bootstrapCss.glyphicon_towerDDbefore = "glyphicon-tower:before";
    /**
     * glyphicon-transfer:before
     */
    bootstrapCss.glyphicon_transferDDbefore = "glyphicon-transfer:before";
    /**
     * glyphicon-trash:before
     */
    bootstrapCss.glyphicon_trashDDbefore = "glyphicon-trash:before";
    /**
     * glyphicon-tree-conifer:before
     */
    bootstrapCss.glyphicon_tree_coniferDDbefore = "glyphicon-tree-conifer:before";
    /**
     * glyphicon-tree-deciduous:before
     */
    bootstrapCss.glyphicon_tree_deciduousDDbefore = "glyphicon-tree-deciduous:before";
    /**
     * glyphicon-triangle-bottom:before
     */
    bootstrapCss.glyphicon_triangle_bottomDDbefore = "glyphicon-triangle-bottom:before";
    /**
     * glyphicon-triangle-left:before
     */
    bootstrapCss.glyphicon_triangle_leftDDbefore = "glyphicon-triangle-left:before";
    /**
     * glyphicon-triangle-right:before
     */
    bootstrapCss.glyphicon_triangle_rightDDbefore = "glyphicon-triangle-right:before";
    /**
     * glyphicon-triangle-top:before
     */
    bootstrapCss.glyphicon_triangle_topDDbefore = "glyphicon-triangle-top:before";
    /**
     * glyphicon-unchecked:before
     */
    bootstrapCss.glyphicon_uncheckedDDbefore = "glyphicon-unchecked:before";
    /**
     * glyphicon-upload:before
     */
    bootstrapCss.glyphicon_uploadDDbefore = "glyphicon-upload:before";
    /**
     * glyphicon-usd:before
     */
    bootstrapCss.glyphicon_usdDDbefore = "glyphicon-usd:before";
    /**
     * glyphicon-user:before
     */
    bootstrapCss.glyphicon_userDDbefore = "glyphicon-user:before";
    /**
     * glyphicon-volume-down:before
     */
    bootstrapCss.glyphicon_volume_downDDbefore = "glyphicon-volume-down:before";
    /**
     * glyphicon-volume-off:before
     */
    bootstrapCss.glyphicon_volume_offDDbefore = "glyphicon-volume-off:before";
    /**
     * glyphicon-volume-up:before
     */
    bootstrapCss.glyphicon_volume_upDDbefore = "glyphicon-volume-up:before";
    /**
     * glyphicon-warning-sign:before
     */
    bootstrapCss.glyphicon_warning_signDDbefore = "glyphicon-warning-sign:before";
    /**
     * glyphicon-wrench:before
     */
    bootstrapCss.glyphicon_wrenchDDbefore = "glyphicon-wrench:before";
    /**
     * glyphicon-xbt:before
     */
    bootstrapCss.glyphicon_xbtDDbefore = "glyphicon-xbt:before";
    /**
     * glyphicon-yen:before
     */
    bootstrapCss.glyphicon_yenDDbefore = "glyphicon-yen:before";
    /**
     * glyphicon-zoom-in:before
     */
    bootstrapCss.glyphicon_zoom_inDDbefore = "glyphicon-zoom-in:before";
    /**
     * glyphicon-zoom-out:before
     */
    bootstrapCss.glyphicon_zoom_outDDbefore = "glyphicon-zoom-out:before";
    /**
     * h1
     */
    bootstrapCss.h1 = "h1";
    /**
     * h2
     */
    bootstrapCss.h2 = "h2";
    /**
     * h3
     */
    bootstrapCss.h3 = "h3";
    /**
     * h4
     */
    bootstrapCss.h4 = "h4";
    /**
     * h5
     */
    bootstrapCss.h5 = "h5";
    /**
     * h6
     */
    bootstrapCss.h6 = "h6";
    /**
     * has-error
     */
    bootstrapCss.has_error = "has-error";
    /**
     * has-error.checkbox
     */
    bootstrapCss.has_errorDcheckbox = "has-error.checkbox";
    /**
     * has-error.checkbox-inline
     */
    bootstrapCss.has_errorDcheckbox_inline = "has-error.checkbox-inline";
    /**
     * has-error.radio
     */
    bootstrapCss.has_errorDradio = "has-error.radio";
    /**
     * has-error.radio-inline
     */
    bootstrapCss.has_errorDradio_inline = "has-error.radio-inline";
    /**
     * has-feedback
     */
    bootstrapCss.has_feedback = "has-feedback";
    /**
     * has-success
     */
    bootstrapCss.has_success = "has-success";
    /**
     * has-success.checkbox
     */
    bootstrapCss.has_successDcheckbox = "has-success.checkbox";
    /**
     * has-success.checkbox-inline
     */
    bootstrapCss.has_successDcheckbox_inline = "has-success.checkbox-inline";
    /**
     * has-success.radio
     */
    bootstrapCss.has_successDradio = "has-success.radio";
    /**
     * has-success.radio-inline
     */
    bootstrapCss.has_successDradio_inline = "has-success.radio-inline";
    /**
     * has-warning
     */
    bootstrapCss.has_warning = "has-warning";
    /**
     * has-warning.checkbox
     */
    bootstrapCss.has_warningDcheckbox = "has-warning.checkbox";
    /**
     * has-warning.checkbox-inline
     */
    bootstrapCss.has_warningDcheckbox_inline = "has-warning.checkbox-inline";
    /**
     * has-warning.radio
     */
    bootstrapCss.has_warningDradio = "has-warning.radio";
    /**
     * has-warning.radio-inline
     */
    bootstrapCss.has_warningDradio_inline = "has-warning.radio-inline";
    /**
     * help-block
     */
    bootstrapCss.help_block = "help-block";
    /**
     * hidden
     */
    bootstrapCss.hidden = "hidden";
    /**
     * hidden-lg
     */
    bootstrapCss.hidden_lg = "hidden-lg";
    /**
     * hidden-md
     */
    bootstrapCss.hidden_md = "hidden-md";
    /**
     * hidden-print
     */
    bootstrapCss.hidden_print = "hidden-print";
    /**
     * hidden-sm
     */
    bootstrapCss.hidden_sm = "hidden-sm";
    /**
     * hidden-xs
     */
    bootstrapCss.hidden_xs = "hidden-xs";
    /**
     * hide
     */
    bootstrapCss.hide = "hide";
    /**
     * icon-bar
     */
    bootstrapCss.icon_bar = "icon-bar";
    /**
     * icon-next
     */
    bootstrapCss.icon_next = "icon-next";
    /**
     * icon-next:before
     */
    bootstrapCss.icon_nextDDbefore = "icon-next:before";
    /**
     * icon-prev
     */
    bootstrapCss.icon_prev = "icon-prev";
    /**
     * icon-prev:before
     */
    bootstrapCss.icon_prevDDbefore = "icon-prev:before";
    /**
     * img-circle
     */
    bootstrapCss.img_circle = "img-circle";
    /**
     * img-responsive
     */
    bootstrapCss.img_responsive = "img-responsive";
    /**
     * img-rounded
     */
    bootstrapCss.img_rounded = "img-rounded";
    /**
     * img-thumbnail
     */
    bootstrapCss.img_thumbnail = "img-thumbnail";
    /**
     * info
     */
    bootstrapCss.info = "info";
    /**
     * info:hover
     */
    bootstrapCss.infoDDhover = "info:hover";
    /**
     * initialism
     */
    bootstrapCss.initialism = "initialism";
    /**
     * input-group
     */
    bootstrapCss.input_group = "input-group";
    /**
     * input-group[class
     */
    bootstrapCss.input_group$class = "input-group[class";
    /**
     * input-group-addon
     */
    bootstrapCss.input_group_addon = "input-group-addon";
    /**
     * input-group-addon.input-lg
     */
    bootstrapCss.input_group_addonDinput_lg = "input-group-addon.input-lg";
    /**
     * input-group-addon.input-sm
     */
    bootstrapCss.input_group_addonDinput_sm = "input-group-addon.input-sm";
    /**
     * input-group-addon:first-child
     */
    bootstrapCss.input_group_addonDDfirst_child = "input-group-addon:first-child";
    /**
     * input-group-addon:last-child
     */
    bootstrapCss.input_group_addonDDlast_child = "input-group-addon:last-child";
    /**
     * input-group-addon:not
     */
    bootstrapCss.input_group_addonDDnot = "input-group-addon:not";
    /**
     * input-group-btn
     */
    bootstrapCss.input_group_btn = "input-group-btn";
    /**
     * input-group-btn:first-child
     */
    bootstrapCss.input_group_btnDDfirst_child = "input-group-btn:first-child";
    /**
     * input-group-btn:last-child
     */
    bootstrapCss.input_group_btnDDlast_child = "input-group-btn:last-child";
    /**
     * input-group-btn:not
     */
    bootstrapCss.input_group_btnDDnot = "input-group-btn:not";
    /**
     * input-group-lg
     */
    bootstrapCss.input_group_lg = "input-group-lg";
    /**
     * input-group-sm
     */
    bootstrapCss.input_group_sm = "input-group-sm";
    /**
     * input-lg
     */
    bootstrapCss.input_lg = "input-lg";
    /**
     * input-sm
     */
    bootstrapCss.input_sm = "input-sm";
    /**
     * invisible
     */
    bootstrapCss.invisible = "invisible";
    /**
     * item
     */
    bootstrapCss.item = "item";
    /**
     * item.active
     */
    bootstrapCss.itemDactive = "item.active";
    /**
     * item.active.left
     */
    bootstrapCss.itemDactiveDleft = "item.active.left";
    /**
     * item.active.right
     */
    bootstrapCss.itemDactiveDright = "item.active.right";
    /**
     * item.next
     */
    bootstrapCss.itemDnext = "item.next";
    /**
     * item.next.left
     */
    bootstrapCss.itemDnextDleft = "item.next.left";
    /**
     * item.prev
     */
    bootstrapCss.itemDprev = "item.prev";
    /**
     * item.prev.right
     */
    bootstrapCss.itemDprevDright = "item.prev.right";
    /**
     * jumbotron
     */
    bootstrapCss.jumbotron = "jumbotron";
    /**
     * label
     */
    bootstrapCss.label = "label";
    /**
     * label:empty
     */
    bootstrapCss.labelDDempty = "label:empty";
    /**
     * label:focus
     */
    bootstrapCss.labelDDfocus = "label:focus";
    /**
     * label:hover
     */
    bootstrapCss.labelDDhover = "label:hover";
    /**
     * label-danger
     */
    bootstrapCss.label_danger = "label-danger";
    /**
     * label-danger[href]:focus
     */
    bootstrapCss.label_danger$href$DDfocus = "label-danger[href]:focus";
    /**
     * label-danger[href]:hover
     */
    bootstrapCss.label_danger$href$DDhover = "label-danger[href]:hover";
    /**
     * label-default
     */
    bootstrapCss.label_default = "label-default";
    /**
     * label-default[href]:focus
     */
    bootstrapCss.label_default$href$DDfocus = "label-default[href]:focus";
    /**
     * label-default[href]:hover
     */
    bootstrapCss.label_default$href$DDhover = "label-default[href]:hover";
    /**
     * label-info
     */
    bootstrapCss.label_info = "label-info";
    /**
     * label-info[href]:focus
     */
    bootstrapCss.label_info$href$DDfocus = "label-info[href]:focus";
    /**
     * label-info[href]:hover
     */
    bootstrapCss.label_info$href$DDhover = "label-info[href]:hover";
    /**
     * label-primary
     */
    bootstrapCss.label_primary = "label-primary";
    /**
     * label-primary[href]:focus
     */
    bootstrapCss.label_primary$href$DDfocus = "label-primary[href]:focus";
    /**
     * label-primary[href]:hover
     */
    bootstrapCss.label_primary$href$DDhover = "label-primary[href]:hover";
    /**
     * label-success
     */
    bootstrapCss.label_success = "label-success";
    /**
     * label-success[href]:focus
     */
    bootstrapCss.label_success$href$DDfocus = "label-success[href]:focus";
    /**
     * label-success[href]:hover
     */
    bootstrapCss.label_success$href$DDhover = "label-success[href]:hover";
    /**
     * label-warning
     */
    bootstrapCss.label_warning = "label-warning";
    /**
     * label-warning[href]:focus
     */
    bootstrapCss.label_warning$href$DDfocus = "label-warning[href]:focus";
    /**
     * label-warning[href]:hover
     */
    bootstrapCss.label_warning$href$DDhover = "label-warning[href]:hover";
    /**
     * lead
     */
    bootstrapCss.lead = "lead";
    /**
     * list-group
     */
    bootstrapCss.list_group = "list-group";
    /**
     * list-group:first-child
     */
    bootstrapCss.list_groupDDfirst_child = "list-group:first-child";
    /**
     * list-group:last-child
     */
    bootstrapCss.list_groupDDlast_child = "list-group:last-child";
    /**
     * list-group-item
     */
    bootstrapCss.list_group_item = "list-group-item";
    /**
     * list-group-item.active
     */
    bootstrapCss.list_group_itemDactive = "list-group-item.active";
    /**
     * list-group-item.active:focus
     */
    bootstrapCss.list_group_itemDactiveDDfocus = "list-group-item.active:focus";
    /**
     * list-group-item.active:hover
     */
    bootstrapCss.list_group_itemDactiveDDhover = "list-group-item.active:hover";
    /**
     * list-group-item.disabled
     */
    bootstrapCss.list_group_itemDdisabled = "list-group-item.disabled";
    /**
     * list-group-item.disabled:focus
     */
    bootstrapCss.list_group_itemDdisabledDDfocus = "list-group-item.disabled:focus";
    /**
     * list-group-item.disabled:hover
     */
    bootstrapCss.list_group_itemDdisabledDDhover = "list-group-item.disabled:hover";
    /**
     * list-group-item:first-child
     */
    bootstrapCss.list_group_itemDDfirst_child = "list-group-item:first-child";
    /**
     * list-group-item:focus
     */
    bootstrapCss.list_group_itemDDfocus = "list-group-item:focus";
    /**
     * list-group-item:hover
     */
    bootstrapCss.list_group_itemDDhover = "list-group-item:hover";
    /**
     * list-group-item:last-child
     */
    bootstrapCss.list_group_itemDDlast_child = "list-group-item:last-child";
    /**
     * list-group-item-danger
     */
    bootstrapCss.list_group_item_danger = "list-group-item-danger";
    /**
     * list-group-item-danger.active
     */
    bootstrapCss.list_group_item_dangerDactive = "list-group-item-danger.active";
    /**
     * list-group-item-danger.active:focus
     */
    bootstrapCss.list_group_item_dangerDactiveDDfocus = "list-group-item-danger.active:focus";
    /**
     * list-group-item-danger.active:hover
     */
    bootstrapCss.list_group_item_dangerDactiveDDhover = "list-group-item-danger.active:hover";
    /**
     * list-group-item-danger:focus
     */
    bootstrapCss.list_group_item_dangerDDfocus = "list-group-item-danger:focus";
    /**
     * list-group-item-danger:hover
     */
    bootstrapCss.list_group_item_dangerDDhover = "list-group-item-danger:hover";
    /**
     * list-group-item-heading
     */
    bootstrapCss.list_group_item_heading = "list-group-item-heading";
    /**
     * list-group-item-info
     */
    bootstrapCss.list_group_item_info = "list-group-item-info";
    /**
     * list-group-item-info.active
     */
    bootstrapCss.list_group_item_infoDactive = "list-group-item-info.active";
    /**
     * list-group-item-info.active:focus
     */
    bootstrapCss.list_group_item_infoDactiveDDfocus = "list-group-item-info.active:focus";
    /**
     * list-group-item-info.active:hover
     */
    bootstrapCss.list_group_item_infoDactiveDDhover = "list-group-item-info.active:hover";
    /**
     * list-group-item-info:focus
     */
    bootstrapCss.list_group_item_infoDDfocus = "list-group-item-info:focus";
    /**
     * list-group-item-info:hover
     */
    bootstrapCss.list_group_item_infoDDhover = "list-group-item-info:hover";
    /**
     * list-group-item-success
     */
    bootstrapCss.list_group_item_success = "list-group-item-success";
    /**
     * list-group-item-success.active
     */
    bootstrapCss.list_group_item_successDactive = "list-group-item-success.active";
    /**
     * list-group-item-success.active:focus
     */
    bootstrapCss.list_group_item_successDactiveDDfocus = "list-group-item-success.active:focus";
    /**
     * list-group-item-success.active:hover
     */
    bootstrapCss.list_group_item_successDactiveDDhover = "list-group-item-success.active:hover";
    /**
     * list-group-item-success:focus
     */
    bootstrapCss.list_group_item_successDDfocus = "list-group-item-success:focus";
    /**
     * list-group-item-success:hover
     */
    bootstrapCss.list_group_item_successDDhover = "list-group-item-success:hover";
    /**
     * list-group-item-text
     */
    bootstrapCss.list_group_item_text = "list-group-item-text";
    /**
     * list-group-item-warning
     */
    bootstrapCss.list_group_item_warning = "list-group-item-warning";
    /**
     * list-group-item-warning.active
     */
    bootstrapCss.list_group_item_warningDactive = "list-group-item-warning.active";
    /**
     * list-group-item-warning.active:focus
     */
    bootstrapCss.list_group_item_warningDactiveDDfocus = "list-group-item-warning.active:focus";
    /**
     * list-group-item-warning.active:hover
     */
    bootstrapCss.list_group_item_warningDactiveDDhover = "list-group-item-warning.active:hover";
    /**
     * list-group-item-warning:focus
     */
    bootstrapCss.list_group_item_warningDDfocus = "list-group-item-warning:focus";
    /**
     * list-group-item-warning:hover
     */
    bootstrapCss.list_group_item_warningDDhover = "list-group-item-warning:hover";
    /**
     * list-inline
     */
    bootstrapCss.list_inline = "list-inline";
    /**
     * list-unstyled
     */
    bootstrapCss.list_unstyled = "list-unstyled";
    /**
     * mark
     */
    bootstrapCss.mark = "mark";
    /**
     * media
     */
    bootstrapCss.media = "media";
    /**
     * media:first-child
     */
    bootstrapCss.mediaDDfirst_child = "media:first-child";
    /**
     * media-body
     */
    bootstrapCss.media_body = "media-body";
    /**
     * media-bottom
     */
    bootstrapCss.media_bottom = "media-bottom";
    /**
     * media-heading
     */
    bootstrapCss.media_heading = "media-heading";
    /**
     * media-left
     */
    bootstrapCss.media_left = "media-left";
    /**
     * media-list
     */
    bootstrapCss.media_list = "media-list";
    /**
     * media-middle
     */
    bootstrapCss.media_middle = "media-middle";
    /**
     * media-object
     */
    bootstrapCss.media_object = "media-object";
    /**
     * media-object.img-thumbnail
     */
    bootstrapCss.media_objectDimg_thumbnail = "media-object.img-thumbnail";
    /**
     * media-right
     */
    bootstrapCss.media_right = "media-right";
    /**
     * Microsoft.gradient
     */
    bootstrapCss.MicrosoftDgradient = "Microsoft.gradient";
    /**
     * modal
     */
    bootstrapCss.modal = "modal";
    /**
     * modal.fade
     */
    bootstrapCss.modalDfade = "modal.fade";
    /**
     * modal.in
     */
    bootstrapCss.modalDin = "modal.in";
    /**
     * modal-backdrop
     */
    bootstrapCss.modal_backdrop = "modal-backdrop";
    /**
     * modal-backdrop.fade
     */
    bootstrapCss.modal_backdropDfade = "modal-backdrop.fade";
    /**
     * modal-backdrop.in
     */
    bootstrapCss.modal_backdropDin = "modal-backdrop.in";
    /**
     * modal-body
     */
    bootstrapCss.modal_body = "modal-body";
    /**
     * modal-content
     */
    bootstrapCss.modal_content = "modal-content";
    /**
     * modal-dialog
     */
    bootstrapCss.modal_dialog = "modal-dialog";
    /**
     * modal-footer
     */
    bootstrapCss.modal_footer = "modal-footer";
    /**
     * modal-footer:after
     */
    bootstrapCss.modal_footerDDafter = "modal-footer:after";
    /**
     * modal-footer:before
     */
    bootstrapCss.modal_footerDDbefore = "modal-footer:before";
    /**
     * modal-header
     */
    bootstrapCss.modal_header = "modal-header";
    /**
     * modal-header:after
     */
    bootstrapCss.modal_headerDDafter = "modal-header:after";
    /**
     * modal-header:before
     */
    bootstrapCss.modal_headerDDbefore = "modal-header:before";
    /**
     * modal-lg
     */
    bootstrapCss.modal_lg = "modal-lg";
    /**
     * modal-open
     */
    bootstrapCss.modal_open = "modal-open";
    /**
     * modal-scrollbar-measure
     */
    bootstrapCss.modal_scrollbar_measure = "modal-scrollbar-measure";
    /**
     * modal-sm
     */
    bootstrapCss.modal_sm = "modal-sm";
    /**
     * modal-title
     */
    bootstrapCss.modal_title = "modal-title";
    /**
     * nav
     */
    bootstrapCss.nav = "nav";
    /**
     * nav:after
     */
    bootstrapCss.navDDafter = "nav:after";
    /**
     * nav:before
     */
    bootstrapCss.navDDbefore = "nav:before";
    /**
     * navbar
     */
    bootstrapCss.navbar = "navbar";
    /**
     * navbar:after
     */
    bootstrapCss.navbarDDafter = "navbar:after";
    /**
     * navbar:before
     */
    bootstrapCss.navbarDDbefore = "navbar:before";
    /**
     * navbar-brand
     */
    bootstrapCss.navbar_brand = "navbar-brand";
    /**
     * navbar-brand:focus
     */
    bootstrapCss.navbar_brandDDfocus = "navbar-brand:focus";
    /**
     * navbar-brand:hover
     */
    bootstrapCss.navbar_brandDDhover = "navbar-brand:hover";
    /**
     * navbar-btn
     */
    bootstrapCss.navbar_btn = "navbar-btn";
    /**
     * navbar-btn.btn-sm
     */
    bootstrapCss.navbar_btnDbtn_sm = "navbar-btn.btn-sm";
    /**
     * navbar-btn.btn-xs
     */
    bootstrapCss.navbar_btnDbtn_xs = "navbar-btn.btn-xs";
    /**
     * navbar-collapse
     */
    bootstrapCss.navbar_collapse = "navbar-collapse";
    /**
     * navbar-collapse.collapse
     */
    bootstrapCss.navbar_collapseDcollapse = "navbar-collapse.collapse";
    /**
     * navbar-collapse.in
     */
    bootstrapCss.navbar_collapseDin = "navbar-collapse.in";
    /**
     * navbar-collapse:after
     */
    bootstrapCss.navbar_collapseDDafter = "navbar-collapse:after";
    /**
     * navbar-collapse:before
     */
    bootstrapCss.navbar_collapseDDbefore = "navbar-collapse:before";
    /**
     * navbar-default
     */
    bootstrapCss.navbar_default = "navbar-default";
    /**
     * navbar-fixed-bottom
     */
    bootstrapCss.navbar_fixed_bottom = "navbar-fixed-bottom";
    /**
     * navbar-fixed-top
     */
    bootstrapCss.navbar_fixed_top = "navbar-fixed-top";
    /**
     * navbar-form
     */
    bootstrapCss.navbar_form = "navbar-form";
    /**
     * navbar-header
     */
    bootstrapCss.navbar_header = "navbar-header";
    /**
     * navbar-header:after
     */
    bootstrapCss.navbar_headerDDafter = "navbar-header:after";
    /**
     * navbar-header:before
     */
    bootstrapCss.navbar_headerDDbefore = "navbar-header:before";
    /**
     * navbar-inverse
     */
    bootstrapCss.navbar_inverse = "navbar-inverse";
    /**
     * navbar-left
     */
    bootstrapCss.navbar_left = "navbar-left";
    /**
     * navbar-link
     */
    bootstrapCss.navbar_link = "navbar-link";
    /**
     * navbar-link:hover
     */
    bootstrapCss.navbar_linkDDhover = "navbar-link:hover";
    /**
     * navbar-nav
     */
    bootstrapCss.navbar_nav = "navbar-nav";
    /**
     * navbar-right
     */
    bootstrapCss.navbar_right = "navbar-right";
    /**
     * navbar-static-top
     */
    bootstrapCss.navbar_static_top = "navbar-static-top";
    /**
     * navbar-text
     */
    bootstrapCss.navbar_text = "navbar-text";
    /**
     * navbar-toggle
     */
    bootstrapCss.navbar_toggle = "navbar-toggle";
    /**
     * navbar-toggle:focus
     */
    bootstrapCss.navbar_toggleDDfocus = "navbar-toggle:focus";
    /**
     * navbar-toggle:hover
     */
    bootstrapCss.navbar_toggleDDhover = "navbar-toggle:hover";
    /**
     * nav-divider
     */
    bootstrapCss.nav_divider = "nav-divider";
    /**
     * nav-justified
     */
    bootstrapCss.nav_justified = "nav-justified";
    /**
     * nav-pills
     */
    bootstrapCss.nav_pills = "nav-pills";
    /**
     * nav-stacked
     */
    bootstrapCss.nav_stacked = "nav-stacked";
    /**
     * nav-tabs
     */
    bootstrapCss.nav_tabs = "nav-tabs";
    /**
     * nav-tabs.nav-justified
     */
    bootstrapCss.nav_tabsDnav_justified = "nav-tabs.nav-justified";
    /**
     * nav-tabs-justified
     */
    bootstrapCss.nav_tabs_justified = "nav-tabs-justified";
    /**
     * next
     */
    bootstrapCss.next = "next";
    /**
     * next.left
     */
    bootstrapCss.nextDleft = "next.left";
    /**
     * open
     */
    bootstrapCss.open = "open";
    /**
     * page-header
     */
    bootstrapCss.page_header = "page-header";
    /**
     * pager
     */
    bootstrapCss.pager = "pager";
    /**
     * pager:after
     */
    bootstrapCss.pagerDDafter = "pager:after";
    /**
     * pager:before
     */
    bootstrapCss.pagerDDbefore = "pager:before";
    /**
     * pagination
     */
    bootstrapCss.pagination = "pagination";
    /**
     * pagination-lg
     */
    bootstrapCss.pagination_lg = "pagination-lg";
    /**
     * pagination-sm
     */
    bootstrapCss.pagination_sm = "pagination-sm";
    /**
     * panel
     */
    bootstrapCss.panel = "panel";
    /**
     * panel-body
     */
    bootstrapCss.panel_body = "panel-body";
    /**
     * panel-body:after
     */
    bootstrapCss.panel_bodyDDafter = "panel-body:after";
    /**
     * panel-body:before
     */
    bootstrapCss.panel_bodyDDbefore = "panel-body:before";
    /**
     * panel-collapse
     */
    bootstrapCss.panel_collapse = "panel-collapse";
    /**
     * panel-danger
     */
    bootstrapCss.panel_danger = "panel-danger";
    /**
     * panel-default
     */
    bootstrapCss.panel_default = "panel-default";
    /**
     * panel-footer
     */
    bootstrapCss.panel_footer = "panel-footer";
    /**
     * panel-group
     */
    bootstrapCss.panel_group = "panel-group";
    /**
     * panel-heading
     */
    bootstrapCss.panel_heading = "panel-heading";
    /**
     * panel-info
     */
    bootstrapCss.panel_info = "panel-info";
    /**
     * panel-primary
     */
    bootstrapCss.panel_primary = "panel-primary";
    /**
     * panel-success
     */
    bootstrapCss.panel_success = "panel-success";
    /**
     * panel-title
     */
    bootstrapCss.panel_title = "panel-title";
    /**
     * panel-warning
     */
    bootstrapCss.panel_warning = "panel-warning";
    /**
     * popover
     */
    bootstrapCss.popover = "popover";
    /**
     * popover.bottom
     */
    bootstrapCss.popoverDbottom = "popover.bottom";
    /**
     * popover.left
     */
    bootstrapCss.popoverDleft = "popover.left";
    /**
     * popover.right
     */
    bootstrapCss.popoverDright = "popover.right";
    /**
     * popover.top
     */
    bootstrapCss.popoverDtop = "popover.top";
    /**
     * popover-content
     */
    bootstrapCss.popover_content = "popover-content";
    /**
     * popover-title
     */
    bootstrapCss.popover_title = "popover-title";
    /**
     * pre-scrollable
     */
    bootstrapCss.pre_scrollable = "pre-scrollable";
    /**
     * prev
     */
    bootstrapCss.prev = "prev";
    /**
     * prev.right
     */
    bootstrapCss.prevDright = "prev.right";
    /**
     * previous
     */
    bootstrapCss.previous = "previous";
    /**
     * progress
     */
    bootstrapCss.progress = "progress";
    /**
     * progress.active
     */
    bootstrapCss.progressDactive = "progress.active";
    /**
     * progress-bar
     */
    bootstrapCss.progress_bar = "progress-bar";
    /**
     * progress-bar.active
     */
    bootstrapCss.progress_barDactive = "progress-bar.active";
    /**
     * progress-bar-danger
     */
    bootstrapCss.progress_bar_danger = "progress-bar-danger";
    /**
     * progress-bar-info
     */
    bootstrapCss.progress_bar_info = "progress-bar-info";
    /**
     * progress-bar-striped
     */
    bootstrapCss.progress_bar_striped = "progress-bar-striped";
    /**
     * progress-bar-success
     */
    bootstrapCss.progress_bar_success = "progress-bar-success";
    /**
     * progress-bar-warning
     */
    bootstrapCss.progress_bar_warning = "progress-bar-warning";
    /**
     * progress-striped
     */
    bootstrapCss.progress_striped = "progress-striped";
    /**
     * pull-left
     */
    bootstrapCss.pull_left = "pull-left";
    /**
     * pull-right
     */
    bootstrapCss.pull_right = "pull-right";
    /**
     * radio
     */
    bootstrapCss.radio = "radio";
    /**
     * radio.disabled
     */
    bootstrapCss.radioDdisabled = "radio.disabled";
    /**
     * radio-inline
     */
    bootstrapCss.radio_inline = "radio-inline";
    /**
     * radio-inline.disabled
     */
    bootstrapCss.radio_inlineDdisabled = "radio-inline.disabled";
    /**
     * row
     */
    bootstrapCss.row = "row";
    /**
     * row:after
     */
    bootstrapCss.rowDDafter = "row:after";
    /**
     * row:before
     */
    bootstrapCss.rowDDbefore = "row:before";
    /**
     * show
     */
    bootstrapCss.show = "show";
    /**
     * small
     */
    bootstrapCss.small = "small";
    /**
     * small:after
     */
    bootstrapCss.smallDDafter = "small:after";
    /**
     * small:before
     */
    bootstrapCss.smallDDbefore = "small:before";
    /**
     * sr-only
     */
    bootstrapCss.sr_only = "sr-only";
    /**
     * sr-only-focusable:active
     */
    bootstrapCss.sr_only_focusableDDactive = "sr-only-focusable:active";
    /**
     * sr-only-focusable:focus
     */
    bootstrapCss.sr_only_focusableDDfocus = "sr-only-focusable:focus";
    /**
     * success
     */
    bootstrapCss.success = "success";
    /**
     * success:hover
     */
    bootstrapCss.successDDhover = "success:hover";
    /**
     * svg
     */
    bootstrapCss.svg = "svg";
    /**
     * tab-content
     */
    bootstrapCss.tab_content = "tab-content";
    /**
     * table
     */
    bootstrapCss.table = "table";
    /**
     * table:first-child
     */
    bootstrapCss.tableDDfirst_child = "table:first-child";
    /**
     * table:last-child
     */
    bootstrapCss.tableDDlast_child = "table:last-child";
    /**
     * table-bordered
     */
    bootstrapCss.table_bordered = "table-bordered";
    /**
     * table-condensed
     */
    bootstrapCss.table_condensed = "table-condensed";
    /**
     * table-hover
     */
    bootstrapCss.table_hover = "table-hover";
    /**
     * table-responsive
     */
    bootstrapCss.table_responsive = "table-responsive";
    /**
     * table-responsive:first-child
     */
    bootstrapCss.table_responsiveDDfirst_child = "table-responsive:first-child";
    /**
     * table-responsive:last-child
     */
    bootstrapCss.table_responsiveDDlast_child = "table-responsive:last-child";
    /**
     * table-striped
     */
    bootstrapCss.table_striped = "table-striped";
    /**
     * tab-pane
     */
    bootstrapCss.tab_pane = "tab-pane";
    /**
     * text-capitalize
     */
    bootstrapCss.text_capitalize = "text-capitalize";
    /**
     * text-center
     */
    bootstrapCss.text_center = "text-center";
    /**
     * text-danger
     */
    bootstrapCss.text_danger = "text-danger";
    /**
     * text-danger:focus
     */
    bootstrapCss.text_dangerDDfocus = "text-danger:focus";
    /**
     * text-danger:hover
     */
    bootstrapCss.text_dangerDDhover = "text-danger:hover";
    /**
     * text-hide
     */
    bootstrapCss.text_hide = "text-hide";
    /**
     * text-info
     */
    bootstrapCss.text_info = "text-info";
    /**
     * text-info:focus
     */
    bootstrapCss.text_infoDDfocus = "text-info:focus";
    /**
     * text-info:hover
     */
    bootstrapCss.text_infoDDhover = "text-info:hover";
    /**
     * text-justify
     */
    bootstrapCss.text_justify = "text-justify";
    /**
     * text-left
     */
    bootstrapCss.text_left = "text-left";
    /**
     * text-lowercase
     */
    bootstrapCss.text_lowercase = "text-lowercase";
    /**
     * text-muted
     */
    bootstrapCss.text_muted = "text-muted";
    /**
     * text-nowrap
     */
    bootstrapCss.text_nowrap = "text-nowrap";
    /**
     * text-primary
     */
    bootstrapCss.text_primary = "text-primary";
    /**
     * text-primary:focus
     */
    bootstrapCss.text_primaryDDfocus = "text-primary:focus";
    /**
     * text-primary:hover
     */
    bootstrapCss.text_primaryDDhover = "text-primary:hover";
    /**
     * text-right
     */
    bootstrapCss.text_right = "text-right";
    /**
     * text-success
     */
    bootstrapCss.text_success = "text-success";
    /**
     * text-success:focus
     */
    bootstrapCss.text_successDDfocus = "text-success:focus";
    /**
     * text-success:hover
     */
    bootstrapCss.text_successDDhover = "text-success:hover";
    /**
     * text-uppercase
     */
    bootstrapCss.text_uppercase = "text-uppercase";
    /**
     * text-warning
     */
    bootstrapCss.text_warning = "text-warning";
    /**
     * text-warning:focus
     */
    bootstrapCss.text_warningDDfocus = "text-warning:focus";
    /**
     * text-warning:hover
     */
    bootstrapCss.text_warningDDhover = "text-warning:hover";
    /**
     * thumbnail
     */
    bootstrapCss.thumbnail = "thumbnail";
    /**
     * thumbnail.active
     */
    bootstrapCss.thumbnailDactive = "thumbnail.active";
    /**
     * thumbnail:focus
     */
    bootstrapCss.thumbnailDDfocus = "thumbnail:focus";
    /**
     * thumbnail:hover
     */
    bootstrapCss.thumbnailDDhover = "thumbnail:hover";
    /**
     * tooltip
     */
    bootstrapCss.tooltip = "tooltip";
    /**
     * tooltip.bottom
     */
    bootstrapCss.tooltipDbottom = "tooltip.bottom";
    /**
     * tooltip.bottom-left
     */
    bootstrapCss.tooltipDbottom_left = "tooltip.bottom-left";
    /**
     * tooltip.bottom-right
     */
    bootstrapCss.tooltipDbottom_right = "tooltip.bottom-right";
    /**
     * tooltip.in
     */
    bootstrapCss.tooltipDin = "tooltip.in";
    /**
     * tooltip.left
     */
    bootstrapCss.tooltipDleft = "tooltip.left";
    /**
     * tooltip.right
     */
    bootstrapCss.tooltipDright = "tooltip.right";
    /**
     * tooltip.top
     */
    bootstrapCss.tooltipDtop = "tooltip.top";
    /**
     * tooltip.top-left
     */
    bootstrapCss.tooltipDtop_left = "tooltip.top-left";
    /**
     * tooltip.top-right
     */
    bootstrapCss.tooltipDtop_right = "tooltip.top-right";
    /**
     * tooltip-arrow
     */
    bootstrapCss.tooltip_arrow = "tooltip-arrow";
    /**
     * tooltip-inner
     */
    bootstrapCss.tooltip_inner = "tooltip-inner";
    /**
     * ttf
     */
    bootstrapCss.ttf = "ttf";
    /**
     * visible-lg
     */
    bootstrapCss.visible_lg = "visible-lg";
    /**
     * visible-lg-block
     */
    bootstrapCss.visible_lg_block = "visible-lg-block";
    /**
     * visible-lg-inline
     */
    bootstrapCss.visible_lg_inline = "visible-lg-inline";
    /**
     * visible-lg-inline-block
     */
    bootstrapCss.visible_lg_inline_block = "visible-lg-inline-block";
    /**
     * visible-md
     */
    bootstrapCss.visible_md = "visible-md";
    /**
     * visible-md-block
     */
    bootstrapCss.visible_md_block = "visible-md-block";
    /**
     * visible-md-inline
     */
    bootstrapCss.visible_md_inline = "visible-md-inline";
    /**
     * visible-md-inline-block
     */
    bootstrapCss.visible_md_inline_block = "visible-md-inline-block";
    /**
     * visible-print
     */
    bootstrapCss.visible_print = "visible-print";
    /**
     * visible-print-block
     */
    bootstrapCss.visible_print_block = "visible-print-block";
    /**
     * visible-print-inline
     */
    bootstrapCss.visible_print_inline = "visible-print-inline";
    /**
     * visible-print-inline-block
     */
    bootstrapCss.visible_print_inline_block = "visible-print-inline-block";
    /**
     * visible-sm
     */
    bootstrapCss.visible_sm = "visible-sm";
    /**
     * visible-sm-block
     */
    bootstrapCss.visible_sm_block = "visible-sm-block";
    /**
     * visible-sm-inline
     */
    bootstrapCss.visible_sm_inline = "visible-sm-inline";
    /**
     * visible-sm-inline-block
     */
    bootstrapCss.visible_sm_inline_block = "visible-sm-inline-block";
    /**
     * visible-xs
     */
    bootstrapCss.visible_xs = "visible-xs";
    /**
     * visible-xs-block
     */
    bootstrapCss.visible_xs_block = "visible-xs-block";
    /**
     * visible-xs-inline
     */
    bootstrapCss.visible_xs_inline = "visible-xs-inline";
    /**
     * visible-xs-inline-block
     */
    bootstrapCss.visible_xs_inline_block = "visible-xs-inline-block";
    /**
     * warning
     */
    bootstrapCss.warning = "warning";
    /**
     * warning:hover
     */
    bootstrapCss.warningDDhover = "warning:hover";
    /**
     * well
     */
    bootstrapCss.well = "well";
    /**
     * well-lg
     */
    bootstrapCss.well_lg = "well-lg";
    /**
     * well-sm
     */
    bootstrapCss.well_sm = "well-sm";
    /**
     * woff
     */
    bootstrapCss.woff = "woff";
    /**
     * woff2
     */
    bootstrapCss.woff2 = "woff2";
})(bootstrapCss || (bootstrapCss = {}));
//# sourceMappingURL=bootstrapCss.js.map