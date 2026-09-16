# Measurement & Tracking Plan

## Business objective

Increase qualified enquiries for analytics consulting services.

## Core business questions

1. Are visitors engaging with the main call-to-action?
2. Which analytics services generate the most interest?
3. Which visitors complete the lead form?
4. Where in the funnel do visitors drop off?
5. Which traffic sources generate the most engaged visitors and leads?

## Event specification

| Event | Trigger | Purpose | Parameters |
|---|---|---|---|
| page_view | Page loads | Measure visits and landing pages | Automatically collected context |
| cta_click | Hero CTA clicked | Measure high-intent engagement | cta_text, cta_location |
| select_content | Service button clicked | Identify service interest | content_type, item_id, service_name |
| generate_lead | Demo form successfully submitted | Measure lead conversion | form_name, lead_interest, lead_source |

## Suggested GA4 conversions / key events

Mark `generate_lead` as a key event after it is collecting correctly.

## Data quality checks

For every event:

- Confirm the event appears in GTM Preview.
- Confirm the correct trigger fires.
- Confirm each Data Layer Variable contains the expected value.
- Confirm the GA4 Event tag fires once.
- Confirm the event appears in GA4 DebugView.
- Confirm no name or email value is sent.
- Test desktop and mobile layout.
- Test repeated clicks and repeated form submissions.

## Interview explanation

A strong short explanation:

"I started with the business objective rather than immediately creating tags. I defined a simple lead funnel and wrote a measurement plan that mapped business questions to events and parameters. I then implemented interactions in JavaScript using dataLayer.push(), used Google Tag Manager to translate those events into GA4 events, and validated the implementation with Tag Assistant and DebugView. I also checked that personally identifiable form data was not passed into GA4."

## Stretch goals

After the core implementation works:

- Add UTM-tagged test campaigns.
- Build a traffic-source vs lead report.
- Create a Looker Studio dashboard.
- Export GA4 data to BigQuery if available.
- Write a few SQL queries against exported event data.
- Add consent-mode learning as a separate extension.
