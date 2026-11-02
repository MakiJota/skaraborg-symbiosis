# Regional industrial symbiosis in Skaraborg

Interactive reports and a written report on the potential for **regional
industrial symbiosis** in Skaraborg (15 kommuner, Västra Götaland County). The
question is how much industrial waste could replace raw and semi-finished
materials that other firms in the region import. The reference year is 2022.

| | |
|---|---|
| Written report: Skaraborg | [reports/skaraborg_report.md](reports/skaraborg_report.md) |
| About the project | `docs/about.html` |
| Interactive report: Skaraborg | `docs/skaraborg/` (see *Viewing* below) |

## Method in one paragraph

Waste generation is estimated from workplace employment (SCB) and Swedish
waste-per-worker coefficients (Eurostat), split into List of Waste codes.
Input demand comes from firms' imports of raw and semi-finished goods (SCB
customs microdata), localised to workplaces. A compatibility matrix links
waste codes to the products they can replace:

- **Documented industrial exchanges** (MAESTRI): the baseline.
- **Plus the reviewed W2RKG knowledge graph:** the broad estimate.

Waste is then allocated to compatible demand at nested scales:

- the region as one unit
- each kommun, then between kommuner
- individual firms

## Data protection

The underlying microdata from Statistics Sweden are confidential and are not
in this repository. What is published are model results:

- results by kommun, industry (NACE4), waste (LoW) and product (CN4)
- firm-level results without names: firms are anonymous points placed on a
  1 km grid, and workers are given only as a size class

## Viewing

The site is static and is served from `docs/` with GitHub Pages:
*Settings → Pages → Deploy from a branch → `main` / `docs`*. To view it
locally, run a web server in `docs/` (for example
`python -m http.server 8000`) and open <http://localhost:8000>.

## Sources

SCB (workplace register, foreign trade microdata), Eurostat (waste statistics,
material flow accounts), Trafikanalys (lorry survey 2021–2023), SGU (aggregate
statistics), MAESTRI (Evans et al. 2017, doi:10.17863/CAM.12608; method from Patricio et al. 2022,
doi:10.1016/j.resconrec.2022.106437), W2RKG (Zhao et al. 2025, *Nature
Communications*, doi:10.1038/s41467-025-66599-7).

Results are model estimates for 2022, not measured flows.
