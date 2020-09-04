(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return archiveTask})),__webpack_require__.d(__webpack_exports__,"c",(function(){return pinTask}));var _Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(138),actions_ARCHIVE_TASK="ARCHIVE_TASK",actions_PIN_TASK="PIN_TASK",archiveTask=function archiveTask(id){return{type:actions_ARCHIVE_TASK,id:id}},pinTask=function pinTask(id){return{type:actions_PIN_TASK,id:id}};function taskStateReducer(taskState){return function(state,action){return Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},state,{tasks:state.tasks.map((function(task){return task.id===action.id?Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},task,{state:taskState}):task}))})}}__webpack_exports__.b=Object(redux__WEBPACK_IMPORTED_MODULE_1__.b)((function reducer(state,action){switch(action.type){case actions_ARCHIVE_TASK:return taskStateReducer("TASK_ARCHIVED")(state,action);case actions_PIN_TASK:return taskStateReducer("TASK_PINNED")(state,action);default:return state}}),{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}]})},199:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureInboxScreen}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(79),_TaskList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(65);function PureInboxScreen(_ref){return _ref.error?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"page lists-show"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"wrapper-message"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-face-sad"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title-message"},"Oh no!"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"subtitle-message"},"Something went wrong"))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"page lists-show"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"title-page"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"title-wrapper"},"Taskbox"))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_2__.b,null))}PureInboxScreen.defaultProps={error:null},PureInboxScreen.__docgenInfo={description:"",methods:[],displayName:"PureInboxScreen",props:{error:{defaultValue:{value:"null",computed:!1},required:!1}}};Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)((function(_ref2){return{error:_ref2.error}}))(PureInboxScreen);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"PureInboxScreen",docgenInfo:PureInboxScreen.__docgenInfo,path:"src/components/InboxScreen.js"})},323:function(module,exports,__webpack_require__){__webpack_require__(324),__webpack_require__(518),module.exports=__webpack_require__(519)},344:function(module,exports){},36:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"task",(function(){return task})),__webpack_require__.d(__webpack_exports__,"actions",(function(){return actions}));var _Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(56),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(200),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(201),_Task__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(80),task={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,9,0)},actions={onPinTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onPinTask"),onArchiveTask:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("onArchiveTask")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Task",module).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.object)("task",Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},task))},actions))})).add("pinned",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},task,{state:"TASK_PINNED"})},actions))})).add("archived",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_5__.a,Object.assign({task:Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},task,{state:"TASK_ARCHIVED"})},actions))}))}.call(this,__webpack_require__(92)(module))},519:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56);__webpack_require__(699);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(700),module)}.call(this,__webpack_require__(92)(module))},65:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return PureTaskList}));var _Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(101),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Task__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(79),_lib_redux__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(100);function PureTaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"loading-item"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"glow-checkbox"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"glow-text"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"Loading")," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"cool")," ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"state")));if(loading)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow);if(0===tasks.length)return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"wrapper-message"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"icon-check"}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"title-message"},"You have no tasks"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"subtitle-message"},"Sit back and relax")));var tasksInOrder=[].concat(Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"list-items"},tasksInOrder.map((function(task){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Task__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({key:task.id,task:task},events))})))}PureTaskList.defaultProps={loading:!1},PureTaskList.__docgenInfo={description:"",methods:[],displayName:"PureTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},required:!1}}},__webpack_exports__.b=Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.b)((function(_ref2){return{tasks:_ref2.tasks.filter((function(t){return"TASK_INBOX"===t.state||"TASK_PINNED"===t.state}))}}),(function(dispatch){return{onArchiveTask:function onArchiveTask(id){return dispatch(Object(_lib_redux__WEBPACK_IMPORTED_MODULE_4__.a)(id))},onPinTask:function onPinTask(id){return dispatch(Object(_lib_redux__WEBPACK_IMPORTED_MODULE_4__.c)(id))}}}))(PureTaskList),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"PureTaskList",docgenInfo:PureTaskList.__docgenInfo,path:"src/components/TaskList.js"})},699:function(module,exports,__webpack_require__){},700:function(module,exports,__webpack_require__){var map={"./components/InboxScreen.stories.js":701,"./components/Task.stories.js":36,"./components/TaskList.stories.js":728};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=700},701:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(79),_InboxScreen__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(199),_lib_redux__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(100);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("InboxScreen",module).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.a,{store:_lib_redux__WEBPACK_IMPORTED_MODULE_4__.b},story())})).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InboxScreen__WEBPACK_IMPORTED_MODULE_3__.a,null)})).add("error",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InboxScreen__WEBPACK_IMPORTED_MODULE_3__.a,{error:"Something"})}))}.call(this,__webpack_require__(92)(module))},728:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"defaultTasks",(function(){return defaultTasks})),__webpack_require__.d(__webpack_exports__,"withPinnedTasks",(function(){return withPinnedTasks}));var _Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(101),_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(56),_TaskList__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(65),_Task_stories__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(36),defaultTasks=[Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"1",title:"Task 1"}),Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"2",title:"Task 2"}),Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"3",title:"Task 3"}),Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"4",title:"Task 4"}),Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"5",title:"Task 5"}),Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.task,{id:"6",title:"Task 6"})],withPinnedTasks=[].concat(Object(_Users_andrewd_Personal_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(defaultTasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("TaskList",module).addDecorator((function(story){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:{padding:"3rem"}},story())})).add("default",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:defaultTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})).add("withPinnedTasks",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:withPinnedTasks},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})).add("loading",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({loading:!0,tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))})).add("empty",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TaskList__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({tasks:[]},_Task_stories__WEBPACK_IMPORTED_MODULE_5__.actions))}))}.call(this,__webpack_require__(92)(module))},80:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"list-item ".concat(state)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:"checkbox"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()}},"TASK_ARCHIVED"!==state&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:function onClick(){return onPinTask(id)}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"icon-star"}))))}Task.__docgenInfo={description:"",methods:[],displayName:"Task"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src/components/Task.js"})}},[[323,1,2]]]);
//# sourceMappingURL=main.53d49154d06af13f3e15.bundle.js.map