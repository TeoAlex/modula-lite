/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/general-settings/Content.jsx":
/*!*******************************************!*\
  !*** ./apps/general-settings/Content.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_useStateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/useStateContext */ "./apps/general-settings/context/useStateContext.js");
/* harmony import */ var _query_useTabsQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query/useTabsQuery */ "./apps/general-settings/query/useTabsQuery.js");
/* harmony import */ var _SettingsForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingsForm */ "./apps/general-settings/SettingsForm.jsx");
/* harmony import */ var _SaveButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SaveButton */ "./apps/general-settings/SaveButton.jsx");
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Content.module.scss */ "./apps/general-settings/Content.module.scss");







function Content() {
  const {
    state
  } = (0,_context_useStateContext__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    isLoading
  } = (0,_query_useTabsQuery__WEBPACK_IMPORTED_MODULE_3__.useTabsQuery)();
  if (!data || isLoading) {
    return null;
  }
  const activeTab = data.find(tab => tab.slug === state.activeTab);
  if (!activeTab || !activeTab.subtabs) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: _Content_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].pageContent
  }, Object.entries(activeTab.subtabs).map(([subtabSlug, subtabData]) => {
    if (!subtabData || Object.keys(subtabData).length === 0) {
      return null;
    }
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, {
      className: _Content_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].accordionWrapper,
      key: subtabSlug
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: _Content_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].accordionPannel,
      key: subtabSlug,
      title: /*#__PURE__*/React.createElement("span", {
        className: _Content_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].accordionTitle
      }, /*#__PURE__*/React.createElement("span", null, subtabData.label), subtabData.badge && /*#__PURE__*/React.createElement("span", {
        className: _Content_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].proBadge
      }, ' ', subtabData.badge, ' ')),
      initialOpen: true
    }, /*#__PURE__*/React.createElement(_SettingsForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: subtabData?.config || {},
      locked: subtabData?.locked || false,
      badge: subtabData?.badge || ''
    }), subtabData?.locked === false && /*#__PURE__*/React.createElement(_SaveButton__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  }));
}

/***/ }),

/***/ "./apps/general-settings/Content.module.scss":
/*!***************************************************!*\
  !*** ./apps/general-settings/Content.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"pageContent":"qNW_zmTb3NUoWlvbYk3r","accordionWrapper":"oj77RRX29OooN4a1TS3X","last":"eqCUVlXmIzsMGvvkltDF","proBadge":"M5s5kgeQtvy8YqDDIG0H","accordionTitle":"TsIOZH410Db6b7ji8cba","triangleIcon":"zW33_tNYc_YbpjeOSOgi"});

/***/ }),

/***/ "./apps/general-settings/FieldRenderer.jsx":
/*!*************************************************!*\
  !*** ./apps/general-settings/FieldRenderer.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fields_ToggleField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields/ToggleField */ "./apps/general-settings/fields/ToggleField.jsx");
/* harmony import */ var _fields_ToggleOptionsField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fields/ToggleOptionsField */ "./apps/general-settings/fields/ToggleOptionsField.jsx");
/* harmony import */ var _fields_SelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/SelectField */ "./apps/general-settings/fields/SelectField.jsx");
/* harmony import */ var _fields_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fields/TextField */ "./apps/general-settings/fields/TextField.jsx");
/* harmony import */ var _fields_NumberField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields/NumberField */ "./apps/general-settings/fields/NumberField.jsx");
/* harmony import */ var _fields_RadioField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields/RadioField */ "./apps/general-settings/fields/RadioField.jsx");
/* harmony import */ var _fields_TextareaField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fields/TextareaField */ "./apps/general-settings/fields/TextareaField.jsx");
/* harmony import */ var _fields_RadioGroupField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fields/RadioGroupField */ "./apps/general-settings/fields/RadioGroupField.jsx");
/* harmony import */ var _fields_RangeSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fields/RangeSelect */ "./apps/general-settings/fields/RangeSelect.jsx");
/* harmony import */ var _fields_ImageSelectField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields/ImageSelectField */ "./apps/general-settings/fields/ImageSelectField.jsx");
/* harmony import */ var _fields_ImportCheckboxGroupField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/ImportCheckboxGroupField */ "./apps/general-settings/fields/ImportCheckboxGroupField.jsx");
/* harmony import */ var _fields_Paragraph__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fields/Paragraph */ "./apps/general-settings/fields/Paragraph.jsx");













const FieldRenderer = ({
  field,
  fieldState,
  handleChange,
  disabled = false
}) => {
  switch (field.type) {
    case 'toggle':
      return /*#__PURE__*/React.createElement(_fields_ToggleField__WEBPACK_IMPORTED_MODULE_1__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val),
        disabled: disabled
      });
    case 'options_toggle':
      return /*#__PURE__*/React.createElement(_fields_ToggleOptionsField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val),
        trueValue: field.trueValue,
        falseValue: field.falseValue,
        disabled: disabled
      });
    case 'select':
      return /*#__PURE__*/React.createElement(_fields_SelectField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val),
        disabled: disabled
      });
    case 'text':
      return /*#__PURE__*/React.createElement(_fields_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val),
        disabled: disabled
      });
    case 'number':
      return /*#__PURE__*/React.createElement(_fields_NumberField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val),
        disabled: disabled
      });
    case 'radio':
      return /*#__PURE__*/React.createElement(_fields_RadioField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val)
      });
    case 'textarea':
      return /*#__PURE__*/React.createElement(_fields_TextareaField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val)
      });
    case 'ia_radio':
      return /*#__PURE__*/React.createElement(_fields_RadioGroupField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val)
      });
    case 'range_select':
      return /*#__PURE__*/React.createElement(_fields_RangeSelect__WEBPACK_IMPORTED_MODULE_9__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val)
      });
    case 'image_select':
      return /*#__PURE__*/React.createElement(_fields_ImageSelectField__WEBPACK_IMPORTED_MODULE_10__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val)
      });
    case 'checkbox_group':
      return /*#__PURE__*/React.createElement(_fields_ImportCheckboxGroupField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        fieldState: fieldState,
        field: field,
        handleChange: val => handleChange(fieldState, field.name, val)
      });
    case 'paragraph':
      return /*#__PURE__*/React.createElement(_fields_Paragraph__WEBPACK_IMPORTED_MODULE_12__["default"], {
        field: field
      });
    default:
      return null;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldRenderer);

/***/ }),

/***/ "./apps/general-settings/LockedForm.jsx":
/*!**********************************************!*\
  !*** ./apps/general-settings/LockedForm.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LockedForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LockedForm_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LockedForm.module.scss */ "./apps/general-settings/LockedForm.module.scss");



function LockedForm({
  badge
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: _LockedForm_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lockedForm
  }, /*#__PURE__*/React.createElement("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(/* translators: %s: plan name */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Feature available starting with the %s plan.', 'modula-best-grid-gallery'), badge.charAt(0).toUpperCase() + badge.slice(1))));
}

/***/ }),

/***/ "./apps/general-settings/LockedForm.module.scss":
/*!******************************************************!*\
  !*** ./apps/general-settings/LockedForm.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"lockedForm":"w07_KR5YF5nRqJfgTMEr"});

/***/ }),

/***/ "./apps/general-settings/Navigation.jsx":
/*!**********************************************!*\
  !*** ./apps/general-settings/Navigation.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_useStateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/useStateContext */ "./apps/general-settings/context/useStateContext.js");
/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/actions */ "./apps/general-settings/context/actions.js");
/* harmony import */ var _query_useTabsQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query/useTabsQuery */ "./apps/general-settings/query/useTabsQuery.js");
/* harmony import */ var _shared_components_navigation_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared-components/navigation.module.scss */ "./apps/shared-components/navigation.module.scss");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);







function Navigation() {
  const {
    state,
    dispatch
  } = (0,_context_useStateContext__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    data,
    isLoading
  } = (0,_query_useTabsQuery__WEBPACK_IMPORTED_MODULE_4__.useTabsQuery)();
  const handleClick = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useCallback)(slug => {
    if (window && window.history && window.location) {
      const url = new URL(window.location);
      url.searchParams.set('tab', slug);
      window.history.replaceState({}, '', url);
    }
    dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_3__.setActiveTab)(slug));
  }, [dispatch]);
  if ('undefined' === data || isLoading) {
    return;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: _shared_components_navigation_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].pageNavigation
  }, data.map(({
    label,
    slug,
    type = 'button',
    target = false
  }) => {
    const isLink = type === 'link';
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: slug,
      href: isLink ? slug : undefined,
      target: isLink && target ? '_blank' : undefined,
      rel: isLink && target ? 'noopener noreferrer' : undefined,
      onClick: () => handleClick(slug),
      className: `${_shared_components_navigation_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].headerButton} ${state.activeTab === slug ? _shared_components_navigation_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].headerButtonActive : ''}`
    }, label);
  }));
}

/***/ }),

/***/ "./apps/general-settings/RolesToggle.jsx":
/*!***********************************************!*\
  !*** ./apps/general-settings/RolesToggle.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RolesToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RolesToggle_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RolesToggle.module.scss */ "./apps/general-settings/RolesToggle.module.scss");




function RolesToggle({
  submenu,
  form
}) {
  const [active, setActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(submenu.options[0]?.value);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    form.setFieldValue('activeToggle', active);
  }, [active, form]);
  const handleClick = key => {
    setActive(key);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _RolesToggle_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].submenuToggleWrapper
  }, submenu.options.map(({
    label,
    value
  }) => /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    key: value,
    variant: active === value ? 'primary' : 'secondary',
    onClick: () => handleClick(value)
  }, label)));
}

/***/ }),

/***/ "./apps/general-settings/RolesToggle.module.scss":
/*!*******************************************************!*\
  !*** ./apps/general-settings/RolesToggle.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"submenuToggleWrapper":"W_K68GHJbzYteueywcKe"});

/***/ }),

/***/ "./apps/general-settings/SaveButton.jsx":
/*!**********************************************!*\
  !*** ./apps/general-settings/SaveButton.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SaveButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_useStateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/useStateContext */ "./apps/general-settings/context/useStateContext.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _query_useSettingsMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query/useSettingsMutation */ "./apps/general-settings/query/useSettingsMutation.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/actions */ "./apps/general-settings/context/actions.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SaveButton_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SaveButton.module.scss */ "./apps/general-settings/SaveButton.module.scss");








function SaveButton() {
  const {
    state,
    dispatch
  } = (0,_context_useStateContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const settingsMutation = (0,_query_useSettingsMutation__WEBPACK_IMPORTED_MODULE_3__.useSettingsMutation)();
  const [showNotice, setShowNotice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const isEmpty = Object.keys(state.options || {}).length === 0;
  const handleClick = () => {
    settingsMutation.mutate(state.options, {
      onSuccess: () => {
        // Reset updated but not saved settings.
        dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_5__.setOptions)({}));
        setShowNotice(true);
      }
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (showNotice) {
      const timer = setTimeout(() => setShowNotice(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotice]);
  return /*#__PURE__*/React.createElement("div", {
    className: _SaveButton_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].saveSettingsWrap
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: handleClick,
    disabled: settingsMutation.isLoading || isEmpty,
    variant: "primary"
  }, settingsMutation.isLoading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Saving…', 'modula-best-grid-gallery') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Apply', 'modula-best-grid-gallery')), showNotice && /*#__PURE__*/React.createElement("div", {
    className: _SaveButton_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].saveNotice + ' ' + _SaveButton_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].slideIn
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Settings saved successfully!', 'modula-best-grid-gallery')));
}

/***/ }),

/***/ "./apps/general-settings/SaveButton.module.scss":
/*!******************************************************!*\
  !*** ./apps/general-settings/SaveButton.module.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"saveSettingsWrap":"FiY51rBlmjTocTgrpJmQ","saveNotice":"rZvcCITxolVdOqiuj24R","slideIn":"i_bI8pGEgrEsttD3cAT5","slideInRight":"AMUa5Z0W8ZIfRxXOWx3v","slideOutLeft":"dnvM0967pQhVdyJP4oKO"});

/***/ }),

/***/ "./apps/general-settings/SettingsForm.jsx":
/*!************************************************!*\
  !*** ./apps/general-settings/SettingsForm.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tanstack/react-form */ "./node_modules/@tanstack/react-form/dist/esm/useForm.js");
/* harmony import */ var _tanstack_react_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tanstack/react-form */ "./node_modules/@tanstack/react-form/node_modules/@tanstack/react-store/dist/esm/index.js");
/* harmony import */ var _FieldRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldRenderer */ "./apps/general-settings/FieldRenderer.jsx");
/* harmony import */ var _ai_settings_ai_settings_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ai-settings/ai-settings-form */ "./apps/general-settings/ai-settings/ai-settings-form.jsx");
/* harmony import */ var _fields_ButtonField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fields/ButtonField */ "./apps/general-settings/fields/ButtonField.jsx");
/* harmony import */ var _fields_Paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fields/Paragraph */ "./apps/general-settings/fields/Paragraph.jsx");
/* harmony import */ var _fields_ComboField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields/ComboField */ "./apps/general-settings/fields/ComboField.jsx");
/* harmony import */ var _fields_RoleField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fields/RoleField */ "./apps/general-settings/fields/RoleField.jsx");
/* harmony import */ var _UpsellBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UpsellBlock */ "./apps/general-settings/UpsellBlock.jsx");
/* harmony import */ var _RolesToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RolesToggle */ "./apps/general-settings/RolesToggle.jsx");
/* harmony import */ var _context_useStateContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context/useStateContext */ "./apps/general-settings/context/useStateContext.js");
/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context/actions */ "./apps/general-settings/context/actions.js");
/* harmony import */ var _LockedForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LockedForm */ "./apps/general-settings/LockedForm.jsx");
/* harmony import */ var _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SettingsForm.module.scss */ "./apps/general-settings/SettingsForm.module.scss");














