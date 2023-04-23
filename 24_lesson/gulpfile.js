const { src, dest, series, parallel, watch } = require('gulp')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()
const { path } = require('./gulp/path.js')

function serveTask(done) {
  browserSync.init({
    server: {
      baseDir: path.dist
    }
  })

  watch(path.srcHtml, series(copyHtmlTask, reloadBrowserTask))
  watch(path.srcJs, series(copyJsTask, reloadBrowserTask))
  watch(path.srcCss, series(copyCssTask, reloadBrowserTask))

  done()
}

function reloadBrowserTask(done) {
  browserSync.reload()
  done()
}

function buildTask() {
  return series(cleanDistTask, parallel(copyHtmlTask, copyJsTask, copyJsVendorTask, copyCssTask))
}

function copyHtmlTask() {
  return src(path.srcHtml)
    .pipe(dest(path.dist))
}

function copyJsTask() {
  return src(path.srcJs)
    .pipe(concat(path.distJs))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(dest(path.dist))
}

function copyJsVendorTask() {
  return src(path.vendorJs)
    .pipe(concat(path.distVendorJs))
    .pipe(dest(path.dist))
}

function copyCssTask() {
  return src(path.srcCss)
    .pipe(concat(path.distCss))
    .pipe(dest(path.dist))
}

function cleanDistTask() {
  return src(path.dist)
    .pipe(clean())
}

exports.build = buildTask()
exports.serve = series(buildTask(), serveTask)