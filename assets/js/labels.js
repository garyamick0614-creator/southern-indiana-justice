/* Southern Indiana Justice — shared court-code decoder.
   ONE map translating raw CourtListener / Indiana court codes to readable labels.
   Used by cases.html, opinions.html, judges.html, index.html. No external deps. */
(function (root) {
  var COURT_LABELS = {
    coa: "Court of Appeals",
    supreme: "Supreme Court",
    ind: "Indiana Supreme Court",
    indctapp: "Indiana Court of Appeals",
    indtc: "Indiana Tax Court",
    tax: "Indiana Tax Court",
    ca7: "7th Cir.",
    innd: "N.D. Ind.",
    innb: "N.D. Ind. (Bankr.)",
    insd: "S.D. Ind.",
    insb: "S.D. Ind. (Bankr.)"
  };

  // Returns the decoded label for a raw court code.
  // Unknown / empty codes fall back to the provided fallback (default: the raw code, else "?").
  function courtLabel(code, fallback) {
    if (code == null || code === "") return fallback != null ? fallback : "?";
    var key = String(code).trim().toLowerCase();
    if (Object.prototype.hasOwnProperty.call(COURT_LABELS, key)) return COURT_LABELS[key];
    return fallback != null ? fallback : String(code);
  }

  root.COURT_LABELS = COURT_LABELS;
  root.courtLabel = courtLabel;
})(typeof window !== "undefined" ? window : this);