function setDefaultValue(acc, option, name, defaultValue) {
  if (!name) {
    return acc;
  }
  if (name.includes('.')) {
    const [parent, child] = name.split('.');
    if (option) {
      acc[option] = acc[option] || {};
      acc[option][parent] = acc[option][parent] || {};
      acc[option][parent][child] = defaultValue !== null && defaultValue !== void 0 ? defaultValue : '';
    } else {
      acc[parent] = acc[parent] || {};
      acc[parent][child] = defaultValue !== null && defaultValue !== void 0 ? defaultValue : '';
    }
  } else if (option) {
    acc[option] = acc[option] || {};
    acc[option][name] = defaultValue !== null && defaultValue !== void 0 ? defaultValue : '';
  } else {
    acc[name] = defaultValue !== null && defaultValue !== void 0 ? defaultValue : '';
  }
}
function SettingsForm({
  config,
  locked,
  badge
}) {
  const {
    state,
    dispatch
  } = (0,_context_useStateContext__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    option,
    fields = []
  } = config;
  const form = (0,_tanstack_react_form__WEBPACK_IMPORTED_MODULE_13__.useForm)({
    defaultValues: fields.reduce((acc, field) => {
      switch (field.type) {
        case 'combo':
          field.fields.forEach(comboField => {
            setDefaultValue(acc, option, comboField.name, comboField.default);
          });
          break;
        case 'role':
          // Enable role field
          setDefaultValue(acc, option, field.name, field.default);
          // Capabilities
          field.fields.forEach(comboField => {
            setDefaultValue(acc, option, comboField.name, comboField.default);
          });
          break;
        case 'button':
        case 'paragraph':
          // We skip these
          break;
        default:
          setDefaultValue(acc, option, field.name, field.default);
          break;
      }
      return acc;
    }, {})
  });
  const values = form.store.state.values;
  const formValues = option ? values[option] || {} : values;
  const handleSave = (opt, val) => {
    dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_10__.setOptions)({
      ...state.options,
      [opt]: val
    }));
  };
  const operators = {
    '===': (a, b) => a === b,
    '!==': (a, b) => a !== b,
    '>': (a, b) => a > b,
    '<': (a, b) => a < b,
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b
  };
  const evaluateConditions = conditions => {
    if (!conditions) {
      return true;
    }
    return conditions.every(({
      field,
      comparison,
      value
    }) => {
      const keys = field.split('.');
      let val = formValues;
      for (const key of keys) {
        val = val?.[key];
      }
      return operators[comparison](val !== null && val !== void 0 ? val : null, value);
    });
  };
  const handleChange = (fieldState, fieldName, newValue) => {
    fieldState.handleChange(newValue);
    const allValues = form.store.state.values;
    const updatedFormValues = option ? {
      ...allValues[option]
    } : {
      ...allValues
    };
    if (fieldName.includes('.')) {
      const [parent, child] = fieldName.split('.');
      updatedFormValues[parent] = updatedFormValues[parent] || {};
      updatedFormValues[parent][child] = newValue;
    } else {
      updatedFormValues[fieldName] = newValue;
    }
    if (option) {
      handleSave(option, updatedFormValues);
    } else if (fieldName.includes('.')) {
      const [parent] = fieldName.split('.');
      handleSave(parent, updatedFormValues[parent]);
    } else {
      handleSave(fieldName, newValue);
    }
  };
  const activeToggle = (0,_tanstack_react_form__WEBPACK_IMPORTED_MODULE_14__.useStore)(form.store, statex => statex.values.activeToggle) || '';
  if (!config || !fields) {
    return /*#__PURE__*/React.createElement("p", null, "Loading settings...");
  }
  if (fields.length === 0) {
    return /*#__PURE__*/React.createElement("div", null, "\u2699\uFE0F No settings found.");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fieldWrapper
  }, locked && /*#__PURE__*/React.createElement(_LockedForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
    badge: badge
  }), config.submenu && /*#__PURE__*/React.createElement(_RolesToggle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    form: form,
    submenu: config.submenu
  }), fields.map((field, index) => {
    if (!evaluateConditions(field.conditions)) {
      return null;
    }
    if (field.type === 'role') {
      return /*#__PURE__*/React.createElement(_fields_RoleField__WEBPACK_IMPORTED_MODULE_6__.RoleField, {
        key: field?.name || index,
        option: option,
        mainField: field,
        form: form,
        handleChange: handleChange
      });
    }
    if (field.group && field.group !== activeToggle) {
      return null;
    }
    if (field.type === 'modula_ai') {
      return /*#__PURE__*/React.createElement(_ai_settings_ai_settings_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: field?.name || index
      });
    }
    if (field.type === 'combo') {
      return /*#__PURE__*/React.createElement("div", {
        key: field?.name || index,
        className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fieldWrapper + ' ' + _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].comboFieldWrapper
      }, /*#__PURE__*/React.createElement(_fields_ComboField__WEBPACK_IMPORTED_MODULE_5__.ComboField, {
        option: option,
        field: field,
        form: form,
        handleChange: handleChange,
        evaluateConditions: evaluateConditions
      }));
    }
    if (field.type === 'button') {
      return /*#__PURE__*/React.createElement("div", {
        key: field?.name || index,
        className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fieldWrapper
      }, /*#__PURE__*/React.createElement(_fields_ButtonField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        field: field
      }));
    }
    if (field.type === 'paragraph') {
      return /*#__PURE__*/React.createElement("div", {
        key: field?.name || index,
        className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fieldWrapper
      }, /*#__PURE__*/React.createElement(_fields_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
        field: field
      }));
    }
    if (field.type === 'upsell') {
      return /*#__PURE__*/React.createElement(_UpsellBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: field?.name || index,
        field: field
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      key: field?.name || index,
      className: `${field.disabled ? _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].disabledClass : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: _SettingsForm_module_scss__WEBPACK_IMPORTED_MODULE_12__["default"].fieldWrapper
    }, /*#__PURE__*/React.createElement(form.Field, {
      name: option ? `${option}.${field.name}` : field.name
    }, fieldState => /*#__PURE__*/React.createElement(_FieldRenderer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      field: field,
      fieldState: fieldState,
      handleChange: handleChange,
      disabled: field.disabled || false
    }))));
  })));
}

/***/ }),

/***/ "./apps/general-settings/SettingsForm.module.scss":
/*!********************************************************!*\
  !*** ./apps/general-settings/SettingsForm.module.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"fieldWrapper":"Uj6MBbszkSMCekip7yDQ","disabledClass":"lQF5WZNAczCivX7GDH_D","comboFieldWrapper":"CwvXAlD06APdCWfcC3MK"});

/***/ }),

/***/ "./apps/general-settings/SettingsPage.jsx":
/*!************************************************!*\
  !*** ./apps/general-settings/SettingsPage.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation */ "./apps/general-settings/Navigation.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./apps/general-settings/Content.jsx");
/* harmony import */ var _shared_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-components/header */ "./apps/shared-components/header.jsx");




function SettingsPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_shared_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/React.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_Content__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./apps/general-settings/UpsellBlock.jsx":
/*!***********************************************!*\
  !*** ./apps/general-settings/UpsellBlock.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpsellBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function UpsellBlock({
  field
}) {
  const {
    label,
    desc,
    buttons = []
  } = field;
  return /*#__PURE__*/React.createElement("div", {
    className: "modula_upsell_field_wrapper"
  }, label && /*#__PURE__*/React.createElement("h3", null, label), desc && /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: desc
    }
  }), buttons.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "modula_upsell_buttons_wrapper"
  }, buttons.map((button, index) => {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      key: index,
      href: button.href,
      variant: button.variant || 'primary',
      target: "blank",
      rel: "noopener noreferrer"
    }, button.label);
  })));
}

/***/ }),

/***/ "./apps/general-settings/ai-settings/ai-settings-form.jsx":
/*!****************************************************************!*\
  !*** ./apps/general-settings/ai-settings/ai-settings-form.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AiSettingsForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_form_claim_credits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-form/claim-credits */ "./apps/general-settings/ai-settings/settings-form/claim-credits.jsx");


function AiSettingsForm() {
  return /*#__PURE__*/React.createElement(_settings_form_claim_credits__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./apps/general-settings/ai-settings/settings-form/claim-credits.jsx":
/*!***************************************************************************!*\
  !*** ./apps/general-settings/ai-settings/settings-form/claim-credits.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClaimCredits)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _claim_credits_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./claim-credits.module.css */ "./apps/general-settings/ai-settings/settings-form/claim-credits.module.css");
/* harmony import */ var _tanstack_react_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-form */ "./node_modules/@tanstack/react-form/dist/esm/useForm.js");
/* harmony import */ var _query_useSettingsQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../query/useSettingsQuery */ "./apps/general-settings/query/useSettingsQuery.js");
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languages */ "./apps/general-settings/ai-settings/settings-form/languages.js");
/* harmony import */ var _context_useStateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/useStateContext */ "./apps/general-settings/context/useStateContext.js");
/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/actions */ "./apps/general-settings/context/actions.js");









function ClaimCredits() {
  const {
    data
  } = (0,_query_useSettingsQuery__WEBPACK_IMPORTED_MODULE_4__.useSettingsQuery)();
  const {
    state,
    dispatch
  } = (0,_context_useStateContext__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const form = (0,_tanstack_react_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
    defaultValues: {
      modula_ai_api_key: data?.api_key || '',
      modula_ai_language: data?.language || 'en',
      email: data?.readonly?.email,
      first_name: data?.readonly?.first_name,
      last_name: data?.readonly?.last_name,
      valid_key: data?.readonly?.valid_key
    }
  });
  const claimCredits = () => {
    window.open('https://wp-modula.com/my-account', '_blank');
  };
  const handleChange = (val, field) => {
    field.handleChange(val);
    console.error(field);
    dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_7__.setOptions)({
      ...state.options,
      [field.name]: val
    }));
  };
  const validKey = data?.readonly?.valid_key;
  const helpText = validKey ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(/* translators: %s: credits left */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Your API key is valid and you have %s credits left', 'modula-best-grid-gallery'), data?.readonly?.credits) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Insert an API key', 'modula-best-grid-gallery');
  return /*#__PURE__*/React.createElement("div", {
    className: _claim_credits_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].container
  }, !validKey && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: _claim_credits_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].description
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('In order to use this powerful functionality you will first need to claim your credits.', 'modula-best-grid-gallery')), /*#__PURE__*/React.createElement("p", {
    className: _claim_credits_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].description
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('If you already have the api key, use it in the field below or click "Claim Credits" to get a new one.', 'modula-best-grid-gallery'))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    gap: 4,
    align: "flex-start"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
    style: {
      flex: 2
    }
  }, /*#__PURE__*/React.createElement(form.Field, {
    name: "modula_ai_api_key",
    children: field => /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      __nextHasNoMarginBottom: true,
      __next40pxDefaultSize: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('API Key', 'modula-best-grid-gallery'),
      help: helpText,
      value: field.state.value,
      onChange: val => handleChange(val, field)
    })
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(form.Field, {
    name: "modula_ai_language",
    children: field => /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      __nextHasNoMarginBottom: true,
      __next40pxDefaultSize: true,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Language used to generate reports', 'modula-best-grid-gallery'),
      value: field.state.value,
      options: _languages__WEBPACK_IMPORTED_MODULE_5__.LANGUAGES,
      onChange: val => handleChange(val, field)
    })
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {
    marginTop: 4,
    marginBottom: 4
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justify: "flex-start",
    gap: 4,
    className: _claim_credits_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].buttonContainer
  }, !validKey && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "link",
    onClick: claimCredits
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Claim Credits', 'modula-best-grid-gallery'))));
}

/***/ }),

/***/ "./apps/general-settings/ai-settings/settings-form/claim-credits.module.css":
/*!**********************************************************************************!*\
  !*** ./apps/general-settings/ai-settings/settings-form/claim-credits.module.css ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"oCQCrDElmdDm07U8O0g_","description":"sAqm0q094Cmj3Fff3kKY","buttonContainer":"Ebw3DweCDnwFHPwEje3i"});

/***/ }),

/***/ "./apps/general-settings/ai-settings/settings-form/languages.js":
/*!**********************************************************************!*\
  !*** ./apps/general-settings/ai-settings/settings-form/languages.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LANGUAGES: () => (/* binding */ LANGUAGES)
/* harmony export */ });
const LANGUAGES = [{
  value: 'ab',
  label: 'Abkhaz'
}, {
  value: 'ace',
  label: 'Acehnese'
}, {
  value: 'ach',
  label: 'Acholi'
}, {
  value: 'af',
  label: 'Afrikaans'
}, {
  value: 'sq',
  label: 'Albanian'
}, {
  value: 'alz',
  label: 'Alur'
}, {
  value: 'am',
  label: 'Amharic'
}, {
  value: 'ar',
  label: 'Arabic'
}, {
  value: 'hy',
  label: 'Armenian'
}, {
  value: 'as',
  label: 'Assamese'
}, {
  value: 'awa',
  label: 'Awadhi'
}, {
  value: 'ay',
  label: 'Aymara'
}, {
  value: 'az',
  label: 'Azerbaijani'
}, {
  value: 'ban',
  label: 'Balinese'
}, {
  value: 'bm',
  label: 'Bambara'
}, {
  value: 'ba',
  label: 'Bashkir'
}, {
  value: 'eu',
  label: 'Basque'
}, {
  value: 'btx',
  label: 'Batak Karo'
}, {
  value: 'bts',
  label: 'Batak Simalungun'
}, {
  value: 'bbc',
  label: 'Batak Toba'
}, {
  value: 'be',
  label: 'Belarusian'
}, {
  value: 'bem',
  label: 'Bemba'
}, {
  value: 'bn',
  label: 'Bengali'
}, {
  value: 'bew',
  label: 'Betawi'
}, {
  value: 'bho',
  label: 'Bhojpuri'
}, {
  value: 'bik',
  label: 'Bikol'
}, {
  value: 'bs',
  label: 'Bosnian'
}, {
  value: 'br',
  label: 'Breton'
}, {
  value: 'bg',
  label: 'Bulgarian'
}, {
  value: 'bua',
  label: 'Buryat'
}, {
  value: 'yue',
  label: 'Cantonese'
}, {
  value: 'ca',
  label: 'Catalan'
}, {
  value: 'ceb',
  label: 'Cebuano'
}, {
  value: 'ny',
  label: 'Chichewa'
}, {
  value: 'zh',
  label: 'Chinese (Simplified)'
}, {
  value: 'zh-TW',
  label: 'Chinese (Traditional)'
}, {
  value: 'cv',
  label: 'Chuvash'
}, {
  value: 'co',
  label: 'Corsican'
}, {
  value: 'crh',
  label: 'Crimean Tatar'
}, {
  value: 'hr',
  label: 'Croatian'
}, {
  value: 'cs',
  label: 'Czech'
}, {
  value: 'da',
  label: 'Danish'
}, {
  value: 'dv',
  label: 'Dhivehi'
}, {
  value: 'din',
  label: 'Dinka'
}, {
  value: 'doi',
  label: 'Dogri'
}, {
  value: 'dov',
  label: 'Dombe'
}, {
  value: 'nl',
  label: 'Dutch'
}, {
  value: 'dz',
  label: 'Dzongkha'
}, {
  value: 'en',
  label: 'English'
}, {
  value: 'eo',
  label: 'Esperanto'
}, {
  value: 'et',
  label: 'Estonian'
}, {
  value: 'ee',
  label: 'Ewe'
}, {
  value: 'fj',
  label: 'Fijian'
}, {
  value: 'tl',
  label: 'Filipino'
}, {
  value: 'fi',
  label: 'Finnish'
}, {
  value: 'fr',
  label: 'French'
}, {
  value: 'fy',
  label: 'Frisian'
}, {
  value: 'ff',
  label: 'Fulani'
}, {
  value: 'gaa',
  label: 'Ga'
}, {
  value: 'gl',
  label: 'Galician'
}, {
  value: 'ka',
  label: 'Georgian'
}, {
  value: 'de',
  label: 'German'
}, {
  value: 'el',
  label: 'Greek'
}, {
  value: 'gn',
  label: 'Guarani'
}, {
  value: 'gu',
  label: 'Gujarati'
}, {
  value: 'ht',
  label: 'Haitian Creole'
}, {
  value: 'cnh',
  label: 'Hakha Chin'
}, {
  value: 'ha',
  label: 'Hausa'
}, {
  value: 'haw',
  label: 'Hawaiian'
}, {
  value: 'iw',
  label: 'Hebrew'
}, {
  value: 'hil',
  label: 'Hiligaynon'
}, {
  value: 'hi',
  label: 'Hindi'
}, {
  value: 'hmn',
  label: 'Hmong'
}, {
  value: 'hu',
  label: 'Hungarian'
}, {
  value: 'hrx',
  label: 'Hunsrik'
}, {
  value: 'is',
  label: 'Icelandic'
}, {
  value: 'ig',
  label: 'Igbo'
}, {
  value: 'ilo',
  label: 'Ilocano'
}, {
  value: 'id',
  label: 'Indonesian'
}, {
  value: 'ga',
  label: 'Irish'
}, {
  value: 'it',
  label: 'Italian'
}, {
  value: 'ja',
  label: 'Japanese'
}, {
  value: 'jw',
  label: 'Javanese'
}, {
  value: 'kn',
  label: 'Kannada'
}, {
  value: 'pam',
  label: 'Kapampangan'
}, {
  value: 'kk',
  label: 'Kazakh'
}, {
  value: 'km',
  label: 'Khmer'
}, {
  value: 'cgg',
  label: 'Kiga'
}, {
  value: 'rw',
  label: 'Kinyarwanda'
}, {
  value: 'ktu',
  label: 'Kituba'
}, {
  value: 'gom',
  label: 'Konkani'
}, {
  value: 'ko',
  label: 'Korean'
}, {
  value: 'kri',
  label: 'Krio'
}, {
  value: 'ku',
  label: 'Kurdish (Kurmanji)'
}, {
  value: 'ckb',
  label: 'Kurdish (Sorani)'
}, {
  value: 'ky',
  label: 'Kyrgyz'
}, {
  value: 'lo',
  label: 'Lao'
}, {
  value: 'ltg',
  label: 'Latgalian'
}, {
  value: 'la',
  label: 'Latin'
}, {
  value: 'lv',
  label: 'Latvian'
}, {
  value: 'lij',
  label: 'Ligurian'
}, {
  value: 'li',
  label: 'Limburgish'
}, {
  value: 'ln',
  label: 'Lingala'
}, {
  value: 'lt',
  label: 'Lithuanian'
}, {
  value: 'lmo',
  label: 'Lombard'
}, {
  value: 'lg',
  label: 'Luganda'
}, {
  value: 'luo',
  label: 'Luo'
}, {
  value: 'lb',
  label: 'Luxembourgish'
}, {
  value: 'mk',
  label: 'Macedonian'
}, {
  value: 'mai',
  label: 'Maithili'
}, {
  value: 'mak',
  label: 'Makassar'
}, {
  value: 'mg',
  label: 'Malagasy'
}, {
  value: 'ms',
  label: 'Malay'
}, {
  value: 'ms-Arab',
  label: 'Malay (Jawi)'
}, {
  value: 'ml',
  label: 'Malayalam'
}, {
  value: 'mt',
  label: 'Maltese'
}, {
  value: 'mi',
  label: 'Maori'
}, {
  value: 'mr',
  label: 'Marathi'
}, {
  value: 'chm',
  label: 'Meadow Mari'
}, {
  value: 'mni-Mtei',
  label: 'Meiteilon (Manipuri)'
}, {
  value: 'min',
  label: 'Minang'
}, {
  value: 'lus',
  label: 'Mizo'
}, {
  value: 'mn',
  label: 'Mongolian'
}, {
  value: 'my',
  label: 'Myanmar (Burmese)'
}, {
  value: 'nr',
  label: 'Ndebele (South)'
}, {
  value: 'new',
  label: 'Nepalbhasa (Newari)'
}, {
  value: 'ne',
  label: 'Nepali'
}, {
  value: 'no',
  label: 'Norwegian'
}, {
  value: 'nus',
  label: 'Nuer'
}, {
  value: 'oc',
  label: 'Occitan'
}, {
  value: 'or',
  label: 'Odia (Oriya)'
}, {
  value: 'om',
  label: 'Oromo'
}, {
  value: 'pag',
  label: 'Pangasinan'
}, {
  value: 'pap',
  label: 'Papiamento'
}, {
  value: 'ps',
  label: 'Pashto'
}, {
  value: 'fa',
  label: 'Persian'
}, {
  value: 'pl',
  label: 'Polish'
}, {
  value: 'pt',
  label: 'Portuguese (Brazil)'
}, {
  value: 'pa',
  label: 'Punjabi (Gurmukhi)'
}, {
  value: 'pa-Arab',
  label: 'Punjabi (Shahmukhi)'
}, {
  value: 'qu',
  label: 'Quechua'
}, {
  value: 'rom',
  label: 'Romani'
}, {
  value: 'ro',
  label: 'Romanian'
}, {
  value: 'rn',
  label: 'Rundi'
}, {
  value: 'ru',
  label: 'Russian'
}, {
  value: 'sm',
  label: 'Samoan'
}, {
  value: 'sg',
  label: 'Sango'
}, {
  value: 'sa',
  label: 'Sanskrit'
}, {
  value: 'gd',
  label: 'Scots Gaelic'
}, {
  value: 'nso',
  label: 'Sepedi'
}, {
  value: 'sr',
  label: 'Serbian'
}, {
  value: 'st',
  label: 'Sesotho'
}, {
  value: 'crs',
  label: 'Seychellois Creole'
}, {
  value: 'shn',
  label: 'Shan'
}, {
  value: 'sn',
  label: 'Shona'
}, {
  value: 'scn',
  label: 'Sicilian'
}, {
  value: 'szl',
  label: 'Silesian'
}, {
  value: 'sd',
  label: 'Sindhi'
}, {
  value: 'si',
  label: 'Sinhala'
}, {
  value: 'sk',
  label: 'Slovak'
}, {
  value: 'sl',
  label: 'Slovenian'
}, {
  value: 'so',
  label: 'Somali'
}, {
  value: 'es',
  label: 'Spanish'
}, {
  value: 'su',
  label: 'Sundanese'
}, {
  value: 'sw',
  label: 'Swahili'
}, {
  value: 'ss',
  label: 'Swati'
}, {
  value: 'sv',
  label: 'Swedish'
}, {
  value: 'tg',
  label: 'Tajik'
}, {
  value: 'ta',
  label: 'Tamil'
}, {
  value: 'tt',
  label: 'Tatar'
}, {
  value: 'te',
  label: 'Telugu'
}, {
  value: 'tet',
  label: 'Tetum'
}, {
  value: 'th',
  label: 'Thai'
}, {
  value: 'ti',
  label: 'Tigrinya'
}, {
  value: 'ts',
  label: 'Tsonga'
}, {
  value: 'tn',
  label: 'Tswana'
}, {
  value: 'tr',
  label: 'Turkish'
}, {
  value: 'tk',
  label: 'Turkmen'
}, {
  value: 'ak',
  label: 'Twi'
}, {
  value: 'uk',
  label: 'Ukrainian'
}, {
  value: 'ur',
  label: 'Urdu'
}, {
  value: 'ug',
  label: 'Uyghur'
}, {
  value: 'uz',
  label: 'Uzbek'
}, {
  value: 'vi',
  label: 'Vietnamese'
}, {
  value: 'cy',
  label: 'Welsh'
}, {
  value: 'xh',
  label: 'Xhosa'
}, {
  value: 'yi',
  label: 'Yiddish'
}, {
  value: 'yo',
  label: 'Yoruba'
}, {
  value: 'yua',
  label: 'Yucatec Maya'
}, {
  value: 'zu',
  label: 'Zulu'
}, {
  value: 'he',
  label: 'Hebrew'
}, {
  value: 'jv',
  label: 'Javanese'
}, {
  value: 'zh-CN',
  label: 'Chinese (Simplified)'
}];

/***/ }),

/***/ "./apps/general-settings/context/actions.js":
/*!**************************************************!*\
  !*** ./apps/general-settings/context/actions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setActiveTab: () => (/* binding */ setActiveTab),
/* harmony export */   setLoggedIn: () => (/* binding */ setLoggedIn),
/* harmony export */   setOptions: () => (/* binding */ setOptions),
/* harmony export */   toggleAdvancedRegistration: () => (/* binding */ toggleAdvancedRegistration)
/* harmony export */ });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./apps/general-settings/context/reducer.js");

const setActiveTab = value => ({
  type: _reducer__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_ACTIVE_TAB,
  payload: value
});
const setOptions = value => ({
  type: _reducer__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_OPTIONS,
  payload: value
});
const toggleAdvancedRegistration = value => ({
  type: _reducer__WEBPACK_IMPORTED_MODULE_0__.actionTypes.TOGGLE_ADVANCED_REGISTRATION,
  payload: value
});
const setLoggedIn = value => ({
  type: _reducer__WEBPACK_IMPORTED_MODULE_0__.actionTypes.SET_LOGGED_IN,
  payload: value
});

/***/ }),

/***/ "./apps/general-settings/context/initial-state.js":
/*!********************************************************!*\
  !*** ./apps/general-settings/context/initial-state.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInitialTab: () => (/* binding */ getInitialTab),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
const getInitialTab = () => {
  const url = new URL(window.location);
  return url.searchParams.get('tab') || 'display';
};
const initialState = {
  api_key: '',
  isAdvancedRegistration: false,
  isLoggedIn: false,
  activeTab: getInitialTab(),
  options: {}
};

/***/ }),

/***/ "./apps/general-settings/context/reducer.js":
/*!**************************************************!*\
  !*** ./apps/general-settings/context/reducer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actionTypes: () => (/* binding */ actionTypes),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
const actionTypes = {
  SET_ACTIVE_TAB: 'SET_ACTIVE_TAB',
  SET_OPTIONS: 'SET_OPTIONS',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  TOGGLE_ADVANCED_REGISTRATION: 'TOGGLE_ADVANCED_REGISTRATION',
  SET_LOGGED_IN: 'SET_LOGGED_IN'
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload
      };
    case actionTypes.SET_OPTIONS:
      return {
        ...state,
        options: action.payload
      };
    case actionTypes.UPDATE_SETTINGS:
      return {
        ...state,
        settings: action.payload
      };
    case actionTypes.TOGGLE_ADVANCED_REGISTRATION:
      return {
        ...state,
        isAdvancedRegistration: action.payload
      };
    case actionTypes.SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    default:
      return state;
  }
};

/***/ }),

/***/ "./apps/general-settings/context/settings-context.jsx":
/*!************************************************************!*\
  !*** ./apps/general-settings/context/settings-context.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContext: () => (/* binding */ SettingsContext),
/* harmony export */   SettingsProvider: () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "./apps/general-settings/context/reducer.js");
/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial-state */ "./apps/general-settings/context/initial-state.js");




const SettingsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)(_initial_state__WEBPACK_IMPORTED_MODULE_3__.initialState);
const SettingsProvider = ({
  children
}) => {
  const [state, dispatch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer, _initial_state__WEBPACK_IMPORTED_MODULE_3__.initialState);
  const contextValue = {
    state,
    dispatch
  };
  return /*#__PURE__*/React.createElement(SettingsContext.Provider, {
    value: contextValue
  }, children);
};

/***/ }),

/***/ "./apps/general-settings/context/useStateContext.js":
/*!**********************************************************!*\
  !*** ./apps/general-settings/context/useStateContext.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-context */ "./apps/general-settings/context/settings-context.jsx");


const useStateContext = () => {
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_settings_context__WEBPACK_IMPORTED_MODULE_1__.SettingsContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a SettingsProvider');
  }
  return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStateContext);

/***/ }),

/***/ "./apps/general-settings/fields/ButtonField.jsx":
/*!******************************************************!*\
  !*** ./apps/general-settings/fields/ButtonField.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _query_useApiCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../query/useApiCall */ "./apps/general-settings/query/useApiCall.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);




function ButtonField({
  field,
  variant = 'primary'
}) {
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const doApiCall = (0,_query_useApiCall__WEBPACK_IMPORTED_MODULE_2__.useApiCall)();
  const handleClick = async () => {
    setLoading(true);
    if (field.api && field.api?.path) {
      await doApiCall(field.api.path, field.api.method || 'POST', field.api.data || {});
    }
    setLoading(false);
  };
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    id: field.id || '',
    href: field.href,
    variant: variant,
    onClick: handleClick,
    disabled: loading
  }, field.text);
}

/***/ }),

/***/ "./apps/general-settings/fields/ComboField.jsx":
/*!*****************************************************!*\
  !*** ./apps/general-settings/fields/ComboField.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComboField: () => (/* binding */ ComboField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FieldRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FieldRenderer */ "./apps/general-settings/FieldRenderer.jsx");
/* harmony import */ var _ButtonField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonField */ "./apps/general-settings/fields/ButtonField.jsx");
/* harmony import */ var _ComboField_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComboField.module.scss */ "./apps/general-settings/fields/ComboField.module.scss");




function ComboField({
  option,
  field,
  form,
  handleChange,
  evaluateConditions
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, field.fields.map((item, index) => {
    const isVisible = evaluateConditions(item.conditions);
    if (item.type === 'button') {
      return /*#__PURE__*/React.createElement(_ButtonField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        field: item,
        disabled: !isVisible
      });
    }
    const sizeClass = item.size ? _ComboField_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"][item.size] : '';
    return /*#__PURE__*/React.createElement("div", {
      key: item?.name || index,
      className: `${_ComboField_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].comboFieldItem} ${sizeClass} ${!isVisible ? _ComboField_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].disabledClass : ''}`
    }, /*#__PURE__*/React.createElement(form.Field, {
      name: option ? `${option}.${item.name}` : item.name
    }, fieldState => /*#__PURE__*/React.createElement(_FieldRenderer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      field: item,
      fieldState: fieldState,
      handleChange: handleChange,
      disabled: !isVisible,
      description: field.description
    })));
  }));
}

/***/ }),

/***/ "./apps/general-settings/fields/ComboField.module.scss":
/*!*************************************************************!*\
  !*** ./apps/general-settings/fields/ComboField.module.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"disabledClass":"sKwcon1YogHrQTlAMHF3","comboFieldItem":"KFbfeIrIMBt1ihMOIAj2","small":"I477T2QptSYuJAtWhFmC","medium":"XC5AxOT3DzWXYUPlZuf4","large":"rpcjtc1XPAx_Y5ug9rIf","full":"_62JRRl6P5pgNQuLpPOZ"});

/***/ }),

/***/ "./apps/general-settings/fields/ImageSelectField.jsx":
/*!***********************************************************!*\
  !*** ./apps/general-settings/fields/ImageSelectField.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Label */ "./apps/general-settings/fields/Label.jsx");
/* harmony import */ var _ImageSelectField_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageSelectField.module.scss */ "./apps/general-settings/fields/ImageSelectField.module.scss");





function ImageSelector({
  fieldState,
  field,
  handleChange
}) {
  const [imageSrc, setImageSrc] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(field.src || null);
  const openMediaLibrary = () => {
    const mediaFrame = wp.media({
      title: field.mediaTitle || 'Select an image',
      button: {
        text: field.mediaButtonText || 'Use this image'
      },
      multiple: false
    });
    mediaFrame.on('select', () => {
      const selection = mediaFrame.state().get('selection').first().toJSON();
      const attachmentId = selection.id;
      const attachmentSrc = selection.url;
      handleChange(attachmentId);
      setImageSrc(attachmentSrc);
    });
    mediaFrame.open();
  };
  const removeImage = () => {
    handleChange(null);
    setImageSrc(null);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: _ImageSelectField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].imageSelectField
  }, /*#__PURE__*/React.createElement(_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: field.label,
    description: field.description
  }), /*#__PURE__*/React.createElement("div", {
    className: _ImageSelectField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].imageContainer
  }, imageSrc ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _ImageSelectField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].imagePreview
  }, /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: field.label || 'Selected image'
  })), /*#__PURE__*/React.createElement("div", {
    className: _ImageSelectField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].imageActions
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "secondary",
    onClick: openMediaLibrary
  }, "Replace"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isDestructive: true,
    variant: "link",
    onClick: removeImage
  }, "Remove"))) : /*#__PURE__*/React.createElement("div", {
    className: _ImageSelectField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].uploadPlaceholder
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: openMediaLibrary
  }, "Set watermark image"))));
}

/***/ }),

/***/ "./apps/general-settings/fields/ImageSelectField.module.scss":
/*!*******************************************************************!*\
  !*** ./apps/general-settings/fields/ImageSelectField.module.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"imageSelectField":"C5yLvzuPGpVkrDIaIomQ","imageContainer":"xw2T792lloF_e6VudTZ3","imagePreview":"juh6bSXatduPIGHpzQQD","uploadPlaceholder":"zj4aSopShYATrtcHe2FC","imageActions":"aZIyRWYsxKBGxs16lYaM"});

/***/ }),

/***/ "./apps/general-settings/fields/ImportCheckboxGroupField.jsx":
/*!*******************************************************************!*\
  !*** ./apps/general-settings/fields/ImportCheckboxGroupField.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImportCheckboxGroupField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImportCheckboxGroupField.module.scss */ "./apps/general-settings/fields/ImportCheckboxGroupField.module.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _query_useAjaxCall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../query/useAjaxCall */ "./apps/general-settings/query/useAjaxCall.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_useStateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/useStateContext */ "./apps/general-settings/context/useStateContext.js");







function ImportCheckboxGroupField({
  fieldState,
  field,
  handleChange,
  className
}) {
  const {
    options,
    name
  } = field;
  const selectedValues = fieldState.state.value || [];
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [importResults, setImportResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    state
  } = (0,_context_useStateContext__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const doAjaxCall = (0,_query_useAjaxCall__WEBPACK_IMPORTED_MODULE_4__.useAjaxCall)();
  const source = state.options?.gallery_source || 'core';
  const deleteSource = state.options?.gallery_delete_source || 'keep';
  const isSelected = value => selectedValues.includes(value);
  const toggleCheckbox = value => {
    if (isSelected(value)) {
      handleChange(selectedValues.filter(v => v !== value));
    } else {
      handleChange([...selectedValues, value]);
    }
  };
  const handleClick = async () => {
    setLoading(true);
    const importedGalleries = [];
    for (const id of selectedValues) {
      const data = {
        action: 'modula_ajax_import_images',
        id,
        nonce: field.nonce || false,
        chunk: 0,
        source
      };
      const response = await doAjaxCall(data);
      const importData = {
        action: 'modula_importer_' + source + '_gallery_import',
        id,
        nonce: field.nonce,
        clean: deleteSource,
        gallery_title: id,
        attachments: response.attachments,
        source
      };
      const importedGallery = await doAjaxCall(importData, true);
      setImportResults(prev => ({
        ...prev,
        [id]: {
          success: importedGallery.success,
          message: importedGallery.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Unknown response', 'modula-best-grid-gallery')
        }
      }));
      if (importedGallery.success) {
        importedGalleries[id] = importedGallery.modula_gallery_id;
      }
    }
    if (importedGalleries.length > 0) {
      const updateData = {
        action: 'modula_importer_' + source + '_gallery_imported_update',
        nonce: field.nonce,
        clean: deleteSource,
        galleries: importedGalleries,
        source
      };
      doAjaxCall(updateData);
    }
    setLoading(false);
  };
  const selectAll = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const allValues = options.map(opt => opt.value);
    handleChange(allValues);
  }, [options, handleChange]);
  const deselectAll = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    handleChange([]);
  }, [handleChange]);
  return /*#__PURE__*/React.createElement("div", {
    className: `${_ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modulaCheckboxGroupWrap} ${className || ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: _ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modulaCheckboxGroup
  }, /*#__PURE__*/React.createElement("div", {
    className: _ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modulaCheckboxGroupControls
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: selectAll,
    className: _ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].controlButton
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Select All', 'modula-best-grid-gallery')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: deselectAll,
    className: _ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].controlButton
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Deselect All', 'modula-best-grid-gallery'))), /*#__PURE__*/React.createElement("div", {
    className: _ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modulaCheckboxGroupOptions
  }, options.map(option =>
  /*#__PURE__*/
  /* eslint-disable jsx-a11y/label-has-associated-control */
  React.createElement("label", {
    key: option.value,
    className: _ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].checkboxOption
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: `${name}[]`,
    value: option.value,
    checked: isSelected(option.value),
    onChange: () => toggleCheckbox(option.value)
  }), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: option.label
    }
  }), importResults[option.value] && /*#__PURE__*/React.createElement("span", {
    className: importResults[option.value].success ? _ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modulaCheckboxGroupSuccess : _ImportCheckboxGroupField_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modulaCheckboxGroupFail,
    dangerouslySetInnerHTML: {
      __html: importResults[option.value].message
    }
  }))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "primary",
    className: `modula_field_button ${className || ''}`,
    onClick: handleClick,
    disabled: loading
  }, loading ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Migrating…', 'modula-best-grid-gallery') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Migrate', 'modula-best-grid-gallery')));
}

/***/ }),

/***/ "./apps/general-settings/fields/ImportCheckboxGroupField.module.scss":
/*!***************************************************************************!*\
  !*** ./apps/general-settings/fields/ImportCheckboxGroupField.module.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"modulaCheckboxGroupWrap":"G26WUtzESwRrAfjEdxrw","modulaCheckboxGroup":"Vh7dzBQ1lP8kfFpbtTFA","modulaCheckboxGroupControls":"SSQybBDIV8OAYj8bMjq7","controlButton":"x7O4CFe0bXBoA7IOHFIA","modulaCheckboxGroupOptions":"X9neYpywiG08remH3GVO","checkboxOption":"PURtjyCwA86PlrCJ8i45","modulaCheckboxGroupFail":"G5RwVxLhuOlxNHIqolLA"});

/***/ }),

/***/ "./apps/general-settings/fields/Label.jsx":
/*!************************************************!*\
  !*** ./apps/general-settings/fields/Label.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paragraph_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paragraph.module.scss */ "./apps/general-settings/fields/Paragraph.module.scss");


function Label({
  label = undefined,
  description = undefined
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement("span", {
    className: _Paragraph_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, label), description && /*#__PURE__*/React.createElement("div", {
    className: _Paragraph_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].description,
    dangerouslySetInnerHTML: {
      __html: description
    }
  }));
}

/***/ }),

/***/ "./apps/general-settings/fields/NumberField.jsx":
/*!******************************************************!*\
  !*** ./apps/general-settings/fields/NumberField.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NumberField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function NumberField({
  fieldState,
  field,
  handleChange,
  className
}) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: "number",
    className: `modula_input_text ${className || ''}`,
    min: field.min,
    max: field.max,
    value: fieldState.state.value,
    onChange: val => handleChange(val),
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    label: field.label,
    help: field.description
  });
}

/***/ }),

/***/ "./apps/general-settings/fields/Paragraph.jsx":
/*!****************************************************!*\
  !*** ./apps/general-settings/fields/Paragraph.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paragraph_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paragraph.module.scss */ "./apps/general-settings/fields/Paragraph.module.scss");


function Paragraph({
  field
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: _Paragraph_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].paragraph
  }, field?.label && /*#__PURE__*/React.createElement("span", {
    className: _Paragraph_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].label
  }, field.label), field?.description && /*#__PURE__*/React.createElement("div", {
    className: _Paragraph_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].description,
    dangerouslySetInnerHTML: {
      __html: field.description
    }
  }));
}

/***/ }),

/***/ "./apps/general-settings/fields/Paragraph.module.scss":
/*!************************************************************!*\
  !*** ./apps/general-settings/fields/Paragraph.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"paragraph":"B2th62gSaDUGwxJHuoE6","label":"yicsEELkvilMdkIuwRH9","description":"B0y5RXPdEm69zuq6IoOZ"});

/***/ }),

/***/ "./apps/general-settings/fields/RadioField.jsx":
/*!*****************************************************!*\
  !*** ./apps/general-settings/fields/RadioField.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RadioField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function RadioField({
  fieldState,
  field,
  handleChange,
  className
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, field.label && field.label.trim() !== '' && /*#__PURE__*/React.createElement("span", {
    className: "modula_input_label",
    htmlFor: field.name
  }, field.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
    className: `modula_input_radio ${className || ''}`,
    selected: fieldState.state.value,
    options: field.options.map(option => ({
      label: option,
      value: option
    })),
    onChange: val => handleChange(val)
  }), field.description && /*#__PURE__*/React.createElement("p", {
    className: "modula_input_description",
    dangerouslySetInnerHTML: {
      __html: field.description
    }
  }));
}

/***/ }),

/***/ "./apps/general-settings/fields/RadioGroupField.jsx":
/*!**********************************************************!*\
  !*** ./apps/general-settings/fields/RadioGroupField.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RadioGroupField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radioGroupField_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radioGroupField.module.scss */ "./apps/general-settings/fields/radioGroupField.module.scss");


function RadioGroupField({
  fieldState,
  field,
  handleChange,
  className
}) {
  const {
    options,
    name
  } = field;
  return /*#__PURE__*/React.createElement("div", {
    className: `${_radioGroupField_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modulaImageRadioGroup} ${className || ''}`
  }, options.map(option => /*#__PURE__*/React.createElement("div", {
    key: `${option.value}-${option.label}`,
    className: _radioGroupField_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modulaImageRadioGroupOption
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: option.value,
    name: name,
    value: option.value,
    checked: fieldState.state.value === option.value,
    onChange: e => handleChange(e.target.value),
    className: _radioGroupField_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modulaImageRadioGroupInput
  }), /*#__PURE__*/React.createElement("label", {
    className: `${_radioGroupField_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modulaImageRadioGroupLabel} ${fieldState.state.value === option.value ? _radioGroupField_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modulaImageRadioGroupLabelChecked : ''}`,
    htmlFor: option.value
  }, option.image && '' !== option.image && /*#__PURE__*/React.createElement("img", {
    className: _radioGroupField_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modulaImageRadioGroupImage,
    src: option.image,
    alt: option.name
  }), /*#__PURE__*/React.createElement("p", {
    className: _radioGroupField_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].modulaImageRadioGroupText
  }, option.name)))));
}

/***/ }),

/***/ "./apps/general-settings/fields/RangeSelect.jsx":
/*!******************************************************!*\
  !*** ./apps/general-settings/fields/RangeSelect.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RangeSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function RangeSelect({
  fieldState,
  field,
  handleChange,
  className
}) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    className: `modula_input_range ${className || ''}`,
    initialPosition: fieldState.state.value,
    value: fieldState.state.value,
    onChange: val => handleChange(val),
    max: field?.max || 100,
    min: field?.min || 0,
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    label: field.label,
    help: field.description
  });
}

/***/ }),

/***/ "./apps/general-settings/fields/RoleField.jsx":
/*!****************************************************!*\
  !*** ./apps/general-settings/fields/RoleField.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleField: () => (/* binding */ RoleField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ToggleField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleField */ "./apps/general-settings/fields/ToggleField.jsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _RoleField_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RoleField.module.scss */ "./apps/general-settings/fields/RoleField.module.scss");





function RoleField({
  option,
  mainField,
  form,
  handleChange
}) {
  const [enabled, setEnabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(mainField.default);
  const activeToggle = form.store.state.values?.activeToggle || 'gallery';
  const onMainToggleChange = (fieldState, fieldName, val) => {
    setEnabled(val);

    // set each child-field value based on parent.
    mainField.fields.forEach(field => {
      const fullFieldName = option ? `${option}.${field.name}` : field.name;
      form.setFieldValue(fullFieldName, val);
    });
    handleChange(fieldState, fieldName, val);
  };
  if (mainField.group && mainField.group !== activeToggle) {
    return null;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, {
    className: _RoleField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].roleFieldCard
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
    className: _RoleField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].roleFieldCardHead
  }, /*#__PURE__*/React.createElement(form.Field, {
    key: `${mainField.name}-field`,
    name: option ? `${option}.${mainField.name}` : mainField.name
  }, fieldState => /*#__PURE__*/React.createElement(_ToggleField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fieldState: fieldState,
    field: mainField,
    className: _RoleField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].roleHeadToggle,
    handleChange: val => onMainToggleChange(fieldState, mainField.name, val)
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, {
    className: _RoleField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].roleFieldCardBody
  }, mainField.fields.map(field => {
    return /*#__PURE__*/React.createElement("div", {
      key: `${field.name}-wrapper`
    }, /*#__PURE__*/React.createElement(form.Field, {
      key: `${field.name}-field`,
      name: option ? `${option}.${field.name}` : field.name
    }, fieldState => /*#__PURE__*/React.createElement(_ToggleField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fieldState: fieldState,
      field: field,
      className: _RoleField_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].roleBodyToggle,
      handleChange: val => handleChange(fieldState, field.name, val),
      disabled: !enabled
    })));
  }))));
}

/***/ }),

/***/ "./apps/general-settings/fields/RoleField.module.scss":
/*!************************************************************!*\
  !*** ./apps/general-settings/fields/RoleField.module.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"roleFieldCard":"v2t2efraCSCsQdV6flOp","roleFieldCardHead":"alLM7NyGM85dALdVTgpe","roleHeadToggle":"zdo3i1W9YuErxdFYBCx8","roleFieldCardBody":"dD8wJmwUn_Lbpl3ydaHO","roleBodyToggle":"qUk56YuR1pTGOXzh0omC"});

/***/ }),

/***/ "./apps/general-settings/fields/SelectField.jsx":
/*!******************************************************!*\
  !*** ./apps/general-settings/fields/SelectField.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function SelectField({
  fieldState,
  field,
  handleChange,
  className,
  disabled
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    className: `modula_input_select ${className || ''}`,
    value: fieldState.state.value,
    options: field.options.map(option => ({
      label: option.label,
      value: option.value
    })),
    onChange: val => handleChange(val),
    disabled: disabled,
    label: field.label,
    help: field.description,
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true
  }));
}

/***/ }),

