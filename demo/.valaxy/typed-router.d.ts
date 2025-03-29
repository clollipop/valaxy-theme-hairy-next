/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/archives/': RouteRecordInfo<'/archives/', '/archives', Record<never, never>, Record<never, never>>,
    '/archives/[year]/': RouteRecordInfo<'/archives/[year]/', '/archives/:year', { year: ParamValue<true> }, { year: ParamValue<false> }>,
    '/archives/[year]/[month]/': RouteRecordInfo<'/archives/[year]/[month]/', '/archives/:year/:month', { year: ParamValue<true>, month: ParamValue<true> }, { year: ParamValue<false>, month: ParamValue<false> }>,
    '/categories/': RouteRecordInfo<'/categories/', '/categories', Record<never, never>, Record<never, never>>,
    '/categories/[...its]': RouteRecordInfo<'/categories/[...its]', '/categories/:its(.*)', { its: ParamValue<true> }, { its: ParamValue<false> }>,
    '/notes/': RouteRecordInfo<'/notes/', '/notes', Record<never, never>, Record<never, never>>,
    '/page/[page]': RouteRecordInfo<'/page/[page]', '/page/:page', { page: ParamValue<true> }, { page: ParamValue<false> }>,
    '/posts/crypto': RouteRecordInfo<'/posts/crypto', '/posts/crypto', Record<never, never>, Record<never, never>>,
    '/posts/draft': RouteRecordInfo<'/posts/draft', '/posts/draft', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/auxiliarry-in': RouteRecordInfo<'/posts/guitar/kpa/auxiliarry-in', '/posts/guitar/kpa/auxiliarry-in', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/external-effects': RouteRecordInfo<'/posts/guitar/kpa/external-effects', '/posts/guitar/kpa/external-effects', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/input': RouteRecordInfo<'/posts/guitar/kpa/input', '/posts/guitar/kpa/input', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/looper': RouteRecordInfo<'/posts/guitar/kpa/looper', '/posts/guitar/kpa/looper', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/mode-performance-baisc': RouteRecordInfo<'/posts/guitar/kpa/mode-performance-baisc', '/posts/guitar/kpa/mode-performance-baisc', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/mode-performance-edit': RouteRecordInfo<'/posts/guitar/kpa/mode-performance-edit', '/posts/guitar/kpa/mode-performance-edit', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/mode-performance-midi': RouteRecordInfo<'/posts/guitar/kpa/mode-performance-midi', '/posts/guitar/kpa/mode-performance-midi', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/noise-gate': RouteRecordInfo<'/posts/guitar/kpa/noise-gate', '/posts/guitar/kpa/noise-gate', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/output': RouteRecordInfo<'/posts/guitar/kpa/output', '/posts/guitar/kpa/output', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/parallel-path': RouteRecordInfo<'/posts/guitar/kpa/parallel-path', '/posts/guitar/kpa/parallel-path', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/peals-profiler': RouteRecordInfo<'/posts/guitar/kpa/peals-profiler', '/posts/guitar/kpa/peals-profiler', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/perimeter-controls': RouteRecordInfo<'/posts/guitar/kpa/perimeter-controls', '/posts/guitar/kpa/perimeter-controls', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/pure-cabinet': RouteRecordInfo<'/posts/guitar/kpa/pure-cabinet', '/posts/guitar/kpa/pure-cabinet', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/reamping': RouteRecordInfo<'/posts/guitar/kpa/reamping', '/posts/guitar/kpa/reamping', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/rig-manager': RouteRecordInfo<'/posts/guitar/kpa/rig-manager', '/posts/guitar/kpa/rig-manager', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/stack-amplifier': RouteRecordInfo<'/posts/guitar/kpa/stack-amplifier', '/posts/guitar/kpa/stack-amplifier', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/stack-eq': RouteRecordInfo<'/posts/guitar/kpa/stack-eq', '/posts/guitar/kpa/stack-eq', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/switches': RouteRecordInfo<'/posts/guitar/kpa/switches', '/posts/guitar/kpa/switches', Record<never, never>, Record<never, never>>,
    '/posts/guitar/kpa/volume-boost-pedal': RouteRecordInfo<'/posts/guitar/kpa/volume-boost-pedal', '/posts/guitar/kpa/volume-boost-pedal', Record<never, never>, Record<never, never>>,
    '/posts/hello-valaxy': RouteRecordInfo<'/posts/hello-valaxy', '/posts/hello-valaxy', Record<never, never>, Record<never, never>>,
    '/posts/i18n': RouteRecordInfo<'/posts/i18n', '/posts/i18n', Record<never, never>, Record<never, never>>,
    '/posts/test': RouteRecordInfo<'/posts/test', '/posts/test', Record<never, never>, Record<never, never>>,
    '/posts/theme/': RouteRecordInfo<'/posts/theme/', '/posts/theme', Record<never, never>, Record<never, never>>,
    '/posts/theme/step-1': RouteRecordInfo<'/posts/theme/step-1', '/posts/theme/step-1', Record<never, never>, Record<never, never>>,
    '/posts/theme/step-2': RouteRecordInfo<'/posts/theme/step-2', '/posts/theme/step-2', Record<never, never>, Record<never, never>>,
    '/posts/theme/step-3': RouteRecordInfo<'/posts/theme/step-3', '/posts/theme/step-3', Record<never, never>, Record<never, never>>,
    '/tags/': RouteRecordInfo<'/tags/', '/tags', Record<never, never>, Record<never, never>>,
    '/tags/[tag]/': RouteRecordInfo<'/tags/[tag]/', '/tags/:tag', { tag: ParamValue<true> }, { tag: ParamValue<false> }>,
  }
}
