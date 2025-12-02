const Sitemap = require('react-router-sitemap').default;
const path = require('path');
const router = require('./src/Routes').default; // adjust if your routes file is different

function generateSitemap() {
  return new Sitemap(router)
    .build('https://rhemachapelinternationalchurchespretoria.co.za')
    .save(path.resolve(__dirname, 'public', 'sitemap.xml'));
}

generateSitemap();
import React, { useState, useEffect, useRef } from 'react';