/***/ "./apps/general-settings/fields/TextField.jsx":
/*!****************************************************!*\
  !*** ./apps/general-settings/fields/TextField.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function TextField({
  fieldState,
  field,
  handleChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: field.inputType || 'text',
    value: fieldState.state.value || '',
    label: field.label,
    placeholder: field.placeholder,
    onChange: val => handleChange(val),
    disabled: disabled,
    help: field?.description ? /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: field.description
      }
    }) : null,
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true
  });
}

/***/ }),

/***/ "./apps/general-settings/fields/TextareaField.jsx":
/*!********************************************************!*\
  !*** ./apps/general-settings/fields/TextareaField.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TextareaField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function TextareaField({
  fieldState,
  field,
  handleChange,
  className
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, field.label && field.label.trim() !== '' && /*#__PURE__*/React.createElement("span", {
    className: "modula_input_label",
    htmlFor: field.name
  }, field.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    className: `modula_input_text ${className || ''}`,
    value: fieldState.state.value,
    onChange: val => handleChange(val)
  }), field.description && /*#__PURE__*/React.createElement("p", {
    className: "modula_input_description",
    dangerouslySetInnerHTML: {
      __html: field.description
    }
  }));
}

/***/ }),

/***/ "./apps/general-settings/fields/ToggleField.jsx":
/*!******************************************************!*\
  !*** ./apps/general-settings/fields/ToggleField.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function ToggleField({
  fieldState,
  field,
  handleChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: fieldState.state.value === 'enabled' || fieldState.state.value === true || fieldState.state.value === 1 || fieldState.state.value === 'true' || fieldState.state.value === 'on' || fieldState.state.value === '1',
    onChange: val => handleChange(val),
    disabled: disabled,
    label: field?.label || undefined,
    help: field?.description || undefined,
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true
  });
}

/***/ }),

/***/ "./apps/general-settings/fields/ToggleOptionsField.jsx":
/*!*************************************************************!*\
  !*** ./apps/general-settings/fields/ToggleOptionsField.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleOptionsField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function ToggleOptionsField({
  fieldState,
  field,
  handleChange,
  trueValue = 'enabled',
  falseValue = 'disabled',
  disabled = false
}) {
  const isChecked = fieldState.state.value === trueValue;
  const handleToggle = checked => {
    handleChange(checked ? trueValue : falseValue);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: isChecked,
    onChange: handleToggle,
    disabled: disabled,
    label: field.label,
    help: field?.description,
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true
  }));
}

/***/ }),

/***/ "./apps/general-settings/fields/radioGroupField.module.scss":
/*!******************************************************************!*\
  !*** ./apps/general-settings/fields/radioGroupField.module.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"modulaImageRadioGroup":"qHFQ_sMuRCESwqNiQ3H4","modulaImageRadioGroupOption":"BldaZoqoOO8Ltl6oiD7a","modulaImageRadioGroupInput":"FR6T4lX8aHa3wJv74boX","modulaImageRadioGroupLabel":"WecsCrgF1I2MiXOSQ8tg","modulaImageRadioGroupLabelChecked":"sncYWGhQxuTrdFEDBJQv"});

/***/ }),

/***/ "./apps/general-settings/index.scss":
/*!******************************************!*\
  !*** ./apps/general-settings/index.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./apps/general-settings/query/client.js":
/*!***********************************************!*\
  !*** ./apps/general-settings/query/client.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryClient: () => (/* binding */ queryClient)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/query-core/build/modern/queryClient.js");

const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient();

/***/ }),

/***/ "./apps/general-settings/query/useAjaxCall.js":
/*!****************************************************!*\
  !*** ./apps/general-settings/query/useAjaxCall.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAjaxCall: () => (/* binding */ useAjaxCall)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");

const useAjaxCall = () => {
  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  const appendFormData = (formData, key, value) => {
    if (Array.isArray(value)) {
      if (typeof value[0] === 'object') {
        value.forEach((obj, index) => {
          Object.entries(obj).forEach(([propKey, propValue]) => {
            formData.append(`${key}[${index}][${propKey}]`, propValue);
          });
        });
      } else {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      }
    } else {
      formData.append(key, value);
    }
  };
  const doAjaxCall = async (data = {}, invalidate = false) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      appendFormData(formData, key, value);
    });
    try {
      const response = await fetch(window.ajaxurl, {
        method: 'POST',
        credentials: 'same-origin',
        body: formData
      });
      const result = await response.json();
      if (invalidate) {
        await queryClient.invalidateQueries({
          queryKey: ['settings-tabs-query']
        });
      }
      return result;
    } catch (error) {
      console.error('AJAX call failed:', error);
      throw error;
    }
  };
  return doAjaxCall;
};

/***/ }),

/***/ "./apps/general-settings/query/useApiCall.js":
/*!***************************************************!*\
  !*** ./apps/general-settings/query/useApiCall.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useApiCall: () => (/* binding */ useApiCall)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");


const useApiCall = () => {
  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  const doApiCall = async (path, method, data = false) => {
    try {
      const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path,
        method,
        data: {
          ...data
        }
      });
      await queryClient.invalidateQueries({
        queryKey: ['settings-tabs-query']
      });
      return response;
    } catch (error) {
      console.error('Error on api call:', error);
      throw error;
    }
  };
  return doApiCall;
};

/***/ }),

/***/ "./apps/general-settings/query/useSettingsMutation.js":
/*!************************************************************!*\
  !*** ./apps/general-settings/query/useSettingsMutation.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSettingsMutation: () => (/* binding */ useSettingsMutation)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/useMutation.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);


const useSettingsMutation = () => {
  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  const saveSettings = async vars => {
    return await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      path: `/modula-best-grid-gallery/v1/general-settings`,
      method: 'POST',
      data: vars
    });
  };
  const settingsMutation = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({
    mutationFn: async data => {
      const result = await saveSettings(data);
      return result;
    },
    onSuccess: async () => {
      await Promise.all([queryClient.invalidateQueries({
        queryKey: ['settings-tabs-query']
      }), queryClient.invalidateQueries({
        queryKey: ['ai-settings-query']
      })]);
    }
  });
  return settingsMutation;
};

/***/ }),

/***/ "./apps/general-settings/query/useSettingsQuery.js":
/*!*********************************************************!*\
  !*** ./apps/general-settings/query/useSettingsQuery.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSettingsQuery: () => (/* binding */ useSettingsQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/useQuery.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);


const useSettingsQuery = () => {
  const settings = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
    queryKey: ['ai-settings-query'],
    retry: 1,
    queryFn: async () => {
      const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: `/modula-ai-image-descriptor/v1/ai-settings`,
        method: 'GET'
      });
      return data;
    }
  });
  return settings;
};

/***/ }),

/***/ "./apps/general-settings/query/useTabsQuery.js":
/*!*****************************************************!*\
  !*** ./apps/general-settings/query/useTabsQuery.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTabsQuery: () => (/* binding */ useTabsQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/useQuery.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);


const useTabsQuery = () => {
  const settings = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
    queryKey: ['settings-tabs-query'],
    retry: 1,
    queryFn: async () => {
      const data = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: `/modula-best-grid-gallery/v1/general-settings-tabs`,
        method: 'GET'
      });
      return data;
    }
  });
  return settings;
};

/***/ }),

/***/ "./apps/shared-components/header.jsx":
/*!*******************************************!*\
  !*** ./apps/shared-components/header.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module.scss */ "./apps/shared-components/header.module.scss");
/* harmony import */ var _assets_images_logo_dark_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/logo-dark.webp */ "./assets/images/logo-dark.webp");



function Header() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].pageHeader
  }, /*#__PURE__*/React.createElement("div", {
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logoContainer
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets_images_logo_dark_webp__WEBPACK_IMPORTED_MODULE_2__,
    alt: "modula logo",
    className: _header_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].logo
  }))));
}

/***/ }),

/***/ "./apps/shared-components/header.module.scss":
/*!***************************************************!*\
  !*** ./apps/shared-components/header.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"pageHeader":"naSiRptScq1iD3gYS6po"});

/***/ }),

/***/ "./apps/shared-components/navigation.module.scss":
/*!*******************************************************!*\
  !*** ./apps/shared-components/navigation.module.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"pageNavigation":"eHtPTGt_EQMZg2JNC07x","headerButton":"qMbQ1QJL_OukvbQKQfpU","headerButtonActive":"RVLmrCAMrV9AzshKV7FJ"});

/***/ }),

/***/ "./assets/images/logo-dark.webp":
/*!**************************************!*\
  !*** ./assets/images/logo-dark.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo-dark.0953048d.webp";

/***/ }),

/***/ "./node_modules/@tanstack/devtools-event-client/dist/esm/plugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tanstack/devtools-event-client/dist/esm/plugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventClient: () => (/* binding */ EventClient)
/* harmony export */ });
class EventClient {
  #enabled = true;
  #pluginId;
  #eventTarget;
  #debug;
  #queuedEvents;
  #connected;
  #connectIntervalId;
  #connectEveryMs;
  #retryCount = 0;
  #maxRetries = 5;
  #connecting = false;
  #onConnected = () => {
    this.debugLog("Connected to event bus");
    this.#connected = true;
    this.#connecting = false;
    this.debugLog("Emitting queued events", this.#queuedEvents);
    this.#queuedEvents.forEach((event) => this.emitEventToBus(event));
    this.#queuedEvents = [];
    this.stopConnectLoop();
    this.#eventTarget().removeEventListener(
      "tanstack-connect-success",
      this.#onConnected
    );
  };
  // fired off right away and then at intervals
  #retryConnection = () => {
    if (this.#retryCount < this.#maxRetries) {
      this.#retryCount++;
      this.dispatchCustomEvent("tanstack-connect", {});
      return;
    }
    this.#eventTarget().removeEventListener(
      "tanstack-connect",
      this.#retryConnection
    );
    this.debugLog("Max retries reached, giving up on connection");
    this.stopConnectLoop();
  };
  // This is run to register connection handlers on first emit attempt
  #connectFunction = () => {
    if (this.#connecting) return;
    this.#connecting = true;
    this.#eventTarget().addEventListener(
      "tanstack-connect-success",
      this.#onConnected
    );
    this.#retryConnection();
  };
  constructor({
    pluginId,
    debug = false,
    enabled = true,
    reconnectEveryMs = 300
  }) {
    this.#pluginId = pluginId;
    this.#enabled = enabled;
    this.#eventTarget = this.getGlobalTarget;
    this.#debug = debug;
    this.debugLog(" Initializing event subscription for plugin", this.#pluginId);
    this.#queuedEvents = [];
    this.#connected = false;
    this.#connectIntervalId = null;
    this.#connectEveryMs = reconnectEveryMs;
  }
  startConnectLoop() {
    if (this.#connectIntervalId !== null || this.#connected) return;
    this.debugLog(`Starting connect loop (every ${this.#connectEveryMs}ms)`);
    this.#connectIntervalId = setInterval(
      this.#retryConnection,
      this.#connectEveryMs
    );
  }
  stopConnectLoop() {
    this.#connecting = false;
    if (this.#connectIntervalId === null) {
      return;
    }
    clearInterval(this.#connectIntervalId);
    this.#connectIntervalId = null;
    this.debugLog("Stopped connect loop");
  }
  debugLog(...args) {
    if (this.#debug) {
      console.log(`🌴 [tanstack-devtools:${this.#pluginId}-plugin]`, ...args);
    }
  }
  getGlobalTarget() {
    if (typeof globalThis !== "undefined" && globalThis.__TANSTACK_EVENT_TARGET__) {
      this.debugLog("Using global event target");
      return globalThis.__TANSTACK_EVENT_TARGET__;
    }
    if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
      this.debugLog("Using window as event target");
      return window;
    }
    const eventTarget = typeof EventTarget !== "undefined" ? new EventTarget() : void 0;
    if (typeof eventTarget === "undefined" || typeof eventTarget.addEventListener === "undefined") {
      this.debugLog(
        "No event mechanism available, running in non-web environment"
      );
      return {
        addEventListener: () => {
        },
        removeEventListener: () => {
        },
        dispatchEvent: () => false
      };
    }
    this.debugLog("Using new EventTarget as fallback");
    return eventTarget;
  }
  getPluginId() {
    return this.#pluginId;
  }
  dispatchCustomEventShim(eventName, detail) {
    try {
      const event = new Event(eventName, {
        detail
      });
      this.#eventTarget().dispatchEvent(event);
    } catch (e) {
      this.debugLog("Failed to dispatch shim event");
    }
  }
  dispatchCustomEvent(eventName, detail) {
    try {
      this.#eventTarget().dispatchEvent(new CustomEvent(eventName, { detail }));
    } catch (e) {
      this.dispatchCustomEventShim(eventName, detail);
    }
  }
  emitEventToBus(event) {
    this.debugLog("Emitting event to client bus", event);
    this.dispatchCustomEvent("tanstack-dispatch-event", event);
  }
  emit(eventSuffix, payload) {
    if (!this.#enabled) {
      this.debugLog(
        "Event bus client is disabled, not emitting event",
        eventSuffix,
        payload
      );
      return;
    }
    if (!this.#connected) {
      this.debugLog("Bus not available, will be pushed as soon as connected");
      this.#queuedEvents.push({
        type: `${this.#pluginId}:${eventSuffix}`,
        payload,
        pluginId: this.#pluginId
      });
      if (typeof CustomEvent !== "undefined" && !this.#connecting) {
        this.#connectFunction();
        this.startConnectLoop();
      }
      return;
    }
    return this.emitEventToBus({
      type: `${this.#pluginId}:${eventSuffix}`,
      payload,
      pluginId: this.#pluginId
    });
  }
  on(eventSuffix, cb) {
    const eventName = `${this.#pluginId}:${eventSuffix}`;
    if (!this.#enabled) {
      this.debugLog(
        "Event bus client is disabled, not registering event",
        eventName
      );
      return () => {
      };
    }
    const handler = (e) => {
      this.debugLog("Received event from bus", e.detail);
      cb(e.detail);
    };
    this.#eventTarget().addEventListener(eventName, handler);
    this.debugLog("Registered event to bus", eventName);
    return () => {
      this.#eventTarget().removeEventListener(eventName, handler);
    };
  }
  onAll(cb) {
    if (!this.#enabled) {
      this.debugLog("Event bus client is disabled, not registering event");
      return () => {
      };
    }
    const handler = (e) => {
      const event = e.detail;
      cb(event);
    };
    this.#eventTarget().addEventListener("tanstack-devtools-global", handler);
    return () => this.#eventTarget().removeEventListener(
      "tanstack-devtools-global",
      handler
    );
  }
  onAllPluginEvents(cb) {
    if (!this.#enabled) {
      this.debugLog("Event bus client is disabled, not registering event");
      return () => {
      };
    }
    const handler = (e) => {
      const event = e.detail;
      if (this.#pluginId && event.pluginId !== this.#pluginId) {
        return;
      }
      cb(event);
    };
    this.#eventTarget().addEventListener("tanstack-devtools-global", handler);
    return () => this.#eventTarget().removeEventListener(
      "tanstack-devtools-global",
      handler
    );
  }
}

//# sourceMappingURL=plugin.js.map


/***/ }),

/***/ "./node_modules/@tanstack/form-core/dist/esm/EventClient.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tanstack/form-core/dist/esm/EventClient.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formEventClient: () => (/* binding */ formEventClient)
/* harmony export */ });
/* harmony import */ var _tanstack_devtools_event_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/devtools-event-client */ "./node_modules/@tanstack/devtools-event-client/dist/esm/plugin.js");

class FormEventClient extends _tanstack_devtools_event_client__WEBPACK_IMPORTED_MODULE_0__.EventClient {
  constructor() {
    super({
      pluginId: "form-devtools",
      reconnectEveryMs: 1e3
    });
  }
}
const formEventClient = new FormEventClient();

//# sourceMappingURL=EventClient.js.map


/***/ }),

/***/ "./node_modules/@tanstack/form-core/dist/esm/FieldApi.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tanstack/form-core/dist/esm/FieldApi.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldApi: () => (/* binding */ FieldApi)
/* harmony export */ });
/* harmony import */ var _tanstack_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/store */ "./node_modules/@tanstack/store/dist/esm/scheduler.js");
/* harmony import */ var _tanstack_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/store */ "./node_modules/@tanstack/store/dist/esm/derived.js");
/* harmony import */ var _standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./standardSchemaValidator.js */ "./node_modules/@tanstack/form-core/dist/esm/standardSchemaValidator.js");
/* harmony import */ var _metaHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metaHelper.js */ "./node_modules/@tanstack/form-core/dist/esm/metaHelper.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/form-core/dist/esm/utils.js");
/* harmony import */ var _ValidationLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidationLogic.js */ "./node_modules/@tanstack/form-core/dist/esm/ValidationLogic.js");





class FieldApi {
  /**
   * Initializes a new `FieldApi` instance.
   */
  constructor(opts) {
    this.options = {};
    this.mount = () => {
      const cleanup = this.store.mount();
      if (this.options.defaultValue !== void 0 && !this.getMeta().isTouched) {
        this.form.setFieldValue(this.name, this.options.defaultValue, {
          dontUpdateMeta: true
        });
      }
      const info = this.getInfo();
      info.instance = this;
      this.update(this.options);
      const { onMount } = this.options.validators || {};
      if (onMount) {
        const error = this.runValidator({
          validate: onMount,
          value: {
            value: this.state.value,
            fieldApi: this,
            validationSource: "field"
          },
          type: "validate"
        });
        if (error) {
          this.setMeta(
            (prev) => ({
              ...prev,
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              errorMap: { ...prev?.errorMap, onMount: error },
              errorSourceMap: {
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                ...prev?.errorSourceMap,
                onMount: "field"
              }
            })
          );
        }
      }
      this.options.listeners?.onMount?.({
        value: this.state.value,
        fieldApi: this
      });
      return cleanup;
    };
    this.update = (opts2) => {
      this.options = opts2;
      this.name = opts2.name;
      if (!this.state.meta.isTouched && this.options.defaultValue !== void 0) {
        const formField = this.form.getFieldValue(this.name);
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.evaluate)(formField, opts2.defaultValue)) {
          this.form.setFieldValue(this.name, opts2.defaultValue, {
            dontUpdateMeta: true,
            dontValidate: true,
            dontRunListeners: true
          });
        }
      }
      if (!this.form.getFieldMeta(this.name)) {
        this.form.setFieldMeta(this.name, this.state.meta);
      }
    };
    this.getValue = () => {
      return this.form.getFieldValue(this.name);
    };
    this.setValue = (updater, options) => {
      this.form.setFieldValue(
        this.name,
        updater,
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeOpts)(options, { dontRunListeners: true, dontValidate: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
      if (!options?.dontValidate) {
        this.validate("change");
      }
    };
    this.getMeta = () => this.store.state.meta;
    this.setMeta = (updater) => this.form.setFieldMeta(this.name, updater);
    this.getInfo = () => this.form.getFieldInfo(this.name);
    this.pushValue = (value, options) => {
      this.form.pushFieldValue(
        this.name,
        value,
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeOpts)(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.insertValue = (index, value, options) => {
      this.form.insertFieldValue(
        this.name,
        index,
        value,
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeOpts)(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.replaceValue = (index, value, options) => {
      this.form.replaceFieldValue(
        this.name,
        index,
        value,
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeOpts)(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.removeValue = (index, options) => {
      this.form.removeFieldValue(
        this.name,
        index,
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeOpts)(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.swapValues = (aIndex, bIndex, options) => {
      this.form.swapFieldValues(
        this.name,
        aIndex,
        bIndex,
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeOpts)(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.moveValue = (aIndex, bIndex, options) => {
      this.form.moveFieldValues(
        this.name,
        aIndex,
        bIndex,
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeOpts)(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.clearValues = (options) => {
      this.form.clearFieldValues(
        this.name,
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.mergeOpts)(options, { dontRunListeners: true })
      );
      if (!options?.dontRunListeners) {
        this.triggerOnChangeListener();
      }
    };
    this.getLinkedFields = (cause) => {
      const fields = Object.values(this.form.fieldInfo);
      const linkedFields = [];
      for (const field of fields) {
        if (!field.instance) continue;
        const { onChangeListenTo, onBlurListenTo } = field.instance.options.validators || {};
        if (cause === "change" && onChangeListenTo?.includes(this.name)) {
          linkedFields.push(field.instance);
        }
        if (cause === "blur" && onBlurListenTo?.includes(this.name)) {
          linkedFields.push(field.instance);
        }
      }
      return linkedFields;
    };
    this.validateSync = (cause, errorFromForm) => {
      const validates = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getSyncValidatorArray)(cause, {
        ...this.options,
        form: this.form,
        validationLogic: this.form.options.validationLogic || _ValidationLogic_js__WEBPACK_IMPORTED_MODULE_1__.defaultValidationLogic
      });
      const linkedFields = this.getLinkedFields(cause);
      const linkedFieldValidates = linkedFields.reduce(
        (acc, field) => {
          const fieldValidates = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getSyncValidatorArray)(cause, {
            ...field.options,
            form: field.form,
            validationLogic: field.form.options.validationLogic || _ValidationLogic_js__WEBPACK_IMPORTED_MODULE_1__.defaultValidationLogic
          });
          fieldValidates.forEach((validate) => {
            validate.field = field;
          });
          return acc.concat(fieldValidates);
        },
        []
      );
      let hasErrored = false;
      (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
        const validateFieldFn = (field, validateObj) => {
          const errorMapKey = getErrorMapKey(validateObj.cause);
          const fieldLevelError = validateObj.validate ? normalizeError(
            field.runValidator({
              validate: validateObj.validate,
              value: {
                value: field.store.state.value,
                validationSource: "field",
                fieldApi: field
              },
              type: "validate"
            })
          ) : void 0;
          const formLevelError = errorFromForm[errorMapKey];
          const { newErrorValue, newSource } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.determineFieldLevelErrorSourceAndValue)({
            formLevelError,
            fieldLevelError
          });
          if (field.state.meta.errorMap?.[errorMapKey] !== newErrorValue) {
            field.setMeta((prev) => ({
              ...prev,
              errorMap: {
                ...prev.errorMap,
                [errorMapKey]: newErrorValue
              },
              errorSourceMap: {
                ...prev.errorSourceMap,
                [errorMapKey]: newSource
              }
            }));
          }
          if (newErrorValue) {
            hasErrored = true;
          }
        };
        for (const validateObj of validates) {
          validateFieldFn(this, validateObj);
        }
        for (const fieldValitateObj of linkedFieldValidates) {
          if (!fieldValitateObj.validate) continue;
          validateFieldFn(fieldValitateObj.field, fieldValitateObj);
        }
      });
      const submitErrKey = getErrorMapKey("submit");
      if (
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        this.state.meta.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored
      ) {
        this.setMeta((prev) => ({
          ...prev,
          errorMap: {
            ...prev.errorMap,
            [submitErrKey]: void 0
          },
          errorSourceMap: {
            ...prev.errorSourceMap,
            [submitErrKey]: void 0
          }
        }));
      }
      return { hasErrored };
    };
    this.validateAsync = async (cause, formValidationResultPromise) => {
      const validates = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getAsyncValidatorArray)(cause, {
        ...this.options,
        form: this.form,
        validationLogic: this.form.options.validationLogic || _ValidationLogic_js__WEBPACK_IMPORTED_MODULE_1__.defaultValidationLogic
      });
      const asyncFormValidationResults = await formValidationResultPromise;
      const linkedFields = this.getLinkedFields(cause);
      const linkedFieldValidates = linkedFields.reduce(
        (acc, field) => {
          const fieldValidates = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getAsyncValidatorArray)(cause, {
            ...field.options,
            form: field.form,
            validationLogic: field.form.options.validationLogic || _ValidationLogic_js__WEBPACK_IMPORTED_MODULE_1__.defaultValidationLogic
          });
          fieldValidates.forEach((validate) => {
            validate.field = field;
          });
          return acc.concat(fieldValidates);
        },
        []
      );
      if (!this.state.meta.isValidating) {
        this.setMeta((prev) => ({ ...prev, isValidating: true }));
      }
      for (const linkedField of linkedFields) {
        linkedField.setMeta((prev) => ({ ...prev, isValidating: true }));
      }
      const validatesPromises = [];
      const linkedPromises = [];
      const validateFieldAsyncFn = (field, validateObj, promises) => {
        const errorMapKey = getErrorMapKey(validateObj.cause);
        const fieldValidatorMeta = field.getInfo().validationMetaMap[errorMapKey];
        fieldValidatorMeta?.lastAbortController.abort();
        const controller = new AbortController();
        this.getInfo().validationMetaMap[errorMapKey] = {
          lastAbortController: controller
        };
        promises.push(
          new Promise(async (resolve) => {
            let rawError;
            try {
              rawError = await new Promise((rawResolve, rawReject) => {
                if (this.timeoutIds.validations[validateObj.cause]) {
                  clearTimeout(this.timeoutIds.validations[validateObj.cause]);
                }
                this.timeoutIds.validations[validateObj.cause] = setTimeout(
                  async () => {
                    if (controller.signal.aborted) return rawResolve(void 0);
                    try {
                      rawResolve(
                        await this.runValidator({
                          validate: validateObj.validate,
                          value: {
                            value: field.store.state.value,
                            fieldApi: field,
                            signal: controller.signal,
                            validationSource: "field"
                          },
                          type: "validateAsync"
                        })
                      );
                    } catch (e) {
                      rawReject(e);
                    }
                  },
                  validateObj.debounceMs
                );
              });
            } catch (e) {
              rawError = e;
            }
            if (controller.signal.aborted) return resolve(void 0);
            const fieldLevelError = normalizeError(rawError);
            const formLevelError = asyncFormValidationResults[this.name]?.[errorMapKey];
            const { newErrorValue, newSource } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.determineFieldLevelErrorSourceAndValue)({
              formLevelError,
              fieldLevelError
            });
            field.setMeta((prev) => {
              return {
                ...prev,
                errorMap: {
                  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                  ...prev?.errorMap,
                  [errorMapKey]: newErrorValue
                },
                errorSourceMap: {
                  ...prev.errorSourceMap,
                  [errorMapKey]: newSource
                }
              };
            });
            resolve(newErrorValue);
          })
        );
      };
      for (const validateObj of validates) {
        if (!validateObj.validate) continue;
        validateFieldAsyncFn(this, validateObj, validatesPromises);
      }
      for (const fieldValitateObj of linkedFieldValidates) {
        if (!fieldValitateObj.validate) continue;
        validateFieldAsyncFn(
          fieldValitateObj.field,
          fieldValitateObj,
          linkedPromises
        );
      }
      let results = [];
      if (validatesPromises.length || linkedPromises.length) {
        results = await Promise.all(validatesPromises);
        await Promise.all(linkedPromises);
      }
      this.setMeta((prev) => ({ ...prev, isValidating: false }));
      for (const linkedField of linkedFields) {
        linkedField.setMeta((prev) => ({ ...prev, isValidating: false }));
      }
      return results.filter(Boolean);
    };
    this.validate = (cause, opts2) => {
      if (!this.state.meta.isTouched) return [];
      const { fieldsErrorMap } = opts2?.skipFormValidation ? { fieldsErrorMap: {} } : this.form.validateSync(cause);
      const { hasErrored } = this.validateSync(
        cause,
        fieldsErrorMap[this.name] ?? {}
      );
      if (hasErrored && !this.options.asyncAlways) {
        this.getInfo().validationMetaMap[getErrorMapKey(cause)]?.lastAbortController.abort();
        return this.state.meta.errors;
      }
      const formValidationResultPromise = opts2?.skipFormValidation ? Promise.resolve({}) : this.form.validateAsync(cause);
      return this.validateAsync(cause, formValidationResultPromise);
    };
    this.handleChange = (updater) => {
      this.setValue(updater);
    };
    this.handleBlur = () => {
      const prevTouched = this.state.meta.isTouched;
      if (!prevTouched) {
        this.setMeta((prev) => ({ ...prev, isTouched: true }));
      }
      if (!this.state.meta.isBlurred) {
        this.setMeta((prev) => ({ ...prev, isBlurred: true }));
      }
      this.validate("blur");
      this.triggerOnBlurListener();
    };
    this.parseValueWithSchema = (schema) => {
      return _standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_3__.standardSchemaValidators.validate(
        { value: this.state.value, validationSource: "field" },
        schema
      );
    };
    this.parseValueWithSchemaAsync = (schema) => {
      return _standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_3__.standardSchemaValidators.validateAsync(
        { value: this.state.value, validationSource: "field" },
        schema
      );
    };
    this.form = opts.form;
    this.name = opts.name;
    this.options = opts;
    this.timeoutIds = {
      validations: {},
      listeners: {},
      formListeners: {}
    };
    this.store = new _tanstack_store__WEBPACK_IMPORTED_MODULE_4__.Derived({
      deps: [this.form.store],
      fn: () => {
        const meta = this.form.getFieldMeta(this.name) ?? {
          ..._metaHelper_js__WEBPACK_IMPORTED_MODULE_5__.defaultFieldMeta,
          ...opts.defaultMeta
        };
        let value = this.form.getFieldValue(this.name);
        if (!meta.isTouched && value === void 0 && this.options.defaultValue !== void 0 && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.evaluate)(value, this.options.defaultValue)) {
          value = this.options.defaultValue;
        }
        return {
          value,
          meta
        };
      }
    });
  }
  /**
   * The current field state.
   */
  get state() {
    return this.store.state;
  }
  /**
   * @private
   */
  runValidator(props) {
    if ((0,_standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_3__.isStandardSchemaValidator)(props.validate)) {
      return _standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_3__.standardSchemaValidators[props.type](
        props.value,
        props.validate
      );
    }
    return props.validate(props.value);
  }
  /**
   * Updates the field's errorMap
   */
  setErrorMap(errorMap) {
    this.setMeta((prev) => ({
      ...prev,
      errorMap: {
        ...prev.errorMap,
        ...errorMap
      }
    }));
  }
  triggerOnBlurListener() {
    const formDebounceMs = this.form.options.listeners?.onBlurDebounceMs;
    if (formDebounceMs && formDebounceMs > 0) {
      if (this.timeoutIds.formListeners.blur) {
        clearTimeout(this.timeoutIds.formListeners.blur);
      }
      this.timeoutIds.formListeners.blur = setTimeout(() => {
        this.form.options.listeners?.onBlur?.({
          formApi: this.form,
          fieldApi: this
        });
      }, formDebounceMs);
    } else {
      this.form.options.listeners?.onBlur?.({
        formApi: this.form,
        fieldApi: this
      });
    }
    const fieldDebounceMs = this.options.listeners?.onBlurDebounceMs;
    if (fieldDebounceMs && fieldDebounceMs > 0) {
      if (this.timeoutIds.listeners.blur) {
        clearTimeout(this.timeoutIds.listeners.blur);
      }
      this.timeoutIds.listeners.blur = setTimeout(() => {
        this.options.listeners?.onBlur?.({
          value: this.state.value,
          fieldApi: this
        });
      }, fieldDebounceMs);
    } else {
      this.options.listeners?.onBlur?.({
        value: this.state.value,
        fieldApi: this
      });
    }
  }
  /**
   * @private
   */
  triggerOnChangeListener() {
    const formDebounceMs = this.form.options.listeners?.onChangeDebounceMs;
    if (formDebounceMs && formDebounceMs > 0) {
      if (this.timeoutIds.formListeners.change) {
        clearTimeout(this.timeoutIds.formListeners.change);
      }
      this.timeoutIds.formListeners.change = setTimeout(() => {
        this.form.options.listeners?.onChange?.({
          formApi: this.form,
          fieldApi: this
        });
      }, formDebounceMs);
    } else {
      this.form.options.listeners?.onChange?.({
        formApi: this.form,
        fieldApi: this
      });
    }
    const fieldDebounceMs = this.options.listeners?.onChangeDebounceMs;
    if (fieldDebounceMs && fieldDebounceMs > 0) {
      if (this.timeoutIds.listeners.change) {
        clearTimeout(this.timeoutIds.listeners.change);
      }
      this.timeoutIds.listeners.change = setTimeout(() => {
        this.options.listeners?.onChange?.({
          value: this.state.value,
          fieldApi: this
        });
      }, fieldDebounceMs);
    } else {
      this.options.listeners?.onChange?.({
        value: this.state.value,
        fieldApi: this
      });
    }
  }
}
function normalizeError(rawError) {
  if (rawError) {
    return rawError;
  }
  return void 0;
}
function getErrorMapKey(cause) {
  switch (cause) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "dynamic":
      return "onDynamic";
    case "change":
    default:
      return "onChange";
  }
}

//# sourceMappingURL=FieldApi.js.map


/***/ }),

