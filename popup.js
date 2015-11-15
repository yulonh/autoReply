// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('submit');
    var options = chrome.extension.getBackgroundPage().options;
    document.getElementById('content').value = options.content;
    document.getElementById('time').value = options.time;

    btn.addEventListener('click', function(){
    	var content = document.getElementById('content').value;
    	var time = document.getElementById('time').value;
    	options.content = content;
    	options.time = time;
    });

});
