import lume from 'lume/mod.ts';

const site = lume();

import vento from 'lume/plugins/vento.ts';
import sass from 'lume/plugins/sass.ts';
import esbuild from 'lume/plugins/esbuild.ts';
import sheets from "lume/plugins/sheets.ts";

site.use(vento());
site.use(sass());
site.use(esbuild());
site.use(sheets());

site.copy('static', '');

export default site;