/***/ "./node_modules/@tanstack/form-core/dist/esm/FormApi.js":
/*!**************************************************************!*\
  !*** ./node_modules/@tanstack/form-core/dist/esm/FormApi.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormApi: () => (/* binding */ FormApi)
/* harmony export */ });
/* harmony import */ var _tanstack_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/store */ "./node_modules/@tanstack/store/dist/esm/scheduler.js");
/* harmony import */ var _tanstack_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/store */ "./node_modules/@tanstack/store/dist/esm/store.js");
/* harmony import */ var _tanstack_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/store */ "./node_modules/@tanstack/store/dist/esm/derived.js");
/* harmony import */ var _tanstack_pacer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/pacer */ "./node_modules/@tanstack/pacer/dist/esm/throttler.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/form-core/dist/esm/utils.js");
/* harmony import */ var _ValidationLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ValidationLogic.js */ "./node_modules/@tanstack/form-core/dist/esm/ValidationLogic.js");
/* harmony import */ var _standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standardSchemaValidator.js */ "./node_modules/@tanstack/form-core/dist/esm/standardSchemaValidator.js");
/* harmony import */ var _metaHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metaHelper.js */ "./node_modules/@tanstack/form-core/dist/esm/metaHelper.js");
/* harmony import */ var _EventClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventClient.js */ "./node_modules/@tanstack/form-core/dist/esm/EventClient.js");







function getDefaultFormState(defaultState) {
  return {
    values: defaultState.values ?? {},
    errorMap: defaultState.errorMap ?? {},
    fieldMetaBase: defaultState.fieldMetaBase ?? {},
    isSubmitted: defaultState.isSubmitted ?? false,
    isSubmitting: defaultState.isSubmitting ?? false,
    isValidating: defaultState.isValidating ?? false,
    submissionAttempts: defaultState.submissionAttempts ?? 0,
    isSubmitSuccessful: defaultState.isSubmitSuccessful ?? false,
    validationMetaMap: defaultState.validationMetaMap ?? {
      onChange: void 0,
      onBlur: void 0,
      onSubmit: void 0,
      onMount: void 0,
      onServer: void 0,
      onDynamic: void 0
    }
  };
}
class FormApi {
  /**
   * Constructs a new `FormApi` instance with the given form options.
   */
  constructor(opts) {
    this.options = {};
    this.fieldInfo = {};
    this.prevTransformArray = [];
    this.mount = () => {
      const cleanupFieldMetaDerived = this.fieldMetaDerived.mount();
      const cleanupStoreDerived = this.store.mount();
      const cleanup = () => {
        cleanupFieldMetaDerived();
        cleanupStoreDerived();
        _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.emit("form-unmounted", {
          id: this._formId
        });
      };
      this.options.listeners?.onMount?.({ formApi: this });
      const { onMount } = this.options.validators || {};
      _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.emit("form-api", {
        id: this._formId,
        state: this.store.state,
        options: this.options
      });
      if (!onMount) return cleanup;
      this.validateSync("mount");
      return cleanup;
    };
    this.update = (options) => {
      if (!options) return;
      const oldOptions = this.options;
      this.options = options;
      const shouldUpdateReeval = !!options.transform?.deps?.some(
        (val, i) => val !== this.prevTransformArray[i]
      );
      const shouldUpdateValues = options.defaultValues && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options.defaultValues, oldOptions.defaultValues) && !this.state.isTouched;
      const shouldUpdateState = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.evaluate)(options.defaultState, oldOptions.defaultState) && !this.state.isTouched;
      if (!shouldUpdateValues && !shouldUpdateState && !shouldUpdateReeval) return;
      (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
        this.baseStore.setState(
          () => getDefaultFormState(
            Object.assign(
              {},
              this.state,
              shouldUpdateState ? options.defaultState : {},
              shouldUpdateValues ? {
                values: options.defaultValues
              } : {},
              shouldUpdateReeval ? { _force_re_eval: !this.state._force_re_eval } : {}
            )
          )
        );
      });
      _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.emit("form-api", {
        id: this._formId,
        state: this.store.state,
        options: this.options
      });
    };
    this.reset = (values, opts2) => {
      const { fieldMeta: currentFieldMeta } = this.state;
      const fieldMetaBase = this.resetFieldMeta(currentFieldMeta);
      if (values && !opts2?.keepDefaultValues) {
        this.options = {
          ...this.options,
          defaultValues: values
        };
      }
      this.baseStore.setState(
        () => getDefaultFormState({
          ...this.options.defaultState,
          values: values ?? this.options.defaultValues ?? this.options.defaultState?.values,
          fieldMetaBase
        })
      );
    };
    this.validateAllFields = async (cause) => {
      const fieldValidationPromises = [];
      (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
        void Object.values(this.fieldInfo).forEach(
          (field) => {
            if (!field.instance) return;
            const fieldInstance = field.instance;
            fieldValidationPromises.push(
              // Remember, `validate` is either a sync operation or a promise
              Promise.resolve().then(
                () => fieldInstance.validate(cause, { skipFormValidation: true })
              )
            );
            if (!field.instance.state.meta.isTouched) {
              field.instance.setMeta((prev) => ({ ...prev, isTouched: true }));
            }
          }
        );
      });
      const fieldErrorMapMap = await Promise.all(fieldValidationPromises);
      return fieldErrorMapMap.flat();
    };
    this.validateArrayFieldsStartingFrom = async (field, index, cause) => {
      const currentValue = this.getFieldValue(field);
      const lastIndex = Array.isArray(currentValue) ? Math.max(currentValue.length - 1, 0) : null;
      const fieldKeysToValidate = [`${field}[${index}]`];
      for (let i = index + 1; i <= (lastIndex ?? 0); i++) {
        fieldKeysToValidate.push(`${field}[${i}]`);
      }
      const fieldsToValidate = Object.keys(this.fieldInfo).filter(
        (fieldKey) => fieldKeysToValidate.some((key) => fieldKey.startsWith(key))
      );
      const fieldValidationPromises = [];
      (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
        fieldsToValidate.forEach((nestedField) => {
          fieldValidationPromises.push(
            Promise.resolve().then(() => this.validateField(nestedField, cause))
          );
        });
      });
      const fieldErrorMapMap = await Promise.all(fieldValidationPromises);
      return fieldErrorMapMap.flat();
    };
    this.validateField = (field, cause) => {
      const fieldInstance = this.fieldInfo[field]?.instance;
      if (!fieldInstance) return [];
      if (!fieldInstance.state.meta.isTouched) {
        fieldInstance.setMeta((prev) => ({ ...prev, isTouched: true }));
      }
      return fieldInstance.validate(cause);
    };
    this.validateSync = (cause) => {
      const validates = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getSyncValidatorArray)(cause, {
        ...this.options,
        form: this,
        validationLogic: this.options.validationLogic || _ValidationLogic_js__WEBPACK_IMPORTED_MODULE_3__.defaultValidationLogic
      });
      let hasErrored = false;
      const currentValidationErrorMap = {};
      (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
        for (const validateObj of validates) {
          if (!validateObj.validate) continue;
          const rawError = this.runValidator({
            validate: validateObj.validate,
            value: {
              value: this.state.values,
              formApi: this,
              validationSource: "form"
            },
            type: "validate"
          });
          const { formError, fieldErrors } = normalizeError(rawError);
          const errorMapKey = getErrorMapKey(validateObj.cause);
          for (const field of Object.keys(
            this.state.fieldMeta
          )) {
            if (this.baseStore.state.fieldMetaBase[field] === void 0) {
              continue;
            }
            const fieldMeta = this.getFieldMeta(field);
            if (!fieldMeta) continue;
            const {
              errorMap: currentErrorMap,
              errorSourceMap: currentErrorMapSource
            } = fieldMeta;
            const newFormValidatorError = fieldErrors?.[field];
            const { newErrorValue, newSource } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.determineFormLevelErrorSourceAndValue)({
              newFormValidatorError,
              isPreviousErrorFromFormValidator: (
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                currentErrorMapSource?.[errorMapKey] === "form"
              ),
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              previousErrorValue: currentErrorMap?.[errorMapKey]
            });
            if (newSource === "form") {
              currentValidationErrorMap[field] = {
                ...currentValidationErrorMap[field],
                [errorMapKey]: newFormValidatorError
              };
            }
            if (
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              currentErrorMap?.[errorMapKey] !== newErrorValue
            ) {
              this.setFieldMeta(field, (prev) => ({
                ...prev,
                errorMap: {
                  ...prev.errorMap,
                  [errorMapKey]: newErrorValue
                },
                errorSourceMap: {
                  ...prev.errorSourceMap,
                  [errorMapKey]: newSource
                }
              }));
            }
          }
          if (this.state.errorMap?.[errorMapKey] !== formError) {
            this.baseStore.setState((prev) => ({
              ...prev,
              errorMap: {
                ...prev.errorMap,
                [errorMapKey]: formError
              }
            }));
          }
          if (formError || fieldErrors) {
            hasErrored = true;
          }
        }
        const submitErrKey = getErrorMapKey("submit");
        if (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          this.state.errorMap?.[submitErrKey] && cause !== "submit" && !hasErrored
        ) {
          this.baseStore.setState((prev) => ({
            ...prev,
            errorMap: {
              ...prev.errorMap,
              [submitErrKey]: void 0
            }
          }));
        }
        const serverErrKey = getErrorMapKey("server");
        if (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          this.state.errorMap?.[serverErrKey] && cause !== "server" && !hasErrored
        ) {
          this.baseStore.setState((prev) => ({
            ...prev,
            errorMap: {
              ...prev.errorMap,
              [serverErrKey]: void 0
            }
          }));
        }
      });
      return { hasErrored, fieldsErrorMap: currentValidationErrorMap };
    };
    this.validateAsync = async (cause) => {
      const validates = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getAsyncValidatorArray)(cause, {
        ...this.options,
        form: this,
        validationLogic: this.options.validationLogic || _ValidationLogic_js__WEBPACK_IMPORTED_MODULE_3__.defaultValidationLogic
      });
      if (!this.state.isFormValidating) {
        this.baseStore.setState((prev) => ({ ...prev, isFormValidating: true }));
      }
      const promises = [];
      let fieldErrorsFromFormValidators;
      for (const validateObj of validates) {
        if (!validateObj.validate) continue;
        const key = getErrorMapKey(validateObj.cause);
        const fieldValidatorMeta = this.state.validationMetaMap[key];
        fieldValidatorMeta?.lastAbortController.abort();
        const controller = new AbortController();
        this.state.validationMetaMap[key] = {
          lastAbortController: controller
        };
        promises.push(
          new Promise(async (resolve) => {
            let rawError;
            try {
              rawError = await new Promise((rawResolve, rawReject) => {
                setTimeout(async () => {
                  if (controller.signal.aborted) return rawResolve(void 0);
                  try {
                    rawResolve(
                      await this.runValidator({
                        validate: validateObj.validate,
                        value: {
                          value: this.state.values,
                          formApi: this,
                          validationSource: "form",
                          signal: controller.signal
                        },
                        type: "validateAsync"
                      })
                    );
                  } catch (e) {
                    rawReject(e);
                  }
                }, validateObj.debounceMs);
              });
            } catch (e) {
              rawError = e;
            }
            const { formError, fieldErrors: fieldErrorsFromNormalizeError } = normalizeError(rawError);
            if (fieldErrorsFromNormalizeError) {
              fieldErrorsFromFormValidators = fieldErrorsFromFormValidators ? {
                ...fieldErrorsFromFormValidators,
                ...fieldErrorsFromNormalizeError
              } : fieldErrorsFromNormalizeError;
            }
            const errorMapKey = getErrorMapKey(validateObj.cause);
            for (const field of Object.keys(
              this.state.fieldMeta
            )) {
              if (this.baseStore.state.fieldMetaBase[field] === void 0) {
                continue;
              }
              const fieldMeta = this.getFieldMeta(field);
              if (!fieldMeta) continue;
              const {
                errorMap: currentErrorMap,
                errorSourceMap: currentErrorMapSource
              } = fieldMeta;
              const newFormValidatorError = fieldErrorsFromFormValidators?.[field];
              const { newErrorValue, newSource } = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.determineFormLevelErrorSourceAndValue)({
                newFormValidatorError,
                isPreviousErrorFromFormValidator: (
                  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                  currentErrorMapSource?.[errorMapKey] === "form"
                ),
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                previousErrorValue: currentErrorMap?.[errorMapKey]
              });
              if (
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                currentErrorMap?.[errorMapKey] !== newErrorValue
              ) {
                this.setFieldMeta(field, (prev) => ({
                  ...prev,
                  errorMap: {
                    ...prev.errorMap,
                    [errorMapKey]: newErrorValue
                  },
                  errorSourceMap: {
                    ...prev.errorSourceMap,
                    [errorMapKey]: newSource
                  }
                }));
              }
            }
            this.baseStore.setState((prev) => ({
              ...prev,
              errorMap: {
                ...prev.errorMap,
                [errorMapKey]: formError
              }
            }));
            resolve(
              fieldErrorsFromFormValidators ? { fieldErrors: fieldErrorsFromFormValidators, errorMapKey } : void 0
            );
          })
        );
      }
      let results = [];
      const fieldsErrorMap = {};
      if (promises.length) {
        results = await Promise.all(promises);
        for (const fieldValidationResult of results) {
          if (fieldValidationResult?.fieldErrors) {
            const { errorMapKey } = fieldValidationResult;
            for (const [field, fieldError] of Object.entries(
              fieldValidationResult.fieldErrors
            )) {
              const oldErrorMap = fieldsErrorMap[field] || {};
              const newErrorMap = {
                ...oldErrorMap,
                [errorMapKey]: fieldError
              };
              fieldsErrorMap[field] = newErrorMap;
            }
          }
        }
      }
      this.baseStore.setState((prev) => ({
        ...prev,
        isFormValidating: false
      }));
      return fieldsErrorMap;
    };
    this.validate = (cause) => {
      const { hasErrored, fieldsErrorMap } = this.validateSync(cause);
      if (hasErrored && !this.options.asyncAlways) {
        return fieldsErrorMap;
      }
      return this.validateAsync(cause);
    };
    this.getFieldValue = (field) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getBy)(this.state.values, field);
    this.getFieldMeta = (field) => {
      return this.state.fieldMeta[field];
    };
    this.getFieldInfo = (field) => {
      return this.fieldInfo[field] ||= {
        instance: null,
        validationMetaMap: {
          onChange: void 0,
          onBlur: void 0,
          onSubmit: void 0,
          onMount: void 0,
          onServer: void 0,
          onDynamic: void 0
        }
      };
    };
    this.setFieldMeta = (field, updater) => {
      this.baseStore.setState((prev) => {
        return {
          ...prev,
          fieldMetaBase: {
            ...prev.fieldMetaBase,
            [field]: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.functionalUpdate)(
              updater,
              prev.fieldMetaBase[field]
            )
          }
        };
      });
    };
    this.resetFieldMeta = (fieldMeta) => {
      return Object.keys(fieldMeta).reduce(
        (acc, key) => {
          const fieldKey = key;
          acc[fieldKey] = _metaHelper_js__WEBPACK_IMPORTED_MODULE_4__.defaultFieldMeta;
          return acc;
        },
        {}
      );
    };
    this.setFieldValue = (field, updater, opts2) => {
      const dontUpdateMeta = opts2?.dontUpdateMeta ?? false;
      const dontRunListeners = opts2?.dontRunListeners ?? false;
      const dontValidate = opts2?.dontValidate ?? false;
      (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
        if (!dontUpdateMeta) {
          this.setFieldMeta(field, (prev) => ({
            ...prev,
            isTouched: true,
            isDirty: true,
            errorMap: {
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              ...prev?.errorMap,
              onMount: void 0
            }
          }));
        }
        this.baseStore.setState((prev) => {
          return {
            ...prev,
            values: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.setBy)(prev.values, field, updater)
          };
        });
      });
      if (!dontRunListeners) {
        this.getFieldInfo(field).instance?.triggerOnChangeListener();
      }
      if (!dontValidate) {
        this.validateField(field, "change");
      }
    };
    this.deleteField = (field) => {
      const subFieldsToDelete = Object.keys(this.fieldInfo).filter((f) => {
        const fieldStr = field.toString();
        return f !== fieldStr && f.startsWith(fieldStr);
      });
      const fieldsToDelete = [...subFieldsToDelete, field];
      this.baseStore.setState((prev) => {
        const newState = { ...prev };
        fieldsToDelete.forEach((f) => {
          newState.values = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.deleteBy)(newState.values, f);
          delete this.fieldInfo[f];
          delete newState.fieldMetaBase[f];
        });
        return newState;
      });
    };
    this.pushFieldValue = (field, value, options) => {
      this.setFieldValue(
        field,
        (prev) => [...Array.isArray(prev) ? prev : [], value],
        options
      );
    };
    this.insertFieldValue = async (field, index, value, options) => {
      this.setFieldValue(
        field,
        (prev) => {
          return [
            ...prev.slice(0, index),
            value,
            ...prev.slice(index)
          ];
        },
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeOpts)(options, { dontValidate: true })
      );
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        await this.validateField(field, "change");
      }
      (0,_metaHelper_js__WEBPACK_IMPORTED_MODULE_4__.metaHelper)(this).handleArrayInsert(field, index);
      if (!dontValidate) {
        await this.validateArrayFieldsStartingFrom(field, index, "change");
      }
    };
    this.replaceFieldValue = async (field, index, value, options) => {
      this.setFieldValue(
        field,
        (prev) => {
          return prev.map(
            (d, i) => i === index ? value : d
          );
        },
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeOpts)(options, { dontValidate: true })
      );
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        await this.validateField(field, "change");
        await this.validateArrayFieldsStartingFrom(field, index, "change");
      }
    };
    this.removeFieldValue = async (field, index, options) => {
      const fieldValue = this.getFieldValue(field);
      const lastIndex = Array.isArray(fieldValue) ? Math.max(fieldValue.length - 1, 0) : null;
      this.setFieldValue(
        field,
        (prev) => {
          return prev.filter(
            (_d, i) => i !== index
          );
        },
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeOpts)(options, { dontValidate: true })
      );
      (0,_metaHelper_js__WEBPACK_IMPORTED_MODULE_4__.metaHelper)(this).handleArrayRemove(field, index);
      if (lastIndex !== null) {
        const start = `${field}[${lastIndex}]`;
        this.deleteField(start);
      }
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        await this.validateField(field, "change");
        await this.validateArrayFieldsStartingFrom(field, index, "change");
      }
    };
    this.swapFieldValues = (field, index1, index2, options) => {
      this.setFieldValue(
        field,
        (prev) => {
          const prev1 = prev[index1];
          const prev2 = prev[index2];
          return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.setBy)((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.setBy)(prev, `${index1}`, prev2), `${index2}`, prev1);
        },
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeOpts)(options, { dontValidate: true })
      );
      (0,_metaHelper_js__WEBPACK_IMPORTED_MODULE_4__.metaHelper)(this).handleArraySwap(field, index1, index2);
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        this.validateField(field, "change");
        this.validateField(`${field}[${index1}]`, "change");
        this.validateField(`${field}[${index2}]`, "change");
      }
    };
    this.moveFieldValues = (field, index1, index2, options) => {
      this.setFieldValue(
        field,
        (prev) => {
          const next = [...prev];
          next.splice(index2, 0, next.splice(index1, 1)[0]);
          return next;
        },
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeOpts)(options, { dontValidate: true })
      );
      (0,_metaHelper_js__WEBPACK_IMPORTED_MODULE_4__.metaHelper)(this).handleArrayMove(field, index1, index2);
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        this.validateField(field, "change");
        this.validateField(`${field}[${index1}]`, "change");
        this.validateField(`${field}[${index2}]`, "change");
      }
    };
    this.clearFieldValues = (field, options) => {
      const fieldValue = this.getFieldValue(field);
      const lastIndex = Array.isArray(fieldValue) ? Math.max(fieldValue.length - 1, 0) : null;
      this.setFieldValue(
        field,
        [],
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeOpts)(options, { dontValidate: true })
      );
      if (lastIndex !== null) {
        for (let i = 0; i <= lastIndex; i++) {
          const fieldKey = `${field}[${i}]`;
          this.deleteField(fieldKey);
        }
      }
      const dontValidate = options?.dontValidate ?? false;
      if (!dontValidate) {
        this.validateField(field, "change");
      }
    };
    this.resetField = (field) => {
      this.baseStore.setState((prev) => {
        return {
          ...prev,
          fieldMetaBase: {
            ...prev.fieldMetaBase,
            [field]: _metaHelper_js__WEBPACK_IMPORTED_MODULE_4__.defaultFieldMeta
          },
          values: this.options.defaultValues ? (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.setBy)(prev.values, field, (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getBy)(this.options.defaultValues, field)) : prev.values
        };
      });
    };
    this.getAllErrors = () => {
      return {
        form: {
          errors: this.state.errors,
          errorMap: this.state.errorMap
        },
        fields: Object.entries(this.state.fieldMeta).reduce(
          (acc, [fieldName, fieldMeta]) => {
            if (Object.keys(fieldMeta).length && fieldMeta.errors.length) {
              acc[fieldName] = {
                errors: fieldMeta.errors,
                errorMap: fieldMeta.errorMap
              };
            }
            return acc;
          },
          {}
        )
      };
    };
    this.parseValuesWithSchema = (schema) => {
      return _standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_5__.standardSchemaValidators.validate(
        { value: this.state.values, validationSource: "form" },
        schema
      );
    };
    this.parseValuesWithSchemaAsync = (schema) => {
      return _standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_5__.standardSchemaValidators.validateAsync(
        { value: this.state.values, validationSource: "form" },
        schema
      );
    };
    this.timeoutIds = {
      validations: {},
      listeners: {},
      formListeners: {}
    };
    this._formId = opts?.formId ?? (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.uuid)();
    this._devtoolsSubmissionOverride = false;
    this.baseStore = new _tanstack_store__WEBPACK_IMPORTED_MODULE_6__.Store(
      getDefaultFormState({
        ...opts?.defaultState,
        values: opts?.defaultValues ?? opts?.defaultState?.values
      })
    );
    this.fieldMetaDerived = new _tanstack_store__WEBPACK_IMPORTED_MODULE_7__.Derived({
      deps: [this.baseStore],
      fn: ({ prevDepVals, currDepVals, prevVal: _prevVal }) => {
        const prevVal = _prevVal;
        const prevBaseStore = prevDepVals?.[0];
        const currBaseStore = currDepVals[0];
        let originalMetaCount = 0;
        const fieldMeta = {};
        for (const fieldName of Object.keys(
          currBaseStore.fieldMetaBase
        )) {
          const currBaseMeta = currBaseStore.fieldMetaBase[fieldName];
          const prevBaseMeta = prevBaseStore?.fieldMetaBase[fieldName];
          const prevFieldInfo = prevVal?.[fieldName];
          const curFieldVal = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getBy)(currBaseStore.values, fieldName);
          let fieldErrors = prevFieldInfo?.errors;
          if (!prevBaseMeta || currBaseMeta.errorMap !== prevBaseMeta.errorMap) {
            fieldErrors = Object.values(currBaseMeta.errorMap ?? {}).filter(
              (val) => val !== void 0
            );
            const fieldInstance = this.getFieldInfo(fieldName)?.instance;
            if (fieldInstance && !fieldInstance.options.disableErrorFlat) {
              fieldErrors = fieldErrors.flat(1);
            }
          }
          const isFieldValid = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isNonEmptyArray)(fieldErrors);
          const isFieldPristine = !currBaseMeta.isDirty;
          const isDefaultValue = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.evaluate)(
            curFieldVal,
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getBy)(this.options.defaultValues, fieldName)
          ) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.evaluate)(
            curFieldVal,
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            this.getFieldInfo(fieldName)?.instance?.options.defaultValue
          );
          if (prevFieldInfo && prevFieldInfo.isPristine === isFieldPristine && prevFieldInfo.isValid === isFieldValid && prevFieldInfo.isDefaultValue === isDefaultValue && prevFieldInfo.errors === fieldErrors && currBaseMeta === prevBaseMeta) {
            fieldMeta[fieldName] = prevFieldInfo;
            originalMetaCount++;
            continue;
          }
          fieldMeta[fieldName] = {
            ...currBaseMeta,
            errors: fieldErrors ?? [],
            isPristine: isFieldPristine,
            isValid: isFieldValid,
            isDefaultValue
          };
        }
        if (!Object.keys(currBaseStore.fieldMetaBase).length) return fieldMeta;
        if (prevVal && originalMetaCount === Object.keys(currBaseStore.fieldMetaBase).length) {
          return prevVal;
        }
        return fieldMeta;
      }
    });
    this.store = new _tanstack_store__WEBPACK_IMPORTED_MODULE_7__.Derived({
      deps: [this.baseStore, this.fieldMetaDerived],
      fn: ({ prevDepVals, currDepVals, prevVal: _prevVal }) => {
        const prevVal = _prevVal;
        const prevBaseStore = prevDepVals?.[0];
        const currBaseStore = currDepVals[0];
        const currFieldMeta = currDepVals[1];
        const fieldMetaValues = Object.values(currFieldMeta).filter(
          Boolean
        );
        const isFieldsValidating = fieldMetaValues.some(
          (field) => field.isValidating
        );
        const isFieldsValid = fieldMetaValues.every((field) => field.isValid);
        const isTouched = fieldMetaValues.some((field) => field.isTouched);
        const isBlurred = fieldMetaValues.some((field) => field.isBlurred);
        const isDefaultValue = fieldMetaValues.every(
          (field) => field.isDefaultValue
        );
        const shouldInvalidateOnMount = (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          isTouched && currBaseStore.errorMap?.onMount
        );
        const isDirty = fieldMetaValues.some((field) => field.isDirty);
        const isPristine = !isDirty;
        const hasOnMountError = Boolean(
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          currBaseStore.errorMap?.onMount || // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          fieldMetaValues.some((f) => f?.errorMap?.onMount)
        );
        const isValidating = !!isFieldsValidating;
        let errors = prevVal?.errors ?? [];
        if (!prevBaseStore || currBaseStore.errorMap !== prevBaseStore.errorMap) {
          errors = Object.values(currBaseStore.errorMap).reduce((prev, curr) => {
            if (curr === void 0) return prev;
            if (curr && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isGlobalFormValidationError)(curr)) {
              prev.push(curr.form);
              return prev;
            }
            prev.push(curr);
            return prev;
          }, []);
        }
        const isFormValid = errors.length === 0;
        const isValid = isFieldsValid && isFormValid;
        const submitInvalid = this.options.canSubmitWhenInvalid ?? false;
        const canSubmit = currBaseStore.submissionAttempts === 0 && !isTouched && !hasOnMountError || !isValidating && !currBaseStore.isSubmitting && isValid || submitInvalid;
        let errorMap = currBaseStore.errorMap;
        if (shouldInvalidateOnMount) {
          errors = errors.filter(
            (err) => err !== currBaseStore.errorMap.onMount
          );
          errorMap = Object.assign(errorMap, { onMount: void 0 });
        }
        if (prevVal && prevBaseStore && prevVal.errorMap === errorMap && prevVal.fieldMeta === this.fieldMetaDerived.state && prevVal.errors === errors && prevVal.isFieldsValidating === isFieldsValidating && prevVal.isFieldsValid === isFieldsValid && prevVal.isFormValid === isFormValid && prevVal.isValid === isValid && prevVal.canSubmit === canSubmit && prevVal.isTouched === isTouched && prevVal.isBlurred === isBlurred && prevVal.isPristine === isPristine && prevVal.isDefaultValue === isDefaultValue && prevVal.isDirty === isDirty && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.evaluate)(prevBaseStore, currBaseStore)) {
          return prevVal;
        }
        let state = {
          ...currBaseStore,
          errorMap,
          fieldMeta: this.fieldMetaDerived.state,
          errors,
          isFieldsValidating,
          isFieldsValid,
          isFormValid,
          isValid,
          canSubmit,
          isTouched,
          isBlurred,
          isPristine,
          isDefaultValue,
          isDirty
        };
        const transformArray = this.options.transform?.deps ?? [];
        const shouldTransform = transformArray.length !== this.prevTransformArray.length || transformArray.some((val, i) => val !== this.prevTransformArray[i]);
        if (shouldTransform) {
          const newObj = Object.assign({}, this, { state });
          this.options.transform?.fn(newObj);
          state = newObj.state;
          this.prevTransformArray = transformArray;
        }
        return state;
      }
    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update(opts || {});
    const debouncedDevtoolState = (0,_tanstack_pacer__WEBPACK_IMPORTED_MODULE_8__.throttle)(
      (state) => _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.emit("form-state", {
        id: this._formId,
        state
      }),
      {
        wait: 300
      }
    );
    this.store.subscribe(() => {
      debouncedDevtoolState(this.store.state);
    });
    _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.on("request-form-state", (e) => {
      if (e.payload.id === this._formId) {
        _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.emit("form-api", {
          id: this._formId,
          state: this.store.state,
          options: this.options
        });
      }
    });
    _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.on("request-form-reset", (e) => {
      if (e.payload.id === this._formId) {
        this.reset();
      }
    });
    _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.on("request-form-force-submit", (e) => {
      if (e.payload.id === this._formId) {
        this._devtoolsSubmissionOverride = true;
        this.handleSubmit();
        this._devtoolsSubmissionOverride = false;
      }
    });
  }
  get state() {
    return this.store.state;
  }
  get formId() {
    return this._formId;
  }
  /**
   * @private
   */
  runValidator(props) {
    if ((0,_standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_5__.isStandardSchemaValidator)(props.validate)) {
      return _standardSchemaValidator_js__WEBPACK_IMPORTED_MODULE_5__.standardSchemaValidators[props.type](
        props.value,
        props.validate
      );
    }
    return props.validate(props.value);
  }
  async handleSubmit(submitMeta) {
    this.baseStore.setState((old) => ({
      ...old,
      // Submission attempts mark the form as not submitted
      isSubmitted: false,
      // Count submission attempts
      submissionAttempts: old.submissionAttempts + 1,
      isSubmitSuccessful: false
      // Reset isSubmitSuccessful at the start of submission
    }));
    (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
      void Object.values(this.fieldInfo).forEach(
        (field) => {
          if (!field.instance) return;
          if (!field.instance.state.meta.isTouched) {
            field.instance.setMeta((prev) => ({ ...prev, isTouched: true }));
          }
        }
      );
    });
    const submitMetaArg = submitMeta ?? this.options.onSubmitMeta;
    if (!this.state.canSubmit && !this._devtoolsSubmissionOverride) {
      this.options.onSubmitInvalid?.({
        value: this.state.values,
        formApi: this,
        meta: submitMetaArg
      });
      return;
    }
    this.baseStore.setState((d) => ({ ...d, isSubmitting: true }));
    const done = () => {
      this.baseStore.setState((prev) => ({ ...prev, isSubmitting: false }));
    };
    await this.validateAllFields("submit");
    if (!this.state.isFieldsValid) {
      done();
      this.options.onSubmitInvalid?.({
        value: this.state.values,
        formApi: this,
        meta: submitMetaArg
      });
      _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.emit("form-submission", {
        id: this._formId,
        submissionAttempt: this.state.submissionAttempts,
        successful: false,
        stage: "validateAllFields",
        errors: Object.values(this.state.fieldMeta).map((meta) => meta.errors).flat()
      });
      return;
    }
    await this.validate("submit");
    if (!this.state.isValid) {
      done();
      this.options.onSubmitInvalid?.({
        value: this.state.values,
        formApi: this,
        meta: submitMetaArg
      });
      _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.emit("form-submission", {
        id: this._formId,
        submissionAttempt: this.state.submissionAttempts,
        successful: false,
        stage: "validate",
        errors: this.state.errors
      });
      return;
    }
    (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
      void Object.values(this.fieldInfo).forEach(
        (field) => {
          field.instance?.options.listeners?.onSubmit?.({
            value: field.instance.state.value,
            fieldApi: field.instance
          });
        }
      );
    });
    this.options.listeners?.onSubmit?.({ formApi: this, meta: submitMetaArg });
    try {
      await this.options.onSubmit?.({
        value: this.state.values,
        formApi: this,
        meta: submitMetaArg
      });
      (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
        this.baseStore.setState((prev) => ({
          ...prev,
          isSubmitted: true,
          isSubmitSuccessful: true
          // Set isSubmitSuccessful to true on successful submission
        }));
        _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.emit("form-submission", {
          id: this._formId,
          submissionAttempt: this.state.submissionAttempts,
          successful: true
        });
        done();
      });
    } catch (err) {
      this.baseStore.setState((prev) => ({
        ...prev,
        isSubmitSuccessful: false
        // Ensure isSubmitSuccessful is false if an error occurs
      }));
      _EventClient_js__WEBPACK_IMPORTED_MODULE_0__.formEventClient.emit("form-submission", {
        id: this._formId,
        submissionAttempt: this.state.submissionAttempts,
        successful: false,
        stage: "inflight",
        onError: err
      });
      done();
      throw err;
    }
  }
  /**
   * Updates the form's errorMap
   */
  setErrorMap(errorMap) {
    (0,_tanstack_store__WEBPACK_IMPORTED_MODULE_2__.batch)(() => {
      Object.entries(errorMap).forEach(([key, value]) => {
        const errorMapKey = key;
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isGlobalFormValidationError)(value)) {
          const { formError, fieldErrors } = normalizeError(value);
          for (const fieldName of Object.keys(
            this.fieldInfo
          )) {
            const fieldMeta = this.getFieldMeta(fieldName);
            if (!fieldMeta) continue;
            this.setFieldMeta(fieldName, (prev) => ({
              ...prev,
              errorMap: {
                ...prev.errorMap,
                [errorMapKey]: fieldErrors?.[fieldName]
              },
              errorSourceMap: {
                ...prev.errorSourceMap,
                [errorMapKey]: "form"
              }
            }));
          }
          this.baseStore.setState((prev) => ({
            ...prev,
            errorMap: {
              ...prev.errorMap,
              [errorMapKey]: formError
            }
          }));
        } else {
          this.baseStore.setState((prev) => ({
            ...prev,
            errorMap: {
              ...prev.errorMap,
              [errorMapKey]: value
            }
          }));
        }
      });
    });
  }
}
function normalizeError(rawError) {
  if (rawError) {
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isGlobalFormValidationError)(rawError)) {
      const formError = normalizeError(rawError.form).formError;
      const fieldErrors = rawError.fields;
      return { formError, fieldErrors };
    }
    return { formError: rawError };
  }
  return { formError: void 0 };
}
function getErrorMapKey(cause) {
  switch (cause) {
    case "submit":
      return "onSubmit";
    case "blur":
      return "onBlur";
    case "mount":
      return "onMount";
    case "server":
      return "onServer";
    case "dynamic":
      return "onDynamic";
    case "change":
    default:
      return "onChange";
  }
}

