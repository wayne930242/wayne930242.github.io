const fs = require(&apos;fs&apos;)
const del = require(&apos;del&apos;)
const gulp = require(&apos;gulp&apos;)
const concat = require(&apos;gulp-concat&apos;)
const uglify = require(&apos;gulp-uglify&apos;)

gulp.task(&apos;clean&apos;, async () =&gt; {
  del([&apos;*.min.js&apos;, &apos;!three.min.js&apos;])
})

gulp.task(&apos;scripts&apos;, async () =&gt; {
  const sourceFiles = fs.readdirSync(&apos;src&apos;)
  sourceFiles.forEach(file =&gt; {
    const fileName = file.split(&apos;.&apos;)[0]
    return gulp.src([`src/${fileName}.js`, &apos;lib/*.js&apos;])
      .pipe(concat(`${fileName}.min.js`))
      .pipe(uglify())
      .pipe(gulp.dest(&apos;./&apos;))
  })
})

gulp.task(&apos;default&apos;, gulp.series(&apos;clean&apos;, &apos;scripts&apos;))