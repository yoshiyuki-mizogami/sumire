module.exports = {
  configureWebpack: {
    target: 'electron-renderer',
    resolve: {
      alias: {
        'pg-native': 'noop2',
        'dns':'net',
        tedious: 'noop2',
        sqlite3: 'noop2',
        mysql2: 'noop2',
      },
    },
  }
}