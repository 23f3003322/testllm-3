"use strict";

(function () {
  function setStatus(message) {
    var el = document.getElementById('github-status');
    if (!el) return;
    el.textContent = message;
  }

  async function performLookup(query) {
    if (!query) {
      setStatus('Please enter a query.');
      return;
    }
    setStatus(`Lookup started for "${query}"`);
    // Simulated latency to mimic a real lookup
    var delay = 400 + Math.random() * 800;
    await new Promise(function (resolve) { return setTimeout(resolve, delay); });

    var success = Math.random() > 0.25; // 75% chance of success
    if (success) {
      setStatus(`Lookup succeeded for "${query}"`);
    } else {
      setStatus(`Lookup failed for "${query}"`);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('lookup-input');
    var btn = document.getElementById('lookup-btn');
    if (!input || !btn) return;

    function run() {
      var q = input.value.trim();
      performLookup(q);
    }

    btn.addEventListener('click', run);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') run();
    });
  });
})();