//# sourceMappingURL=FormApi.js.map


/***/ }),

/***/ "./node_modules/@tanstack/form-core/dist/esm/ValidationLogic.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tanstack/form-core/dist/esm/ValidationLogic.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultValidationLogic: () => (/* binding */ defaultValidationLogic),
/* harmony export */   revalidateLogic: () => (/* binding */ revalidateLogic)
/* harmony export */ });
const revalidateLogic = ({
  mode = "submit",
  modeAfterSubmission = "change"
} = {}) => (props) => {
  const validatorNames = Object.keys(props.validators ?? {});
  if (validatorNames.length === 0) {
    return props.runValidation({
      validators: [],
      form: props.form
    });
  }
  const dynamicValidator = {
    fn: props.event.async ? props.validators["onDynamicAsync"] : props.validators["onDynamic"],
    cause: "dynamic"
  };
  const validatorsToAdd = [];
  const modeToWatch = props.form.state.submissionAttempts === 0 ? mode : modeAfterSubmission;
  if ([modeToWatch, "submit"].includes(props.event.type)) {
    validatorsToAdd.push(dynamicValidator);
  }
  let defaultValidators = [];
  defaultValidationLogic({
    ...props,
    runValidation: (vProps) => {
      defaultValidators = vProps.validators;
    }
  });
  if (validatorsToAdd.length === 0) {
    return props.runValidation({
      validators: defaultValidators,
      form: props.form
    });
  }
  return props.runValidation({
    validators: [...defaultValidators, ...validatorsToAdd],
    form: props.form
  });
};
const defaultValidationLogic = (props) => {
  if (!props.validators) {
    return props.runValidation({
      validators: [],
      form: props.form
    });
  }
  const isAsync = props.event.async;
  const onMountValidator = isAsync ? void 0 : { fn: props.validators.onMount, cause: "mount" };
  const onChangeValidator = {
    fn: isAsync ? props.validators.onChangeAsync : props.validators.onChange,
    cause: "change"
  };
  const onBlurValidator = {
    fn: isAsync ? props.validators.onBlurAsync : props.validators.onBlur,
    cause: "blur"
  };
  const onSubmitValidator = {
    fn: isAsync ? props.validators.onSubmitAsync : props.validators.onSubmit,
    cause: "submit"
  };
  const onServerValidator = isAsync ? void 0 : { fn: () => void 0, cause: "server" };
  switch (props.event.type) {
    case "mount": {
      return props.runValidation({
        validators: [onMountValidator],
        form: props.form
      });
    }
    case "submit": {
      return props.runValidation({
        validators: [
          onChangeValidator,
          onBlurValidator,
          onSubmitValidator,
          onServerValidator
        ],
        form: props.form
      });
    }
    case "server": {
      return props.runValidation({
        validators: [],
        form: props.form
      });
    }
    case "blur": {
      return props.runValidation({
        validators: [onBlurValidator, onServerValidator],
        form: props.form
      });
    }
    case "change": {
      return props.runValidation({
        validators: [onChangeValidator, onServerValidator],
        form: props.form
      });
    }
    default: {
      throw new Error(`Unknown validation event type: ${props.event.type}`);
    }
  }
};

//# sourceMappingURL=ValidationLogic.js.map


/***/ }),

/***/ "./node_modules/@tanstack/form-core/dist/esm/metaHelper.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@tanstack/form-core/dist/esm/metaHelper.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFieldMeta: () => (/* binding */ defaultFieldMeta),
/* harmony export */   metaHelper: () => (/* binding */ metaHelper)
/* harmony export */ });
const defaultFieldMeta = {
  isValidating: false,
  isTouched: false,
  isBlurred: false,
  isDirty: false,
  isPristine: true,
  isValid: true,
  isDefaultValue: true,
  errors: [],
  errorMap: {},
  errorSourceMap: {}
};
function metaHelper(formApi) {
  function handleArrayMove(field, fromIndex, toIndex) {
    const affectedFields = getAffectedFields(field, fromIndex, "move", toIndex);
    const startIndex = Math.min(fromIndex, toIndex);
    const endIndex = Math.max(fromIndex, toIndex);
    for (let i = startIndex; i <= endIndex; i++) {
      affectedFields.push(getFieldPath(field, i));
    }
    const fromFields = Object.keys(formApi.fieldInfo).reduce(
      (fieldMap, fieldKey) => {
        if (fieldKey.startsWith(getFieldPath(field, fromIndex))) {
          fieldMap.set(
            fieldKey,
            formApi.getFieldMeta(fieldKey)
          );
        }
        return fieldMap;
      },
      /* @__PURE__ */ new Map()
    );
    shiftMeta(affectedFields, fromIndex < toIndex ? "up" : "down");
    Object.keys(formApi.fieldInfo).filter((fieldKey) => fieldKey.startsWith(getFieldPath(field, toIndex))).forEach((fieldKey) => {
      const fromKey = fieldKey.replace(
        getFieldPath(field, toIndex),
        getFieldPath(field, fromIndex)
      );
      const fromMeta = fromFields.get(fromKey);
      if (fromMeta) {
        formApi.setFieldMeta(fieldKey, fromMeta);
      }
    });
  }
  function handleArrayRemove(field, index) {
    const affectedFields = getAffectedFields(field, index, "remove");
    shiftMeta(affectedFields, "up");
  }
  function handleArraySwap(field, index, secondIndex) {
    const affectedFields = getAffectedFields(field, index, "swap", secondIndex);
    affectedFields.forEach((fieldKey) => {
      if (!fieldKey.toString().startsWith(getFieldPath(field, index))) {
        return;
      }
      const swappedKey = fieldKey.toString().replace(
        getFieldPath(field, index),
        getFieldPath(field, secondIndex)
      );
      const [meta1, meta2] = [
        formApi.getFieldMeta(fieldKey),
        formApi.getFieldMeta(swappedKey)
      ];
      if (meta1) formApi.setFieldMeta(swappedKey, meta1);
      if (meta2) formApi.setFieldMeta(fieldKey, meta2);
    });
  }
  function handleArrayInsert(field, insertIndex) {
    const affectedFields = getAffectedFields(field, insertIndex, "insert");
    shiftMeta(affectedFields, "down");
    affectedFields.forEach((fieldKey) => {
      if (fieldKey.toString().startsWith(getFieldPath(field, insertIndex))) {
        formApi.setFieldMeta(fieldKey, getEmptyFieldMeta());
      }
    });
  }
  function getFieldPath(field, index) {
    return `${field}[${index}]`;
  }
  function getAffectedFields(field, index, mode, secondIndex) {
    const affectedFieldKeys = [getFieldPath(field, index)];
    switch (mode) {
      case "swap":
        affectedFieldKeys.push(getFieldPath(field, secondIndex));
        break;
      case "move": {
        const [startIndex, endIndex] = [
          Math.min(index, secondIndex),
          Math.max(index, secondIndex)
        ];
        for (let i = startIndex; i <= endIndex; i++) {
          affectedFieldKeys.push(getFieldPath(field, i));
        }
        break;
      }
      default: {
        const currentValue = formApi.getFieldValue(field);
        const fieldItems = Array.isArray(currentValue) ? currentValue.length : 0;
        for (let i = index + 1; i < fieldItems; i++) {
          affectedFieldKeys.push(getFieldPath(field, i));
        }
        break;
      }
    }
    return Object.keys(formApi.fieldInfo).filter(
      (fieldKey) => affectedFieldKeys.some((key) => fieldKey.startsWith(key))
    );
  }
  function updateIndex(fieldKey, direction) {
    return fieldKey.replace(/\[(\d+)\]/, (_, num) => {
      const currIndex = parseInt(num, 10);
      const newIndex = direction === "up" ? currIndex + 1 : Math.max(0, currIndex - 1);
      return `[${newIndex}]`;
    });
  }
  function shiftMeta(fields, direction) {
    const sortedFields = direction === "up" ? fields : [...fields].reverse();
    sortedFields.forEach((fieldKey) => {
      const nextFieldKey = updateIndex(fieldKey.toString(), direction);
      const nextFieldMeta = formApi.getFieldMeta(nextFieldKey);
      if (nextFieldMeta) {
        formApi.setFieldMeta(fieldKey, nextFieldMeta);
      } else {
        formApi.setFieldMeta(fieldKey, getEmptyFieldMeta());
      }
    });
  }
  const getEmptyFieldMeta = () => defaultFieldMeta;
  return {
    handleArrayMove,
    handleArrayRemove,
    handleArraySwap,
    handleArrayInsert
  };
}

//# sourceMappingURL=metaHelper.js.map


/***/ }),

/***/ "./node_modules/@tanstack/form-core/dist/esm/standardSchemaValidator.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tanstack/form-core/dist/esm/standardSchemaValidator.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isStandardSchemaValidator: () => (/* binding */ isStandardSchemaValidator),
/* harmony export */   standardSchemaValidators: () => (/* binding */ standardSchemaValidators)
/* harmony export */ });
function prefixSchemaToErrors(issues, formValue) {
  const schema = /* @__PURE__ */ new Map();
  for (const issue of issues) {
    const issuePath = issue.path ?? [];
    let currentFormValue = formValue;
    let path = "";
    for (let i = 0; i < issuePath.length; i++) {
      const pathSegment = issuePath[i];
      if (pathSegment === void 0) continue;
      const segment = typeof pathSegment === "object" ? pathSegment.key : pathSegment;
      const segmentAsNumber = Number(segment);
      if (Array.isArray(currentFormValue) && !Number.isNaN(segmentAsNumber)) {
        path += `[${segmentAsNumber}]`;
      } else {
        path += (i > 0 ? "." : "") + String(segment);
      }
      if (typeof currentFormValue === "object" && currentFormValue !== null) {
        currentFormValue = currentFormValue[segment];
      } else {
        currentFormValue = void 0;
      }
    }
    schema.set(path, (schema.get(path) ?? []).concat(issue));
  }
  return Object.fromEntries(schema);
}
const transformFormIssues = (issues, formValue) => {
  const schemaErrors = prefixSchemaToErrors(issues, formValue);
  return {
    form: schemaErrors,
    fields: schemaErrors
  };
};
const standardSchemaValidators = {
  validate({
    value,
    validationSource
  }, schema) {
    const result = schema["~standard"].validate(value);
    if (result instanceof Promise) {
      throw new Error("async function passed to sync validator");
    }
    if (!result.issues) return;
    if (validationSource === "field")
      return result.issues;
    return transformFormIssues(result.issues, value);
  },
  async validateAsync({
    value,
    validationSource
  }, schema) {
    const result = await schema["~standard"].validate(value);
    if (!result.issues) return;
    if (validationSource === "field")
      return result.issues;
    return transformFormIssues(result.issues, value);
  }
};
const isStandardSchemaValidator = (validator) => !!validator && "~standard" in validator;

//# sourceMappingURL=standardSchemaValidator.js.map


/***/ }),

/***/ "./node_modules/@tanstack/form-core/dist/esm/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/@tanstack/form-core/dist/esm/utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concatenatePaths: () => (/* binding */ concatenatePaths),
/* harmony export */   createFieldMap: () => (/* binding */ createFieldMap),
/* harmony export */   deleteBy: () => (/* binding */ deleteBy),
/* harmony export */   determineFieldLevelErrorSourceAndValue: () => (/* binding */ determineFieldLevelErrorSourceAndValue),
/* harmony export */   determineFormLevelErrorSourceAndValue: () => (/* binding */ determineFormLevelErrorSourceAndValue),
/* harmony export */   evaluate: () => (/* binding */ evaluate),
/* harmony export */   functionalUpdate: () => (/* binding */ functionalUpdate),
/* harmony export */   getAsyncValidatorArray: () => (/* binding */ getAsyncValidatorArray),
/* harmony export */   getBy: () => (/* binding */ getBy),
/* harmony export */   getSyncValidatorArray: () => (/* binding */ getSyncValidatorArray),
/* harmony export */   isGlobalFormValidationError: () => (/* binding */ isGlobalFormValidationError),
/* harmony export */   isNonEmptyArray: () => (/* binding */ isNonEmptyArray),
/* harmony export */   makePathArray: () => (/* binding */ makePathArray),
/* harmony export */   mergeOpts: () => (/* binding */ mergeOpts),
/* harmony export */   setBy: () => (/* binding */ setBy),
/* harmony export */   uuid: () => (/* binding */ uuid)
/* harmony export */ });
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function getBy(obj, path) {
  const pathObj = makePathArray(path);
  return pathObj.reduce((current, pathPart) => {
    if (current === null) return null;
    if (typeof current !== "undefined") {
      return current[pathPart];
    }
    return void 0;
  }, obj);
}
function setBy(obj, _path, updater) {
  const path = makePathArray(_path);
  function doSet(parent) {
    if (!path.length) {
      return functionalUpdate(updater, parent);
    }
    const key = path.shift();
    if (typeof key === "string" || typeof key === "number" && !Array.isArray(parent)) {
      if (typeof parent === "object") {
        if (parent === null) {
          parent = {};
        }
        return {
          ...parent,
          [key]: doSet(parent[key])
        };
      }
      return {
        [key]: doSet()
      };
    }
    if (Array.isArray(parent) && typeof key === "number") {
      const prefix = parent.slice(0, key);
      return [
        ...prefix.length ? prefix : new Array(key),
        doSet(parent[key]),
        ...parent.slice(key + 1)
      ];
    }
    return [...new Array(key), doSet()];
  }
  return doSet(obj);
}
function deleteBy(obj, _path) {
  const path = makePathArray(_path);
  function doDelete(parent) {
    if (!parent) return;
    if (path.length === 1) {
      const finalPath = path[0];
      if (Array.isArray(parent) && typeof finalPath === "number") {
        return parent.filter((_, i) => i !== finalPath);
      }
      const { [finalPath]: remove, ...rest } = parent;
      return rest;
    }
    const key = path.shift();
    if (typeof key === "string") {
      if (typeof parent === "object") {
        return {
          ...parent,
          [key]: doDelete(parent[key])
        };
      }
    }
    if (typeof key === "number") {
      if (Array.isArray(parent)) {
        if (key >= parent.length) {
          return parent;
        }
        const prefix = parent.slice(0, key);
        return [
          ...prefix.length ? prefix : new Array(key),
          doDelete(parent[key]),
          ...parent.slice(key + 1)
        ];
      }
    }
    throw new Error("It seems we have created an infinite loop in deleteBy. ");
  }
  return doDelete(obj);
}
const reLineOfOnlyDigits = /^(\d+)$/gm;
const reDigitsBetweenDots = /\.(\d+)(?=\.)/gm;
const reStartWithDigitThenDot = /^(\d+)\./gm;
const reDotWithDigitsToEnd = /\.(\d+$)/gm;
const reMultipleDots = /\.{2,}/gm;
const intPrefix = "__int__";
const intReplace = `${intPrefix}$1`;
function makePathArray(str) {
  if (Array.isArray(str)) {
    return [...str];
  }
  if (typeof str !== "string") {
    throw new Error("Path must be a string.");
  }
  return str.replace(/(^\[)|]/gm, "").replace(/\[/g, ".").replace(reLineOfOnlyDigits, intReplace).replace(reDigitsBetweenDots, `.${intReplace}.`).replace(reStartWithDigitThenDot, `${intReplace}.`).replace(reDotWithDigitsToEnd, `.${intReplace}`).replace(reMultipleDots, ".").split(".").map((d) => {
    if (d.startsWith(intPrefix)) {
      const numStr = d.substring(intPrefix.length);
      const num = parseInt(numStr, 10);
      if (String(num) === numStr) {
        return num;
      }
      return numStr;
    }
    return d;
  });
}
function concatenatePaths(path1, path2) {
  if (path1.length === 0) return path2;
  if (path2.length === 0) return path1;
  if (path2.startsWith("[")) {
    return path1 + path2;
  }
  if (path2.startsWith(".")) {
    return path1 + path2;
  }
  return `${path1}.${path2}`;
}
function isNonEmptyArray(obj) {
  return !(Array.isArray(obj) && obj.length === 0);
}
function getSyncValidatorArray(cause, options) {
  const runValidation = (props) => {
    return props.validators.filter(Boolean).map((validator) => {
      return {
        cause: validator.cause,
        validate: validator.fn
      };
    });
  };
  return options.validationLogic({
    form: options.form,
    validators: options.validators,
    event: { type: cause, async: false },
    runValidation
  });
}
function getAsyncValidatorArray(cause, options) {
  const { asyncDebounceMs } = options;
  const {
    onBlurAsyncDebounceMs,
    onChangeAsyncDebounceMs,
    onDynamicAsyncDebounceMs
  } = options.validators || {};
  const defaultDebounceMs = asyncDebounceMs ?? 0;
  const runValidation = (props) => {
    return props.validators.filter(Boolean).map((validator) => {
      const validatorCause = validator?.cause || cause;
      let debounceMs = defaultDebounceMs;
      switch (validatorCause) {
        case "change":
          debounceMs = onChangeAsyncDebounceMs ?? defaultDebounceMs;
          break;
        case "blur":
          debounceMs = onBlurAsyncDebounceMs ?? defaultDebounceMs;
          break;
        case "dynamic":
          debounceMs = onDynamicAsyncDebounceMs ?? defaultDebounceMs;
          break;
        case "submit":
          debounceMs = 0;
          break;
      }
      if (cause === "submit") {
        debounceMs = 0;
      }
      return {
        cause: validatorCause,
        validate: validator.fn,
        debounceMs
      };
    });
  };
  return options.validationLogic({
    form: options.form,
    validators: options.validators,
    event: { type: cause, async: true },
    runValidation
  });
}
const isGlobalFormValidationError = (error) => {
  return !!error && typeof error === "object" && "fields" in error;
};
function evaluate(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Date && objB instanceof Date) {
    return objA.getTime() === objB.getTime();
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [k, v] of objA) {
      if (!objB.has(k) || !Object.is(v, objB.get(k))) return false;
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const v of objA) {
      if (!objB.has(v)) return false;
    }
    return true;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (const key of keysA) {
    if (!keysB.includes(key) || !evaluate(objA[key], objB[key])) {
      return false;
    }
  }
  return true;
}
const determineFormLevelErrorSourceAndValue = ({
  newFormValidatorError,
  isPreviousErrorFromFormValidator,
  previousErrorValue
}) => {
  if (newFormValidatorError) {
    return { newErrorValue: newFormValidatorError, newSource: "form" };
  }
  if (isPreviousErrorFromFormValidator) {
    return { newErrorValue: void 0, newSource: void 0 };
  }
  if (previousErrorValue) {
    return { newErrorValue: previousErrorValue, newSource: "field" };
  }
  return { newErrorValue: void 0, newSource: void 0 };
};
const determineFieldLevelErrorSourceAndValue = ({
  formLevelError,
  fieldLevelError
}) => {
  if (fieldLevelError) {
    return { newErrorValue: fieldLevelError, newSource: "field" };
  }
  if (formLevelError) {
    return { newErrorValue: formLevelError, newSource: "form" };
  }
  return { newErrorValue: void 0, newSource: void 0 };
};
function createFieldMap(values) {
  const output = {};
  for (const key in values) {
    output[key] = key;
  }
  return output;
}
function mergeOpts(originalOpts, overrides) {
  if (originalOpts === void 0 || originalOpts === null) {
    return overrides;
  }
  return { ...originalOpts, ...overrides };
}
let IDX = 256;
const HEX = [];
let BUFFER;
while (IDX--) {
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
}
function uuid() {
  let i = 0;
  let num;
  let out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = new Array(256);
    i = 256;
    while (i--) {
      BUFFER[i] = 256 * Math.random() | 0;
    }
    i = 0;
    IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i === 6) out += HEX[num & 15 | 64];
    else if (i === 8) out += HEX[num & 63 | 128];
    else out += HEX[num];
    if (i & 1 && i > 1 && i < 11) out += "-";
  }
  IDX++;
  return out;
}

//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./node_modules/@tanstack/pacer/dist/esm/event-client.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tanstack/pacer/dist/esm/event-client.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emitChange: () => (/* binding */ emitChange),
/* harmony export */   pacerEventClient: () => (/* binding */ pacerEventClient)
/* harmony export */ });
/* harmony import */ var _tanstack_devtools_event_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/devtools-event-client */ "./node_modules/@tanstack/devtools-event-client/dist/esm/plugin.js");

class PacerEventClient extends _tanstack_devtools_event_client__WEBPACK_IMPORTED_MODULE_0__.EventClient {
  constructor(props) {
    super({
      pluginId: "pacer",
      debug: props?.debug
    });
  }
}
const emitChange = (event, payload) => {
  pacerEventClient.emit(event, payload);
};
const pacerEventClient = new PacerEventClient();

//# sourceMappingURL=event-client.js.map


/***/ }),

/***/ "./node_modules/@tanstack/pacer/dist/esm/throttler.js":
/*!************************************************************!*\
  !*** ./node_modules/@tanstack/pacer/dist/esm/throttler.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Throttler: () => (/* binding */ Throttler),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _tanstack_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/store */ "./node_modules/@tanstack/store/dist/esm/store.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/pacer/dist/esm/utils.js");
/* harmony import */ var _event_client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-client.js */ "./node_modules/@tanstack/pacer/dist/esm/event-client.js");



