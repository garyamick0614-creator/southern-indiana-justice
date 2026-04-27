# Southern Indiana Justice Stats

A documents-first dashboard comparing incarceration, arrest, IDOC release, overdose, 911, and homelessness data for Jackson County and the surrounding southern Indiana counties (2020–2025), against the reentry, rehab, and outreach programs that have launched on the ground. Includes 2026–2030 projection formulas.

## Live site

https://southern-indiana-justice.netlify.app/

## Pages

- `/` — overview and KPIs
- `/counties.html` — Jackson + Scott + Jennings + Bartholomew + Monroe + Lawrence + Brown + Washington + Decatur + Clark + Floyd + Orange side-by-side
- `/facilities.html` — IDOC prisons + county jails + news-tagged incident patterns
- `/predictions.html` — linear / exponential / logistic models for 2026–2030
- `/methodology.html` — full schemas (county-year, facility-year, headline log) and normalization rules
- `/sources.html` — every primary source linked

## Data schemas

Seven schemas, all in `methodology.html`:

1. County × Year base
2. Incarceration / IDOC
3. Arrest types
4. Overdose / EMS / 911
5. Reentry / rehab / outreach programs
6. Facility × Year (jails & prisons)
7. News-headline log

## Stack

Static HTML + CSS. No JavaScript framework. Hosted on Netlify.

## Built by

[That Computer Guy 26 / TCG Solutions](https://thatcomputerguy26.org) — Seymour, Indiana.

Companion long-form archive: [Indiana Businesses Exposed](https://ibetcg.netlify.app).

## License

Content: data and analysis are derived from public sources cited on `/sources.html`.

## Contributing

Got a primary source we missed, or a county data pull we should add? Submit a tip at https://ibetcg.netlify.app/#submit.
