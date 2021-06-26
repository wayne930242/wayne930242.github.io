<script src='https://unpkg.com/tippy.js@2.0.2/dist/tippy.all.min.js'></script>
<script src='/js/attachTooltips.js'></script>
<link rel='stylesheet' href='/css/tippy.css'>
const fs = require('fs')
const del = require('del')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

gulp.task('clean', async () => {
  del(['*.min.js', '!three.min.js'])
})

gulp.task('scripts', async () => {
  const sourceFiles = fs.readdirSync('src')
  sourceFiles.forEach(file => {
    const fileName = file.split('.')[0]
    return gulp.src([`src/${fileName}.js`, 'lib/*.js'])
      .pipe(concat(`${fileName}.min.js`))
      .pipe(uglify())
      .pipe(gulp.dest('./'))
  })
})

gulp.task('default', gulp.series('clean', 'scripts'))