function getDefaultThrottlerState() {
  return {
    executionCount: 0,
    isPending: false,
    lastArgs: void 0,
    lastExecutionTime: 0,
    nextExecutionTime: 0,
    status: "idle",
    maybeExecuteCount: 0
  };
}
const defaultOptions = {
  enabled: true,
  leading: true,
  trailing: true,
  wait: 0
};
class Throttler {
  constructor(fn, initialOptions) {
    this.fn = fn;
    this.store = new _tanstack_store__WEBPACK_IMPORTED_MODULE_0__.Store(
      getDefaultThrottlerState()
    );
    this.setOptions = (newOptions) => {
      this.options = { ...this.options, ...newOptions };
      if (!this.#getEnabled()) {
        this.cancel();
      }
    };
    this.#setState = (newState) => {
      this.store.setState((state) => {
        const combinedState = {
          ...state,
          ...newState
        };
        const { isPending } = combinedState;
        return {
          ...combinedState,
          status: !this.#getEnabled() ? "disabled" : isPending ? "pending" : "idle"
        };
      });
      (0,_event_client_js__WEBPACK_IMPORTED_MODULE_1__.emitChange)("Throttler", this);
    };
    this.#getEnabled = () => {
      return !!(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseFunctionOrValue)(this.options.enabled, this);
    };
    this.#getWait = () => {
      return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseFunctionOrValue)(this.options.wait, this);
    };
    this.maybeExecute = (...args) => {
      this.#setState({
        maybeExecuteCount: this.store.state.maybeExecuteCount + 1
      });
      const now = Date.now();
      const timeSinceLastExecution = now - this.store.state.lastExecutionTime;
      const wait = this.#getWait();
      if (this.options.leading && timeSinceLastExecution >= wait) {
        this.#execute(...args);
      } else {
        this.#setState({
          lastArgs: args
        });
        if (!this.#timeoutId && this.options.trailing) {
          const _timeSinceLastExecution = this.store.state.lastExecutionTime ? now - this.store.state.lastExecutionTime : 0;
          const timeoutDuration = wait - _timeSinceLastExecution;
          this.#setState({ isPending: true });
          this.#timeoutId = setTimeout(() => {
            const { lastArgs } = this.store.state;
            if (lastArgs !== void 0) {
              this.#execute(...lastArgs);
            }
          }, timeoutDuration);
        }
      }
    };
    this.#execute = (...args) => {
      if (!this.#getEnabled()) return;
      this.fn(...args);
      const lastExecutionTime = Date.now();
      const nextExecutionTime = lastExecutionTime + this.#getWait();
      this.#clearTimeout();
      this.#setState({
        executionCount: this.store.state.executionCount + 1,
        lastExecutionTime,
        nextExecutionTime,
        isPending: false,
        lastArgs: void 0
      });
      this.options.onExecute?.(args, this);
      setTimeout(() => {
        if (!this.store.state.isPending) {
          this.#setState({ nextExecutionTime: void 0 });
        }
      }, this.#getWait());
    };
    this.flush = () => {
      if (this.store.state.isPending && this.store.state.lastArgs) {
        this.#execute(...this.store.state.lastArgs);
      }
    };
    this.#clearTimeout = () => {
      if (this.#timeoutId) {
        clearTimeout(this.#timeoutId);
        this.#timeoutId = void 0;
      }
    };
    this.cancel = () => {
      this.#clearTimeout();
      this.#setState({
        lastArgs: void 0,
        isPending: false
      });
    };
    this.reset = () => {
      this.#setState(getDefaultThrottlerState());
    };
    this.key = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.createKey)(initialOptions.key);
    this.options = {
      ...defaultOptions,
      ...initialOptions
    };
    this.#setState(this.options.initialState ?? {});
    _event_client_js__WEBPACK_IMPORTED_MODULE_1__.pacerEventClient.on("d-Throttler", (event) => {
      if (event.payload.key !== this.key) return;
      this.#setState(event.payload.store.state);
      this.setOptions(event.payload.options);
    });
  }
  #timeoutId;
  #setState;
  #getEnabled;
  #getWait;
  #execute;
  #clearTimeout;
}
function throttle(fn, initialOptions) {
  const throttler = new Throttler(fn, initialOptions);
  return throttler.maybeExecute;
}

//# sourceMappingURL=throttler.js.map


/***/ }),

/***/ "./node_modules/@tanstack/pacer/dist/esm/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/@tanstack/pacer/dist/esm/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createKey: () => (/* binding */ createKey),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   parseFunctionOrValue: () => (/* binding */ parseFunctionOrValue)
/* harmony export */ });
function isFunction(value) {
  return typeof value === "function";
}
function parseFunctionOrValue(value, ...args) {
  return isFunction(value) ? value(...args) : value;
}
function createKey(key) {
  if (key) {
    return key;
  }
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "";
}

//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/focusManager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/focusManager.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusManager: () => (/* binding */ FocusManager),
/* harmony export */   focusManager: () => (/* binding */ focusManager)
/* harmony export */ });
/* harmony import */ var _subscribable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.js */ "./node_modules/@tanstack/query-core/build/modern/subscribable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
// src/focusManager.ts


var FocusManager = class extends _subscribable_js__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  #focused;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onFocus) => {
      if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__.isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.#focused !== focused;
    if (changed) {
      this.#focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    const isFocused = this.isFocused();
    this.listeners.forEach((listener) => {
      listener(isFocused);
    });
  }
  isFocused() {
    if (typeof this.#focused === "boolean") {
      return this.#focused;
    }
    return globalThis.document?.visibilityState !== "hidden";
  }
};
var focusManager = new FocusManager();

//# sourceMappingURL=focusManager.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasNextPage: () => (/* binding */ hasNextPage),
/* harmony export */   hasPreviousPage: () => (/* binding */ hasPreviousPage),
/* harmony export */   infiniteQueryBehavior: () => (/* binding */ infiniteQueryBehavior)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
// src/infiniteQueryBehavior.ts

function infiniteQueryBehavior(pages) {
  return {
    onFetch: (context, query) => {
      const options = context.options;
      const direction = context.fetchOptions?.meta?.fetchMore?.direction;
      const oldPages = context.state.data?.pages || [];
      const oldPageParams = context.state.data?.pageParams || [];
      let result = { pages: [], pageParams: [] };
      let currentPage = 0;
      const fetchFn = async () => {
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              if (context.signal.aborted) {
                cancelled = true;
              } else {
                context.signal.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context.signal;
            }
          });
        };
        const queryFn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.ensureQueryFn)(context.options, context.fetchOptions);
        const fetchPage = async (data, param, previous) => {
          if (cancelled) {
            return Promise.reject();
          }
          if (param == null && data.pages.length) {
            return Promise.resolve(data);
          }
          const createQueryFnContext = () => {
            const queryFnContext2 = {
              client: context.client,
              queryKey: context.queryKey,
              pageParam: param,
              direction: previous ? "backward" : "forward",
              meta: context.options.meta
            };
            addSignalProperty(queryFnContext2);
            return queryFnContext2;
          };
          const queryFnContext = createQueryFnContext();
          const page = await queryFn(queryFnContext);
          const { maxPages } = context.options;
          const addTo = previous ? _utils_js__WEBPACK_IMPORTED_MODULE_0__.addToStart : _utils_js__WEBPACK_IMPORTED_MODULE_0__.addToEnd;
          return {
            pages: addTo(data.pages, page, maxPages),
            pageParams: addTo(data.pageParams, param, maxPages)
          };
        };
        if (direction && oldPages.length) {
          const previous = direction === "backward";
          const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
          const oldData = {
            pages: oldPages,
            pageParams: oldPageParams
          };
          const param = pageParamFn(options, oldData);
          result = await fetchPage(oldData, param, previous);
        } else {
          const remainingPages = pages ?? oldPages.length;
          do {
            const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
            if (currentPage > 0 && param == null) {
              break;
            }
            result = await fetchPage(result, param);
            currentPage++;
          } while (currentPage < remainingPages);
        }
        return result;
      };
      if (context.options.persister) {
        context.fetchFn = () => {
          return context.options.persister?.(
            fetchFn,
            {
              client: context.client,
              queryKey: context.queryKey,
              meta: context.options.meta,
              signal: context.signal
            },
            query
          );
        };
      } else {
        context.fetchFn = fetchFn;
      }
    }
  };
}
function getNextPageParam(options, { pages, pageParams }) {
  const lastIndex = pages.length - 1;
  return pages.length > 0 ? options.getNextPageParam(
    pages[lastIndex],
    pages,
    pageParams[lastIndex],
    pageParams
  ) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
  return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
  if (!data) return false;
  return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
  if (!data || !options.getPreviousPageParam) return false;
  return getPreviousPageParam(options, data) != null;
}

//# sourceMappingURL=infiniteQueryBehavior.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/mutation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/mutation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mutation: () => (/* binding */ Mutation),
/* harmony export */   getDefaultState: () => (/* binding */ getDefaultState)
/* harmony export */ });
/* harmony import */ var _notifyManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager.js */ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js");
/* harmony import */ var _removable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removable.js */ "./node_modules/@tanstack/query-core/build/modern/removable.js");
/* harmony import */ var _retryer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retryer.js */ "./node_modules/@tanstack/query-core/build/modern/retryer.js");
// src/mutation.ts



var Mutation = class extends _removable_js__WEBPACK_IMPORTED_MODULE_0__.Removable {
  #client;
  #observers;
  #mutationCache;
  #retryer;
  constructor(config) {
    super();
    this.#client = config.client;
    this.mutationId = config.mutationId;
    this.#mutationCache = config.mutationCache;
    this.#observers = [];
    this.state = config.state || getDefaultState();
    this.setOptions(config.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = options;
    this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
      this.clearGcTimeout();
      this.#mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.#mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.#observers.length) {
      if (this.state.status === "pending") {
        this.scheduleGc();
      } else {
        this.#mutationCache.remove(this);
      }
    }
  }
  continue() {
    return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(variables) {
    const onContinue = () => {
      this.#dispatch({ type: "continue" });
    };
    const mutationFnContext = {
      client: this.#client,
      meta: this.options.meta,
      mutationKey: this.options.mutationKey
    };
    this.#retryer = (0,_retryer_js__WEBPACK_IMPORTED_MODULE_1__.createRetryer)({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject(new Error("No mutationFn found"));
        }
        return this.options.mutationFn(variables, mutationFnContext);
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#mutationCache.canRun(this)
    });
    const restored = this.state.status === "pending";
    const isPaused = !this.#retryer.canStart();
    try {
      if (restored) {
        onContinue();
      } else {
        this.#dispatch({ type: "pending", variables, isPaused });
        await this.#mutationCache.config.onMutate?.(
          variables,
          this,
          mutationFnContext
        );
        const context = await this.options.onMutate?.(
          variables,
          mutationFnContext
        );
        if (context !== this.state.context) {
          this.#dispatch({
            type: "pending",
            context,
            variables,
            isPaused
          });
        }
      }
      const data = await this.#retryer.start();
      await this.#mutationCache.config.onSuccess?.(
        data,
        variables,
        this.state.context,
        this,
        mutationFnContext
      );
      await this.options.onSuccess?.(
        data,
        variables,
        this.state.context,
        mutationFnContext
      );
      await this.#mutationCache.config.onSettled?.(
        data,
        null,
        this.state.variables,
        this.state.context,
        this,
        mutationFnContext
      );
      await this.options.onSettled?.(
        data,
        null,
        variables,
        this.state.context,
        mutationFnContext
      );
      this.#dispatch({ type: "success", data });
      return data;
    } catch (error) {
      try {
        await this.#mutationCache.config.onError?.(
          error,
          variables,
          this.state.context,
          this,
          mutationFnContext
        );
        await this.options.onError?.(
          error,
          variables,
          this.state.context,
          mutationFnContext
        );
        await this.#mutationCache.config.onSettled?.(
          void 0,
          error,
          this.state.variables,
          this.state.context,
          this,
          mutationFnContext
        );
        await this.options.onSettled?.(
          void 0,
          error,
          variables,
          this.state.context,
          mutationFnContext
        );
        throw error;
      } finally {
        this.#dispatch({ type: "error", error });
      }
    } finally {
      this.#mutationCache.runNext(this);
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "pending":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: action.isPaused,
            status: "pending",
            variables: action.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
      }
    };
    this.state = reducer(this.state);
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(() => {
      this.#observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.#mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}

//# sourceMappingURL=mutation.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/mutationCache.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/mutationCache.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutationCache: () => (/* binding */ MutationCache)
/* harmony export */ });
/* harmony import */ var _notifyManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifyManager.js */ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js");
/* harmony import */ var _mutation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation.js */ "./node_modules/@tanstack/query-core/build/modern/mutation.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
/* harmony import */ var _subscribable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.js */ "./node_modules/@tanstack/query-core/build/modern/subscribable.js");
// src/mutationCache.ts




var MutationCache = class extends _subscribable_js__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#mutations = /* @__PURE__ */ new Set();
    this.#scopes = /* @__PURE__ */ new Map();
    this.#mutationId = 0;
  }
  #mutations;
  #scopes;
  #mutationId;
  build(client, options, state) {
    const mutation = new _mutation_js__WEBPACK_IMPORTED_MODULE_1__.Mutation({
      client,
      mutationCache: this,
      mutationId: ++this.#mutationId,
      options: client.defaultMutationOptions(options),
      state
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.#mutations.add(mutation);
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const scopedMutations = this.#scopes.get(scope);
      if (scopedMutations) {
        scopedMutations.push(mutation);
      } else {
        this.#scopes.set(scope, [mutation]);
      }
    }
    this.notify({ type: "added", mutation });
  }
  remove(mutation) {
    if (this.#mutations.delete(mutation)) {
      const scope = scopeFor(mutation);
      if (typeof scope === "string") {
        const scopedMutations = this.#scopes.get(scope);
        if (scopedMutations) {
          if (scopedMutations.length > 1) {
            const index = scopedMutations.indexOf(mutation);
            if (index !== -1) {
              scopedMutations.splice(index, 1);
            }
          } else if (scopedMutations[0] === mutation) {
            this.#scopes.delete(scope);
          }
        }
      }
    }
    this.notify({ type: "removed", mutation });
  }
  canRun(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const mutationsWithSameScope = this.#scopes.get(scope);
      const firstPendingMutation = mutationsWithSameScope?.find(
        (m) => m.state.status === "pending"
      );
      return !firstPendingMutation || firstPendingMutation === mutation;
    } else {
      return true;
    }
  }
  runNext(mutation) {
    const scope = scopeFor(mutation);
    if (typeof scope === "string") {
      const foundMutation = this.#scopes.get(scope)?.find((m) => m !== mutation && m.state.isPaused);
      return foundMutation?.continue() ?? Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
  clear() {
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(() => {
      this.#mutations.forEach((mutation) => {
        this.notify({ type: "removed", mutation });
      });
      this.#mutations.clear();
      this.#scopes.clear();
    });
  }
  getAll() {
    return Array.from(this.#mutations);
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (mutation) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(defaultedFilters, mutation)
    );
  }
  findAll(filters = {}) {
    return this.getAll().filter((mutation) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.matchMutation)(filters, mutation));
  }
  notify(event) {
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    const pausedMutations = this.getAll().filter((x) => x.state.isPaused);
    return _notifyManager_js__WEBPACK_IMPORTED_MODULE_2__.notifyManager.batch(
      () => Promise.all(
        pausedMutations.map((mutation) => mutation.continue().catch(_utils_js__WEBPACK_IMPORTED_MODULE_3__.noop))
      )
    );
  }
};
function scopeFor(mutation) {
  return mutation.options.scope?.id;
}

//# sourceMappingURL=mutationCache.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/mutationObserver.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/mutationObserver.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MutationObserver: () => (/* binding */ MutationObserver)
/* harmony export */ });
/* harmony import */ var _mutation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation.js */ "./node_modules/@tanstack/query-core/build/modern/mutation.js");
/* harmony import */ var _notifyManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager.js */ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js");
/* harmony import */ var _subscribable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.js */ "./node_modules/@tanstack/query-core/build/modern/subscribable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
// src/mutationObserver.ts




var MutationObserver = class extends _subscribable_js__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  #client;
  #currentResult = void 0;
  #currentMutation;
  #mutateOptions;
  constructor(client, options) {
    super();
    this.#client = client;
    this.setOptions(options);
    this.bindMethods();
    this.#updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    this.options = this.#client.defaultMutationOptions(options);
    if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.shallowEqualObjects)(this.options, prevOptions)) {
      this.#client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.#currentMutation,
        observer: this
      });
    }
    if (prevOptions?.mutationKey && this.options.mutationKey && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.hashKey)(prevOptions.mutationKey) !== (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.hashKey)(this.options.mutationKey)) {
      this.reset();
    } else if (this.#currentMutation?.state.status === "pending") {
      this.#currentMutation.setOptions(this.options);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#currentMutation?.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.#updateResult();
    this.#notify(action);
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  reset() {
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = void 0;
    this.#updateResult();
    this.#notify();
  }
  mutate(variables, options) {
    this.#mutateOptions = options;
    this.#currentMutation?.removeObserver(this);
    this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
    this.#currentMutation.addObserver(this);
    return this.#currentMutation.execute(variables);
  }
  #updateResult() {
    const state = this.#currentMutation?.state ?? (0,_mutation_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultState)();
    this.#currentResult = {
      ...state,
      isPending: state.status === "pending",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
  }
  #notify(action) {
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      if (this.#mutateOptions && this.hasListeners()) {
        const variables = this.#currentResult.variables;
        const onMutateResult = this.#currentResult.context;
        const context = {
          client: this.#client,
          meta: this.options.meta,
          mutationKey: this.options.mutationKey
        };
        if (action?.type === "success") {
          this.#mutateOptions.onSuccess?.(
            action.data,
            variables,
            onMutateResult,
            context
          );
          this.#mutateOptions.onSettled?.(
            action.data,
            null,
            variables,
            onMutateResult,
            context
          );
        } else if (action?.type === "error") {
          this.#mutateOptions.onError?.(
            action.error,
            variables,
            onMutateResult,
            context
          );
          this.#mutateOptions.onSettled?.(
            void 0,
            action.error,
            variables,
            onMutateResult,
            context
          );
        }
      }
      this.listeners.forEach((listener) => {
        listener(this.#currentResult);
      });
    });
  }
};

//# sourceMappingURL=mutationObserver.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/notifyManager.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNotifyManager: () => (/* binding */ createNotifyManager),
/* harmony export */   defaultScheduler: () => (/* binding */ defaultScheduler),
/* harmony export */   notifyManager: () => (/* binding */ notifyManager)
/* harmony export */ });
/* harmony import */ var _timeoutManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeoutManager.js */ "./node_modules/@tanstack/query-core/build/modern/timeoutManager.js");
// src/notifyManager.ts

var defaultScheduler = _timeoutManager_js__WEBPACK_IMPORTED_MODULE_0__.systemSetTimeoutZero;
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  let scheduleFn = defaultScheduler;
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleFn(() => {
        notifyFn(callback);
      });
    }
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleFn(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  return {
    batch: (callback) => {
      let result;
      transactions++;
      try {
        result = callback();
      } finally {
        transactions--;
        if (!transactions) {
          flush();
        }
      }
      return result;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (callback) => {
      return (...args) => {
        schedule(() => {
          callback(...args);
        });
      };
    },
    schedule,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (fn) => {
      notifyFn = fn;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (fn) => {
      batchNotifyFn = fn;
    },
    setScheduler: (fn) => {
      scheduleFn = fn;
    }
  };
}
var notifyManager = createNotifyManager();

//# sourceMappingURL=notifyManager.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/onlineManager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/onlineManager.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnlineManager: () => (/* binding */ OnlineManager),
/* harmony export */   onlineManager: () => (/* binding */ onlineManager)
/* harmony export */ });
/* harmony import */ var _subscribable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.js */ "./node_modules/@tanstack/query-core/build/modern/subscribable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
// src/onlineManager.ts


var OnlineManager = class extends _subscribable_js__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  #online = true;
  #cleanup;
  #setup;
  constructor() {
    super();
    this.#setup = (onOnline) => {
      if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__.isServer && window.addEventListener) {
        const onlineListener = () => onOnline(true);
        const offlineListener = () => onOnline(false);
        window.addEventListener("online", onlineListener, false);
        window.addEventListener("offline", offlineListener, false);
        return () => {
          window.removeEventListener("online", onlineListener);
          window.removeEventListener("offline", offlineListener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.#cleanup) {
      this.setEventListener(this.#setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.#cleanup?.();
      this.#cleanup = void 0;
    }
  }
  setEventListener(setup) {
    this.#setup = setup;
    this.#cleanup?.();
    this.#cleanup = setup(this.setOnline.bind(this));
  }
  setOnline(online) {
    const changed = this.#online !== online;
    if (changed) {
      this.#online = online;
      this.listeners.forEach((listener) => {
        listener(online);
      });
    }
  }
  isOnline() {
    return this.#online;
  }
};
var onlineManager = new OnlineManager();

//# sourceMappingURL=onlineManager.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/query.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/query.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Query: () => (/* binding */ Query),
/* harmony export */   fetchState: () => (/* binding */ fetchState)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
/* harmony import */ var _notifyManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager.js */ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js");
/* harmony import */ var _retryer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./retryer.js */ "./node_modules/@tanstack/query-core/build/modern/retryer.js");
/* harmony import */ var _removable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removable.js */ "./node_modules/@tanstack/query-core/build/modern/removable.js");
// src/query.ts




var Query = class extends _removable_js__WEBPACK_IMPORTED_MODULE_0__.Removable {
  #initialState;
  #revertState;
  #cache;
  #client;
  #retryer;
  #defaultOptions;
  #abortSignalConsumed;
  constructor(config) {
    super();
    this.#abortSignalConsumed = false;
    this.#defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.#client = config.client;
    this.#cache = this.#client.getQueryCache();
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.#initialState = getDefaultState(this.options);
    this.state = config.state ?? this.#initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    return this.#retryer?.promise;
  }
  setOptions(options) {
    this.options = { ...this.#defaultOptions, ...options };
    this.updateGcTime(this.options.gcTime);
    if (this.state && this.state.data === void 0) {
      const defaultState = getDefaultState(this.options);
      if (defaultState.data !== void 0) {
        this.setState(
          successState(defaultState.data, defaultState.dataUpdatedAt)
        );
        this.#initialState = defaultState;
      }
    }
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      this.#cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.replaceData)(this.state.data, newData, this.options);
    this.#dispatch({
      data,
      type: "success",
      dataUpdatedAt: options?.updatedAt,
      manual: options?.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.#dispatch({ type: "setState", state, setStateOptions });
  }
  cancel(options) {
    const promise = this.#retryer?.promise;
    this.#retryer?.cancel(options);
    return promise ? promise.then(_utils_js__WEBPACK_IMPORTED_MODULE_1__.noop).catch(_utils_js__WEBPACK_IMPORTED_MODULE_1__.noop) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.#initialState);
  }
  isActive() {
    return this.observers.some(
      (observer) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.resolveEnabled)(observer.options.enabled, this) !== false
    );
  }
  isDisabled() {
    if (this.getObserversCount() > 0) {
      return !this.isActive();
    }
    return this.options.queryFn === _utils_js__WEBPACK_IMPORTED_MODULE_1__.skipToken || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStatic() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.resolveStaleTime)(observer.options.staleTime, this) === "static"
      );
    }
    return false;
  }
  isStale() {
    if (this.getObserversCount() > 0) {
      return this.observers.some(
        (observer) => observer.getCurrentResult().isStale
      );
    }
    return this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(staleTime = 0) {
    if (this.state.data === void 0) {
      return true;
    }
    if (staleTime === "static") {
      return false;
    }
    if (this.state.isInvalidated) {
      return true;
    }
    return !(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.timeUntilStale)(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  onOnline() {
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    observer?.refetch({ cancelRefetch: false });
    this.#retryer?.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.#cache.notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.#retryer) {
          if (this.#abortSignalConsumed) {
            this.#retryer.cancel({ revert: true });
          } else {
            this.#retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.#cache.notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.#dispatch({ type: "invalidate" });
    }
  }
  async fetch(options, fetchOptions) {
    if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
    // re-start the fetch; there is a chance that the query is still in a
    // pending state when that happens
    this.#retryer?.status() !== "rejected") {
      if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
        this.cancel({ silent: true });
      } else if (this.#retryer) {
        this.#retryer.continueRetry();
        return this.#retryer.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    if (true) {
      if (!Array.isArray(this.options.queryKey)) {
        console.error(
          `As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`
        );
      }
    }
    const abortController = new AbortController();
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          this.#abortSignalConsumed = true;
          return abortController.signal;
        }
      });
    };
    const fetchFn = () => {
      const queryFn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.ensureQueryFn)(this.options, fetchOptions);
      const createQueryFnContext = () => {
        const queryFnContext2 = {
          client: this.#client,
          queryKey: this.queryKey,
          meta: this.meta
        };
        addSignalProperty(queryFnContext2);
        return queryFnContext2;
      };
      const queryFnContext = createQueryFnContext();
      this.#abortSignalConsumed = false;
      if (this.options.persister) {
        return this.options.persister(
          queryFn,
          queryFnContext,
          this
        );
      }
      return queryFn(queryFnContext);
    };
    const createFetchContext = () => {
      const context2 = {
        fetchOptions,
        options: this.options,
        queryKey: this.queryKey,
        client: this.#client,
        state: this.state,
        fetchFn
      };
      addSignalProperty(context2);
      return context2;
    };
    const context = createFetchContext();
    this.options.behavior?.onFetch(context, this);
    this.#revertState = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
      this.#dispatch({ type: "fetch", meta: context.fetchOptions?.meta });
    }
    this.#retryer = (0,_retryer_js__WEBPACK_IMPORTED_MODULE_2__.createRetryer)({
      initialPromise: fetchOptions?.initialPromise,
      fn: context.fetchFn,
      onCancel: (error) => {
        if (error instanceof _retryer_js__WEBPACK_IMPORTED_MODULE_2__.CancelledError && error.revert) {
          this.setState({
            ...this.#revertState,
            fetchStatus: "idle"
          });
        }
        abortController.abort();
      },
      onFail: (failureCount, error) => {
        this.#dispatch({ type: "failed", failureCount, error });
      },
      onPause: () => {
        this.#dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.#dispatch({ type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode,
      canRun: () => true
    });
    try {
      const data = await this.#retryer.start();
      if (data === void 0) {
        if (true) {
          console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          );
        }
        throw new Error(`${this.queryHash} data is undefined`);
      }
      this.setData(data);
      this.#cache.config.onSuccess?.(data, this);
      this.#cache.config.onSettled?.(
        data,
        this.state.error,
        this
      );
      return data;
    } catch (error) {
      if (error instanceof _retryer_js__WEBPACK_IMPORTED_MODULE_2__.CancelledError) {
        if (error.silent) {
          return this.#retryer.promise;
        } else if (error.revert) {
          if (this.state.data === void 0) {
            throw error;
          }
          return this.state.data;
        }
      }
      this.#dispatch({
        type: "error",
        error
      });
      this.#cache.config.onError?.(
        error,
        this
      );
      this.#cache.config.onSettled?.(
        this.state.data,
        error,
        this
      );
      throw error;
    } finally {
      this.scheduleGc();
    }
  }
  #dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            ...fetchState(state.data, this.options),
            fetchMeta: action.meta ?? null
          };
        case "success":
          const newState = {
            ...state,
            ...successState(action.data, action.dataUpdatedAt),
            dataUpdateCount: state.dataUpdateCount + 1,
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
          this.#revertState = action.manual ? newState : void 0;
          return newState;
        case "error":
          const error = action.error;
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate();
      });
      this.#cache.notify({ query: this, type: "updated", action });
    });
  }
};
function fetchState(data, options) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: (0,_retryer_js__WEBPACK_IMPORTED_MODULE_2__.canFetch)(options.networkMode) ? "fetching" : "paused",
    ...data === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function successState(data, dataUpdatedAt) {
  return {
    data,
    dataUpdatedAt: dataUpdatedAt ?? Date.now(),
    error: null,
    isInvalidated: false,
    status: "success"
  };
}
function getDefaultState(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = data !== void 0;
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "pending",
    fetchStatus: "idle"
  };
}

//# sourceMappingURL=query.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/queryCache.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/queryCache.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryCache: () => (/* binding */ QueryCache)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
/* harmony import */ var _query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query.js */ "./node_modules/@tanstack/query-core/build/modern/query.js");
/* harmony import */ var _notifyManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifyManager.js */ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js");
/* harmony import */ var _subscribable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.js */ "./node_modules/@tanstack/query-core/build/modern/subscribable.js");
// src/queryCache.ts




var QueryCache = class extends _subscribable_js__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  constructor(config = {}) {
    super();
    this.config = config;
    this.#queries = /* @__PURE__ */ new Map();
  }
  #queries;
  build(client, options, state) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash ?? (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.hashQueryKeyByOptions)(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new _query_js__WEBPACK_IMPORTED_MODULE_2__.Query({
        client,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.#queries.has(query.queryHash)) {
      this.#queries.set(query.queryHash, query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.#queries.get(query.queryHash);
    if (queryInMap) {
      query.destroy();
      if (queryInMap === query) {
        this.#queries.delete(query.queryHash);
      }
      this.notify({ type: "removed", query });
    }
  }
  clear() {
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.#queries.get(queryHash);
  }
  getAll() {
    return [...this.#queries.values()];
  }
  find(filters) {
    const defaultedFilters = { exact: true, ...filters };
    return this.getAll().find(
      (query) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(defaultedFilters, query)
    );
  }
  findAll(filters = {}) {
    const queries = this.getAll();
    return Object.keys(filters).length > 0 ? queries.filter((query) => (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.matchQuery)(filters, query)) : queries;
  }
  notify(event) {
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batch(() => {
      this.getAll().forEach((query) => {
        query.onOnline();
      });
    });
  }
};

//# sourceMappingURL=queryCache.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/queryClient.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/queryClient.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryClient: () => (/* binding */ QueryClient)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
/* harmony import */ var _queryCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queryCache.js */ "./node_modules/@tanstack/query-core/build/modern/queryCache.js");
/* harmony import */ var _mutationCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutationCache.js */ "./node_modules/@tanstack/query-core/build/modern/mutationCache.js");
/* harmony import */ var _focusManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusManager.js */ "./node_modules/@tanstack/query-core/build/modern/focusManager.js");
/* harmony import */ var _onlineManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onlineManager.js */ "./node_modules/@tanstack/query-core/build/modern/onlineManager.js");
/* harmony import */ var _notifyManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifyManager.js */ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js");
/* harmony import */ var _infiniteQueryBehavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infiniteQueryBehavior.js */ "./node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js");
// src/queryClient.ts







