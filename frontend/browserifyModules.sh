#!/usr/bin/bash
#TODO what about the scripts for windows - may someone using it create it?
cd resources/js;
browserify AppCaller.js -o frontend.js;
browserify AdminAppCaller.js -o frontend-admin.js;
