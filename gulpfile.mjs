import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fs from 'fs';
import gulp from 'gulp';
import javascriptObfuscator from 'gulp-javascript-obfuscator';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env.local') });
const distPath = join(process.cwd(), '.next', 'static', 'chunks');


if (!fs.existsSync(distPath)) {
  console.error(
    "❌ La carpeta 'dist/_next/static/chunks' no existe. Ejecuta 'npm run build' primero && según tu ambiente."
  );

  process.exit(1);
}

gulp.task('obfuscate-js', function () {
  console.log('🔄 Iniciando la tarea de ofuscación de JavaScript...');
  return gulp
    .src(`${distPath}/**/*.js`)
    .pipe(
      javascriptObfuscator({
        compact: true,
        controlFlowFlattening: true,
        numbersToExpressions: true,
        stringArray: true,
        rotateStringArray: true,
        shuffleStringArray: true,
        splitStrings: false,
        stringArrayThreshold: 0.3,
      })
    )
    .on('error', (err) => {
      console.error('❌ Error durante la ofuscación:', err);
    })
    .pipe(gulp.dest(distPath))
    .on('end', () => {
      console.log('✅ Ofuscación de JavaScript completada.');
    });
});

gulp.task(
  'default',
  gulp.series('obfuscate-js', (done) => {
    console.log('✅ Tarea por defecto completada.');
    done();
  })
);