var QueryClient = class {
  #queryCache;
  #mutationCache;
  #defaultOptions;
  #queryDefaults;
  #mutationDefaults;
  #mountCount;
  #unsubscribeFocus;
  #unsubscribeOnline;
  constructor(config = {}) {
    this.#queryCache = config.queryCache || new _queryCache_js__WEBPACK_IMPORTED_MODULE_0__.QueryCache();
    this.#mutationCache = config.mutationCache || new _mutationCache_js__WEBPACK_IMPORTED_MODULE_1__.MutationCache();
    this.#defaultOptions = config.defaultOptions || {};
    this.#queryDefaults = /* @__PURE__ */ new Map();
    this.#mutationDefaults = /* @__PURE__ */ new Map();
    this.#mountCount = 0;
  }
  mount() {
    this.#mountCount++;
    if (this.#mountCount !== 1) return;
    this.#unsubscribeFocus = _focusManager_js__WEBPACK_IMPORTED_MODULE_2__.focusManager.subscribe(async (focused) => {
      if (focused) {
        await this.resumePausedMutations();
        this.#queryCache.onFocus();
      }
    });
    this.#unsubscribeOnline = _onlineManager_js__WEBPACK_IMPORTED_MODULE_3__.onlineManager.subscribe(async (online) => {
      if (online) {
        await this.resumePausedMutations();
        this.#queryCache.onOnline();
      }
    });
  }
  unmount() {
    this.#mountCount--;
    if (this.#mountCount !== 0) return;
    this.#unsubscribeFocus?.();
    this.#unsubscribeFocus = void 0;
    this.#unsubscribeOnline?.();
    this.#unsubscribeOnline = void 0;
  }
  isFetching(filters) {
    return this.#queryCache.findAll({ ...filters, fetchStatus: "fetching" }).length;
  }
  isMutating(filters) {
    return this.#mutationCache.findAll({ ...filters, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(options.queryHash)?.state.data;
  }
  ensureQueryData(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    const query = this.#queryCache.build(this, defaultedOptions);
    const cachedData = query.state.data;
    if (cachedData === void 0) {
      return this.fetchQuery(options);
    }
    if (options.revalidateIfStale && query.isStaleByTime((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.resolveStaleTime)(defaultedOptions.staleTime, query))) {
      void this.prefetchQuery(defaultedOptions);
    }
    return Promise.resolve(cachedData);
  }
  getQueriesData(filters) {
    return this.#queryCache.findAll(filters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const defaultedOptions = this.defaultQueryOptions({ queryKey });
    const query = this.#queryCache.get(
      defaultedOptions.queryHash
    );
    const prevData = query?.state.data;
    const data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.functionalUpdate)(updater, prevData);
    if (data === void 0) {
      return void 0;
    }
    return this.#queryCache.build(this, defaultedOptions).setData(data, { ...options, manual: true });
  }
  setQueriesData(filters, updater, options) {
    return _notifyManager_js__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batch(
      () => this.#queryCache.findAll(filters).map(({ queryKey }) => [
        queryKey,
        this.setQueryData(queryKey, updater, options)
      ])
    );
  }
  getQueryState(queryKey) {
    const options = this.defaultQueryOptions({ queryKey });
    return this.#queryCache.get(
      options.queryHash
    )?.state;
  }
  removeQueries(filters) {
    const queryCache = this.#queryCache;
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(filters, options) {
    const queryCache = this.#queryCache;
    return _notifyManager_js__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(
        {
          type: "active",
          ...filters
        },
        options
      );
    });
  }
  cancelQueries(filters, cancelOptions = {}) {
    const defaultedCancelOptions = { revert: true, ...cancelOptions };
    const promises = _notifyManager_js__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batch(
      () => this.#queryCache.findAll(filters).map((query) => query.cancel(defaultedCancelOptions))
    );
    return Promise.all(promises).then(_utils_js__WEBPACK_IMPORTED_MODULE_4__.noop).catch(_utils_js__WEBPACK_IMPORTED_MODULE_4__.noop);
  }
  invalidateQueries(filters, options = {}) {
    return _notifyManager_js__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batch(() => {
      this.#queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters?.refetchType === "none") {
        return Promise.resolve();
      }
      return this.refetchQueries(
        {
          ...filters,
          type: filters?.refetchType ?? filters?.type ?? "active"
        },
        options
      );
    });
  }
  refetchQueries(filters, options = {}) {
    const fetchOptions = {
      ...options,
      cancelRefetch: options.cancelRefetch ?? true
    };
    const promises = _notifyManager_js__WEBPACK_IMPORTED_MODULE_5__.notifyManager.batch(
      () => this.#queryCache.findAll(filters).filter((query) => !query.isDisabled() && !query.isStatic()).map((query) => {
        let promise = query.fetch(void 0, fetchOptions);
        if (!fetchOptions.throwOnError) {
          promise = promise.catch(_utils_js__WEBPACK_IMPORTED_MODULE_4__.noop);
        }
        return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
      })
    );
    return Promise.all(promises).then(_utils_js__WEBPACK_IMPORTED_MODULE_4__.noop);
  }
  fetchQuery(options) {
    const defaultedOptions = this.defaultQueryOptions(options);
    if (defaultedOptions.retry === void 0) {
      defaultedOptions.retry = false;
    }
    const query = this.#queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.resolveStaleTime)(defaultedOptions.staleTime, query)
    ) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(options) {
    return this.fetchQuery(options).then(_utils_js__WEBPACK_IMPORTED_MODULE_4__.noop).catch(_utils_js__WEBPACK_IMPORTED_MODULE_4__.noop);
  }
  fetchInfiniteQuery(options) {
    options.behavior = (0,_infiniteQueryBehavior_js__WEBPACK_IMPORTED_MODULE_6__.infiniteQueryBehavior)(options.pages);
    return this.fetchQuery(options);
  }
  prefetchInfiniteQuery(options) {
    return this.fetchInfiniteQuery(options).then(_utils_js__WEBPACK_IMPORTED_MODULE_4__.noop).catch(_utils_js__WEBPACK_IMPORTED_MODULE_4__.noop);
  }
  ensureInfiniteQueryData(options) {
    options.behavior = (0,_infiniteQueryBehavior_js__WEBPACK_IMPORTED_MODULE_6__.infiniteQueryBehavior)(options.pages);
    return this.ensureQueryData(options);
  }
  resumePausedMutations() {
    if (_onlineManager_js__WEBPACK_IMPORTED_MODULE_3__.onlineManager.isOnline()) {
      return this.#mutationCache.resumePausedMutations();
    }
    return Promise.resolve();
  }
  getQueryCache() {
    return this.#queryCache;
  }
  getMutationCache() {
    return this.#mutationCache;
  }
  getDefaultOptions() {
    return this.#defaultOptions;
  }
  setDefaultOptions(options) {
    this.#defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    this.#queryDefaults.set((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hashKey)(queryKey), {
      queryKey,
      defaultOptions: options
    });
  }
  getQueryDefaults(queryKey) {
    const defaults = [...this.#queryDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.partialMatchKey)(queryKey, queryDefault.queryKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  setMutationDefaults(mutationKey, options) {
    this.#mutationDefaults.set((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hashKey)(mutationKey), {
      mutationKey,
      defaultOptions: options
    });
  }
  getMutationDefaults(mutationKey) {
    const defaults = [...this.#mutationDefaults.values()];
    const result = {};
    defaults.forEach((queryDefault) => {
      if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.partialMatchKey)(mutationKey, queryDefault.mutationKey)) {
        Object.assign(result, queryDefault.defaultOptions);
      }
    });
    return result;
  }
  defaultQueryOptions(options) {
    if (options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.#defaultOptions.queries,
      ...this.getQueryDefaults(options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash) {
      defaultedOptions.queryHash = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.hashQueryKeyByOptions)(
        defaultedOptions.queryKey,
        defaultedOptions
      );
    }
    if (defaultedOptions.refetchOnReconnect === void 0) {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (defaultedOptions.throwOnError === void 0) {
      defaultedOptions.throwOnError = !!defaultedOptions.suspense;
    }
    if (!defaultedOptions.networkMode && defaultedOptions.persister) {
      defaultedOptions.networkMode = "offlineFirst";
    }
    if (defaultedOptions.queryFn === _utils_js__WEBPACK_IMPORTED_MODULE_4__.skipToken) {
      defaultedOptions.enabled = false;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options?._defaulted) {
      return options;
    }
    return {
      ...this.#defaultOptions.mutations,
      ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.#queryCache.clear();
    this.#mutationCache.clear();
  }
};

//# sourceMappingURL=queryClient.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/queryObserver.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/queryObserver.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryObserver: () => (/* binding */ QueryObserver)
/* harmony export */ });
/* harmony import */ var _focusManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./focusManager.js */ "./node_modules/@tanstack/query-core/build/modern/focusManager.js");
/* harmony import */ var _notifyManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifyManager.js */ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js");
/* harmony import */ var _query_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query.js */ "./node_modules/@tanstack/query-core/build/modern/query.js");
/* harmony import */ var _subscribable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribable.js */ "./node_modules/@tanstack/query-core/build/modern/subscribable.js");
/* harmony import */ var _thenable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thenable.js */ "./node_modules/@tanstack/query-core/build/modern/thenable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
/* harmony import */ var _timeoutManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeoutManager.js */ "./node_modules/@tanstack/query-core/build/modern/timeoutManager.js");
// src/queryObserver.ts







var QueryObserver = class extends _subscribable_js__WEBPACK_IMPORTED_MODULE_0__.Subscribable {
  constructor(client, options) {
    super();
    this.options = options;
    this.#client = client;
    this.#selectError = null;
    this.#currentThenable = (0,_thenable_js__WEBPACK_IMPORTED_MODULE_1__.pendingThenable)();
    this.bindMethods();
    this.setOptions(options);
  }
  #client;
  #currentQuery = void 0;
  #currentQueryInitialState = void 0;
  #currentResult = void 0;
  #currentResultState;
  #currentResultOptions;
  #currentThenable;
  #selectError;
  #selectFn;
  #selectResult;
  // This property keeps track of the last query with defined data.
  // It will be used to pass the previous data and query to the placeholder function between renders.
  #lastQueryWithDefinedData;
  #staleTimeoutId;
  #refetchIntervalId;
  #currentRefetchInterval;
  #trackedProps = /* @__PURE__ */ new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.#currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.#currentQuery, this.options)) {
        this.#executeFetch();
      } else {
        this.updateResult();
      }
      this.#updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      this.#currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.#clearStaleTimeout();
    this.#clearRefetchInterval();
    this.#currentQuery.removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = this.#currentQuery;
    this.options = this.#client.defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(this.options.enabled, this.#currentQuery) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    this.#updateQuery();
    this.#currentQuery.setOptions(this.options);
    if (prevOptions._defaulted && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.shallowEqualObjects)(this.options, prevOptions)) {
      this.#client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.#currentQuery,
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      this.#currentQuery,
      prevQuery,
      this.options,
      prevOptions
    )) {
      this.#executeFetch();
    }
    this.updateResult();
    if (mounted && (this.#currentQuery !== prevQuery || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(this.options.enabled, this.#currentQuery) !== (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(prevOptions.enabled, this.#currentQuery) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveStaleTime)(this.options.staleTime, this.#currentQuery) !== (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveStaleTime)(prevOptions.staleTime, this.#currentQuery))) {
      this.#updateStaleTimeout();
    }
    const nextRefetchInterval = this.#computeRefetchInterval();
    if (mounted && (this.#currentQuery !== prevQuery || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(this.options.enabled, this.#currentQuery) !== (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
      this.#updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.#client.getQueryCache().build(this.#client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      this.#currentResult = result;
      this.#currentResultOptions = this.options;
      this.#currentResultState = this.#currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.#currentResult;
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked?.(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
            this.#currentThenable.reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    this.#trackedProps.add(key);
  }
  getCurrentQuery() {
    return this.#currentQuery;
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.#client.defaultQueryOptions(options);
    const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return this.#executeFetch({
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return this.#currentResult;
    });
  }
  #executeFetch(fetchOptions) {
    this.#updateQuery();
    let promise = this.#currentQuery.fetch(
      this.options,
      fetchOptions
    );
    if (!fetchOptions?.throwOnError) {
      promise = promise.catch(_utils_js__WEBPACK_IMPORTED_MODULE_2__.noop);
    }
    return promise;
  }
  #updateStaleTimeout() {
    this.#clearStaleTimeout();
    const staleTime = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveStaleTime)(
      this.options.staleTime,
      this.#currentQuery
    );
    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__.isServer || this.#currentResult.isStale || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(staleTime)) {
      return;
    }
    const time = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.timeUntilStale)(this.#currentResult.dataUpdatedAt, staleTime);
    const timeout = time + 1;
    this.#staleTimeoutId = _timeoutManager_js__WEBPACK_IMPORTED_MODULE_3__.timeoutManager.setTimeout(() => {
      if (!this.#currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  #computeRefetchInterval() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
  }
  #updateRefetchInterval(nextInterval) {
    this.#clearRefetchInterval();
    this.#currentRefetchInterval = nextInterval;
    if (_utils_js__WEBPACK_IMPORTED_MODULE_2__.isServer || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(this.options.enabled, this.#currentQuery) === false || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isValidTimeout)(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
      return;
    }
    this.#refetchIntervalId = _timeoutManager_js__WEBPACK_IMPORTED_MODULE_3__.timeoutManager.setInterval(() => {
      if (this.options.refetchIntervalInBackground || _focusManager_js__WEBPACK_IMPORTED_MODULE_4__.focusManager.isFocused()) {
        this.#executeFetch();
      }
    }, this.#currentRefetchInterval);
  }
  #updateTimers() {
    this.#updateStaleTimeout();
    this.#updateRefetchInterval(this.#computeRefetchInterval());
  }
  #clearStaleTimeout() {
    if (this.#staleTimeoutId) {
      _timeoutManager_js__WEBPACK_IMPORTED_MODULE_3__.timeoutManager.clearTimeout(this.#staleTimeoutId);
      this.#staleTimeoutId = void 0;
    }
  }
  #clearRefetchInterval() {
    if (this.#refetchIntervalId) {
      _timeoutManager_js__WEBPACK_IMPORTED_MODULE_3__.timeoutManager.clearInterval(this.#refetchIntervalId);
      this.#refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.#currentQuery;
    const prevOptions = this.options;
    const prevResult = this.#currentResult;
    const prevResultState = this.#currentResultState;
    const prevResultOptions = this.#currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...(0,_query_js__WEBPACK_IMPORTED_MODULE_5__.fetchState)(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          this.#lastQueryWithDefinedData?.state.data,
          this.#lastQueryWithDefinedData
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.replaceData)(
          prevResult?.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
        data = this.#selectResult;
      } else {
        try {
          this.#selectFn = options.select;
          data = options.select(data);
          data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.replaceData)(prevResult?.data, data, options);
          this.#selectResult = data;
          this.#selectError = null;
        } catch (selectError) {
          this.#selectError = selectError;
        }
      }
    }
    if (this.#selectError) {
      error = this.#selectError;
      data = this.#selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: this.#currentThenable,
      isEnabled: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const finalizeThenableIfPossible = (thenable) => {
        if (nextResult.status === "error") {
          thenable.reject(nextResult.error);
        } else if (nextResult.data !== void 0) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = this.#currentThenable = nextResult.promise = (0,_thenable_js__WEBPACK_IMPORTED_MODULE_1__.pendingThenable)();
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = this.#currentThenable;
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = this.#currentResult;
    const nextResult = this.createResult(this.#currentQuery, this.options);
    this.#currentResultState = this.#currentQuery.state;
    this.#currentResultOptions = this.options;
    if (this.#currentResultState.data !== void 0) {
      this.#lastQueryWithDefinedData = this.#currentQuery;
    }
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.shallowEqualObjects)(nextResult, prevResult)) {
      return;
    }
    this.#currentResult = nextResult;
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? this.#trackedProps
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(this.#currentResult).some((key) => {
        const typedKey = key;
        const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    this.#notify({ listeners: shouldNotifyListeners() });
  }
  #updateQuery() {
    const query = this.#client.getQueryCache().build(this.#client, this.options);
    if (query === this.#currentQuery) {
      return;
    }
    const prevQuery = this.#currentQuery;
    this.#currentQuery = query;
    this.#currentQueryInitialState = query.state;
    if (this.hasListeners()) {
      prevQuery?.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      this.#updateTimers();
    }
  }
  #notify(notifyOptions) {
    _notifyManager_js__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batch(() => {
      if (notifyOptions.listeners) {
        this.listeners.forEach((listener) => {
          listener(this.#currentResult);
        });
      }
      this.#client.getQueryCache().notify({
        query: this.#currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
};
function shouldLoadOnMount(query, options) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(options.enabled, query) !== false && (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveStaleTime)(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveEnabled)(options.enabled, query) !== false && query.isStaleByTime((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.resolveStaleTime)(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.shallowEqualObjects)(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}

//# sourceMappingURL=queryObserver.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/removable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/removable.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Removable: () => (/* binding */ Removable)
/* harmony export */ });
/* harmony import */ var _timeoutManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeoutManager.js */ "./node_modules/@tanstack/query-core/build/modern/timeoutManager.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
// src/removable.ts


var Removable = class {
  #gcTimeout;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isValidTimeout)(this.gcTime)) {
      this.#gcTimeout = _timeoutManager_js__WEBPACK_IMPORTED_MODULE_1__.timeoutManager.setTimeout(() => {
        this.optionalRemove();
      }, this.gcTime);
    }
  }
  updateGcTime(newGcTime) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      newGcTime ?? (_utils_js__WEBPACK_IMPORTED_MODULE_0__.isServer ? Infinity : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    if (this.#gcTimeout) {
      _timeoutManager_js__WEBPACK_IMPORTED_MODULE_1__.timeoutManager.clearTimeout(this.#gcTimeout);
      this.#gcTimeout = void 0;
    }
  }
};

//# sourceMappingURL=removable.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/retryer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/retryer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancelledError: () => (/* binding */ CancelledError),
/* harmony export */   canFetch: () => (/* binding */ canFetch),
/* harmony export */   createRetryer: () => (/* binding */ createRetryer),
/* harmony export */   isCancelledError: () => (/* binding */ isCancelledError)
/* harmony export */ });
/* harmony import */ var _focusManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusManager.js */ "./node_modules/@tanstack/query-core/build/modern/focusManager.js");
/* harmony import */ var _onlineManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onlineManager.js */ "./node_modules/@tanstack/query-core/build/modern/onlineManager.js");
/* harmony import */ var _thenable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thenable.js */ "./node_modules/@tanstack/query-core/build/modern/thenable.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
// src/retryer.ts




function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode ?? "online") === "online" ? _onlineManager_js__WEBPACK_IMPORTED_MODULE_0__.onlineManager.isOnline() : true;
}
var CancelledError = class extends Error {
  constructor(options) {
    super("CancelledError");
    this.revert = options?.revert;
    this.silent = options?.silent;
  }
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
function createRetryer(config) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let continueFn;
  const thenable = (0,_thenable_js__WEBPACK_IMPORTED_MODULE_1__.pendingThenable)();
  const isResolved = () => thenable.status !== "pending";
  const cancel = (cancelOptions) => {
    if (!isResolved()) {
      const error = new CancelledError(cancelOptions);
      reject(error);
      config.onCancel?.(error);
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const canContinue = () => _focusManager_js__WEBPACK_IMPORTED_MODULE_2__.focusManager.isFocused() && (config.networkMode === "always" || _onlineManager_js__WEBPACK_IMPORTED_MODULE_0__.onlineManager.isOnline()) && config.canRun();
  const canStart = () => canFetch(config.networkMode) && config.canRun();
  const resolve = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.resolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved()) {
      continueFn?.();
      thenable.reject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      continueFn = (value) => {
        if (isResolved() || canContinue()) {
          continueResolve(value);
        }
      };
      config.onPause?.();
    }).then(() => {
      continueFn = void 0;
      if (!isResolved()) {
        config.onContinue?.();
      }
    });
  };
  const run = () => {
    if (isResolved()) {
      return;
    }
    let promiseOrValue;
    const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
    try {
      promiseOrValue = initialPromise ?? config.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      if (isResolved()) {
        return;
      }
      const retry = config.retry ?? (_utils_js__WEBPACK_IMPORTED_MODULE_3__.isServer ? 0 : 3);
      const retryDelay = config.retryDelay ?? defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      config.onFail?.(failureCount, error);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.sleep)(delay).then(() => {
        return canContinue() ? void 0 : pause();
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  return {
    promise: thenable,
    status: () => thenable.status,
    cancel,
    continue: () => {
      continueFn?.();
      return thenable;
    },
    cancelRetry,
    continueRetry,
    canStart,
    start: () => {
      if (canStart()) {
        run();
      } else {
        pause().then(run);
      }
      return thenable;
    }
  };
}

//# sourceMappingURL=retryer.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/subscribable.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/subscribable.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subscribable: () => (/* binding */ Subscribable)
/* harmony export */ });
// src/subscribable.ts
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    this.listeners.add(listener);
    this.onSubscribe();
    return () => {
      this.listeners.delete(listener);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};

//# sourceMappingURL=subscribable.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/thenable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/thenable.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pendingThenable: () => (/* binding */ pendingThenable),
/* harmony export */   tryResolveSync: () => (/* binding */ tryResolveSync)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
// src/thenable.ts

function pendingThenable() {
  let resolve;
  let reject;
  const thenable = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  thenable.status = "pending";
  thenable.catch(() => {
  });
  function finalize(data) {
    Object.assign(thenable, data);
    delete thenable.resolve;
    delete thenable.reject;
  }
  thenable.resolve = (value) => {
    finalize({
      status: "fulfilled",
      value
    });
    resolve(value);
  };
  thenable.reject = (reason) => {
    finalize({
      status: "rejected",
      reason
    });
    reject(reason);
  };
  return thenable;
}
function tryResolveSync(promise) {
  let data;
  promise.then((result) => {
    data = result;
    return result;
  }, _utils_js__WEBPACK_IMPORTED_MODULE_0__.noop)?.catch(_utils_js__WEBPACK_IMPORTED_MODULE_0__.noop);
  if (data !== void 0) {
    return { data };
  }
  return void 0;
}

//# sourceMappingURL=thenable.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/timeoutManager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/timeoutManager.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutManager: () => (/* binding */ TimeoutManager),
/* harmony export */   defaultTimeoutProvider: () => (/* binding */ defaultTimeoutProvider),
/* harmony export */   systemSetTimeoutZero: () => (/* binding */ systemSetTimeoutZero),
/* harmony export */   timeoutManager: () => (/* binding */ timeoutManager)
/* harmony export */ });
// src/timeoutManager.ts
var defaultTimeoutProvider = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (callback, delay) => setTimeout(callback, delay),
  clearTimeout: (timeoutId) => clearTimeout(timeoutId),
  setInterval: (callback, delay) => setInterval(callback, delay),
  clearInterval: (intervalId) => clearInterval(intervalId)
};
var TimeoutManager = class {
  // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
  // type at app boot; and if we leave that type, then any new timer provider
  // would need to support ReturnType<typeof setTimeout>, which is infeasible.
  //
  // We settle for type safety for the TimeoutProvider type, and accept that
  // this class is unsafe internally to allow for extension.
  #provider = defaultTimeoutProvider;
  #providerCalled = false;
  setTimeoutProvider(provider) {
    if (true) {
      if (this.#providerCalled && provider !== this.#provider) {
        console.error(
          `[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`,
          { previous: this.#provider, provider }
        );
      }
    }
    this.#provider = provider;
    if (true) {
      this.#providerCalled = false;
    }
  }
  setTimeout(callback, delay) {
    if (true) {
      this.#providerCalled = true;
    }
    return this.#provider.setTimeout(callback, delay);
  }
  clearTimeout(timeoutId) {
    this.#provider.clearTimeout(timeoutId);
  }
  setInterval(callback, delay) {
    if (true) {
      this.#providerCalled = true;
    }
    return this.#provider.setInterval(callback, delay);
  }
  clearInterval(intervalId) {
    this.#provider.clearInterval(intervalId);
  }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
  setTimeout(callback, 0);
}

//# sourceMappingURL=timeoutManager.js.map

/***/ }),

/***/ "./node_modules/@tanstack/query-core/build/modern/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@tanstack/query-core/build/modern/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToEnd: () => (/* binding */ addToEnd),
/* harmony export */   addToStart: () => (/* binding */ addToStart),
/* harmony export */   ensureQueryFn: () => (/* binding */ ensureQueryFn),
/* harmony export */   functionalUpdate: () => (/* binding */ functionalUpdate),
/* harmony export */   hashKey: () => (/* binding */ hashKey),
/* harmony export */   hashQueryKeyByOptions: () => (/* binding */ hashQueryKeyByOptions),
/* harmony export */   isPlainArray: () => (/* binding */ isPlainArray),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isServer: () => (/* binding */ isServer),
/* harmony export */   isValidTimeout: () => (/* binding */ isValidTimeout),
/* harmony export */   keepPreviousData: () => (/* binding */ keepPreviousData),
/* harmony export */   matchMutation: () => (/* binding */ matchMutation),
/* harmony export */   matchQuery: () => (/* binding */ matchQuery),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   partialMatchKey: () => (/* binding */ partialMatchKey),
/* harmony export */   replaceData: () => (/* binding */ replaceData),
/* harmony export */   replaceEqualDeep: () => (/* binding */ replaceEqualDeep),
/* harmony export */   resolveEnabled: () => (/* binding */ resolveEnabled),
/* harmony export */   resolveStaleTime: () => (/* binding */ resolveStaleTime),
/* harmony export */   shallowEqualObjects: () => (/* binding */ shallowEqualObjects),
/* harmony export */   shouldThrowError: () => (/* binding */ shouldThrowError),
/* harmony export */   skipToken: () => (/* binding */ skipToken),
/* harmony export */   sleep: () => (/* binding */ sleep),
/* harmony export */   timeUntilStale: () => (/* binding */ timeUntilStale)
/* harmony export */ });
/* harmony import */ var _timeoutManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeoutManager.js */ "./node_modules/@tanstack/query-core/build/modern/timeoutManager.js");
// src/utils.ts

