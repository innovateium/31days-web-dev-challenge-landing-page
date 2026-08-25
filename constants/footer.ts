import type { FooterColumn } from '@/components/ui/site-footer';

/**
 * What this build puts in its own half of the footer. The Innovateium half is
 * the same everywhere and lives in the component.
 */
export const FOOTER = {
  project: "The 31 Days Challenge",
  day: 0,
  date: "September 2026",
  tagline: "Thirty one days, thirty one builds, shipped from Botswana. No drafts, no skipped days, just the work in public.",
  accent: "#E14B25",
  tone: "auto" as const,
  columns: [
    {
      "title": "The Run",
      "links": [
        {
          "label": "The Weekly Roadmap",
          "href": "/"
        },
        {
          "label": "All 31 Builds",
          "href": "/all-days"
        },
        {
          "label": "Week One: Building Blocks",
          "href": "#"
        },
        {
          "label": "Wildcard Days",
          "href": "#"
        }
      ]
    },
    {
      "title": "Innovateium",
      "links": [
        {
          "label": "Agency Website",
          "href": "https://innovateium.co.bw",
          "external": true
        },
        {
          "label": "Source on GitHub",
          "href": "https://github.com/innovateium",
          "external": true
        },
        {
          "label": "Instagram",
          "href": "https://www.instagram.com/innovateium",
          "external": true
        },
        {
          "label": "Email the Studio",
          "href": "mailto:info@innovateium.co.bw",
          "external": true
        }
      ]
    }
  ] satisfies FooterColumn[]
};
