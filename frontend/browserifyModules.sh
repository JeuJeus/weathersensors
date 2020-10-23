#!/usr/bin/bash
cd resources/js;
browserify AppCaller.js -o frontend.js;
browserify AdminAppCaller.js -o frontend-admin.js;
