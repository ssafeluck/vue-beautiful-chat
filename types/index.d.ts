
import Vue, { VNodeDirective, PluginObject } from 'vue'

/** Options used in Loading service */
export interface PluginOptions {     
    componentName?: string
}
 

 /**
 * Install all Chat  components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(Chat)` to install.
 */
export function install (vue: typeof Vue, options: PluginOptions): void