var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
  return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
  return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey,
    stale
  } = filters;
  if (queryKey) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const { exact, status, predicate, mutationKey } = filters;
  if (mutationKey) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
      return false;
    }
  }
  if (status && mutation.state.status !== status) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey, options) {
  const hashFn = options?.queryKeyHashFn || hashKey;
  return hashFn(queryKey);
}
function hashKey(queryKey) {
  return JSON.stringify(
    queryKey,
    (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : val
  );
}
function partialMatchKey(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return Object.keys(b).every((key) => partialMatchKey(a[key], b[key]));
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = isPlainArray(a) && isPlainArray(b);
  if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
  const aItems = array ? a : Object.keys(a);
  const aSize = aItems.length;
  const bItems = array ? b : Object.keys(b);
  const bSize = bItems.length;
  const copy = array ? new Array(bSize) : {};
  let equalItems = 0;
  for (let i = 0; i < bSize; i++) {
    const key = array ? i : bItems[i];
    const aItem = a[key];
    const bItem = b[key];
    if (aItem === bItem) {
      copy[key] = aItem;
      if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
      continue;
    }
    if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
      copy[key] = bItem;
      continue;
    }
    const v = replaceEqualDeep(aItem, bItem);
    copy[key] = v;
    if (v === aItem) equalItems++;
  }
  return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
  if (!b || Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
  return new Promise((resolve) => {
    _timeoutManager_js__WEBPACK_IMPORTED_MODULE_0__.timeoutManager.setTimeout(resolve, timeout);
  });
}
function replaceData(prevData, data, options) {
  if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    if (true) {
      try {
        return replaceEqualDeep(prevData, data);
      } catch (error) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`
        );
        throw error;
      }
    }
    return replaceEqualDeep(prevData, data);
  }
  return data;
}
function keepPreviousData(previousData) {
  return previousData;
}
function addToEnd(items, item, max = 0) {
  const newItems = [...items, item];
  return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
  const newItems = [item, ...items];
  return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
  if (true) {
    if (options.queryFn === skipToken) {
      console.error(
        `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`
      );
    }
  }
  if (!options.queryFn && fetchOptions?.initialPromise) {
    return () => fetchOptions.initialPromise;
  }
  if (!options.queryFn || options.queryFn === skipToken) {
    return () => Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
  }
  return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
  if (typeof throwOnError === "function") {
    return throwOnError(...params);
  }
  return !!throwOnError;
}

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@tanstack/react-form/dist/esm/useField.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tanstack/react-form/dist/esm/useField.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* binding */ Field),
/* harmony export */   useField: () => (/* binding */ useField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _tanstack_react_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-store */ "./node_modules/@tanstack/react-form/node_modules/@tanstack/react-store/dist/esm/index.js");
/* harmony import */ var _tanstack_form_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/form-core */ "./node_modules/@tanstack/form-core/dist/esm/FieldApi.js");
/* harmony import */ var _tanstack_form_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/form-core */ "./node_modules/@tanstack/form-core/dist/esm/utils.js");
/* harmony import */ var _useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect.js */ "./node_modules/@tanstack/react-form/dist/esm/useIsomorphicLayoutEffect.js");
"use client";





function useField(opts) {
  const optsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(opts);
  optsRef.current = opts;
  const fieldApi = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const api = new _tanstack_form_core__WEBPACK_IMPORTED_MODULE_2__.FieldApi({
      ...optsRef.current,
      form: opts.form,
      name: opts.name
    });
    const extendedApi = api;
    extendedApi.Field = Field;
    return extendedApi;
  }, [opts.form, opts.name]);
  (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(fieldApi.mount, [fieldApi]);
  (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(() => {
    fieldApi.update(opts);
  });
  (0,_tanstack_react_store__WEBPACK_IMPORTED_MODULE_4__.useStore)(
    fieldApi.store,
    opts.mode === "array" ? (state) => {
      return [
        state.meta,
        Object.keys(state.value ?? []).length
      ];
    } : void 0
  );
  return fieldApi;
}
const Field = (({
  children,
  ...fieldOptions
}) => {
  const fieldApi = useField(fieldOptions);
  const jsxToDisplay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => (0,_tanstack_form_core__WEBPACK_IMPORTED_MODULE_5__.functionalUpdate)(children, fieldApi),
    /**
     * The reason this exists is to fix an issue with the React Compiler.
     * Namely, functionalUpdate is memoized where it checks for `fieldApi`, which is a static type.
     * This means that when `state.value` changes, it does not trigger a re-render. The useMemo explicitly fixes this problem
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children, fieldApi, fieldApi.state.value, fieldApi.state.meta]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: jsxToDisplay });
});

//# sourceMappingURL=useField.js.map


/***/ }),

/***/ "./node_modules/@tanstack/react-form/dist/esm/useForm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@tanstack/react-form/dist/esm/useForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useForm: () => (/* binding */ useForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _tanstack_form_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/form-core */ "./node_modules/@tanstack/form-core/dist/esm/utils.js");
/* harmony import */ var _tanstack_form_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/form-core */ "./node_modules/@tanstack/form-core/dist/esm/FormApi.js");
/* harmony import */ var _tanstack_react_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-store */ "./node_modules/@tanstack/react-form/node_modules/@tanstack/react-store/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _useField_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useField.js */ "./node_modules/@tanstack/react-form/dist/esm/useField.js");
/* harmony import */ var _useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect.js */ "./node_modules/@tanstack/react-form/dist/esm/useIsomorphicLayoutEffect.js");
"use client";






function LocalSubscribe({
  form,
  selector,
  children
}) {
  const data = (0,_tanstack_react_store__WEBPACK_IMPORTED_MODULE_2__.useStore)(form.store, selector);
  return (0,_tanstack_form_core__WEBPACK_IMPORTED_MODULE_3__.functionalUpdate)(children, data);
}
function useForm(opts) {
  const formId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const [formApi] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => {
    const api = new _tanstack_form_core__WEBPACK_IMPORTED_MODULE_4__.FormApi({ ...opts, formId });
    const extendedApi = api;
    extendedApi.Field = function APIField(props) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_useField_js__WEBPACK_IMPORTED_MODULE_5__.Field, { ...props, form: api });
    };
    extendedApi.Subscribe = function Subscribe(props) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        LocalSubscribe,
        {
          form: api,
          selector: props.selector,
          children: props.children
        }
      );
    };
    return extendedApi;
  });
  (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(formApi.mount, []);
  (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(() => {
    formApi.update(opts);
  });
  return formApi;
}

//# sourceMappingURL=useForm.js.map


/***/ }),

/***/ "./node_modules/@tanstack/react-form/dist/esm/useIsomorphicLayoutEffect.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tanstack/react-form/dist/esm/useIsomorphicLayoutEffect.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

//# sourceMappingURL=useIsomorphicLayoutEffect.js.map


/***/ }),

/***/ "./node_modules/@tanstack/react-form/node_modules/@tanstack/react-store/dist/esm/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@tanstack/react-form/node_modules/@tanstack/react-store/dist/esm/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Derived: () => (/* reexport safe */ _tanstack_store__WEBPACK_IMPORTED_MODULE_1__.Derived),
/* harmony export */   Effect: () => (/* reexport safe */ _tanstack_store__WEBPACK_IMPORTED_MODULE_1__.Effect),
/* harmony export */   Store: () => (/* reexport safe */ _tanstack_store__WEBPACK_IMPORTED_MODULE_1__.Store),
/* harmony export */   __depsThatHaveWrittenThisTick: () => (/* reexport safe */ _tanstack_store__WEBPACK_IMPORTED_MODULE_1__.__depsThatHaveWrittenThisTick),
/* harmony export */   __derivedToStore: () => (/* reexport safe */ _tanstack_store__WEBPACK_IMPORTED_MODULE_1__.__derivedToStore),
/* harmony export */   __flush: () => (/* reexport safe */ _tanstack_store__WEBPACK_IMPORTED_MODULE_1__.__flush),
/* harmony export */   __storeToDerived: () => (/* reexport safe */ _tanstack_store__WEBPACK_IMPORTED_MODULE_1__.__storeToDerived),
/* harmony export */   batch: () => (/* reexport safe */ _tanstack_store__WEBPACK_IMPORTED_MODULE_1__.batch),
/* harmony export */   isUpdaterFunction: () => (/* reexport safe */ _tanstack_store__WEBPACK_IMPORTED_MODULE_1__.isUpdaterFunction),
/* harmony export */   shallow: () => (/* binding */ shallow),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector.js */ "./node_modules/use-sync-external-store/shim/with-selector.js");
/* harmony import */ var _tanstack_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/store */ "./node_modules/@tanstack/store/dist/esm/index.js");


function useStore(store, selector = (d) => d) {
  const slice = (0,use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStoreWithSelector)(
    store.subscribe,
    () => store.state,
    () => store.state,
    selector,
    shallow
  );
  return slice;
}
function shallow(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size) return false;
    for (const [k, v] of objA) {
      if (!objB.has(k) || !Object.is(v, objB.get(k))) return false;
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size) return false;
    for (const v of objA) {
      if (!objB.has(v)) return false;
    }
    return true;
  }
  if (objA instanceof Date && objB instanceof Date) {
    if (objA.getTime() !== objB.getTime()) return false;
    return true;
  }
  const keysA = getOwnKeys(objA);
  if (keysA.length !== getOwnKeys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
function getOwnKeys(obj) {
  return Object.keys(obj).concat(
    Object.getOwnPropertySymbols(obj)
  );
}

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsRestoringProvider: () => (/* binding */ IsRestoringProvider),
/* harmony export */   useIsRestoring: () => (/* binding */ useIsRestoring)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
"use client";

// src/IsRestoringProvider.ts

var IsRestoringContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
var useIsRestoring = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;

//# sourceMappingURL=IsRestoringProvider.js.map

/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryClientContext: () => (/* binding */ QueryClientContext),
/* harmony export */   QueryClientProvider: () => (/* binding */ QueryClientProvider),
/* harmony export */   useQueryClient: () => (/* binding */ useQueryClient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";

// src/QueryClientProvider.tsx


var QueryClientContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(
  void 0
);
var useQueryClient = (queryClient) => {
  const client = react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryClientContext);
  if (queryClient) {
    return queryClient;
  }
  if (!client) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return client;
};
var QueryClientProvider = ({
  client,
  children
}) => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(QueryClientContext.Provider, { value: client, children });
};

//# sourceMappingURL=QueryClientProvider.js.map

/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryErrorResetBoundary: () => (/* binding */ QueryErrorResetBoundary),
/* harmony export */   useQueryErrorResetBoundary: () => (/* binding */ useQueryErrorResetBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
"use client";

// src/QueryErrorResetBoundary.tsx


function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(createValue());
var useQueryErrorResetBoundary = () => react__WEBPACK_IMPORTED_MODULE_0__.useContext(QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({
  children
}) => {
  const [value] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => createValue());
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(QueryErrorResetBoundaryContext.Provider, { value, children: typeof children === "function" ? children(value) : children });
};

//# sourceMappingURL=QueryErrorResetBoundary.js.map

/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ensurePreventErrorBoundaryRetry: () => (/* binding */ ensurePreventErrorBoundaryRetry),
/* harmony export */   getHasError: () => (/* binding */ getHasError),
/* harmony export */   useClearResetErrorBoundary: () => (/* binding */ useClearResetErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/query-core */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
"use client";

// src/errorBoundaryUtils.ts


var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary) => {
  if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.shouldThrowError)(throwOnError, [result.error, query]));
};

//# sourceMappingURL=errorBoundaryUtils.js.map

/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/modern/suspense.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tanstack/react-query/build/modern/suspense.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultThrowOnError: () => (/* binding */ defaultThrowOnError),
/* harmony export */   ensureSuspenseTimers: () => (/* binding */ ensureSuspenseTimers),
/* harmony export */   fetchOptimistic: () => (/* binding */ fetchOptimistic),
/* harmony export */   shouldSuspend: () => (/* binding */ shouldSuspend),
/* harmony export */   willFetch: () => (/* binding */ willFetch)
/* harmony export */ });
// src/suspense.ts
var defaultThrowOnError = (_error, query) => query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});

//# sourceMappingURL=suspense.js.map

/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBaseQuery: () => (/* binding */ useBaseQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/query-core */ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js");
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tanstack/query-core */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
/* harmony import */ var _QueryClientProvider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueryClientProvider.js */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");
/* harmony import */ var _QueryErrorResetBoundary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryErrorResetBoundary.js */ "./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js");
/* harmony import */ var _errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorBoundaryUtils.js */ "./node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js");
/* harmony import */ var _IsRestoringProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IsRestoringProvider.js */ "./node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js");
/* harmony import */ var _suspense_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./suspense.js */ "./node_modules/@tanstack/react-query/build/modern/suspense.js");
"use client";

// src/useBaseQuery.ts







function useBaseQuery(options, Observer, queryClient) {
  if (true) {
    if (typeof options !== "object" || Array.isArray(options)) {
      throw new Error(
        'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
      );
    }
  }
  const isRestoring = (0,_IsRestoringProvider_js__WEBPACK_IMPORTED_MODULE_1__.useIsRestoring)();
  const errorResetBoundary = (0,_QueryErrorResetBoundary_js__WEBPACK_IMPORTED_MODULE_2__.useQueryErrorResetBoundary)();
  const client = (0,_QueryClientProvider_js__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)(queryClient);
  const defaultedOptions = client.defaultQueryOptions(options);
  client.getDefaultOptions().queries?._experimental_beforeQuery?.(
    defaultedOptions
  );
  if (true) {
    if (!defaultedOptions.queryFn) {
      console.error(
        `[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
      );
    }
  }
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  (0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.ensureSuspenseTimers)(defaultedOptions);
  (0,_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_5__.ensurePreventErrorBoundaryRetry)(defaultedOptions, errorResetBoundary);
  (0,_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_5__.useClearResetErrorBoundary)(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore(
    react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__.notifyManager.batchCalls(onStoreChange)) : _tanstack_query_core__WEBPACK_IMPORTED_MODULE_7__.noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if ((0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.shouldSuspend)(defaultedOptions, result)) {
    throw (0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.fetchOptimistic)(defaultedOptions, observer, errorResetBoundary);
  }
  if ((0,_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_5__.getHasError)({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query: client.getQueryCache().get(defaultedOptions.queryHash),
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  ;
  client.getDefaultOptions().queries?._experimental_afterQuery?.(
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !_tanstack_query_core__WEBPACK_IMPORTED_MODULE_7__.isServer && (0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.willFetch)(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      (0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.fetchOptimistic)(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      client.getQueryCache().get(defaultedOptions.queryHash)?.promise
    );
    promise?.catch(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_7__.noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}

//# sourceMappingURL=useBaseQuery.js.map

/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/modern/useMutation.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tanstack/react-query/build/modern/useMutation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMutation: () => (/* binding */ useMutation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/query-core */ "./node_modules/@tanstack/query-core/build/modern/mutationObserver.js");
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/query-core */ "./node_modules/@tanstack/query-core/build/modern/notifyManager.js");
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/query-core */ "./node_modules/@tanstack/query-core/build/modern/utils.js");
/* harmony import */ var _QueryClientProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryClientProvider.js */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");
"use client";

// src/useMutation.ts



function useMutation(options, queryClient) {
  const client = (0,_QueryClientProvider_js__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)(queryClient);
  const [observer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(
    () => new _tanstack_query_core__WEBPACK_IMPORTED_MODULE_2__.MutationObserver(
      client,
      options
    )
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore(
    react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
      (onStoreChange) => observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_3__.notifyManager.batchCalls(onStoreChange)),
      [observer]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  const mutate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (variables, mutateOptions) => {
      observer.mutate(variables, mutateOptions).catch(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__.noop);
    },
    [observer]
  );
  if (result.error && (0,_tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__.shouldThrowError)(observer.options.throwOnError, [result.error])) {
    throw result.error;
  }
  return { ...result, mutate, mutateAsync: result.mutate };
}

//# sourceMappingURL=useMutation.js.map

/***/ }),

/***/ "./node_modules/@tanstack/react-query/build/modern/useQuery.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tanstack/react-query/build/modern/useQuery.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useQuery: () => (/* binding */ useQuery)
/* harmony export */ });
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/query-core */ "./node_modules/@tanstack/query-core/build/modern/queryObserver.js");
/* harmony import */ var _useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useBaseQuery.js */ "./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js");
"use client";

// src/useQuery.ts


function useQuery(options, queryClient) {
  return (0,_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__.useBaseQuery)(options, _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.QueryObserver, queryClient);
}

//# sourceMappingURL=useQuery.js.map

/***/ }),

/***/ "./node_modules/@tanstack/store/dist/esm/derived.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tanstack/store/dist/esm/derived.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Derived: () => (/* binding */ Derived)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./node_modules/@tanstack/store/dist/esm/store.js");
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/@tanstack/store/dist/esm/scheduler.js");


class Derived {
  constructor(options) {
    this.listeners = /* @__PURE__ */ new Set();
    this._subscriptions = [];
    this.lastSeenDepValues = [];
    this.getDepVals = () => {
      const l = this.options.deps.length;
      const prevDepVals = new Array(l);
      const currDepVals = new Array(l);
      for (let i = 0; i < l; i++) {
        const dep = this.options.deps[i];
        prevDepVals[i] = dep.prevState;
        currDepVals[i] = dep.state;
      }
      this.lastSeenDepValues = currDepVals;
      return {
        prevDepVals,
        currDepVals,
        prevVal: this.prevState ?? void 0
      };
    };
    this.recompute = () => {
      var _a, _b;
      this.prevState = this.state;
      const depVals = this.getDepVals();
      this.state = this.options.fn(depVals);
      (_b = (_a = this.options).onUpdate) == null ? void 0 : _b.call(_a);
    };
    this.checkIfRecalculationNeededDeeply = () => {
      for (const dep of this.options.deps) {
        if (dep instanceof Derived) {
          dep.checkIfRecalculationNeededDeeply();
        }
      }
      let shouldRecompute = false;
      const lastSeenDepValues = this.lastSeenDepValues;
      const { currDepVals } = this.getDepVals();
      for (let i = 0; i < currDepVals.length; i++) {
        if (currDepVals[i] !== lastSeenDepValues[i]) {
          shouldRecompute = true;
          break;
        }
      }
      if (shouldRecompute) {
        this.recompute();
      }
    };
    this.mount = () => {
      this.registerOnGraph();
      this.checkIfRecalculationNeededDeeply();
      return () => {
        this.unregisterFromGraph();
        for (const cleanup of this._subscriptions) {
          cleanup();
        }
      };
    };
    this.subscribe = (listener) => {
      var _a, _b;
      this.listeners.add(listener);
      const unsub = (_b = (_a = this.options).onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
      return () => {
        this.listeners.delete(listener);
        unsub == null ? void 0 : unsub();
      };
    };
    this.options = options;
    this.state = options.fn({
      prevDepVals: void 0,
      prevVal: void 0,
      currDepVals: this.getDepVals().currDepVals
    });
  }
  registerOnGraph(deps = this.options.deps) {
    for (const dep of deps) {
      if (dep instanceof Derived) {
        dep.registerOnGraph();
        this.registerOnGraph(dep.options.deps);
      } else if (dep instanceof _store_js__WEBPACK_IMPORTED_MODULE_0__.Store) {
        let relatedLinkedDerivedVals = _scheduler_js__WEBPACK_IMPORTED_MODULE_1__.__storeToDerived.get(dep);
        if (!relatedLinkedDerivedVals) {
          relatedLinkedDerivedVals = /* @__PURE__ */ new Set();
          _scheduler_js__WEBPACK_IMPORTED_MODULE_1__.__storeToDerived.set(dep, relatedLinkedDerivedVals);
        }
        relatedLinkedDerivedVals.add(this);
        let relatedStores = _scheduler_js__WEBPACK_IMPORTED_MODULE_1__.__derivedToStore.get(this);
        if (!relatedStores) {
          relatedStores = /* @__PURE__ */ new Set();
          _scheduler_js__WEBPACK_IMPORTED_MODULE_1__.__derivedToStore.set(this, relatedStores);
        }
        relatedStores.add(dep);
      }
    }
  }
  unregisterFromGraph(deps = this.options.deps) {
    for (const dep of deps) {
      if (dep instanceof Derived) {
        this.unregisterFromGraph(dep.options.deps);
      } else if (dep instanceof _store_js__WEBPACK_IMPORTED_MODULE_0__.Store) {
        const relatedLinkedDerivedVals = _scheduler_js__WEBPACK_IMPORTED_MODULE_1__.__storeToDerived.get(dep);
        if (relatedLinkedDerivedVals) {
          relatedLinkedDerivedVals.delete(this);
        }
        const relatedStores = _scheduler_js__WEBPACK_IMPORTED_MODULE_1__.__derivedToStore.get(this);
        if (relatedStores) {
          relatedStores.delete(dep);
        }
      }
    }
  }
}

//# sourceMappingURL=derived.js.map


/***/ }),

/***/ "./node_modules/@tanstack/store/dist/esm/effect.js":
/*!*********************************************************!*\
  !*** ./node_modules/@tanstack/store/dist/esm/effect.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Effect: () => (/* binding */ Effect)
/* harmony export */ });
/* harmony import */ var _derived_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./derived.js */ "./node_modules/@tanstack/store/dist/esm/derived.js");

class Effect {
  constructor(opts) {
    const { eager, fn, ...derivedProps } = opts;
    this._derived = new _derived_js__WEBPACK_IMPORTED_MODULE_0__.Derived({
      ...derivedProps,
      fn: () => {
      },
      onUpdate() {
        fn();
      }
    });
    if (eager) {
      fn();
    }
  }
  mount() {
    return this._derived.mount();
  }
}

//# sourceMappingURL=effect.js.map


/***/ }),

/***/ "./node_modules/@tanstack/store/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@tanstack/store/dist/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Derived: () => (/* reexport safe */ _derived_js__WEBPACK_IMPORTED_MODULE_0__.Derived),
/* harmony export */   Effect: () => (/* reexport safe */ _effect_js__WEBPACK_IMPORTED_MODULE_1__.Effect),
/* harmony export */   Store: () => (/* reexport safe */ _store_js__WEBPACK_IMPORTED_MODULE_2__.Store),
/* harmony export */   __depsThatHaveWrittenThisTick: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_3__.__depsThatHaveWrittenThisTick),
/* harmony export */   __derivedToStore: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_3__.__derivedToStore),
/* harmony export */   __flush: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_3__.__flush),
/* harmony export */   __storeToDerived: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_3__.__storeToDerived),
/* harmony export */   batch: () => (/* reexport safe */ _scheduler_js__WEBPACK_IMPORTED_MODULE_3__.batch),
/* harmony export */   isUpdaterFunction: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_4__.isUpdaterFunction)
/* harmony export */ });
/* harmony import */ var _derived_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./derived.js */ "./node_modules/@tanstack/store/dist/esm/derived.js");
/* harmony import */ var _effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effect.js */ "./node_modules/@tanstack/store/dist/esm/effect.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.js */ "./node_modules/@tanstack/store/dist/esm/store.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "./node_modules/@tanstack/store/dist/esm/types.js");
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/@tanstack/store/dist/esm/scheduler.js");






//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@tanstack/store/dist/esm/scheduler.js":
/*!************************************************************!*\
  !*** ./node_modules/@tanstack/store/dist/esm/scheduler.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __depsThatHaveWrittenThisTick: () => (/* binding */ __depsThatHaveWrittenThisTick),
/* harmony export */   __derivedToStore: () => (/* binding */ __derivedToStore),
/* harmony export */   __flush: () => (/* binding */ __flush),
/* harmony export */   __storeToDerived: () => (/* binding */ __storeToDerived),
/* harmony export */   batch: () => (/* binding */ batch)
/* harmony export */ });
/* harmony import */ var _derived_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./derived.js */ "./node_modules/@tanstack/store/dist/esm/derived.js");

const __storeToDerived = /* @__PURE__ */ new WeakMap();
const __derivedToStore = /* @__PURE__ */ new WeakMap();
const __depsThatHaveWrittenThisTick = {
  current: []
};
let __isFlushing = false;
let __batchDepth = 0;
const __pendingUpdates = /* @__PURE__ */ new Set();
const __initialBatchValues = /* @__PURE__ */ new Map();
function __flush_internals(relatedVals) {
  const sorted = Array.from(relatedVals).sort((a, b) => {
    if (a instanceof _derived_js__WEBPACK_IMPORTED_MODULE_0__.Derived && a.options.deps.includes(b)) return 1;
    if (b instanceof _derived_js__WEBPACK_IMPORTED_MODULE_0__.Derived && b.options.deps.includes(a)) return -1;
    return 0;
  });
  for (const derived of sorted) {
    if (__depsThatHaveWrittenThisTick.current.includes(derived)) {
      continue;
    }
    __depsThatHaveWrittenThisTick.current.push(derived);
    derived.recompute();
    const stores = __derivedToStore.get(derived);
    if (stores) {
      for (const store of stores) {
        const relatedLinkedDerivedVals = __storeToDerived.get(store);
        if (!relatedLinkedDerivedVals) continue;
        __flush_internals(relatedLinkedDerivedVals);
      }
    }
  }
}
function __notifyListeners(store) {
  const value = {
    prevVal: store.prevState,
    currentVal: store.state
  };
  for (const listener of store.listeners) {
    listener(value);
  }
}
function __notifyDerivedListeners(derived) {
  const value = {
    prevVal: derived.prevState,
    currentVal: derived.state
  };
  for (const listener of derived.listeners) {
    listener(value);
  }
}
function __flush(store) {
  if (__batchDepth > 0 && !__initialBatchValues.has(store)) {
    __initialBatchValues.set(store, store.prevState);
  }
  __pendingUpdates.add(store);
  if (__batchDepth > 0) return;
  if (__isFlushing) return;
  try {
    __isFlushing = true;
    while (__pendingUpdates.size > 0) {
      const stores = Array.from(__pendingUpdates);
      __pendingUpdates.clear();
      for (const store2 of stores) {
        const prevState = __initialBatchValues.get(store2) ?? store2.prevState;
        store2.prevState = prevState;
        __notifyListeners(store2);
      }
      for (const store2 of stores) {
        const derivedVals = __storeToDerived.get(store2);
        if (!derivedVals) continue;
        __depsThatHaveWrittenThisTick.current.push(store2);
        __flush_internals(derivedVals);
      }
      for (const store2 of stores) {
        const derivedVals = __storeToDerived.get(store2);
        if (!derivedVals) continue;
        for (const derived of derivedVals) {
          __notifyDerivedListeners(derived);
        }
      }
    }
  } finally {
    __isFlushing = false;
    __depsThatHaveWrittenThisTick.current = [];
    __initialBatchValues.clear();
  }
}
function batch(fn) {
  __batchDepth++;
  try {
    fn();
  } finally {
    __batchDepth--;
    if (__batchDepth === 0) {
      const pendingUpdateToFlush = __pendingUpdates.values().next().value;
      if (pendingUpdateToFlush) {
        __flush(pendingUpdateToFlush);
      }
    }
  }
}

//# sourceMappingURL=scheduler.js.map


/***/ }),

/***/ "./node_modules/@tanstack/store/dist/esm/store.js":
/*!********************************************************!*\
  !*** ./node_modules/@tanstack/store/dist/esm/store.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _scheduler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler.js */ "./node_modules/@tanstack/store/dist/esm/scheduler.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/@tanstack/store/dist/esm/types.js");


class Store {
  constructor(initialState, options) {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = (listener) => {
      var _a, _b;
      this.listeners.add(listener);
      const unsub = (_b = (_a = this.options) == null ? void 0 : _a.onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
      return () => {
        this.listeners.delete(listener);
        unsub == null ? void 0 : unsub();
      };
    };
    this.prevState = initialState;
    this.state = initialState;
    this.options = options;
  }
  setState(updater) {
    var _a, _b, _c;
    this.prevState = this.state;
    if ((_a = this.options) == null ? void 0 : _a.updateFn) {
      this.state = this.options.updateFn(this.prevState)(updater);
    } else {
      if ((0,_types_js__WEBPACK_IMPORTED_MODULE_0__.isUpdaterFunction)(updater)) {
        this.state = updater(this.prevState);
      } else {
        this.state = updater;
      }
    }
    (_c = (_b = this.options) == null ? void 0 : _b.onUpdate) == null ? void 0 : _c.call(_b);
    (0,_scheduler_js__WEBPACK_IMPORTED_MODULE_1__.__flush)(this);
  }
}

//# sourceMappingURL=store.js.map


/***/ }),

/***/ "./node_modules/@tanstack/store/dist/esm/types.js":
/*!********************************************************!*\
  !*** ./node_modules/@tanstack/store/dist/esm/types.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isUpdaterFunction: () => (/* binding */ isUpdaterFunction)
/* harmony export */ });
function isUpdaterFunction(updater) {
  return typeof updater === "function";
}

//# sourceMappingURL=types.js.map


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function is(x, y) {
      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
      didWarnOld18Alpha ||
        void 0 === React.startTransition ||
        ((didWarnOld18Alpha = !0),
        console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
      var value = getSnapshot();
      if (!didWarnUncachedGetSnapshot) {
        var cachedValue = getSnapshot();
        objectIs(value, cachedValue) ||
          (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ),
          (didWarnUncachedGetSnapshot = !0));
      }
      cachedValue = useState({
        inst: { value: value, getSnapshot: getSnapshot }
      });
      var inst = cachedValue[0].inst,
        forceUpdate = cachedValue[1];
      useLayoutEffect(
        function () {
          inst.value = value;
          inst.getSnapshot = getSnapshot;
          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
        },
        [subscribe, value, getSnapshot]
      );
      useEffect(
        function () {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
          return subscribe(function () {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
          });
        },
        [subscribe]
      );
      useDebugValue(value);
      return value;
    }
    function checkIfSnapshotChanged(inst) {
      var latestGetSnapshot = inst.getSnapshot;
      inst = inst.value;
      try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
      } catch (error) {
        return !0;
      }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
      return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __webpack_require__(/*! react */ "react"),
      objectIs = "function" === typeof Object.is ? Object.is : is,
      useState = React.useState,
      useEffect = React.useEffect,
      useLayoutEffect = React.useLayoutEffect,
      useDebugValue = React.useDebugValue,
      didWarnOld18Alpha = !1,
      didWarnUncachedGetSnapshot = !1,
      shim =
        "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        "undefined" === typeof window.document.createElement
          ? useSyncExternalStore$1
          : useSyncExternalStore$2;
    exports.useSyncExternalStore =
      void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


 true &&
  (function () {
    function is(x, y) {
      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __webpack_require__(/*! react */ "react"),
      shim = __webpack_require__(/*! use-sync-external-store/shim */ "./node_modules/use-sync-external-store/shim/index.js"),
      objectIs = "function" === typeof Object.is ? Object.is : is,
      useSyncExternalStore = shim.useSyncExternalStore,
      useRef = React.useRef,
      useEffect = React.useEffect,
      useMemo = React.useMemo,
      useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function (
      subscribe,
      getSnapshot,
      getServerSnapshot,
      selector,
      isEqual
    ) {
      var instRef = useRef(null);
      if (null === instRef.current) {
        var inst = { hasValue: !1, value: null };
        instRef.current = inst;
      } else inst = instRef.current;
      instRef = useMemo(
        function () {
          function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
              hasMemo = !0;
              memoizedSnapshot = nextSnapshot;
              nextSnapshot = selector(nextSnapshot);
              if (void 0 !== isEqual && inst.hasValue) {
                var currentSelection = inst.value;
                if (isEqual(currentSelection, nextSnapshot))
                  return (memoizedSelection = currentSelection);
              }
              return (memoizedSelection = nextSnapshot);
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot))
              return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
              return (memoizedSnapshot = nextSnapshot), currentSelection;
            memoizedSnapshot = nextSnapshot;
            return (memoizedSelection = nextSelection);
          }
          var hasMemo = !1,
            memoizedSnapshot,
            memoizedSelection,
            maybeGetServerSnapshot =
              void 0 === getServerSnapshot ? null : getServerSnapshot;
          return [
            function () {
              return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot
              ? void 0
              : function () {
                  return memoizedSelector(maybeGetServerSnapshot());
                }
          ];
        },
        [getSnapshot, getServerSnapshot, selector, isEqual]
      );
      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
      useEffect(
        function () {
          inst.hasValue = !0;
          inst.value = value;
        },
        [value]
      );
      useDebugValue(value);
      return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      "function" ===
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js");
}


/***/ }),

/***/ "./node_modules/use-sync-external-store/shim/with-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/with-selector.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim/with-selector.development.js */ "./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js");
}


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./apps/general-settings/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SettingsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SettingsPage */ "./apps/general-settings/SettingsPage.jsx");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ "./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js");
/* harmony import */ var _query_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query/client */ "./apps/general-settings/query/client.js");
/* harmony import */ var _context_settings_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/settings-context */ "./apps/general-settings/context/settings-context.jsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./apps/general-settings/index.scss");







document.addEventListener('DOMContentLoaded', () => {
  const settings = document.getElementById('modula-settings-app');
  if (!settings) {
    return;
  }
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(settings);
  root.render(/*#__PURE__*/React.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.QueryClientProvider, {
    client: _query_client__WEBPACK_IMPORTED_MODULE_3__.queryClient
  }, /*#__PURE__*/React.createElement(_context_settings_context__WEBPACK_IMPORTED_MODULE_4__.SettingsProvider, null, /*#__PURE__*/React.createElement(_SettingsPage__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map