declare var tt: any
declare var qa: any
declare var swan: any
declare var __PLATFORM__:
  | 'h5'
  | 'app-plus'
  | 'mp-alipay'
  | 'mp-baidu'
  | 'mp-qq'
  | 'mp-toutiao'
  | 'mp-weixin'
  | 'quickapp-webview'
declare var __PLATFORM_PREFIX__: 'wx' | 'qq' | 'my' | 'swan' | 'tt' | 'qa'
declare var __GLOBAL__: Record<string, any>

// Global compile-time constants
declare var __DEV__: boolean
declare var __TEST__: boolean

// Feature flags
declare var __VUE_OPTIONS_API__: boolean

declare var __UNI_FEATURE_WX__: boolean
declare var __UNI_FEATURE_WXS__: boolean
declare var __UNI_FEATURE_PROMISE__: boolean
declare var __UNI_FEATURE_LONGPRESS__: boolean
declare var __UNI_FEATURE_ROUTER_MODE__: 'hash' | 'history'

declare var __UNI_FEATURE_PAGES__: boolean
declare var __UNI_FEATURE_TABBAR__: boolean
declare var __UNI_FEATURE_TOPWINDOW__: boolean
declare var __UNI_FEATURE_LEFTWINDOW__: boolean
declare var __UNI_FEATURE_RIGHTWINDOW__: boolean
declare var __UNI_FEATURE_RESPONSIVE__: boolean
// TODO
declare var __uniRoutes: any
declare var __uniConfig: UniApp.UniConfig
declare var UniViewJSBridge: any
declare var UniServiceJSBridge: any
