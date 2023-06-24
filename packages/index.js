//导入组件
import iButton from "./button/index";
import mInput from "./input/index";
import mTable from "./table/index";
import mSelect from "./select/index";
import mDropdown from "./dropDown/index";
import mRadio from "./radio/index";
import mCheckbox from "./checkbox/index";
import Message from "./message/index";
import Confirm from "./confirm/index";
import iModal from "./modal/index";
import mDrawer from "./drawer/index";
import Loading from "./loading/index";
import mSwitch from "./switch/index";
import mTree from "./tree/index";
import mOptfile from "./optfile/index";
import mTextarea from "./textarea/index";
import mRow from "./mrow/index";
import mCol from "./mcol/index";
import mPagination from "./pagination/index";
import $ih from "./function/index";
import mDate from "./date/index";
import iBacktop from "./backtop/index";
import mCollapse from "./collapse/index";
import mCollapseItem from "./collapse/item/index";
import mMenu from "./menu/index";
import mTabs from "./tabs/index";
import iSpace from "./Space/index";
import mPopover from './popover/index';
import mProgress from './progress/index'
import mColorPicker from './colorPicker/index'
import mBreadcrumb from './breadcrumb/index'
import iBadge from './badge/index'
import mDivider from './divider/index'
//存在所有组件
const components = [
  iButton,
  mInput,
  mTable,
  mSelect,
  mDropdown,
  mRadio,
  mCheckbox,
  iModal,
  mDrawer,
  mSwitch,
  mTree,
  mOptfile,
  mTextarea,
  mRow,
  mCol,
  mPagination,
  mDate,
  iBacktop,
  mCollapse,
  mCollapseItem,
  mMenu,
  mTabs,
  iSpace,
  mPopover,
  mProgress,
  mColorPicker,
  mBreadcrumb,
  iBadge,
  mDivider
];
const install = (app) => {
  components.forEach((i) => {
    app.use(i)
  })
  app.config.globalProperties.$message = Message
  app.config.globalProperties.$Confirm = Confirm
  app.config.globalProperties.$Loading = Loading
  app.config.globalProperties.$ih = $ih
}
const ihUi = {
  version: '0.4.1',
  install
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install,
  // 以下是具体的组件列表
  iButton,
  mInput,
  mTable,
  mSelect,
  mDropdown,
  mRadio,
  mCheckbox,
  Message,
  Confirm,
  iModal,
  mDrawer,
  Loading,
  mSwitch,
  mTree,
  mOptfile,
  mTextarea,
  mRow,
  mCol,
  mPagination,
  $ih,
  mDate,
  iBacktop,
  mCollapse,
  mCollapseItem,
  mMenu,
  mTabs,
  mPopover,
  iSpace,
  mProgress,
  mColorPicker,
  mBreadcrumb,
  iBadge,
  mDivider
}
export default ihUi
