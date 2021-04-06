module.export = {
  configWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network'
      }
    }
  }
}