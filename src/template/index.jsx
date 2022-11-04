import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import { StaticRouter } from 'react-router-dom/server';
import path from 'path';
import hbs from 'hbs';
import App from '../components/App';

export default function template(initState) {
  const Path = path.join(__dirname, '../view/index.hbs');
  const html = fs.readFileSync(Path, 'utf-8');
  const hbsTemplate = hbs.compile(html);
  const reactComponent = renderToString(
    <StaticRouter location={initState.path}>
      <App />
    </StaticRouter>,
  );
  return hbsTemplate({
    content: reactComponent,
    initState: JSON.stringify(initState),
  });
}
